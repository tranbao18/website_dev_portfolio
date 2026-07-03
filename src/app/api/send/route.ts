import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`, // Must use onboarding@resend.dev unless you verify a custom domain
      to: process.env.SMTP_TO as string, // Your email address to receive the message
      subject: `[Portfolio Contact] Tin nhắn mới từ ${name}`,
      text: `Bạn nhận được một tin nhắn liên hệ từ Portfolio:\n\nTên: ${name}\nEmail: ${email}\n\nNội dung tin nhắn:\n${message}`,
      html: `
        <h3>Bạn nhận được một tin nhắn liên hệ mới từ Portfolio</h3>
        <p><strong>Tên:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nội dung:</strong></p>
        <blockquote style="border-left: 4px solid #0070F3; padding-left: 10px; margin-left: 0;">
          ${message.replace(/\n/g, '<br>')}
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
