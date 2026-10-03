"use client";

import { FloatingLinesBackground } from "@/components/ui/floating-lines-background";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[680px] rounded-full bg-gradient-to-tr from-[#0EA5C9]/15 to-[#0284C7]/10 blur-3xl" />
      </div>

      {/* Floating lines - very subtle */}
      <FloatingLinesBackground
        lineColor="#0EA5C9"
        lineOpacity={0.06}
        lineCount={10}
      />

      {/* Subtle dot pattern at bottom */}
      <DotPattern
        className={cn(
          "text-[#0EA5C9]/20",
          "[mask-image:linear-gradient(to_top,white,transparent,transparent)]"
        )}
        width={24}
        height={24}
        cx={1}
        cy={1}
        cr={0.8}
      />
    </div>
  );
}
