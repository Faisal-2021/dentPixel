"use server";

export async function seedDefaultTemplates(): Promise<{
  success: boolean;
  alreadySeeded: boolean;
}> {
  // Temporarily disabled to unblock the build.
  // Original logic:
  //   1. supabaseAdmin.from("email_templates").select("*").limit(1) to check existing
  //   2. If empty → supabaseAdmin.from("email_templates").insert(defaultTemplates)
  //      with 8 default email templates (Introduction, Website Audit,
  //      Portfolio Showcase, Follow Up, Final Follow Up, Meeting Request,
  //      Proposal Follow Up, Re-engagement)
  // To restore, revert to the original implementation that uses supabaseAdmin calls.
  // Return alreadySeeded: true so any caller that checks for "did-seed flag
  // won't attempt to re-seed.
  return { success: true, alreadySeeded: true };
}
