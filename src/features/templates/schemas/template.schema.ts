import { z } from "zod";

export const templateSchema = z.object({
  name: z.string().min(1, "Template name is required"),
  key: z.string().min(1, "Template key is required"),
  subject: z.string().min(1, "Subject is required"),
  body_html: z.string().min(1, "Body is required"),
  is_default: z.boolean().default(false),
});

export type TemplateFormData = z.infer<typeof templateSchema>;
