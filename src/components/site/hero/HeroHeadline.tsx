"use client";

import { Highlighter } from "@/components/magicui/highlighter";

export function HeroHeadline() {
  return (
    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-foreground leading-[1.1] max-w-5xl mx-auto">
      The website{" "}
      <Highlighter
        action="underline"
        color="#0EA5C9"
        strokeWidth={2.5}
        animationDuration={800}
        padding={3}
        isView={false}
      >
        your patients love.
      </Highlighter>
      <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">
        The system your clinic runs on.
      </span>
    </h1>
  );
}
