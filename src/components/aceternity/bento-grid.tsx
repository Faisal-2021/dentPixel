"use client";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 auto-rows-[18rem] md:grid-cols-3 md:auto-rows-[20rem] gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  children,
  href,
}: {
  className?: string;
  children: ReactNode;
  href?: string;
}) {
  const inner = (
    <div
      className={cn(
        "group relative h-full w-full rounded-2xl overflow-hidden",
        "border border-border bg-card text-foreground",
        "shadow-sm",
        "transition-all duration-300 hover:border-primary/40 hover:-translate-y-1",
        "hover:shadow-md",
        className,
      )}
    >
      {/* hover gradient sheen */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,201,0.12),transparent_60%)]" />
      {children}
    </div>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return inner;
}
