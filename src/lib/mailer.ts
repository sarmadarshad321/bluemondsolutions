import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 0);
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_FROM = process.env.EMAIL_FROM || EMAIL_USER || 'info@bluemondsolutions.com';

export const isEmailConfigured = Boolean(
  SMTP_HOST && SMTP_PORT && EMAIL_USER && EMAIL_PASS
);

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export interface MailAttachment {
  filename: string;
  content?: string | Buffer;
  path?: string;
  contentType?: string;
}

export interface SendEmailOptions {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  attachments?: MailAttachment[];
  replyTo?: string;
  from?: string;
}

export async function sendEmail(options: SendEmailOptions) {
  if (!isEmailConfigured) {
    const missing = [];
    if (!SMTP_HOST) missing.push('SMTP_HOST');
    if (!SMTP_PORT) missing.push('SMTP_PORT');
    if (!EMAIL_USER) missing.push('EMAIL_USER');
    if (!EMAIL_PASS) missing.push('EMAIL_PASS');
    throw new Error(
      `Mail configuration is incomplete. Missing: ${missing.join(', ')}`
    );
  }

  const mailOptions = {
    from: options.from ?? EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html,
    replyTo: options.replyTo,
    attachments: options.attachments,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (process.env.NODE_ENV !== 'production') {
      console.log('[mailer] Email sent:', info.messageId, info.response);
    }
    return info;
  } catch (error) {
    console.error('[mailer] Email send failed:', error);
    throw error;
  }
}
