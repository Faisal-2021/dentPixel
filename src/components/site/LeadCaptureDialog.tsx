"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Download, Loader2, ShieldCheck, Stethoscope } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { sendLeadEmail } from "@/lib/sendLeadEmail";
import { LINKS } from "@/config/links";
import { nameSchema, emailSchema, phoneINSchema, clinicSchema } from "@/lib/validation";
import { ThankYouState } from "./ThankYouState";

const leadSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneINSchema,
  school: clinicSchema, // database column kept as 'school'
});

type LeadValues = z.infer<typeof leadSchema>;

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadCaptureDialog({ open, onOpenChange }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { name: "", email: "", phone: "", school: "" },
  });

  const triggerDownload = () => {
    const a = document.createElement("a");
    a.href = LINKS.cbsePdf;
    a.download = "dental-clinic-website-checklist.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const onSubmit = async (values: LeadValues) => {
    setSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: values.name,
        email: values.email,
        phone: values.phone,
        school: values.school,
        source: "clinic-pdf",
      });
      if (error) throw error;

      const emailResult = await sendLeadEmail({
        source: "clinic-pdf",
        name: values.name,
        email: values.email,
        phone: values.phone,
        school: values.school,
      });

      if (emailResult.ok && emailResult.visitor === "fulfilled") {
        toast.success("Your PDF is downloading…", {
          description: "Confirmation email sent. We'll also reach out on WhatsApp anytime you need us.",
        });
      } else {
        toast.success("Your PDF is downloading…", {
          description:
            emailResult.error ||
            "We saved your details. We'll reach out on WhatsApp.",
        });
      }
      triggerDownload();
      reset();
      setDone(true);
    } catch (err) {
      console.error("Lead submit failed:", err);
      toast.error("Couldn't save your details", {
        description: "Please try again, or message us on WhatsApp.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) setDone(false); onOpenChange(o); }}>
      <DialogContent className="sm:max-w-md bg-card border-border text-foreground shadow-2xl">
        {!done && (
          <DialogHeader>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Free · 12-Point Clinical Checklist
            </div>
            <DialogTitle className="font-display text-2xl text-foreground">
              Get the Dental Clinic Website &amp; Standards Checklist
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Just share where to send updates. Your PDF checklist starts downloading instantly.
            </DialogDescription>
          </DialogHeader>
        )}
        {done && (
          <>
            <DialogHeader>
              <DialogTitle className="sr-only">PDF downloaded</DialogTitle>
              <DialogDescription className="sr-only">
                Your clinic standards checklist is downloading.
              </DialogDescription>
            </DialogHeader>
            <ThankYouState
              title="PDF is on its way! 📄"
              subtitle="Your dental clinic checklist just downloaded. Want a free audit of your existing clinic website? Message us on WhatsApp."
              whatsappMessage="Hi%2C%20I%20just%20downloaded%20the%20dental%20clinic%20checklist.%20Please%20audit%20my%20clinic%20website."
              onReset={() => { setDone(false); }}
              resetLabel="Need to download again?"
            />
          </>
        )}
        {!done && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-2">
            <div>
              <Label htmlFor="lc-name" className="text-foreground text-xs font-semibold">Your name *</Label>
              <Input
                id="lc-name"
                {...register("name")}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground mt-1"
                placeholder="Dr. Rajesh Singh"
              />
              {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <Label htmlFor="lc-email" className="text-foreground text-xs font-semibold">Email *</Label>
              <Input
                id="lc-email"
                type="email"
                {...register("email")}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground mt-1"
                placeholder="dr.rajesh@clinic.com"
              />
              {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="lc-phone" className="text-foreground text-xs font-semibold">WhatsApp number *</Label>
              <Input
                id="lc-phone"
                inputMode="tel"
                {...register("phone")}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground mt-1"
                placeholder="9876543210"
              />
              {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <Label htmlFor="lc-school" className="text-foreground text-xs font-semibold">Clinic name *</Label>
              <Input
                id="lc-school"
                {...register("school")}
                className="bg-background border-border text-foreground placeholder:text-muted-foreground mt-1"
                placeholder="Apex Dental Studio"
              />
              {errors.school && <p className="text-xs text-rose-500 mt-1">{errors.school.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-emerald-600 to-primary text-white font-semibold hover:brightness-105 mt-2"
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Preparing download…</>
              ) : (
                <><Download className="w-4 h-4" /> Download Checklist PDF</>
              )}
            </Button>
            <p className="text-[11px] text-muted-foreground text-center">
              We&apos;ll only use this to share clinic website &amp; patient acquisition tips. No spam.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
