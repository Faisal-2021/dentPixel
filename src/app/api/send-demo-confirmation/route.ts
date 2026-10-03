import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { render } from "@react-email/render";
import { resend } from "@/lib/resend";
import {
  DemoBookingConfirmation,
  DemoBookingConfirmationSubject,
  DemoBookingConfirmationText,
} from "@/emails/DemoBookingConfirmation";

const payloadSchema = z.object({
  full_name: z.string().min(2, "Name is required"),
  school_name: z.string().min(2, "School name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  preferred_date: z.string().optional(),
  preferred_time: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = payloadSchema.safeParse(body);

    if (!parsed.success) {
      console.warn(
        "[send-demo-confirmation] Validation failed:",
        parsed.error.flatten().fieldErrors,
      );
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { full_name, school_name, email, preferred_date } = parsed.data;

    const from =
      process.env.FROM_EMAIL ?? "SchoolPixel <onboarding@resend.dev>";

    const reactNode = DemoBookingConfirmation({
      name: full_name,
      schoolName: school_name,
      preferredDate: preferred_date,
    });

    console.log(
      `[send-demo-confirmation] Rendering template → to=${email} (${full_name})`,
    );

    const html = await render(reactNode);
    let text: string;
    try {
      text = await render(reactNode, { plainText: true });
    } catch {
      text = DemoBookingConfirmationText(full_name, school_name);
    }

    console.log(
      `[send-demo-confirmation] Template OK. Calling Resend from=${from} to=${email}`,
    );

    const { data, error } = await resend.emails.send({
      from,
      to: [email],
      subject: DemoBookingConfirmationSubject,
      replyTo: "founder@schoolpixel.in",
      html,
      text,
    });

    if (error) {
      console.error(
        "[send-demo-confirmation] Resend error:",
        JSON.stringify(error, null, 2),
      );
      return NextResponse.json(
        { success: false, error: "Failed to send email" },
        { status: 500 },
      );
    }

    console.log(
      `[send-demo-confirmation] ✓ Sent. messageId=${data?.id ?? "unknown"}`,
    );

    return NextResponse.json({
      success: true,
      messageId: data?.id ?? null,
    });
  } catch (err) {
    console.error(
      "[send-demo-confirmation] Unexpected error:",
      err instanceof Error ? `${err.name}: ${err.message}\n${err.stack}` : err,
    );
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
