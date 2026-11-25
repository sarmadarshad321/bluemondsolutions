// app/api/apply/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';
import { saveCareerApplication } from '@/lib/formStore';
import { isRateLimited } from '@/lib/rateLimiter';
import {
  careerApplicationNotificationTemplate,
  careerApplicationAutoReplyTemplate,
} from '@/lib/emailTemplates';

export const runtime = 'nodejs';

const RECIPIENT_EMAIL = process.env.EMAIL_USER ?? '';
const MAX_FILE_SIZE_MB = 5;
const ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export async function POST(req: NextRequest) {
  // ── Rate limiting ────────────────────────────────────────────────────────
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  // ── Parse multipart form data ────────────────────────────────────────────
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 });
  }

  const name    = (formData.get('name')    as string | null)?.trim() ?? '';
  const email   = (formData.get('email')   as string | null)?.trim() ?? '';
  const role    = (formData.get('role')    as string | null)?.trim() ?? '';
  const message = (formData.get('message') as string | null)?.trim() ?? '';
  const resume  =  formData.get('resume')  as File | null;

  // ── Server-side validation ───────────────────────────────────────────────
  if (!name || !email || !role) {
    return NextResponse.json(
      { error: 'Name, email, and role are required.' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  // ── Validate and buffer the resume ───────────────────────────────────────
  const attachments: { filename: string; content: Buffer; contentType: string }[] = [];
  let resumeName: string | undefined;

  if (resume && resume.size > 0) {
    if (!ALLOWED_TYPES.includes(resume.type)) {
      return NextResponse.json(
        { error: 'Resume must be a PDF or Word document (.pdf, .doc, .docx).' },
        { status: 400 }
      );
    }
    if (resume.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      return NextResponse.json(
        { error: `Resume must be smaller than ${MAX_FILE_SIZE_MB} MB.` },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());
    resumeName = resume.name;
    attachments.push({ filename: resume.name, content: buffer, contentType: resume.type });
  }

  // ── Save to in-memory store ──────────────────────────────────────────────
  saveCareerApplication({ name, email, role, message: message || undefined, resumeName });

  // ── Build email templates ────────────────────────────────────────────────
  const applicationRecord = {
    name,
    email,
    role,
    message: message || undefined,
    resumeName,
    createdAt: new Date().toISOString(),
  };

  const notification = careerApplicationNotificationTemplate(applicationRecord);
  const autoReply    = careerApplicationAutoReplyTemplate(applicationRecord);

  // ── Send both emails ─────────────────────────────────────────────────────
  try {
    await Promise.all([
      // 1️⃣  Internal notification to your inbox (with resume attached)
      sendEmail({
        to:          RECIPIENT_EMAIL,
        subject:     notification.subject,
        html:        notification.html,
        text:        notification.text,
        replyTo:     email,
        attachments: attachments.length > 0 ? attachments : undefined,
      }),
      // 2️⃣  Auto-reply confirmation to the applicant
      sendEmail({
        to:      email,
        subject: autoReply.subject,
        html:    autoReply.html,
        text:    autoReply.text,
      }),
    ]);
  } catch (err) {
    console.error('[apply] Email send failed:', err);
    return NextResponse.json(
      { error: 'Failed to send application. Please try again later.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

