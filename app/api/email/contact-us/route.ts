import { NextResponse } from "next/server";
import { Resend } from "resend";
// import { env as envServer } from '@/env/server.mjs';
// import { env } from '@/env/client.mjs';

import { ContactUsEmail } from "@/components/emails/contact-us-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, phoneNumber, subject, email, customerEmail, message } =
    await request.json() as any;

  try {
    const data = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_MAIL_FROM || "QraftLabs <hello@qraftacademy.com>",
      to: [email],
      subject: "Inquiry from Customer!",
      react: ContactUsEmail({
        customerEmail,
        name,
        phoneNumber,
        subject,
        message
      }),
    });
    return NextResponse.json(
      data
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`);
    }
    console.log(e);
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
