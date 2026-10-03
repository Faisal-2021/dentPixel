"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CalendarCheck2,
  CheckCircle2,
  Loader2,
  Calendar,
  Mail,
  Phone,
  School,
  User,
  MessageSquare,
  ArrowRight,
  Home,
  MessageCircle,
  Globe2,
  LayoutDashboard,
} from "lucide-react";
import { LINKS } from "@/config/links";
import {
  bookDemoAction,
  initialBookingState,
  type SubmittedBooking,
} from "./action";

export default function BookDemoClient() {
  const [state, formAction, isPending] = useActionState(
    bookDemoAction,
    initialBookingState,
  );
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (state.status === "error") {
      toast.error(state.errorTitle ?? "Something went wrong", {
        description: state.errorDescription,
      });
      return;
    }

    if (state.status === "success" && state.submitted) {
      queueMicrotask(() => setDismissed(false));
      toast.success("Demo request received! We'll be in touch shortly.");

      // Auto-open WhatsApp so the lead lands in our inbox instantly.
      const msg = encodeURIComponent(
        `Hi SchoolPixel, I just booked a demo for ${state.submitted.school_name}. My name is ${state.submitted.full_name}.`,
      );    
      window.open(
        `${LINKS.whatsapp}?text=${msg}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  }, [state]);

  const showConfirmation =
    state.status === "success" && state.submitted && !dismissed;

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:py-20">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <CalendarCheck2 className="h-3.5 w-3.5 text-[#2563EB]" />
            Free 15-minute demo
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Book a Demo with SchoolPixel
          </h1>
          <p className="mt-3 text-white/70">
            Pick a time that suits you. We&apos;ll walk you through a real
            school website & admin dashboard — no slides, no fluff.
          </p>
        </div>

        <div className="mb-6 rounded-xl border border-white/10 bg-white/3 p-4 sm:p-5">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-white/50">
            What your school receives
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Globe2, label: "Website on your domain" },
              { icon: LayoutDashboard, label: "School admin dashboard" },
              { icon: Mail, label: "5 professional email accounts" },
            ].map((benefit) => (
              <div
                key={benefit.label}
                className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3"
              >
                <benefit.icon className="h-4 w-4 shrink-0 text-[#60a5fa]" />
                <span className="text-xs font-medium leading-snug text-white/80">
                  {benefit.label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs leading-relaxed text-white/55">
            Your SchoolPixel setup includes free Zoho Mail setup for up to five
            professional email accounts on your school&apos;s own domain.*
          </p>
          <p className="mt-1 text-center text-[10px] text-white/35">
            *Free for lifetime under Zoho Mail&apos;s current free-plan terms.
          </p>
        </div>

        {showConfirmation && state.submitted ? (
          <BookingConfirmation
            booking={state.submitted}
            onBookAnother={() => setDismissed(true)}
          />
        ) : (
          <form
            action={formAction}
            className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-8 backdrop-blur"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={state.errors?.full_name}>
                <Input
                  name="full_name"
                  placeholder="Rahul Sharma"
                  className="bg-white/5 border-white/10 text-white"
                  autoComplete="name"
                />
              </Field>
              <Field label="School Name" error={state.errors.school_name}>
                <Input
                  name="school_name"
                  placeholder="Woodbine Modern School"
                  className="bg-white/5 border-white/10 text-white"
                  autoComplete="organization"
                />
              </Field>
              <Field label="Email" error={state.errors.email}>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@school.in"
                  className="bg-white/5 border-white/10 text-white"
                  autoComplete="email"
                />
              </Field>
              <Field label="Phone (WhatsApp)" error={state.errors.phone}>
                <Input
                  name="phone"
                  placeholder="98XXXXXXXX"
                  className="bg-white/5 border-white/10 text-white"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </Field>
            </div>

            <p className="mt-4 text-center text-xs text-white/50">
              No signup · No commitment · 100% free. We&apos;ll confirm your
              slot on WhatsApp within a few hours.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-white/50">
                By submitting, you agree to be contacted by SchoolPixel about
                your demo.
              </p>
              <Button
                type="submit"
                disabled={isPending}
                className="bg-[#2563EB] hover:bg-[#1d4fd8] text-white font-medium sm:min-w-[180px]"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Booking…
                  </>
                ) : (
                  "Book my demo"
                )}
              </Button>
            </div>
          </form>
        )}
      </section>
    </PageShell>
  );
}

function BookingConfirmation({
  booking,
  onBookAnother,
}: {
  booking: SubmittedBooking;
  onBookAnother: () => void;
}) {
  const formattedDate = new Date(
    booking.preferred_date + "T00:00:00",
  ).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const whatsappHref = `${LINKS.whatsapp}?text=Hi%2C%20I%20just%20booked%20a%20demo%20with%20SchoolPixel%20on%20${encodeURIComponent(
    booking.preferred_date,
  )}.%20Excited%20to%20connect%21`;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-linear-to-br from-emerald-400/10 via-[#0D1525] to-[#2563EB]/10 p-6 sm:p-8">
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#2563EB]/20 blur-3xl" />

      <div className="relative">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-400/20 border border-emerald-400/40">
            <CheckCircle2 className="w-7 h-7 text-emerald-300" />
          </span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white">
            You&apos;re on the calendar!
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/70 max-w-lg">
            We&apos;ve received your demo request for{" "}
            <strong className="text-white">{booking.school_name}</strong>. Our
            team will confirm your slot via WhatsApp or email within a few
            hours.
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/4 p-5 sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">
            Booking Details
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <DetailItem
              icon={<User className="w-4 h-4" />}
              label="Full Name"
              value={booking.full_name}
            />
            <DetailItem
              icon={<School className="w-4 h-4" />}
              label="School Name"
              value={booking.school_name}
            />
            <DetailItem
              icon={<Mail className="w-4 h-4" />}
              label="Email"
              value={booking.email}
            />
            <DetailItem
              icon={<Phone className="w-4 h-4" />}
              label="Phone"
              value={booking.phone}
            />
            <DetailItem
              icon={<Calendar className="w-4 h-4" />}
              label="Preferred Date"
              value={formattedDate}
            />
            {/* <DetailItem icon={<Clock className="w-4 h-4" />} label="Preferred Time" value={booking.preferred_time} /> */}
            {booking.message && (
              <div className="sm:col-span-2">
                <DetailItem
                  icon={<MessageSquare className="w-4 h-4" />}
                  label="Message"
                  value={booking.message}
                />
              </div>
            )}
          </div>
        </div>

        {/* What happens next? block */}
        <div className="mt-6 rounded-xl border border-[#2563EB]/20 bg-[#2563EB]/5 p-5 sm:p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3">
            What happens next?
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>
                You&apos;ll receive a WhatsApp confirmation within 2–4 hours.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>
                We&apos;ll send a Google Meet link 15 minutes before your
                scheduled demo.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span>
                Come with any questions — the call is purely exploratory, no
                pressure.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/6 hover:bg-emerald-400/12 hover:border-emerald-400/50 px-4 py-3 text-sm font-semibold text-white transition"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            Message us on WhatsApp
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
          </a>
          <Button
            onClick={onBookAnother}
            variant="outline"
            className="w-full border-white/10 bg-white/4 text-white hover:bg-white/8 hover:text-white h-auto py-3"
          >
            Book another slot
          </Button>
        </div>

        <div className="mt-4 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition"
          >
            <Home className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function DetailItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-[#60a5fa]">{icon}</span>
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wider text-white/50">
          {label}
        </p>
        <p className="text-sm font-medium text-white truncate">{value}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-wide text-white/60">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}