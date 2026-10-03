import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const { full_name, school_name, email, phone, preferred_date } =
      await req.json();

    const from =
      process.env.FROM_EMAIL ?? "DentPixel <onboarding@resend.dev>";

    await resend.emails.send({
      from,
      to: process.env.TEAM_EMAIL ?? "hello@dentpixel.com",
      replyTo: email,
      subject: `New Dental Clinic Demo Booking — ${school_name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 520px;">
          <h2 style="margin: 0 0 16px; color: #1a3a32;">New Demo Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${full_name}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>School</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${school_name}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Preferred Date</strong></td><td style="padding: 8px 0;">${preferred_date ?? "—"}</td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 13px; color: #666;">Reply to this email to respond directly to ${full_name}.</p>
        </div>
      `,
      text: [
        `New Demo Request — ${school_name}`,
        "",
        `Name: ${full_name}`,
        `School: ${school_name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Preferred Date: ${preferred_date ?? "—"}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[book-demo] Team notification failed:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}