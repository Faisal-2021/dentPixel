"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Inbox,
  Bell,
  FileText,
  Wallet,
  Calendar as CalendarIcon,
  Users,
} from "lucide-react";
import dashboardImg from "@/assets/dashboard-admin.png";
import { LINKS } from "@/config/links";
import Image from "next/image";

const tabs = [
  { id: "Appointments", icon: CalendarIcon, title: "Appointments", desc: "View incoming consultation requests, schedule chair times, and manage patient appointments in real-time." },
  { id: "Inquiries", icon: Inbox, title: "Patient Inquiries", desc: "Capture every patient enquiry and treatment question from your website. Follow up and confirm visits from one inbox." },
  { id: "Doctors", icon: Users, title: "Doctor Rosters", desc: "Manage consulting dentist profiles, shift timings, chair availability, and specialized clinical hours." },
  { id: "Invoices", icon: Wallet, title: "Treatment Invoices", desc: "Generate treatment cost estimates, record payments, and track outstanding balances clearly." },
  { id: "Intake Forms", icon: FileText, title: "Digital Intake Forms", desc: "Patients fill medical history and intake forms online prior to arrival, cutting waiting room paperwork." },
  { id: "Alerts", icon: Bell, title: "SMS & WhatsApp Alerts", desc: "Automate appointment confirmations, check-up reminders, and post-treatment dental care instructions." },
];

export function DashboardShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [12, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  const [active, setActive] = useState("Appointments");
  const current = tabs.find((t) => t.id === active)!;
  const ActiveIcon = current.icon;

  return (
    <section id="dashboard" className="relative py-24 md:py-32 bg-muted/30 border-b border-border overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full border border-border bg-card text-xs uppercase tracking-wider text-muted-foreground mb-4 shadow-xs">
            Dental Clinic Management Dashboard
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Your Clinic,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5C9] to-[#0284C7]">
              Fully Organized.
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            The dashboard your reception and doctors will use every day to manage appointments, patient inquiries, and rosters.
          </p>
        </div>

        {/* MacBook-style frame with scroll-tied animation */}
        <div ref={ref} className="mt-16 mx-auto max-w-5xl perspective-[1200px]">
          <motion.div
            style={{ scale, rotateX: rotate, y: translateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* Screen */}
            <div className="relative rounded-t-2xl border-[8px] border-border bg-card shadow-2xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-muted/60 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <div className="ml-3 flex-1 h-5 rounded bg-background border border-border" />
              </div>
              <Image
                src={dashboardImg}
                alt="DentPixel Clinic Admin Dashboard preview"
                loading="lazy"
                className="w-full block"
              />
            </div>
            {/* MacBook bottom */}
            <div className="relative mx-auto h-3 w-[105%] -mt-px bg-gradient-to-b from-border to-muted rounded-b-2xl" />
            <div className="relative mx-auto h-1 w-[20%] bg-border rounded-b-xl" />
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  isActive
                    ? "bg-gradient-to-r from-[#0EA5C9] to-[#0284C7] text-white shadow-md shadow-cyan-500/20"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted shadow-xs"
                }`}
              >
                {t.id}
              </button>
            );
          })}
        </div>

        {/* Description area */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 flex items-start gap-4 shadow-sm"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5C9]/20 to-[#0284C7]/20 border border-border flex items-center justify-center shrink-0">
            <ActiveIcon className="w-5 h-5 text-[#0EA5C9]" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-foreground">{current.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mt-1">{current.desc}</p>
          </div>
        </motion.div>

        <div className="mt-10 text-center">
          <a
            href={LINKS.demoDashboard}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-gradient-to-r from-[#0EA5C9] to-[#0284C7] text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:opacity-95 transition"
          >
            Try the Live Dashboard →
          </a>
        </div>
      </div>
    </section>
  );
}
