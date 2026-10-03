"use client";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ScrollToTop } from "./ScrollToTop";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
      <Toaster richColors theme="light" position="top-center" />
    </div>
  );
}
