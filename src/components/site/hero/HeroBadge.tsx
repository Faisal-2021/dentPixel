"use client";

import { Sparkles } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0EA5C9]/30 bg-[#0EA5C9]/10 text-xs sm:text-sm font-medium text-[#0284C7] mb-6 shadow-xs backdrop-blur-sm">
      <Sparkles className="w-3.5 h-3.5 text-[#0EA5C9]" />
      <span>Complete Dental Website + Clinic Management System</span>
    </div>
  );
}
