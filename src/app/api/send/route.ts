import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Visitor input is interpolated into the email HTML, so it must be escaped
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email) || name.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    // Created per request: `new Resend()` throws when the key is missing, which would crash the module on import
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.SMTP_TO;
    if (!apiKey || !to) {
      console.error('Contact form is not configured: RESEND_API_KEY or SMTP_TO is missing');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`, // Must use onboarding@resend.dev unless you verify a custom domain
      to, // Your email address to receive the message
      subject: `[Portfolio Contact] Tin nhắn mới từ ${name}`,
      text: `Bạn nhận được một tin nhắn liên hệ từ Portfolio:\n\nTên: ${name}\nEmail: ${email}\n\nNội dung tin nhắn:\n${message}`,
      html: `
        <h3>Bạn nhận được một tin nhắn liên hệ mới từ Portfolio</h3>
        <p><strong>Tên:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Nội dung:</strong></p>
        <blockquote style="border-left: 4px solid #2a5bff; padding-left: 10px; margin-left: 0;">
          ${escapeHtml(message).replace(/\n/g, '<br>')}
        </blockquote>
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in email route:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
