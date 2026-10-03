"use client";
import { GlowCard } from "@/components/aceternity/glowing-effect-card";
import { FileText, CalendarDays, Globe, Wrench, Layout, Smartphone, ArrowRight } from "lucide-react";
import Link from "next/link";

function MiniWireframe() {
  return (
    <div className="relative w-full max-w-sm aspect-[4/3] rounded-xl bg-background border border-border overflow-hidden p-3 mt-4 shadow-xs">
      <div className="flex gap-1.5 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-green-400/70" />
      </div>
      <div className="h-3 w-1/3 rounded bg-muted mb-2" />
      <div className="grid grid-cols-3 gap-2">
        <div className="h-12 rounded bg-gradient-to-br from-[#0EA5C9]/30 to-transparent border border-border" />
        <div className="h-12 rounded bg-gradient-to-br from-[#0284C7]/30 to-transparent border border-border" />
        <div className="h-12 rounded bg-gradient-to-br from-[#0EA5C9]/20 to-transparent border border-border" />
      </div>
      <div className="mt-2 h-2 w-3/4 rounded bg-muted" />
      <div className="mt-1 h-2 w-1/2 rounded bg-muted" />
    </div>
  );
}

function PhoneOutline() {
  return (
    <div className="relative mx-auto w-32 h-56 mt-4 rounded-[28px] border-[3px] border-border bg-background p-2 shadow-[0_0_30px_rgba(14,165,201,0.15)]">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-muted-foreground/30" />
      <div className="mt-4 grid gap-1.5">
        <div className="h-3 rounded bg-gradient-to-r from-[#0EA5C9]/80 to-[#0284C7]/80" />
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-8 rounded bg-muted/80" />
          <div className="h-8 rounded bg-muted/80" />
        </div>
        <div className="h-2 rounded bg-muted" />
        <div className="h-2 w-2/3 rounded bg-muted" />
        <div className="h-10 rounded bg-gradient-to-br from-[#0EA5C9]/20 to-transparent border border-border" />
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background border-b border-border overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full border border-border bg-card text-xs uppercase tracking-wider text-muted-foreground mb-4 shadow-xs">
            What We Build
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Everything Your Dental Clinic Website Needs
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[14rem] gap-5">
          {/* Large card spans 2 cols */}
          <GlowCard className="md:col-span-2 md:row-span-2 p-7 flex flex-col">
            <div className="flex items-start gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#0EA5C9]/15 border border-[#0EA5C9]/30 flex items-center justify-center">
                <Layout className="w-5 h-5 text-[#0EA5C9]" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">Custom Dental Clinic Website Design</h3>
                <p className="text-muted-foreground mt-1 text-sm">Designed around your practice specialties, team, and patient care ethos.</p>
                <Link href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0EA5C9] hover:text-[#0284C7] transition-colors uppercase tracking-wider">
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
            <MiniWireframe />
          </GlowCard>

          {/* Tall card spans 2 rows */}
          <GlowCard className="md:row-span-2 p-7 flex flex-col items-center text-center">
            <div className="w-11 h-11 rounded-xl bg-[#0284C7]/15 border border-[#0284C7]/30 flex items-center justify-center self-start">
              <Smartphone className="w-5 h-5 text-[#0284C7]" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mt-4 self-start text-left">Mobile-First Patient Experience</h3>
            <p className="text-muted-foreground mt-1 text-sm self-start text-left">Over 80% of patients browse and book on mobile. We build for them first.</p>
            <Link href="#contact" className="mt-4 self-start inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors uppercase tracking-wider">
              Explore development <ArrowRight className="w-3 h-3" />
            </Link>
            <PhoneOutline />
          </GlowCard>

          <GlowCard className="p-6">
            <div className="w-10 h-10 rounded-lg bg-[#0EA5C9]/15 border border-[#0EA5C9]/30 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5 text-[#0EA5C9]" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Online Appointment Booking</h3>
            <p className="text-sm text-muted-foreground mt-1.5">Capture patient appointment requests and consultation leads directly 24/7.</p>
          </GlowCard>

          <GlowCard className="p-6">
            <div className="w-10 h-10 rounded-lg bg-[#0284C7]/15 border border-[#0284C7]/30 flex items-center justify-center mb-3">
              <CalendarDays className="w-5 h-5 text-[#0284C7]" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Treatment Guides & Pricing</h3>
            <p className="text-sm text-muted-foreground mt-1.5">Educate patients on Invisalign, root canals, implants, and teeth whitening with clear info.</p>
          </GlowCard>

          <GlowCard className="p-6">
            <div className="w-10 h-10 rounded-lg bg-[#0EA5C9]/15 border border-[#0EA5C9]/30 flex items-center justify-center mb-3">
              <Globe className="w-5 h-5 text-[#0EA5C9]" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Healthcare Hosting & SSL</h3>
            <p className="text-sm text-muted-foreground mt-1.5">Fast, secure, healthcare-grade hosting and custom clinic domain setup handled.</p>
          </GlowCard>

          <GlowCard className="p-6">
            <div className="w-10 h-10 rounded-lg bg-[#0284C7]/15 border border-[#0284C7]/30 flex items-center justify-center mb-3">
              <Wrench className="w-5 h-5 text-[#0284C7]" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">Ongoing Clinic Support</h3>
            <p className="text-sm text-muted-foreground mt-1.5">After launch, we&apos;re here for doctor roster updates, new treatments, and changes.</p>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
