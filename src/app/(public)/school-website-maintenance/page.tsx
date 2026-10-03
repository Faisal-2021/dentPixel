import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PAGE_SEO, SEO_CONFIG, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, ArrowLeft, Wrench, Clock, AlertTriangle, ShieldCheck, RefreshCw, Database, Cloud, Monitor, Server, HardDrive, Activity, Phone, Mail, Zap, Lock, Headphones, BarChart3, FileText ,CloudSync  } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.services.maintenance.title,
  description: PAGE_SEO.services.maintenance.description,
  keywords: PAGE_SEO.services.maintenance.keywords,
  alternates: { canonical: "/school-website-maintenance" },
  openGraph: {
    title: PAGE_SEO.services.maintenance.title,
    description: PAGE_SEO.services.maintenance.description,
    url: `${SEO_CONFIG.siteUrl}/school-website-maintenance`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    images: [{ url: `${SEO_CONFIG.siteUrl}/og-image.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.services.maintenance.title,
    description: PAGE_SEO.services.maintenance.description,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
};

const maintenanceFaqs = [
  {
    question: "What are your website maintenance support hours?",
    answer: "Our standard school website maintenance support operates Monday through Saturday, 9:00 AM to 7:00 PM IST. Critical emergency tickets receive 24/7 response — your Principal on a Sunday night discovering a broken admission form is never left hanging until Monday. Average first response for priority tickets is under 18 minutes during business hours and under 2 hours for after-hours emergencies.",
  },
  {
    question: "How fast do you respond to emergency website issues?",
    answer: "Critical emergency issues like complete website downtime, broken admission forms, or security alerts receive engineer acknowledgment within 15 minutes and active resolution begins within 30 minutes. High-priority issues affecting core functionality but not complete outage are addressed within 2 business hours. Standard content update requests are typically completed within 24 hours on business days.",
  },
  {
    question: "How frequently do you release updates and patches?",
    answer: "Security patches are applied within 24 hours of critical CVE disclosure. Framework, CMS, and dependency updates are rolled out on a scheduled bi-weekly maintenance cycle. Major Next.js, React, and Node.js version upgrades are tested in staging first and applied during the next scheduled maintenance window after successful QA. Performance and SEO improvements ship continuously as they are validated.",
  },
  {
    question: "Do you handle CMS upgrades and plugin updates?",
    answer: "Yes. Our maintenance plans cover all CMS core updates, module upgrades, component library updates, and third-party integration version upgrades. We test every update on a staging mirror of your site first, verify forms, galleries, admissions pages, and compliance sections still function correctly, then deploy with full rollback capability. Schools never deal with the dreaded update that broke the homepage.",
  },
  {
    question: "How are security patches managed for school websites?",
    answer: "Our security maintenance approach has four layers: automated vulnerability scanning running every 6 hours, immediate patch application for CVEs scoring 7.0 or higher, Web Application Firewall rules deployed for zero-day vulnerabilities before patches are available, and quarterly penetration testing on enterprise plans. All security activities are logged in reports shared monthly with school administrators.",
  },
  {
    question: "What contract duration options do you offer for maintenance?",
    answer: "We offer three flexible contract terms: month-to-month rolling maintenance with 30-day cancellation, discounted quarterly billing, and our most popular annual maintenance plan that includes two complimentary months plus priority response times. Annual plans also receive a free mid-year SEO audit and performance optimization pass. Schools typically choose annual once they experience our response quality.",
  },
  {
    question: "What happens if our website goes down at night or on holidays?",
    answer: "Our uptime monitoring system pings your website from 6 global locations every 60 seconds. If downtime is detected, on-call engineers receive automated SMS, Slack, and email alerts simultaneously. We acknowledge critical alerts within 15 minutes 24/7/365 — including Diwali, Christmas, national holidays, and weekends. The SchoolPixel founder is personally cc'd on every after-hours critical incident to ensure accountability.",
  },
  {
    question: "Can we request content changes through the maintenance plan?",
    answer: "Absolutely. Every maintenance plan includes a defined number of content change hours per month covering text updates, photo uploads, new notice publishing, calendar events, PDF document replacements, and staff directory changes. Think of us as your on-call web team without the full-time salary overhead. Hours roll over for one month if unused, ensuring small schools are not penalized during quiet academic periods.",
  },
];

export default function SchoolWebsiteMaintenancePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "School Website Maintenance" },
        ]}
      />
      <ServiceSchema
        serviceName="School Website Maintenance Services"
        description={PAGE_SEO.services.maintenance.description}
        price="2999"
        features={["24/7 Monitoring", "Security Patching", "Daily Backups", "CMS Updates", "Content Changes", "Uptime SLA"]}
      />
      <FAQSchema faqs={maintenanceFaqs} />

      <section aria-labelledby="maintenance-hero-heading" className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.18),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-white transition flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#8B5CF6] font-medium">School Website Maintenance</span>
          </nav>

          <header className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-6">
              <Wrench className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-[#8B5CF6] text-sm font-medium">Monthly Care & Support Plans</span>
            </div>
            <h1 id="maintenance-hero-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              School Website Maintenance Services India |{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                Monthly Support &amp; Updates
              </span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-3xl">
              Your school website is a 24/7 admissions ambassador. Keep it secure, fast, and up-to-date with specialized maintenance plans built exclusively for educational institutions. We handle monitoring, updates, backups, content changes, and emergency support — so your administrators focus on education, not websites.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold hover:from-[#7C3AED] hover:to-[#6D28D9] transition shadow-[0_0_35px_rgba(139,92,246,0.35)]"
              >
                Start Maintenance Plan <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition"
              >
                Compare Support Plans
              </Link>
            </div>
          </header>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "99.9%", label: "Uptime Guarantee Across All Plans", icon: <Activity className="w-5 h-5 text-[#8B5CF6]" /> },
              { stat: "18 min", label: "Average Priority Ticket Response Time", icon: <Clock className="w-5 h-5 text-[#8B5CF6]" /> },
              { stat: "6x", label: "Global Locations Uptime Monitoring Per Minute", icon: <Cloud className="w-5 h-5 text-[#8B5CF6]" /> },
              { stat: "24/7", label: "Emergency Critical Incident Engineering Cover", icon: <Headphones className="w-5 h-5 text-[#8B5CF6]" /> },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <div className="font-display text-3xl font-bold text-white">{item.stat}</div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="maintenance-why-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 id="maintenance-why-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Why Professional Maintenance{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                Is Non-Negotiable for Schools
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              A school website launched six months ago and ignored afterwards is like a campus building without caretakers — it slowly deteriorates. Here is why institutional-grade maintenance directly protects your admissions, reputation, and compliance standing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article aria-labelledby="risk-heading" className="space-y-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <h3 id="risk-heading" className="font-display text-2xl font-bold text-white mb-3">
                  Mitigate Security &amp; Compliance Risks
                </h3>
                <p className="text-white/65 leading-relaxed">
                  Indian schools are increasingly targeted by opportunistic hackers looking to deface websites, steal admission inquiry data, or inject hidden SEO spam. Unpatched CMS plugins, outdated server software, and expired SSL certificates invite preventable breaches. Our maintenance applies security patches within 24 hours of disclosure. We also conduct monthly CBSE compliance audits verifying that every mandatory disclosure section displays correctly, documents remain downloadable, and fee statements reflect the current academic year — preventing compliance queries or affiliation complications during inspections.
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Protect Admission Inquiry Conversions
                </h3>
                <p className="text-white/65 leading-relaxed">
                  Consider this: a broken admission form detected in January during peak inquiry season costs your school applicants for months. Schools using our maintenance have dedicated QA monitoring verifying that all inquiry forms, document uploads, fee calculators, and contact integrations submit correctly every day. Our monitoring alerts fire the instant a form endpoint errors — often before your first parent of the morning attempts to submit an inquiry. The cost of our entire annual maintenance plan is less than the lifetime value of a single lost student admission in most Indian private schools.
                </p>
              </div>
            </article>

            <article aria-labelledby="reliability-heading" className="space-y-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 flex items-center justify-center mb-5">
                  <Server className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <h3 id="reliability-heading" className="font-display text-2xl font-bold text-white mb-3">
                  Uptime Reliability &amp; Parent Trust
                </h3>
                <p className="text-white/65 leading-relaxed">
                  When a prospective parent researches schools on a Sunday evening and finds your site unreachable, they do not patiently wait for Monday. They move to the next school in their Google results. Our maintenance includes 24/7 uptime monitoring from six global regions every 60 seconds with an engineering on-call rotation for outages. We also proactively optimize performance: image compression passes, CDN cache tuning, database optimization, bandwidth throttling protection, and Core Web Vitals monitoring ensuring your site loads consistently fast for parents browsing from mobile data connections across tier 2 and tier 3 Indian cities.
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/15 flex items-center justify-center mb-5">
                  <BarChart3 className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Predictable Budget Over Reactive Costs
                </h3>
                <p className="text-white/65 leading-relaxed">
                  Schools without maintenance operate in expensive emergency mode. A hacked site demands urgent recovery billing. A broken form found during admission season requires rush developer payments. An expired SSL certificate caught by parents forces weekend emergency triage. Our monthly maintenance converts unpredictable costs into predictable, budget-friendly pricing. Even better, we invest in preventing problems: quarterly security audits, proactive performance tuning, update staging tests, and preventive maintenance — all activities that stop expensive incidents before they ever happen.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="maintenance-features-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 id="maintenance-features-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Complete Maintenance Plan{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                Feature Coverage
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Security, performance, support, and content — every critical aspect of your school website cared for by education technology specialists.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "24/7 Uptime Monitoring",
                desc: "Global monitoring from 6 regions every 60 seconds. Instant SMS, Slack, and email alerts for downtime. On-call engineer rotation.",
                icon: <Activity className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Security Patch Management",
                desc: "Critical CVE patches applied within 24 hours. Web Application Firewall tuned for school-specific threats. Monthly vulnerability scans.",
                icon: <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Automated Backup System",
                desc: "Database and file backups every 6 hours. 30-day rolling retention. Instant on-demand backup triggers. Downloadable site exports.",
                icon: <Database className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "CMS & Software Updates",
                desc: "Framework, CMS core, module, component, and integration updates tested on staging first. Zero-update-homepage-break guarantee.",
                icon: <CloudSync  className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Content Change Requests",
                desc: "Dedicated monthly hours for text edits, photo uploads, notices, PDFs, event pages, calendar updates, and staff directory changes.",
                icon: <FileText className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Performance Optimization",
                desc: "Bi-weekly Core Web Vitals tuning. Image optimization passes. CDN cache rules. Database cleanup. Bandwidth throttling protection.",
                icon: <Zap className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "SSL & Domain Management",
                desc: "Automatic SSL certificate renewal. Domain expiry monitoring with 60-day advance alerts. DNS configuration assistance and CDN setup.",
                icon: <Lock className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Compliance Audits",
                desc: "Monthly CBSE Bye-Law 8.10 disclosure verification. Broken link scanning. Mandatory document download testing. Fee statement validation.",
                icon: <CheckCircle2 className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Form & Inquiry QA Checks",
                desc: "Daily automated test submissions on all admission forms. Document upload endpoint verification. WhatsApp and email integration testing.",
                icon: <AlertTriangle className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Emergency Response Team",
                desc: "24/7 on-call engineer for critical outages, hacks, or form failures. Principal-direct escalation path. Founder visibility on P1 incidents.",
                icon: <AlertTriangle className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Monthly Reporting",
                desc: "Executive summary covering uptime achieved, tickets resolved, updates applied, security activities, traffic highlights, and SEO KPIs.",
                icon: <BarChart3 className="w-6 h-6 text-[#8B5CF6]" />,
              },
              {
                title: "Hosting Infrastructure Care",
                desc: "Server OS updates, disk space monitoring, memory utilization alerts, PHP/Node runtime version management, and CDN configuration.",
                icon: <Server className="w-6 h-6 text-[#8B5CF6]" />,
              },
            ].map((feature, i) => (
              <article key={i} className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] transition group">
                <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center mb-5 group-hover:bg-[#8B5CF6]/15 transition">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="maintenance-included-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 id="maintenance-included-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                How Our Maintenance{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                  Service Delivers Every Month
                </span>
              </h2>
              <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl">
                Maintenance is not a vague promise. It is a structured, auditable, reportable monthly routine with clear deliverables and transparent communication.
              </p>

              <div className="mt-10 space-y-5">
                <h3 className="font-display text-xl font-bold text-white">Monthly Maintenance Cadence</h3>
                <p className="text-white/65 leading-relaxed">
                  Every plan follows the same repeatable monthly rhythm. Security updates and monitoring happen continuously without waiting for scheduled windows. The first business week of every month brings structured CMS and framework releases tested on your staging mirror. Mid-month covers performance tuning, image optimization passes, and proactive broken link scanning. The final three business days deliver compliance verification against CBSE mandatory sections, executive report compilation, and scheduling call for the upcoming month&apos;s content change priorities.
                </p>

                <h3 className="font-display text-xl font-bold text-white mt-8">Ticketing & Communication</h3>
                <p className="text-white/65 leading-relaxed">
                  Every school receives a dedicated support email address, direct WhatsApp hotline to an assigned account manager, and access to our Trello ticket board for transparency. Ticket creation is simple: email your content request text and images, WhatsApp your notice PDF, or call — we handle triage and board everything internally. You receive ticket confirmations, progress updates, completed-notification screenshots, and monthly summary reports. No confusing portals, no forgotten emails, full transparency into every action we take on your website.
                </p>

                <h3 className="font-display text-xl font-bold text-white mt-8">The SchoolPixel Emergency Guarantee</h3>
                <p className="text-white/65 leading-relaxed">
                  Critical website issues during peak admission season are not an inconvenience — they directly cost your school real enrollments. Our emergency guarantee means Principal-designated P1 incidents receive engineer acknowledgment within 15 minutes, active resolution begins within 30 minutes, and we stay on the problem until your site functions perfectly. If we fail our documented SLA response targets, we credit your next monthly maintenance invoice by 10% for every hour of delay. Accountability matters when your admissions pipeline is on the line.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#8B5CF6]" /> Comprehensive Monthly Deliverables
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "24/7 uptime monitoring from 6 global regions every 60 seconds",
                    "Critical security patches applied within 24 hours of disclosure",
                    "CMS core, module, component library, and integration updates",
                    "All updates tested on staging environment before production deploy",
                    "Daily automated form submission QA for admission inquiry forms",
                    "Automated database and file backups every 6 hours, 30-day retention",
                    "Weekly backup verification with test restores on staging",
                    "Monthly CBSE Bye-Law 8.10 compliance audit with screenshots",
                    "Monthly broken link scan across all pages and downloadable documents",
                    "Bi-weekly performance optimization and Core Web Vitals tuning",
                    "SSL certificate monitoring with auto-renewal and advance alerts",
                    "Domain expiry monitoring with 60/30/7/1-day advance reminders",
                    "Dedicated hours per month for requested content changes",
                    "WhatsApp and email support with documented response SLAs",
                    "24/7 on-call engineer for critical P1 emergency incidents",
                    "WAF rules updated for latest attack patterns targeting schools",
                    "Monthly PDF executive report with uptime, tickets, and KPIs",
                    "Scheduled monthly call with assigned account manager",
                    "Quarterly SEO health and organic visibility summary",
                    "Annual complimentary performance and security audit deep-dive",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/pricing" className="block p-7 rounded-3xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 backdrop-blur-sm hover:bg-[#8B5CF6]/10 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#8B5CF6] font-semibold mb-2">Budget Friendly Plans</div>
                    <div className="font-display text-2xl font-bold text-white">School website maintenance from ₹2,999 per month</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#8B5CF6]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="maintenance-process-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 id="maintenance-process-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Onboarding to Ongoing Care:{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                5 Steps
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Starting a maintenance plan is smooth and zero-disruption. We perform a thorough baseline audit before we touch a single setting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Baseline Audit",
                desc: "Comprehensive scan of your current site: security posture, performance scores, SEO health, compliance status, and technical debt.",
              },
              {
                step: "02",
                title: "Handshake & Setup",
                desc: "Account manager assigned. Dedicated support channels created. Monitoring agents installed. Backup schedule verified with test restore.",
              },
              {
                step: "03",
                title: "Priority Remediation",
                desc: "First month addresses any issues the baseline audit flagged: outdated software, expired SSL, broken forms, or compliance gaps.",
              },
              {
                step: "04",
                title: "Steady-State Routine",
                desc: "Monthly maintenance cadence kicks in: updates, security patches, content changes, performance tuning, and compliance checks.",
              },
              {
                step: "05",
                title: "Continuous Improvement",
                desc: "Quarterly strategy reviews with your account manager. Identify growth opportunities: SEO wins, conversion improvements, new features.",
              },
            ].map((item, i) => (
              <article key={i} className="relative p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="font-display text-5xl font-bold text-[#8B5CF6]/20 mb-4">{item.step}</div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-white/10" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="maintenance-boards-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 id="maintenance-boards-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Plan Benefits for{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                Every School Type
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Board-specific compliance monitoring, regional language content support, and emergency protocols tailored for your institution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-5">
                CBSE Schools
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">CBSE Affiliated Schools</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> Monthly Bye-Law 8.10 disclosure section verification audit</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> CBSE circular update integration within 5 business days of issue</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> RTE and EWS admission section content update support</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> Affiliation renewal documentation download endpoint testing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> Board result publishing support during March/April result season</li>
              </ul>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-5">
                ICSE / CISCE
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">CISCE Affiliated Institutions</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> CISCE mandatory disclosure audit and document publishing support</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> ICSE and ISC result page updates with PDF verification checks</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> Council inspection downloadable document endpoint validation</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> Co-scholastic and House events gallery content publishing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> Merit list and topper achievements board content updates</li>
              </ul>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-semibold uppercase tracking-wider mb-5">
                International & State
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">International &amp; State Board Schools</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> Regional and local language bilingual content update support</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> IB, IGCSE, and Cambridge curriculum page refresh support</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> State board government mandate disclosure formatting compliance</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> International university placement result seasonal publishing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" /> Scholarship and financial aid announcement time-sensitive support</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="maintenance-related-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 id="maintenance-related-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Bundled Services &amp;{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                Next Steps
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/school-website-development" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Service</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition">Website Development</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">Maintenance plan discounts bundled with every new development project. Save 20% on annual maintenance when launched together.</p>
              <div className="flex items-center gap-2 text-[#8B5CF6] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/school-website-redesign" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Service</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition">Website Redesign</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">Redesign projects include 60 days of complimentary premium maintenance for a smooth transition before recurring plans begin.</p>
              <div className="flex items-center gap-2 text-[#8B5CF6] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/school-website-cms" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Service</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition">School CMS</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">Maintenance plans cover all CMS core upgrades, feature rollouts, and new module releases automatically — no upgrade fees ever.</p>
              <div className="flex items-center gap-2 text-[#8B5CF6] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/contact" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Audit</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition">Free Website Health Audit</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">Receive a free 40-point audit report covering security, performance, uptime history, compliance status, and recommendations before subscribing.</p>
              <div className="flex items-center gap-2 text-[#8B5CF6] text-sm font-medium">
                Request audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="maintenance-faq-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 id="maintenance-faq-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Maintenance Plan{" "}
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Common questions from school principals, trustees, and administrative teams about our website maintenance and support offerings.
            </p>
          </div>

          <div className="space-y-4">
            {maintenanceFaqs.map((faq, i) => (
              <article key={i} className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="font-display text-lg font-bold text-white mb-3 flex gap-3">
                  <span className="text-[#8B5CF6] font-semibold flex-shrink-0">Q{i + 1}.</span>
                  {faq.question}
                </h3>
                <p className="text-white/65 leading-relaxed ml-7">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
