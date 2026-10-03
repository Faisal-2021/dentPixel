"use client";

import { motion } from "motion/react";
import { CheckCircle2, Calendar, FileText, CreditCard } from "lucide-react";

export function HeroProductPreview() {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Main Dashboard Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="rounded-2xl border border-border bg-card shadow-2xl shadow-slate-900/10 overflow-hidden"
      >
        {/* Browser Chrome */}
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
              Live System
            </span>
          </div>
        </div>

        {/* Split Dashboard View */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {/* Patient Side */}
          <div className="p-6 sm:p-8 bg-background">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0284C7] bg-[#0EA5C9]/10 px-2.5 py-1 rounded-md">
                Patient Website
              </span>
              <span className="text-xs text-muted-foreground">24/7 Booking</span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">
              Patients Book Online
            </h3>
            <p className="text-xs text-muted-foreground mb-5">
              Choose doctor, service, and time slot instantly.
            </p>

            {/* Booking Card */}
            <div className="rounded-xl border border-border/80 bg-muted/30 p-4 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-semibold text-foreground">Doctor:</span>
                <span className="text-[#0284C7] font-medium">Dr. Neha Rao</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-semibold text-foreground">Service:</span>
                <span className="text-foreground">Consultation</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-semibold text-foreground">Time:</span>
                <span className="text-foreground">Tomorrow, 4:30 PM</span>
              </div>
              <div className="pt-1 flex items-center justify-between">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Booked
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  #DP-8421
                </span>
              </div>
            </div>
          </div>

          {/* Staff Side */}
          <div className="p-6 sm:p-8 bg-sky-50/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                Staff Dashboard
              </span>
              <span className="text-xs text-muted-foreground">Real-Time</span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">
              Complete Workflow
            </h3>
            <p className="text-xs text-muted-foreground mb-5">
              Schedule, chart, and bill in one system.
            </p>

            {/* Treatment Card */}
            <div className="rounded-xl border border-border/80 bg-background p-4 space-y-3 text-xs shadow-xs">
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-semibold text-foreground">Patient:</span>
                <span className="font-medium text-foreground">#DP-8421 · Chair 2</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-semibold text-foreground">Procedure:</span>
                <span className="text-emerald-700 font-semibold">
                  Tooth #19 Filling
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-border/60 pb-2">
                <span className="font-semibold text-foreground">Chart:</span>
                <span className="text-[#0284C7] font-medium">Auto-Updated</span>
              </div>
              <div className="pt-1 flex items-center justify-between">
                <span className="text-muted-foreground">Invoice:</span>
                <span className="text-foreground font-bold">Generated</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Feature Cards */}
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-48 p-3 rounded-lg border border-border bg-card/95 backdrop-blur-sm shadow-lg"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-md bg-[#0EA5C9]/10 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#0284C7]" />
            </div>
            <span className="text-xs font-bold text-foreground">
              24/7 Booking
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground">
            Patients self-schedule anytime
          </p>
        </motion.div>
      </div>

      <div className="absolute -right-4 top-1/3 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-48 p-3 rounded-lg border border-border bg-card/95 backdrop-blur-sm shadow-lg"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-md bg-[#0EA5C9]/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#0284C7]" />
            </div>
            <span className="text-xs font-bold text-foreground">
              Auto Tooth Chart
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground">
            Updates as procedures complete
          </p>
        </motion.div>
      </div>

      <div className="absolute -right-4 bottom-1/4 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-48 p-3 rounded-lg border border-border bg-card/95 backdrop-blur-sm shadow-lg"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-md bg-[#0EA5C9]/10 flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-[#0284C7]" />
            </div>
            <span className="text-xs font-bold text-foreground">
              Linked Billing
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground">
            Invoices match completed work
          </p>
        </motion.div>
      </div>
    </div>
  );
}
