"use client";

import { GlowCursor } from "@/components/ui/glow-cursor";
import { HeroBackground } from "./hero/HeroBackground";
import { HeroBadge } from "./hero/HeroBadge";
import { HeroHeadline } from "./hero/HeroHeadline";
import { HeroActions } from "./hero/HeroActions";
import { HeroProductPreview } from "./hero/HeroProductPreview";
import { HeroFeatureCards } from "./hero/HeroFeatureCards";

export function Hero() {
  return (
    <>
      {/* Subtle glow cursor - desktop only */}
      <GlowCursor glowColor="#0EA5C9" glowSize={100} enabled={true} />

      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-sky-50/50 via-background to-background border-b border-border/60"
      >
        {/* Premium Animated Background */}
        <HeroBackground />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <HeroBadge />

          {/* Headline with Highlighter */}
          <HeroHeadline />

          {/* Supporting Paragraph */}
          <p className="mt-6 mx-auto max-w-3xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            DentPixel gives your dental clinic a modern patient website with 24/7 online booking,
            connected directly to a private staff dashboard for scheduling, tooth charting, billing,
            and patient recalls.
          </p>

          {/* CTA Buttons + Trust Line */}
          <div className="mt-8">
            <HeroActions />
          </div>

          {/* Feature Cards - Compact */}
          <div className="mt-10">
            <HeroFeatureCards />
          </div>

          {/* Premium Product Preview with Floating Cards */}
          <div className="mt-16 md:mt-20">
            <HeroProductPreview />
          </div>
        </div>
      </section>
    </>
  );
}
