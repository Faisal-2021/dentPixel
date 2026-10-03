"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FloatingLinesBackgroundProps {
  className?: string;
  lineColor?: string;
  lineOpacity?: number;
  lineCount?: number;
}

export function FloatingLinesBackground({
  className,
  lineColor = "#0EA5C9",
  lineOpacity = 0.08,
  lineCount = 12,
}: FloatingLinesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Line class
    class Line {
      x: number;
      y: number;
      length: number;
      angle: number;
      speed: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 200 + 50;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.5 + 0.1;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
      }

      update(time: number) {
        // Slow drift
        this.y -= this.speed;
        this.angle += this.rotationSpeed;

        // Subtle mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        }

        // Wrap around
        if (this.y < -this.length) this.y = canvas.height + this.length;
        if (this.x < -this.length) this.x = canvas.width + this.length;
        if (this.x > canvas.width + this.length) this.x = -this.length;
      }

      draw() {
        if (!ctx) return;
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        ctx.strokeStyle = lineColor;
        ctx.globalAlpha = lineOpacity;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }

    const lines = Array.from({ length: lineCount }, () => new Line());

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        line.update(time);
        line.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [lineColor, lineOpacity, lineCount]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none absolute inset-0 w-full h-full",
        className
      )}
      style={{ touchAction: "none" }}
    />
  );
}
