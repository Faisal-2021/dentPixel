import type { LeadStatus, ActivityType } from "../schemas/lead.schema";

export interface SchoolLead {
  id: string;
  school_name: string;
  principal_name?: string | null;
  contact_person_name?: string | null;
  email: string;
  mobile?: string | null;
  website?: string | null;
  city?: string | null;
  state?: string | null;
  notes?: string | null;
  status: (typeof LeadStatus)[number];
  email_sent: boolean;
  email_sent_at?: string | null;
  last_email_template?: string | null;
  created_by?: string | null;
  created_at: string;
  updated_at: string;
}

export interface EmailTemplate {
  id: string;
  name: string;
  key: string;
  subject: string;
  body_html: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface LeadActivity {
  id: string;
  lead_id: string;
  type: (typeof ActivityType)[number];
  title: string;
  description?: string | null;
  created_by?: string | null;
  created_at: string;
}
