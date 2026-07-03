import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`, // sender address
      to: process.env.SMTP_TO, // list of receivers
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
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
