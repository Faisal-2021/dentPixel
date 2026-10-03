"use server";

import { z } from "zod";
import { render } from "@react-email/render";
import { supabase } from "@/integrations/supabase/client";
import {
  nameSchema,
  schoolSchema,
  emailSchema,
  phoneINSchema,
} from "@/lib/validation";
import { resend } from "@/lib/resend";
import {
  DemoBookingConfirmation,
  DemoBookingConfirmationSubject,
  DemoBookingConfirmationText,
} from "@/emails/DemoBookingConfirmation";

const bookingSchema = z.object({
  full_name: nameSchema,
  school_name: schoolSchema,
  email: emailSchema,
  phone: phoneINSchema,
});

export type BookingField = "full_name" | "school_name" | "email" | "phone";

export type SubmittedBooking = {
  full_name: string;
  school_name: string;
  email: string;
  phone: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
};

export type BookingFormState = {
  status: "idle" | "error" | "success";
  errors: Partial<Record<BookingField, string>>;
  errorTitle?: string;
  errorDescription?: string;
  submitted: SubmittedBooking | null;
};

export const initialBookingState: BookingFormState = {
  status: "idle",
  errors: {},
  submitted: null,
};

function defaultSlot() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return { date: d.toISOString().slice(0, 10), time: "10:00" };
}

export async function bookDemoAction(
  _prev: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const parsed = bookingSchema.safeParse({
    full_name: String(formData.get("full_name") ?? ""),
    school_name: String(formData.get("school_name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
  });

  if (!parsed.success) {
    const errors: Partial<Record<BookingField, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as BookingField;
      if (!errors[key]) errors[key] = issue.message;
    }
    return {
      status: "error",
      errors,
      errorTitle: "Please fix the highlighted fields",
      submitted: null,
    };
  }

  const slot = defaultSlot();

  const { error } = await supabase.from("demo_bookings").insert({
    full_name: parsed.data.full_name,
    school_name: parsed.data.school_name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    preferred_date: slot.date,
    preferred_time: slot.time,
    message: null,
  });

  if (error) {
    return {
      status: "error",
      errors: {},
      errorTitle: "Could not submit booking",
      errorDescription: error.message,
      submitted: null,
    };
  }

  try {
    const from =
      process.env.FROM_EMAIL ?? "SchoolPixel <onboarding@resend.dev>";

    const reactNode = DemoBookingConfirmation({
      name: parsed.data.full_name,
      schoolName: parsed.data.school_name,
      preferredDate: slot.date,
    });

    console.log(
      `[bookDemoAction] Rendering template → to=${parsed.data.email} (${parsed.data.full_name})`,
    );

    const html = await render(reactNode);
    let text: string;
    try {
      text = await render(reactNode, { plainText: true });
    } catch {
      text = DemoBookingConfirmationText(
        parsed.data.full_name,
        parsed.data.school_name,
      );
    }

    const { data, error } = await resend.emails.send({
      from,
      to: [parsed.data.email],
      replyTo: "founder@schoolpixel.in",
      subject: DemoBookingConfirmationSubject,
      html,
      text,
    });

    if (error) {
      console.error(
        "[bookDemoAction] Resend error (non-blocking):",
        JSON.stringify(error, null, 2),
      );
    } else {
      console.log(
        `[bookDemoAction] ✓ Confirmation sent messageId=${data?.id ?? "unknown"}`,
      );
    }
  } catch (emailErr) {
    console.error(
      "[bookDemoAction] Confirmation email failed (non-blocking):",
      emailErr instanceof Error
        ? `${emailErr.name}: ${emailErr.message}\n${emailErr.stack}`
        : emailErr,
    );
  }

  return {
    status: "success",
    errors: {},
    submitted: {
      ...parsed.data,
      preferred_date: slot.date,
      preferred_time: slot.time,
      message: "",
    },
  };
}