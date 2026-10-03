"use client";
import { motion } from "motion/react";

export function SpotlightNew({
  gradientFirst = "radial-gradient(68% 69% at 55% 31%, hsla(220, 95%, 65%, 0.10) 0, hsla(220, 95%, 55%, 0.04) 50%, transparent 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(265, 95%, 65%, 0.08) 0, hsla(265, 95%, 55%, 0.04) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(220, 95%, 65%, 0.06) 0, hsla(220, 95%, 45%, 0.03) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: Partial<{
  gradientFirst: string;
  gradientSecond: string;
  gradientThird: string;
  translateY: number;
  width: number;
  height: number;
  smallWidth: number;
  duration: number;
  xOffset: number;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 left-0 w-screen h-[100vh] z-40 pointer-events-none"
      >
        <div
          style={{ transform: `translateY(${translateY}px) rotate(-45deg)`, background: gradientFirst, width, height }}
          className="absolute top-0 left-0"
        />
        <div
          style={{ transform: "rotate(-45deg) translate(5%, -50%)", background: gradientSecond, width: smallWidth, height }}
          className="absolute top-0 left-0 origin-top-left"
        />
        <div
          style={{ transform: "rotate(-45deg) translate(-180%, -70%)", background: gradientThird, width: smallWidth, height }}
          className="absolute top-0 left-0 origin-top-left"
        />
      </motion.div>
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 right-0 w-screen h-[100vh] z-40 pointer-events-none"
      >
        <div
          style={{ transform: `translateY(${translateY}px) rotate(45deg)`, background: gradientFirst, width, height }}
          className="absolute top-0 right-0"
        />
        <div
          style={{ transform: "rotate(45deg) translate(-5%, -50%)", background: gradientSecond, width: smallWidth, height }}
          className="absolute top-0 right-0 origin-top-right"
        />
        <div
          style={{ transform: "rotate(45deg) translate(180%, -70%)", background: gradientThird, width: smallWidth, height }}
          className="absolute top-0 right-0 origin-top-right"
        />
      </motion.div>
    </motion.div>
  );
}
