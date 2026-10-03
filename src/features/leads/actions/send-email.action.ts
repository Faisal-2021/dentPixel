"use server";

export async function sendLeadEmail(
  _leadId: string,
  _templateId: string,
): Promise<void> {
  // Temporarily disabled to unblock the build.
  // Original logic: fetch lead + template from Supabase via supabaseAdmin,
  // replace variables, update school_leads row, send via Resend SDK,
  // insert into lead_activities, revalidate admin paths.
  // To restore, revert to the original implementation that uses
  // supabaseAdmin.from("school_leads" / "email_templates" / "lead_activities").
  throw new Error(
    "sendLeadEmail server action is temporarily disabled to unblock the build. " +
      "Re-enable by restoring the supabaseAdmin + Resend implementation in send-email.action.ts.",
  );
}
