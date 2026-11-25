export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  department?: string;
}

export interface CareerApplication {
  name: string;
  email: string;
  role: string;
  message?: string;
  resumeName?: string;
  createdAt: string;
}

// ─── GLOBAL CONFIGURATIONS (Pure file mein ab sirf aik baar declared hain) ───
const baseStyles = `font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #0d1b45; line-height: 1.6;`;
const actionColor = '#0f3ad6';

const wrapHtml = (title: string, body: string) => `
  <div style="${baseStyles}; background:#f8fafc; padding:24px;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; border:1px solid #e2e8f0; border-radius:16px; overflow:hidden;">
      <div style="background:#0f3ad6; padding:24px; color:#ffffff; text-align:center;">
        <h1 style="margin:0; font-size:24px; letter-spacing:0.12em; text-transform:uppercase;">BlueMond Solutions</h1>
        <p style="margin:8px 0 0; color:rgba(255,255,255,0.85); font-size:0.95rem;">Secure enterprise monitoring built for modern operations.</p>
      </div>
      <div style="padding:24px;">
        <h2 style="margin-top:0; color:#0d1b45; font-size:20px;">${title}</h2>
        ${body}
      </div>
      <div style="padding:24px; background:#f8fafc; font-size:0.92rem; color:#475569;">
        <p style="margin:0;">Thank you for trusting BlueMond Solutions.</p>
      </div>
    </div>
  </div>
`;

/* ─────────────────────────────────────────
    CONTACT & LEAD FORM TEMPLATES
───────────────────────────────────────── */
export function contactNotificationTemplate(submission: ContactSubmission) {
  const subject = `New contact request from ${submission.name}`;
  const companyLine = submission.company ? `<p><strong>Company:</strong> ${submission.company}</p>` : '';
  const phoneLine = submission.phone ? `<p><strong>Phone:</strong> ${submission.phone}</p>` : '';
  const departmentLine = submission.department ? `<p><strong>Department:</strong> ${submission.department}</p>` : '';

  const html = wrapHtml(
    'New contact submission received',
    `
      <p>A new message has been submitted through the BlueMond contact form.</p>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      ${companyLine}
      ${phoneLine}
      ${departmentLine}
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
      <p><strong>Message</strong></p>
      <p style="white-space:pre-wrap;">${submission.message}</p>
    `
  );

  const text = `New contact submission received\n\nName: ${submission.name}\nEmail: ${submission.email}${submission.company ? `\nCompany: ${submission.company}` : ''}${submission.phone ? `\nPhone: ${submission.phone}` : ''}${submission.department ? `\nDepartment: ${submission.department}` : ''}\n\nMessage:\n${submission.message}`;

  return { subject, text, html };
}

export function contactAutoReplyTemplate(submission: ContactSubmission) {
  const subject = 'Thanks for contacting BlueMond Solutions';
  const html = wrapHtml(
    'We received your message',
    `
      <p>Hi ${submission.name},</p>
      <p>Thank you for reaching out to BlueMond Solutions. We received your message and will respond within 2 business hours.</p>
      <p><strong>Summary of your request:</strong></p>
      <p style="white-space:pre-wrap;">${submission.message}</p>
      <p>If you need anything urgent, reply to this email or call our office directly.</p>
      <p style="margin-top:24px;"><strong>Info@bluemondsolutions.com</strong></p>
    `
  );

  const text = `Hi ${submission.name},\n\nThank you for reaching out to BlueMond Solutions. We received your message and will respond within 2 business hours.\n\nYour message:\n${submission.message}\n\nIf you need anything urgent, please reply to this email or call our office directly.\n\nInfo@bluemondsolutions.com`;

  return { subject, text, html };
}

/* ─────────────────────────────────────────
    CAREER FORM TEMPLATES
───────────────────────────────────────── */
export function careerApplicationNotificationTemplate(application: CareerApplication) {
  const subject = `New Job Application – ${application.role} from ${application.name}`;
  const resumeLine = application.resumeName
    ? `<p><strong>Resume:</strong> ${application.resumeName} (attached)</p>`
    : `<p><strong>Resume:</strong> Not provided</p>`;
  const messageLine = application.message
    ? `<hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" /><p><strong>Additional Details</strong></p><p style="white-space:pre-wrap;">${application.message}</p>`
    : '';

  const html = wrapHtml(
    'New Career Application Received',
    `
      <p>A new application has been submitted through the BlueMond careers form.</p>
      <p><strong>Name:</strong> ${application.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${application.email}" style="color:#0f3ad6;">${application.email}</a></p>
      <p><strong>Role Applied For:</strong> ${application.role}</p>
      ${resumeLine}
      ${messageLine}
    `
  );

  const text = `New Career Application\n\nName: ${application.name}\nEmail: ${application.email}\nRole: ${application.role}\nResume: ${application.resumeName ?? 'Not provided'}\n\n${application.message ? `Additional Details:\n${application.message}` : ''}`;

  return { subject, text, html };
}

export function careerApplicationAutoReplyTemplate(application: CareerApplication) {
  const subject = `We received your application – ${application.role}`;

  const html = wrapHtml(
    'Application Received',
    `
      <p>Hi ${application.name},</p>
      <p>Thank you for applying to the <strong>${application.role}</strong> position at BlueMond Solutions. We have received your application and our team will review it shortly.</p>
      <p>We typically respond within 3–5 business days. If you have any questions in the meantime, feel free to reply to this email.</p>
      <p style="margin-top:24px;"><strong>Info@bluemondsolutions.com</strong></p>
    `
  );

  const text = `Hi ${application.name},\n\nThank you for applying to the ${application.role} position at BlueMond Solutions. We have received your application and will be in touch within 3–5 business days.\n\nInfo@bluemondsolutions.com`;

  return { subject, text, html };
}

/* ─────────────────────────────────────────
    MISC / NOTIFICATION TEMPLATES
───────────────────────────────────────── */
export function welcomeTemplate(name: string) {
  const subject = 'Welcome to BlueMond Solutions';
  const html = wrapHtml(
    'Welcome aboard',
    `
      <p>Hi ${name},</p>
      <p>Welcome to BlueMond Solutions. We are committed to keeping your operations protected with enterprise-grade monitoring and intelligent response services.</p>
      <p>If you have any questions, feel free to reply to this email.</p>
    `
  );

  const text = `Hi ${name},\n\nWelcome to BlueMond Solutions. We are committed to keeping your operations protected with enterprise-grade monitoring and intelligent response services.\n\nIf you have any questions, feel free to reply to this email.`;

  return { subject, text, html };
}

export function genericNotificationTemplate(title: string, body: string) {
  const subject = title;
  const html = wrapHtml(title, `<p>${body}</p>`);
  const text = `${title}\n\n${body}`;
  return { subject, text, html };
}