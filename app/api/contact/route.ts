import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!name?.trim()) errors.name = "Name is required.";
  if (!email?.trim()) errors.email = "Email is required.";
  else if (!isValidEmail(email.trim())) errors.email = "Invalid email address.";
  if (!message?.trim()) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, message: "Validation failed.", errors }, { status: 422 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ success: false, message: "Email not configured." }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "riupassacendia@gmail.com",
    replyTo: email!.trim(),
    subject: `Portfolio message from ${name!.trim()}`,
    html: `
      <p><strong>From:</strong> ${name!.trim()} &lt;${email!.trim()}&gt;</p>
      <p><strong>Message:</strong></p>
      <p>${message!.trim().replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: "Message sent." }, { status: 200 });
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ success: false, message: "Method not allowed." }, { status: 405 });
}
