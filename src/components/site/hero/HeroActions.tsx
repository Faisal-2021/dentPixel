"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroActions() {
  return (
    <div className="space-y-5">
      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/book-demo"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0EA5C9] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0EA5C9] text-white text-base font-semibold shadow-lg shadow-[#0EA5C9]/25 hover:shadow-xl hover:shadow-[#0EA5C9]/40 transition-all duration-300"
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

      {/* Trust line */}
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-[#0EA5C9] flex-shrink-0" />
        <span>Tailored to your clinic&apos;s name, doctors, and branding. No technical setup needed.</span>
      </p>
    </div>
  );
}
