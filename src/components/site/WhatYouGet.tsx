"use client";
import { Globe, LayoutDashboard, Mail, Zap, ExternalLink } from "lucide-react";
import { BentoGrid, BentoCard } from "@/components/aceternity/bento-grid";
import { LINKS } from "@/config/links";
import dashboardImg from "@/assets/dashboard-admin.png";
import zohoImg from "@/assets/zoho-mail.png";
import notifyImg from "@/assets/auto-notifications.jpg";
import Image from "next/image";

export function WhatYouGet() {
  return (
    <section className="relative py-24 md:py-32 bg-muted/30 border-b border-border overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full border border-border bg-card text-xs uppercase tracking-wider text-muted-foreground mb-4 shadow-xs">
            More than just a website
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-[1.1]">
            A Complete{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">
              Digital System
            </span>{" "}
            for Your Dental Clinic
          </h2>
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Most agencies give you a static template and disappear. We hand you a website, a clinic
            dashboard, professional doctor emails, and auto-notifications — all configured and ready.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid>
          {/* 1. WEBSITE — large, 2 cols, live preview */}
          <BentoCard className="row-span-2 md:col-span-2 md:row-span-2" href={LINKS.demoWebsite}>
            <div className="absolute inset-0 flex flex-col">
              <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-border bg-card">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0EA5C9]/20 to-[#0284C7]/20 border border-border flex items-center justify-center">
                    <Globe className="w-4 h-4 text-[#0EA5C9]" />
                  </div>
                  <div>
                    <h3 className="text-foreground text-sm font-semibold">Your Clinic Website</h3>
                    <p className="text-[11px] text-muted-foreground">
                      Modern, mobile-first — built to convert patients.
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 border border-emerald-600/20 px-2 py-1 rounded-full">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Live Demo
                </span>
              </div>
              <div className="relative flex-1 overflow-hidden bg-white">
                <iframe
                  src={LINKS.demoWebsite}
                  title="Live dental clinic website demo"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  className="absolute inset-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur text-foreground text-xs font-semibold border border-border shadow-sm group-hover:bg-primary group-hover:text-white transition">
                  Open Live Site <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </BentoCard>

          {/* 2. EMAILS — tall right column */}
          <BentoCard className="row-span-2 md:row-span-2" href={LINKS.zohoMail}>
            <div className="absolute inset-0 flex flex-col">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-card">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0EA5C9]/20 to-[#0284C7]/20 border border-border flex items-center justify-center">
                  <Mail className="w-4 h-4 text-[#0EA5C9]" />
                </div>
                <div>
                  <h3 className="text-foreground text-sm font-semibold">Doctor & Clinic Emails</h3>
                  <p className="text-[11px] text-muted-foreground">5 free pro emails on your clinic domain</p>
                </div>
              </div>
              <div className="relative flex-1 overflow-hidden bg-card">
                <Image
                  src={zohoImg}
                  alt="Zoho Mail inbox preview"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-left-top opacity-95"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-card via-card/90 to-transparent">
                  <p className="text-foreground text-sm font-medium">dr.sharma@yourclinic.com</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Powered by Zoho · setup included
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* 3. DASHBOARD — bottom left, 2 cols */}
          <BentoCard className="md:col-span-2" href={LINKS.demoDashboard}>
            <div className="absolute inset-0 flex">
              <div className="w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0EA5C9]/20 to-[#0284C7]/20 border border-border flex items-center justify-center mb-3">
                    <LayoutDashboard className="w-4 h-4 text-[#0EA5C9]" />
                  </div>
                  <h3 className="text-foreground font-semibold">Your Clinic Dashboard</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    Manage Appointments, Patient Inquiries, Doctor Rosters, Fee Estimates,
                    and post-op patient care.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Appointments", "Inquiries", "Patients", "Rosters", "Treatments"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full text-[10px] text-foreground font-medium bg-muted border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative w-1/2 overflow-hidden border-l border-border">
                <Image
                  src={dashboardImg}
                  alt="Clinic dashboard preview"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent" />
              </div>
            </div>
          </BentoCard>
        </BentoGrid>

        {/* 4. AUTO NOTIFICATIONS — full-width compact banner row */}
        <div className="mt-4">
          <BentoCard className="h-56 md:h-44" href={LINKS.resend}>
            <div className="absolute inset-0 flex items-stretch">
              <div className="flex-1 p-6 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0EA5C9]/20 to-[#0284C7]/20 border border-border flex items-center justify-center">
                    <Zap className="w-4 h-4 text-[#0EA5C9]" />
                  </div>
                  <h3 className="text-foreground font-semibold">Auto Patient Notifications</h3>
                  <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-muted-foreground">
                    via Resend & WhatsApp
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                  Every appointment booking, treatment enquiry, and consultation request triggers an instant confirmation to the patient and an alert to your reception.
                </p>
              </div>
              <div className="relative w-44 sm:w-72 shrink-0 overflow-hidden">
                <Image
                  src={notifyImg}
                  alt="Phone showing auto appointment notifications"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-card/80 via-transparent to-transparent" />
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
