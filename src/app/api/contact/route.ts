import { NextResponse } from 'next/server';
import { saveContactSubmission } from '@/lib/formStore';
import { sendEmail, isEmailConfigured } from '@/lib/mailer';
import { contactNotificationTemplate, contactAutoReplyTemplate } from '@/lib/emailTemplates';
import { isRateLimited } from '@/lib/rateLimiter';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const message = sanitize(body.message);
    const company = sanitize(body.company);
    const phone = sanitize(body.phone);
    const department = sanitize(body.department);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many contact attempts from this network. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const submission = saveContactSubmission({
      name,
      email,
      message,
      company: company || undefined,
      phone: phone || undefined,
      department: department || undefined,
    });

    if (!isEmailConfigured) {
      console.error('[contact] SMTP configuration is not available. Email delivery is disabled.');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const adminAddress = process.env.EMAIL_USER || 'info@bluemondsolutions.com';
    const notification = contactNotificationTemplate(submission);

    await sendEmail({
      to: adminAddress,
      subject: notification.subject,
      text: notification.text,
      html: notification.html,
      replyTo: submission.email,
    });

    try {
      const autoReply = contactAutoReplyTemplate(submission);
      await sendEmail({
        to: submission.email,
        subject: autoReply.subject,
        text: autoReply.text,
        html: autoReply.html,
        replyTo: adminAddress,
      });
    } catch (autoReplyError) {
      console.error('[contact] Auto-reply failed:', autoReplyError);
    }

    console.log('New contact submission:', submission);

    return NextResponse.json({ success: true, submission }, { status: 201 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Unable to process contact form submission at this time.' },
      { status: 500 }
    );
  }
}
