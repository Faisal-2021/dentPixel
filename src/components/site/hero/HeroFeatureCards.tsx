"use client";

import { Clock, FileCheck2, ShieldCheck } from "lucide-react";

export function HeroFeatureCards() {
  return (
    <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
      <div className="group p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-[#0EA5C9]/40 hover:shadow-md flex items-start gap-3 transition-all duration-300">
        <div className="w-9 h-9 rounded-lg bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 group-hover:bg-[#0EA5C9]/20 transition-colors">
          <Clock className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">
            24/7 Online Booking
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Patients book their own doctor and slot anytime without calling.
          </div>
        </div>
      </div>

      <div className="group p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-[#0EA5C9]/40 hover:shadow-md flex items-start gap-3 transition-all duration-300">
        <div className="w-9 h-9 rounded-lg bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 group-hover:bg-[#0EA5C9]/20 transition-colors">
          <FileCheck2 className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">
            Auto-Updating Tooth Chart
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Clinical procedure updates automatically refresh the patient chart.
          </div>
        </div>
      </div>

      <div className="group p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm hover:border-[#0EA5C9]/40 hover:shadow-md flex items-start gap-3 transition-all duration-300">
        <div className="w-9 h-9 rounded-lg bg-[#0EA5C9]/10 text-[#0284C7] flex items-center justify-center shrink-0 group-hover:bg-[#0EA5C9]/20 transition-colors">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">
            Treatment-Linked Billing
          </div>
          <div className="text-xs text-muted-foreground mt-0.5">
            Invoices match completed work directly with zero manual guesswork.
          </div>
        </div>
      </div>
    </div>
  );
}
