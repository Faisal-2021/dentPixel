"use client";

import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import {
  CalendarCheck2,
  CheckCircle2,
  Loader2,
  Calendar,
  Clock,
  Mail,
  Phone,
  User,
  Building2,
  MessageSquare,
  ArrowRight,
  Home,
  MessageCircle,
  Globe2,
  LayoutDashboard,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import {
  nameSchema,
  clinicSchema,
  emailSchema,
  phoneINSchema,
  demoFocusSchema,
} from "@/lib/validation";
import { LINKS } from "@/config/links";

const bookingSchema = z.object({
  full_name: nameSchema,
  clinic_name: clinicSchema,
  email: emailSchema,
  phone: phoneINSchema,
  practice_type: z.string().optional(),
  demo_focus: demoFocusSchema,
});

type FormState = {
  full_name: string;
  clinic_name: string;
  email: string;
  phone: string;
  practice_type: string;
  demo_focus: string;
};

const EMPTY: FormState = {
  full_name: "",
  clinic_name: "",
  email: "",
  phone: "",
  practice_type: "Solo Doctor Practice",
  demo_focus: "",
};

function defaultSlot() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return { date: d.toISOString().slice(0, 10), time: "10:00" };
}

export default function BookDemoClient() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [submitted, setSubmitted] = useState<(FormState & { preferred_date: string; preferred_time: string }) | null>(null);

  function update<K extends keyof FormState>(k: K, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      toast.error("Please fill in the required fields correctly");
      return;
    }

    setSubmitting(true);
    const slot = defaultSlot();
    const formattedNotes = [
      parsed.data.practice_type ? `Practice Type: ${parsed.data.practice_type}` : null,
      parsed.data.demo_focus ? `Demo Focus: ${parsed.data.demo_focus}` : null,
    ].filter(Boolean).join("\n");

    // school_name mapped to clinic_name for database backwards compatibility
    const { error } = await supabase.from("demo_bookings").insert({
      full_name: parsed.data.full_name,
      school_name: parsed.data.clinic_name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      preferred_date: slot.date,
      preferred_time: slot.time,
      message: formattedNotes || null,
    });

    setSubmitting(false);

    if (error) {
      toast.error("Could not submit demo request", { description: error.message });
      return;
    }

    // Attempt notifications in background
    fetch("/api/book-demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: parsed.data.full_name,
        school_name: parsed.data.clinic_name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        preferred_date: slot.date,
        message: formattedNotes,
      }),
    }).catch((err) => console.error("[book-demo] Notification error:", err));

    const record = {
      ...parsed.data,
      practice_type: parsed.data.practice_type || "Solo Doctor Practice",
      demo_focus: parsed.data.demo_focus || "",
      preferred_date: slot.date,
      preferred_time: slot.time,
    };
    setSubmitted(record);
    setDone(true);
    setForm(EMPTY);
    toast.success("Demo request received! We'll reach out to confirm your slot.");

    const msg = encodeURIComponent(
      `Hi DentPixel, I just booked a clinic demo for ${parsed.data.clinic_name}. My name is ${parsed.data.full_name}.`,
    );
    window.open(`${LINKS.whatsapp}?text=${msg}`, "_blank", "noopener,noreferrer");
  }

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 px-3.5 py-1 text-xs font-semibold text-[#0284C7]">
            <CalendarCheck2 className="h-3.5 w-3.5 text-[#0EA5C9]" />
            Free 15-Minute Clinic Walkthrough
          </div>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Book a Live Demo of DentPixel
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            See how DentPixel connects your patient booking website with staff scheduling, tooth charting, and billing. No fluff, no pressure.
          </p>
        </div>

        {/* Feature summary card */}
        <div className="mb-8 rounded-2xl border border-border bg-card/70 p-5 sm:p-6 shadow-xs">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
            What we&apos;ll show you in the 15-minute walkthrough
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: Globe2, label: "Your branded patient booking site" },
              { icon: LayoutDashboard, label: "Doctor operatory & tooth charting" },
              { icon: Stethoscope, label: "Treatment-linked clinic billing" },
            ].map((benefit) => (
              <div
                key={benefit.label}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-background px-3.5 py-3 shadow-xs"
              >
                <benefit.icon className="h-4 w-4 shrink-0 text-[#0284C7]" />
                <span className="text-xs font-medium text-foreground">
                  {benefit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {done && submitted ? (
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-50/20 p-8 text-center backdrop-blur-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle2 className="h-7 w-7 text-emerald-600" />
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-foreground">
              Demo Request Confirmed!
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Thank you, <strong className="text-foreground">{submitted.full_name}</strong>. We received your demo request for{" "}
              <strong className="text-foreground">{submitted.clinic_name}</strong>.
            </p>

            <div className="mt-6 inline-flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-6 py-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <Clock className="h-4 w-4 text-[#0EA5C9]" />
                <span>Our team will confirm your preferred slot within a few hours.</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition"
              >
                <Home className="h-3.5 w-3.5" /> Back to Home
              </Link>
              <a
                href={`${LINKS.whatsapp}?text=${encodeURIComponent(
                  `Hi DentPixel, I just booked a demo for ${submitted.clinic_name}.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#1ebe5a] transition shadow-xs"
              >
                <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-lg space-y-5"
          >
            <div>
              <Label htmlFor="clinic_name" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                Clinic / Practice Name *
              </Label>
              <Input
                id="clinic_name"
                value={form.clinic_name}
                onChange={(e) => update("clinic_name", e.target.value)}
                placeholder="e.g. Ivory Dental Studio"
                className="mt-1.5 h-11 bg-background"
                aria-invalid={!!errors.clinic_name}
              />
              {errors.clinic_name && (
                <p className="mt-1 text-xs text-rose-500 font-medium">{errors.clinic_name}</p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="full_name" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                  Your Name *
                </Label>
                <Input
                  id="full_name"
                  value={form.full_name}
                  onChange={(e) => update("full_name", e.target.value)}
                  placeholder="Dr. Rajesh Sharma"
                  className="mt-1.5 h-11 bg-background"
                  aria-invalid={!!errors.full_name}
                />
                {errors.full_name && (
                  <p className="mt-1 text-xs text-rose-500 font-medium">{errors.full_name}</p>
                )}
              </div>

              <div>
                <Label htmlFor="practice_type" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                  Practice Type
                </Label>
                <select
                  id="practice_type"
                  value={form.practice_type}
                  onChange={(e) => update("practice_type", e.target.value)}
                  className="mt-1.5 w-full h-11 rounded-md border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#0EA5C9]"
                >
                  <option value="Solo Doctor Practice">Solo Doctor Practice</option>
                  <option value="Multi-Doctor Clinic (2-4 Doctors)">Multi-Doctor Clinic (2-4 Doctors)</option>
                  <option value="Large Dental Center / Multi-Specialty">Large Dental Center / Multi-Specialty</option>
                  <option value="New Dental Clinic Launch">New Dental Clinic Launch</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="phone" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="9876543210"
                  className="mt-1.5 h-11 bg-background"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="dr.rajesh@clinic.com"
                  className="mt-1.5 h-11 bg-background"
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Optional "Anything specific you'd like to see in the demo?" textarea */}
            <div>
              <Label htmlFor="demo_focus" className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
                Anything specific you&apos;d like to see in the demo? <span className="normal-case font-normal text-muted-foreground">(Optional)</span>
              </Label>
              <textarea
                id="demo_focus"
                rows={3}
                value={form.demo_focus}
                onChange={(e) => update("demo_focus", e.target.value)}
                placeholder="e.g. Auto-updating tooth charting, doctor schedules, treatment-linked billing, patient recalls…"
                className="mt-1.5 w-full rounded-md border border-input bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#0EA5C9]"
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full h-12 rounded-full bg-[#0EA5C9] hover:bg-[#0284C7] text-white text-sm sm:text-base font-semibold shadow-md shadow-[#0EA5C9]/25 transition"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Demo Request…
                </>
              ) : (
                <>
                  Book My Free 15-Minute Demo <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                No credit card required. Our team will contact you to confirm a time that fits between your patient appointments.
              </p>
            </div>
          </form>
        )}
      </section>
    </PageShell>
  );
}
