import { z } from "zod";

// Person name: 2–60 chars, letters/spaces/.'-, must start with a letter
export const nameSchema = z
  .string()
  .trim()
  .min(2, "Name must be at least 2 characters")
  .max(60, "Name must be 60 characters or less")
  .regex(
    /^[A-Za-z][A-Za-z\s.'-]{1,59}$/,
    "Use letters, spaces, dots, apostrophes or hyphens only"
  );

// Clinic / Practice name: 2–120 chars, letters/numbers/spaces/.,&'-
export const clinicSchema = z
  .string()
  .trim()
  .min(2, "Clinic name must be at least 2 characters")
  .max(120, "Clinic name must be 120 characters or less")
  .regex(
    /^[A-Za-z0-9][A-Za-z0-9\s.,&'()\-]{1,119}$/,
    "Only letters, numbers, spaces and . , & ' ( ) - allowed"
  );

export const schoolSchema = clinicSchema;

// Email: trimmed + lowercased, RFC 5321 max length 254
export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(5, "Email is too short")
  .max(254, "Email must be 254 characters or less")
  .email("Enter a valid email address");

// Indian mobile: exactly 10 digits, starting 6–9. Accepts +91 / 91 / spaces / dashes
// before validating. Output is the 10-digit national number.
export const phoneINSchema = z
  .string()
  .trim()
  .min(10, "Phone number is required")
  .transform((v) => v.replace(/[\s\-()]/g, "").replace(/^\+?91/, ""))
  .pipe(
    z
      .string()
      .regex(
        /^[6-9]\d{9}$/,
        "Enter a valid 10-digit Indian mobile number (starts with 6–9)"
      )
  );

// Role: must be one of the dropdown options
export const ROLE_OPTIONS = [
  "Clinic Owner",
  "Principal Dentist",
  "Practice Manager",
  "Associate Dentist",
  "Clinic Coordinator",
  "Other",
] as const;

export const roleSchema = z.enum(ROLE_OPTIONS, {
  error: "Please select your role",
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any);

// City: optional, 2–80 chars when present
export const citySchema = z
  .string()
  .trim()
  .max(80, "City must be 80 characters or less")
  .regex(/^$|^[A-Za-z][A-Za-z\s,.\-]{1,79}$/, "Enter a valid city name")
  .optional()
  .or(z.literal(""));

// Optional message: up to 1000 chars
export const messageSchema = z
  .string()
  .trim()
  .max(1000, "Message must be 1000 characters or less")
  .optional()
  .or(z.literal(""));

// Optional specific demo interests (e.g. Tooth charting, scheduling, billing)
export const demoFocusSchema = z
  .string()
  .trim()
  .max(1000, "Notes must be 1000 characters or less")
  .optional()
  .or(z.literal(""));

// Flexible phone schema (accepts Indian or international clinic phone numbers)
export const phoneFlexibleSchema = z
  .string()
  .trim()
  .min(7, "Enter a valid phone number")
  .max(20, "Phone number is too long");

// Optional email (allows blank string)
export const optionalEmailSchema = z
  .union([z.literal(""), emailSchema])
  .optional();
