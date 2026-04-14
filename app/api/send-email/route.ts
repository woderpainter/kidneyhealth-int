import { Resend } from 'resend';
import { NextResponse } from 'next/server';

let resendClient: Resend | null = null;

function getResend() {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      // In demo mode, we might not have a key yet.
      // We'll handle this in the POST handler.
      return null;
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const resend = getResend();

    if (!resend) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ 
        success: false, 
        error: 'RESEND_API_KEY is missing. Please add it in the app settings to enable real email delivery.' 
      }, { status: 401 });
    }

    const data = await resend.emails.send({
      from: 'International Kidney Health <onboarding@resend.dev>',
      to: [email],
      subject: 'Your Kidney Health Guide is Here!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #334155;">
          <h1 style="color: #2563eb; font-size: 24px; font-weight: bold; margin-bottom: 20px;">Welcome to International Kidney Health</h1>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
            Thank you for requesting our <strong>Complete Kidney Support Guide</strong>. You've taken a vital first step toward protecting your health.
          </p>
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
            <p style="margin-bottom: 20px; font-weight: bold;">Click the button below to download your guide:</p>
            <a href="https://picsum.photos/seed/guide-pdf/800/1200" style="background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Download Guide (PDF)</a>
          </div>
          <p style="font-size: 14px; color: #64748b;">
            If you have any questions, feel free to reply to this email. We're here to support you.
          </p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">
            &copy; 2024 International Kidney Health. All rights reserved.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed to send email' }, { status: 500 });
  }
}
