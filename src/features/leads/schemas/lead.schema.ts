import { z } from "zod";

export const LeadStatus = [
  "new",
  "contacted",
  "follow_up",
  "interested",
  "meeting_scheduled",
  "proposal_sent",
  "converted",
  "not_interested",
  "cold_lead",
] as const;

export const ActivityType = [
  "lead_created",
  "email_sent",
  "status_changed",
  "note_added",
] as const;

export const leadSchema = z.object({
  school_name: z.string().min(1, "School name is required"),
  principal_name: z.string().optional(),
  contact_person_name: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  mobile: z.string().optional(),
  website: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  city: z.string().optional(),
  state: z.string().optional(),
  notes: z.string().optional(),
  status: z.enum(LeadStatus).default("new"),
});

export type LeadFormData = z.infer<typeof leadSchema>;
export type LeadStatusType = (typeof LeadStatus)[number];

// Define recommended next templates based on lead status
export const getRecommendedTemplateKey = (status: LeadStatusType): string | null => {
  const recommendations: Partial<Record<LeadStatusType, string>> = {
    new: "introduction",
    contacted: "website_audit",
    follow_up: "portfolio_showcase",
    interested: "meeting_request",
    proposal_sent: "proposal_follow_up",
  };
  return recommendations[status] || null;
};

export const getNextStatusAfterTemplate = (templateKey: string): LeadStatusType | null => {
  const nextStatus: Record<string, LeadStatusType> = {
    introduction: "contacted",
    website_audit: "follow_up",
    portfolio_showcase: "follow_up",
    follow_up: "follow_up",
    final_follow_up: "not_interested",
    meeting_request: "meeting_scheduled",
    proposal_follow_up: "proposal_sent",
  };
  return nextStatus[templateKey] || null;
};
