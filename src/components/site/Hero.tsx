"use client";

import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/60 via-background to-background border-b border-border/60">
      {/* Subtle background ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[420px] w-[680px] rounded-full bg-gradient-to-tr from-[#0EA5C9]/15 to-[#0284C7]/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs sm:text-sm font-medium text-[#0284C7] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#0EA5C9]" />
          <span>Complete Dental Website + Clinic Management System</span>
        </div>

        {/* Main Headline - Improved */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-foreground leading-[1.1]">
          The website your patients love.{" "}
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">
            The system your clinic runs on.
          </span>
        </h1>

        {/* Supporting paragraph - More compelling */}
        <p className="mt-6 mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
          DentPixel gives your dental clinic a modern patient website with 24/7 online booking,
          connected directly to a private staff dashboard for scheduling, tooth charting, billing,
          and patient recalls.
        </p>

        {/* Action CTAs - Improved design */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/book-demo"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0EA5C9] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0EA5C9] text-white text-base font-semibold shadow-lg shadow-[#0EA5C9]/25 hover:shadow-xl hover:shadow-[#0EA5C9]/35 transition-all duration-300"
          >
            Book a 15-Minute Demo 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-border hover:border-[#0EA5C9]/50 bg-white hover:bg-sky-50/50 text-foreground text-base font-medium shadow-sm hover:shadow-md transition-all duration-300"
          >
            See How It Works ↓
          </a>
        </div>

        {/* Trust line - Enhanced */}
        <p className="mt-5 text-sm text-muted-foreground flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#0EA5C9]" />
          <span>Tailored to your clinic&apos;s name, doctors, and branding. No technical setup needed.</span>
        </p>

        {/* Quick Value Highlights */}
        <div className="mt-10 mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
          <div className="group p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-[#0EA5C9]/40 hover:shadow-md flex items-start gap-3 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 group-hover:bg-[#0EA5C9]/20 transition-colors">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">24/7 Online Booking</div>
              <div className="text-xs text-muted-foreground mt-0.5">Patients book their own doctor and slot anytime without calling.</div>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-[#0EA5C9]/40 hover:shadow-md flex items-start gap-3 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 group-hover:bg-[#0EA5C9]/20 transition-colors">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">Auto-Updating Tooth Chart</div>
              <div className="text-xs text-muted-foreground mt-0.5">Clinical procedure updates automatically refresh the patient chart.</div>
            </div>
          </div>

          <div className="group p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-[#0EA5C9]/40 hover:shadow-md flex items-start gap-3 transition-all duration-300">
            <div className="w-9 h-9 rounded-lg bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 group-hover:bg-[#0EA5C9]/20 transition-colors">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-foreground">Treatment-Linked Billing</div>
              <div className="text-xs text-muted-foreground mt-0.5">Invoices match completed work directly with zero manual guesswork.</div>
            </div>
          </div>
        </div>

        {/* Dual-Side Product Visual Preview */}
        <div className="mt-14 mx-auto max-w-5xl rounded-2xl border border-border bg-card shadow-xl shadow-slate-900/5 overflow-hidden text-left">
          {/* Mockup Topbar */}
          <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b border-border text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground hidden sm:inline">
                https://yourclinic.dentpixel.com
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-medium">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                Live Demo Preview
              </span>
            </div>
          </div>

          {/* Split Screen Showcase: Patient Side vs Staff Side */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Side 1: Patient-Facing Booking */}
            <div className="p-6 sm:p-8 bg-background">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#0EA5C9]/10 px-2.5 py-1 rounded-md">
                  Side 1: Your Patient Website
                </span>
                <span className="text-xs text-muted-foreground">24/7 Patient View</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Patients Pick a Doctor &amp; Time Slot
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-5">
                No phone calls, no waiting on hold. Patients choose treatments, select an open chair time, and receive an instant booking code.
              </p>

              {/* Booking simulation box */}
              <div className="rounded-xl border border-border/80 bg-muted/30 p-4 space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="font-semibold text-foreground">Selected Doctor:</span>
                  <span className="text-[#0284C7] font-medium">Dr. Neha Rao (Endodontist)</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="font-semibold text-foreground">Service:</span>
                  <span className="text-foreground">Consultation &amp; Tooth Pain Check</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="font-semibold text-foreground">Confirmed Slot:</span>
                  <span className="text-foreground">Tomorrow, 4:30 PM</span>
                </div>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Booked Instantly
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">Ref: #DP-8421</span>
                </div>
              </div>
            </div>

            {/* Side 2: Private Staff System */}
            <div className="p-6 sm:p-8 bg-sky-50/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  Side 2: Staff Management System
                </span>
                <span className="text-xs text-muted-foreground">Doctor &amp; Reception</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Schedules, Tooth Chart &amp; Billing In Sync
              </h3>
              <p className="text-xs text-muted-foreground mt-1 mb-5">
                The doctor sees the patient, adds treatment notes, and completes the procedure. The tooth chart and invoice update on the spot.
              </p>

              {/* Staff dashboard simulation box */}
              <div className="rounded-xl border border-border/80 bg-background p-4 space-y-3 text-xs shadow-xs">
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="font-semibold text-foreground">Active Operatory:</span>
                  <span className="font-medium text-foreground">Chair 2 · Patient #DP-8421</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="font-semibold text-foreground">Completed Procedure:</span>
                  <span className="text-emerald-700 font-semibold">Tooth #19 Composite Filling</span>
                </div>
                <div className="flex items-center justify-between border-b border-border/60 pb-2">
                  <span className="font-semibold text-foreground">Tooth Chart Status:</span>
                  <span className="text-[#0284C7] font-medium">Restoration Charted Automatically</span>
                </div>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-muted-foreground">Checkout Invoice:</span>
                  <span className="text-foreground font-bold">Auto-Generated for Front Desk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
