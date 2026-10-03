"use client";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingNav({
  navItems,
  className,
  rightSlot,
  leftSlot,
}: {
  navItems: { name: string; link: string }[];
  className?: string;
  rightSlot?: ReactNode;
  leftSlot?: ReactNode;
}) {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    setScrolled(current > 40);
    setVisible(true);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -16 }}
        transition={{ duration: 0.25 }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto z-[5000] max-w-5xl w-[calc(100%-1.5rem)]",
          "rounded-3xl md:rounded-full",
          "border border-border/80 bg-card/90 backdrop-blur-xl shadow-sm",
          scrolled ? "shadow-[0_8px_30px_rgba(14,165,201,0.12)] border-border bg-card/95" : "",
          className,
        )}
      >
        <div className="flex items-center justify-between gap-4 px-3 sm:px-5 py-2.5">
          <div className="flex items-center gap-2 shrink-0">{leftSlot}</div>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="relative px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {rightSlot}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-foreground hover:bg-muted transition-colors"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border bg-card/95 backdrop-blur-xl rounded-2xl mt-2"
            >
              <div className="flex flex-col p-2">
                {navItems.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
