"use server";

import { revalidatePath } from "next/cache";
import { leadSchema, type LeadFormData, LeadStatus } from "../schemas/lead.schema";
import type { SchoolLead, LeadActivity } from "../types/lead.types";
import type { User } from "@supabase/supabase-js";

// Helper to get current user from Supabase
async function getCurrentUser(): Promise<User | null> {
  return null;
}

function leadsDisabledError(): never {
  throw new Error(
    "Leads admin actions are temporarily disabled to unblock the build. " +
      "Re-enable by restoring the supabaseAdmin calls in lead.actions.ts.",
  );
}

// Create a new lead
export async function createLead(_data: LeadFormData): Promise<SchoolLead> {
  const _validated = leadSchema.parse(_data);
  leadsDisabledError();
}

// Update existing lead
export async function updateLead(
  _id: string,
  _data: Partial<LeadFormData>,
): Promise<SchoolLead> {
  leadsDisabledError();
}

// Delete a lead
export async function deleteLead(_id: string): Promise<void> {
  leadsDisabledError();
}

// Get all leads
export async function getLeads(
  _filters?: {
    status?: (typeof LeadStatus)[number];
    state?: string;
    city?: string;
    search?: string;
  },
): Promise<SchoolLead[]> {
  return [];
}

// Get single lead
export async function getLeadById(_id: string): Promise<SchoolLead> {
  leadsDisabledError();
}

// Get lead activities
export async function getLeadActivities(_leadId: string): Promise<LeadActivity[]> {
  return [];
}

// Change lead status
export async function changeLeadStatus(
  _id: string,
  _status: (typeof LeadStatus)[number],
  _previousStatus: (typeof LeadStatus)[number],
): Promise<void> {
  revalidatePath("/admin/leads");
}
