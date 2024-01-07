import { EmailTemplate } from "@/components/emails/demo-email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import * as React from "react";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const values = await req.json();
    const { name, email, message } = values;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sajawalhassan.1feb@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
