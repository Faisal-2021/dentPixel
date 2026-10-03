"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlowCursorProps {
  className?: string;
  glowColor?: string;
  glowSize?: number;
  enabled?: boolean;
}

export function GlowCursor({
  className,
  glowColor = "#0EA5C9",
  glowSize = 120,
  enabled = true,
}: GlowCursorProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const glow = glowRef.current;
    if (!glow) return;

    // Check for touch device
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      glow.style.display = "none";
      return;
    }

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      glow.style.display = "none";
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationId: number;
    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        glow.style.opacity = "0.3";
        isVisible = true;
      }
    };

    const animate = () => {
      // Smooth follow with easing
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      className={cn(
        "pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-0 transition-opacity duration-500 mix-blend-screen",
        className
      )}
      style={{
        width: glowSize,
        height: glowSize,
        background: `radial-gradient(circle, ${glowColor}40 0%, transparent 70%)`,
        zIndex: 9999,
      }}
      aria-hidden="true"
    />
  );
}
