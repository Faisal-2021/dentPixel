"use client";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInput({
  placeholders,
  onChange,
  onSubmit,
  value,
  name,
  className,
  inputClassName,
  useForm = true,
}: {
  placeholders: string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  value?: string;
  name?: string;
  className?: string;
  inputClassName?: string;
  useForm?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    intervalRef.current = setInterval(() => setIdx((p) => (p + 1) % placeholders.length), 3000);
  };

  useEffect(() => {
    start();
    const onVis = () => {
      if (document.visibilityState !== "visible" && intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else if (document.visibilityState === "visible") {
        if (intervalRef.current) clearInterval(intervalRef.current);
        start();
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [placeholders.length]);

  const Tag = (useForm ? "form" : "div") as any;

  return (
    <Tag
      {...(useForm
        ? {
            onSubmit: (e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setAnimating(true);
              setTimeout(() => setAnimating(false), 600);
              onSubmit?.(e);
            },
          }
        : {})}
      className={cn("relative w-full", className)}
    >
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        className={cn(
          "w-full h-11 rounded-xl bg-background/80 border border-border px-4 text-foreground text-sm",
          "placeholder:text-transparent focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition",
          animating && "text-transparent",
          inputClassName,
        )}
      />
      <div className="absolute inset-0 flex items-center pl-4 pointer-events-none">
        <AnimatePresence mode="wait">
          {!value && (
            <motion.p
              key={`p-${idx}`}
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground truncate"
            >
              {placeholders[idx]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </Tag>
  );
}
