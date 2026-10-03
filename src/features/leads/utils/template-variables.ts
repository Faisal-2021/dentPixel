import type { SchoolLead } from "../types/lead.types";

export function replaceTemplateVariables(
  text: string,
  lead: Partial<SchoolLead>
): string {
  return text
    .replace(/\{\{school_name\}\}/g, lead.school_name || "")
    .replace(/\{\{principal_name\}\}/g, lead.principal_name || "")
    .replace(/\{\{contact_person_name\}\}/g, lead.contact_person_name || "")
    .replace(/\{\{city\}\}/g, lead.city || "")
    .replace(/\{\{state\}\}/g, lead.state || "");
}
