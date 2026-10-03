"use client";
import { MessageCircle } from "lucide-react";
import { Sparkles } from "@/components/aceternity/sparkles";
import { LINKS } from "@/config/links";

export function FloatingWhatsApp() {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-60 group"
    >
      {/* Tooltip */}
      <span
        className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-white text-xs font-medium shadow-[0_10px_30px_rgba(0,0,0,0.35)] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
      >
        Chat with us about your clinic&apos;s website
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl group-hover:bg-[#25D366]/60 transition" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] hover:scale-105 transition">
        <Sparkles count={10} />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </span>
    </a>
  );
}
