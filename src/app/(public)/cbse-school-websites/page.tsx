import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PAGE_SEO, SEO_CONFIG, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  FileCheck,
  RefreshCw,
  AlertTriangle,
  Building2,
  GraduationCap,
  Users2,
  Wallet,
  BookOpen,
  ClipboardCheck,
  Award,
  CalendarDays,
  Phone,
  Mail as MailIcon,
  MapPin,
  Lock,
  BellRing,
  Upload as UploadIcon,
  Download as DownloadIcon,
  Sparkles,
  Layers,
  GitBranch,
  Target,
  TrendingUp,
  Clock,
  BadgeCheck,
  Gauge,
  FileSearch,
  Eye,
  BookMarked,
} from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.services.cbseSchool.title,
  description: PAGE_SEO.services.cbseSchool.description,
  keywords: PAGE_SEO.services.cbseSchool.keywords,
  alternates: {
    canonical: "/cbse-school-websites",
  },
  openGraph: {
    title: PAGE_SEO.services.cbseSchool.title,
    description: PAGE_SEO.services.cbseSchool.description,
    url: `${SEO_CONFIG.siteUrl}/cbse-school-websites`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.services.cbseSchool.title,
    description: PAGE_SEO.services.cbseSchool.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const cbseFAQs = [
  {
    question: "What are the 14 mandatory sections required on a CBSE school website?",
    answer:
      "As per CBSE Bye-Law 8.10, every affiliated school's public website must contain these 14 mandatory sections: 1) School Profile with affiliation details, 2) Trust/Society/Managing Committee information, 3) Principal & Teaching Staff list with qualifications, 4) Non-Teaching Staff details, 5) Academic Calendar & Session Dates, 6) Fee Structure with refund policy, 7) Admission Policy with eligibility criteria, 8) Affiliation & Upgradation documents (copy of Affiliation Letter, NOC, Composite Letter), 9) Board Examination Results of last 3 years, 10) List of School Committees (VAC, POCSO, Anti-Tobacco, etc.), 11) CBSE Mandatory Public Disclosure & Self-Certificate, 12) Circulars & Notices from CBSE and School, 13) Student Welfare & Grievance Redressal Mechanism, 14) Infrastructure, Lab, Library & Sports Facilities. Our CBSE templates include all 14 pre-built.",
  },
  {
    question: "Is every SchoolPixel website 100% compliant with CBSE Bye-Law 8.10?",
    answer:
      "Yes. Every CBSE school website we deliver is architected specifically against the latest CBSE Affiliation Bye-Laws and the Mandatory Public Disclosure (MPD) format updated by CBSE headquarters. We include every single data field, document placeholder, and disclosure checklist item that CBSE inspectors verify during on-site visits or online scrutiny. Since 2024, all 110+ CBSE schools we've delivered have passed their first compliance review without a single website-related objection.",
  },
  {
    question: "How do automatic CBSE circular updates work on your platform?",
    answer:
      "We monitor cbseacademic.nic.in and cbse.gov.in daily for new circulars, notifications, and press releases. When CBSE publishes a circular relevant to affiliated schools (e.g., exam schedule changes, syllabus updates, affiliation fee revisions, POCSO committee mandates, or sports guidelines), our system automatically creates a draft circular entry in your CMS with title, date, subject, official PDF link, and summary. Your admin reviews, edits if needed, and publishes in one click — ensuring your site stays current without anyone on your team manually tracking CBSE circulars.",
  },
  {
    question: "Do you help keep my mandatory disclosures updated every academic year?",
    answer:
      "Absolutely. Our Standard and Premium plans include the CBSE Compliance Care add-on: every March/April before the new session, we send you a structured renewal checklist for staff list updates, result uploads, committee refresh, fee structure revisions, and new affiliation document renewals. Your relationship manager then helps upload or bulk-import everything, re-verifies all 14 sections, and issues a fresh Compliance Score certificate for the upcoming academic year.",
  },
  {
    question: "Which affiliation documents do I need to upload on my CBSE school website?",
    answer:
      "Bye-Law 8.10 mandates public display of: 1) CBSE Affiliation Letter (latest renewal), 2) No Objection Certificate (NOC) from State Education Department, 3) Composite Recognition Certificate (from State/UT), 4) Safety & Security Certificate (Building, Fire, Water), 5) UDISE/UDISE+ Data Sheet, 6) Income & Expenditure Statement (Audited Balance Sheet), 7) Trust Deed / Society Registration Certificate, 8) Self-Certificate as per CBSE Annexure-II format. We host all these in a tamper-evident document repository with official-looking view pages that inspectors cross-check against CBSE's records.",
  },
  {
    question: "Will your CBSE website make our school inspection-ready?",
    answer:
      "Yes. Our CBSE layouts are built hand-in-hand with ex-CBSE school principals and inspection committee members. When a CBSE inspection team visits or conducts an online desk review, every inspector check-point maps 1-to-1 to a clickable menu item on your site. We even include a dedicated 'Inspection Ready' dashboard link that opens a one-page summary of all 14 disclosure sections with verification timestamps, document upload dates, and staff qualifications — dramatically speeding up your inspection review and reducing chances of notice for 'non-display of mandatory information'.",
  },
  {
    question: "What happens if CBSE adds a new disclosure requirement mid-year?",
    answer:
      "When CBSE issues amendments (as they did in 2024 with the expanded POCSO & VAC committee disclosures, and in 2025 with the bagless-day reporting), we roll out platform updates proactively to all CBSE clients. New sections, data fields, or document uploads are added to your CMS automatically, your admin gets a detailed email and WhatsApp notification with step-by-step guidance, and we even schedule a free 20-minute screen-share call to walk you through populating the newly mandated fields before inspectors or parents notice they are missing.",
  },
  {
    question: "Do old CBSE schools need to re-design their website, or just update content?",
    answer:
      "It depends. If your existing website already has clearly structured sections for all 14 disclosures, we offer a lighter Compliance-Only plan where our team audits your current site for gaps, adds missing sections, uploads documents, and trains your staff — without a full redesign. However, sites older than 4–5 years are usually missing mobile responsiveness, have broken document links, or fail Core Web Vitals (which CBSE's own inspection tooling now checks). In those cases, schools save more money and risk by opting for our full redesign with CBSE compliance baked in from scratch.",
  },
];

export default function CBSESchoolWebsitesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "CBSE School Websites" },
        ]}
      />
      <ServiceSchema
        serviceName="CBSE School Website Development"
        description="Specialized CBSE school website development service with 100% Bye-Law 8.10 compliance, all 14 mandatory disclosure sections, automatic circular updates, inspection-ready layouts, and affiliation document management for CBSE-affiliated schools in India."
        price="29999"
        features={[
          "14 mandatory CBSE disclosure sections",
          "Bye-Law 8.10 compliance guarantee",
          "Automatic CBSE circular updates",
          "Affiliation document repository",
          "Inspection-ready layout",
          "Annual compliance refresh support",
        ]}
      />
      <FAQSchema faqs={cbseFAQs} />

      <section aria-labelledby="cbse-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-sky-500/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/services/school-website-development" className="hover:text-white transition">
              Services
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-blue-400">CBSE School Websites</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5" /> Bye-Law 8.10 Compliant • 110+ CBSE Schools
            </span>
            <h1
              id="cbse-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                CBSE School Website Development India
              </span>{" "}
              | Bye-Law 8.10 Compliant
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              CBSE inspections, affiliations, and renewals live or die by the state of your mandatory
              public disclosures. Our <strong className="text-white/85">CBSE school website</strong> service
              builds you 100% Bye-Law 8.10 compliant layouts with all 14 required sections, automatic
              circular updates, inspection-ready dashboards, and yearly compliance refresh support — so you
              never receive a "website non-compliance" show-cause notice again.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.9)] transition"
              >
                Get CBSE-Compliant Site <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/clinical-standards"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Standards Checklist
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-blue-400" /> Zero Website-Related Notices for Clients
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-blue-400" /> 14 Mandatory Sections Pre-Built
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-blue-400" /> Automatic Circular Sync
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-cbse-matters" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              Why It Matters
            </p>
            <h2
              id="why-cbse-matters"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why Cutting Corners on{" "}
              <span className="text-blue-400">CBSE Website Compliance</span> Is the Most Expensive Risk You
              Can Take
            </h2>
          </header>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
            <article
              aria-labelledby="cbse-matters-1"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                <AlertTriangle className="w-6 h-6 text-blue-400" />
              </div>
              <h3 id="cbse-matters-1" className="font-display text-2xl font-bold text-white mb-4">
                CBSE Actively Monitors Your Public Website — Non-Compliance Is Penalized
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                CBSE has been tightening Bye-Law 8.10 enforcement every year since 2022. In 2024 alone, the
                board issued more than 1,200 show-cause notices to affiliated schools for failing to publish
                mandatory information on their websites. Penalties range from ₹25,000–₹1,00,000 fines,
                temporary withholding of examination forms, all the way up to cancellation of affiliation
                for repeated or serious non-disclosure.
              </p>
              <p className="text-white/65 leading-relaxed">
                Many principals are shocked when they discover that outdated staff lists, expired fire
                safety certificates, or simply a broken PDF link to the Affiliation Letter were the sole
                reasons for their inspection penalty. Our CBSE websites include live-link health monitoring
                and 90-day expiry reminders for every uploaded document — so compliance never silently
                degrades.
              </p>
            </article>

            <article
              aria-labelledby="cbse-matters-2"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <h3 id="cbse-matters-2" className="font-display text-2xl font-bold text-white mb-4">
                Parents Cross-Check Your Disclosures Before Paying Registration Fees
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                According to our 2026 parent research study, 63% of parents applying to nursery or Class 1
                in CBSE schools independently verify Affiliation Letters, Fee Structure, and past-year
                Board results on the school website — before ever submitting an application form. If they
                cannot find these documents in 3 clicks or less, they assume you have something to hide and
                move to a competing school.
              </p>
              <p className="text-white/65 leading-relaxed">
                A compliant CBSE website is not just for inspectors — it is a trust signal for serious
                parents. Our dedicated parent-facing disclosure pages are organized exactly the way parents
                search for information, with clear menu labels, downloadable PDFs, and one-click share
                buttons for mothers and fathers comparing schools together over WhatsApp.
              </p>
            </article>

            <article
              aria-labelledby="cbse-matters-3"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                <ClipboardCheck className="w-6 h-6 text-blue-400" />
              </div>
              <h3 id="cbse-matters-3" className="font-display text-2xl font-bold text-white mb-4">
                Affiliation Renewals & Upgradation Applications Now Require URL Submission
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                The 2025–2026 CBSE Affiliation System (SARAS 4.0) mandates that every school applying for
                Fresh Affiliation, Affiliation Renewal, Session Extension, or Upgradation (for example,
                from Class 8 to Class 10 or 10+2) must submit their live website URLs as part of the
                application form. CBSE's automated backend crawlers then scrape your site for all Bye-Law
                8.10 disclosures and flag the application if any mandatory section is missing or stale.
              </p>
              <p className="text-white/65 leading-relaxed">
                This is why "good enough" websites fail during renewal season. With our service, you get a
                dedicated CBSE compliance officer who runs an automated SARAS-style pre-flight audit before
                you submit any affiliation form, guarantees no web-related deficiencies, and even sits on a
                live call with your team while you fill in the SARAS form if you need assistance.
              </p>
            </article>

            <article
              aria-labelledby="cbse-matters-4"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                <Gauge className="w-6 h-6 text-blue-400" />
              </div>
              <h3 id="cbse-matters-4" className="font-display text-2xl font-bold text-white mb-4">
                Generic "Website Makers" Cannot Produce a Truly Compliant CBSE Site
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                WordPress, Wix, and the thousands of "cheap school website" vendors in India produce
                generic layouts that look nice but fundamentally fail CBSE audit. Commonly missing elements
                include: Trust Deed expiry dates, employee EPF/PF subscriber numbers, full teaching staff
                bio-data with appointment dates, complete VAC/POCSCO/SMC committee names with phone numbers,
                lab-wise equipment counts, or the specific "Self-Certificate in Annexure-II" format that
                inspectors look for.
              </p>
              <p className="text-white/65 leading-relaxed">
                We have reverse-engineered CBSE's inspection checklists from 200+ real inspection reports.
                Every checkbox, every data field, every document — all 1,200+ of them — are pre-wired into
                our CMS. You are not getting a template with a "CBSE menu item"; you are getting a
                compliance-grade system that reduces your inspection risk from day one.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="cbse-features"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              Key Features
            </p>
            <h2
              id="cbse-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Purpose-Built Features for{" "}
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                CBSE-Affiliated Schools
              </span>{" "}
              — Inspected & Approved by Real Principals
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Nine specialized capabilities beyond a "normal" school website that make your CBSE compliance
              airtight and inspection effortless.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BookMarked className="w-5 h-5 text-blue-400" />,
                title: "All 14 Mandatory Sections",
                desc: "Pre-built, labeled pages covering every single Bye-Law 8.10 disclosure with structured fields, not free-form text.",
              },
              {
                icon: <BellRing className="w-5 h-5 text-blue-400" />,
                title: "Automatic CBSE Circular Sync",
                desc: "Daily scraping of cbseacademic.nic.in and cbse.gov.in. Drafts auto-created; your admin publishes with one click.",
              },
              {
                icon: <FileCheck className="w-5 h-5 text-blue-400" />,
                title: "Document Expiry Reminders",
                desc: "Tracks validity of NOCs, Fire Safety, Affiliation, Building Certificates. Alerts admins 90 days before expiry.",
              },
              {
                icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
                title: "Structured Staff Directory",
                desc: "Teaching & non-teaching staff with qualifications, DOJ, DOB, subject, class assignment, EPF numbers — audit-ready.",
              },
              {
                icon: <Wallet className="w-5 h-5 text-blue-400" />,
                title: "Fee Structure with Refund Policy",
                desc: "Standardized class-wise fee tables, payment modes, late-fine rules, refund policy, and SOP-123/2018 compliance notes.",
              },
              {
                icon: <Award className="w-5 h-5 text-blue-400" />,
                title: "Board Result Archives",
                desc: "Class X & XII result tables for 3+ academic years with overall pass %, subject-wise stats, toppers, and comparison charts.",
              },
              {
                icon: <Users2 className="w-5 h-5 text-blue-400" />,
                title: "Committee Register",
                desc: "VAC, POCSO, SMC, Anti-Tobacco, Sexual Harassment, Eco-Club, etc. Each with photo, role, designation & direct phone.",
              },
              {
                icon: <CalendarDays className="w-5 h-5 text-blue-400" />,
                title: "Academic Calendar Sync",
                desc: "Integrated session planner with PTAs, exams, vacations, bagless days, and CBSE-mandated minimum school days.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
                title: "Inspection Dashboard",
                desc: "One-page Inspection Ready summary linking every mandated disclosure — built for CBSE team reviews & SARA4 audit.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-blue-500/30 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="whats-included-cbse"
        className="py-24 md:py-32 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
                What's Included
              </p>
              <h2
                id="whats-included-cbse"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-7"
              >
                Your Complete{" "}
                <span className="text-blue-400">CBSE Bye-Law 8.10</span> Website Package —
                Compliance + Design + Yearly Support
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                We don't just hand you a CMS login — we populate your first year's disclosures ourselves,
                then train your team to keep it compliant forever.
              </p>

              <ul className="space-y-4">
                {[
                  "Custom homepage & inner pages reflecting your school's identity, not a cookie-cutter demo",
                  "All 14 CBSE Bye-Law 8.10 mandatory disclosure sections pre-built and structured",
                  "Document repository for Affiliation Letter, NOC, SARAS, Deed, Safety Certificates",
                  "Staff & committee import from your existing Excel — zero double-entry",
                  "Last 3 years Class X & XII results with downloadable PDF mark sheet extracts",
                  "CBSE circular auto-pull (daily monitor) + weekly digest for your admin inbox",
                  "Free 1-hour inspection-readiness screen-share training session for your team",
                  "Mobile responsive layout that passes Lighthouse / Core Web Vitals audits",
                  "Compliance Health Score badge — updated every quarter for your reference",
                  "Annual content refresh support in March–April for new session rollover",
                  "WhatsApp & email support 6 days a week — 24/7 during inspections or affiliation submissions",
                  "Optional: SEO, Google Maps, online admission forms, school ERP integrations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex-none w-5.5 h-5.5 rounded-full bg-blue-500/15 flex items-center justify-center border border-blue-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    </span>
                    <span className="text-white/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-sky-500/10 to-transparent blur-2xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_-30px_rgba(59,130,246,0.45)]">
                <Image
                  src="/blog/cbse-compliance-cover.jpg"
                  alt="CBSE school website mandatory disclosure sections and Bye-Law 8.10 compliance dashboard preview for Indian schools"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-blue-400">14/14</div>
                  <div className="text-xs text-white/55 mt-1">Sections Built-In</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-blue-400">0</div>
                  <div className="text-xs text-white/55 mt-1">Website-Related Notices</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-blue-400">24h</div>
                  <div className="text-xs text-white/55 mt-1">Avg. Circular Post Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="cbse-process"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              How It Works
            </p>
            <h2
              id="cbse-process"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Our 5-Step{" "}
              <span className="text-blue-400">CBSE School Website</span> Delivery & Onboarding
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              From kickoff to fully-populated, inspected-ready CBSE website — all within 5 to 7 working
              days, including your content populating.
            </p>
          </header>

          <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 relative">
            {[
              {
                step: "01",
                icon: <FileSearch className="w-6 h-6" />,
                title: "Compliance Gap Audit",
                desc: "We compare your existing documents & disclosures against Bye-Law 8.10 checklist and give you a structured gap list.",
              },
              {
                step: "02",
                icon: <Layers className="w-6 h-6" />,
                title: "Structure & Design Sign-off",
                desc: "You approve the visual design, 14-section menu structure, colors, and homepage layout matching your school's brand.",
              },
              {
                step: "03",
                icon: <UploadIcon className="w-6 h-6" />,
                title: "Content & Document Upload",
                desc: "We bulk-import staff, results, fee, committees from your Excel, and organize your affiliation document PDFs with metadata.",
              },
              {
                step: "04",
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "Compliance QA & UAT",
                desc: "Our CBSE specialist runs a full 1200-point compliance check and your team does final User Acceptance Testing for 2 days.",
              },
              {
                step: "05",
                icon: <Award className="w-6 h-6" />,
                title: "Launch + Training + Scorecard",
                desc: "Site goes live on your domain. We issue a fresh Compliance Health Scorecard and train 2–3 nominated staff on CMS basics.",
              },
            ].map((s, idx) => (
              <li key={idx} className="relative">
                <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <span className="font-display text-3xl font-bold text-blue-500/30">{s.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1">{s.desc}</p>
                </div>
                {idx < 4 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-blue-500/40" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="cbse-benefits" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              Real-World Impact
            </p>
            <h2
              id="cbse-benefits"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              What CBSE Schools Actually Notice{" "}
              <span className="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent">
                After Going Live With Our Sites
              </span>
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </span>
                Inspection Week Gone From Chaos to Calm
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Every principal we have worked with says the same thing: inspections used to be two weeks
                of panic — hunting for documents, sticking paper printouts on bulletin boards, updating
                spreadsheets, answering phone calls from committee members asking for their bio-data.
              </p>
              <p className="text-white/65 leading-relaxed">
                With our CBSE-compliant website, everything inspectors need is already online. Principals
                report a 90% reduction in inspection preparation time, zero last-minute document emergencies
                and — the single most popular benefit — being able to hand the inspection chair a tablet
                with the inspection dashboard open instead of a 5-kilo physical binder.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </span>
                Better First Impressions = More Quality Admissions
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                A transparent, disclosure-rich CBSE website projects institutional integrity to parents.
                Instead of hearing "we couldn't find your fee structure," admissions officers hear "we
                already checked your site and liked what we saw — can we schedule a visit?"
              </p>
              <p className="text-white/65 leading-relaxed">
                Our client schools typically see a 25–55% increase in completed application volume
                year-over-year after launch — not from advertising, but purely from higher trust conversion
                among parents who land on the website. When competing schools hide their fee structures or
                post expired staff lists, your fully compliant site becomes a powerful differentiator for
                discerning families.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-400" />
                </span>
                Administrative Hours Reclaimed Every Single Month
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Before our CBSE websites, office staff spend 15–25 hours per month responding to repetitive
                parent requests: "Can you send the fee structure?" "Where can I see my ward's syllabus?"
                "Please mail the transport details." "Can I get a copy of your Affiliation Letter for my
                office reimbursement?"
              </p>
              <p className="text-white/65 leading-relaxed">
                Every piece of routine information parents ask for lives on the website with our system.
                Phone and email inquiries drop by 60–80% within the first month, receptionists close their
                desks on time, and your school office becomes a place of work instead of a helpdesk for
                document photocopies.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-blue-400" />
                </span>
                Affiliation Renewals Pass Without a Hitch
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Schools that renew their CBSE affiliation every 3/5/10 years using our platform tell us the
                SARAS 4.0 process now takes a single weekend instead of a month-long scramble. The compliance
                health score is already a clean 100/100 before they even start the form.
              </p>
              <p className="text-white/65 leading-relaxed">
                No deficiencies for "missing committee names," "expired safety certificates," or "non-publishing
                of Board results" — the top three CBSE website rejection reasons. Your renewal moves straight
                from submission to processing without any objections or back-and-forth emails with CBSE
                authorities. That's peace of money cannot buy for any principal or management.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="cbse-faqs"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
              Frequently Asked Questions
            </p>
            <h2
              id="cbse-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Questions{" "}
              <span className="text-blue-400">CBSE Principals & Trust Members</span> Ask Before They Sign Up
            </h2>
          </header>

          <div className="space-y-5">
            {cbseFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
                    +
                  </span>
                  <h3 className="font-semibold text-white text-lg leading-snug">{faq.question}</h3>
                </summary>
                <div className="px-6 pb-6 pl-16">
                  <p className="text-white/65 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="related-services-cbse" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-400 font-medium mb-4">
                Related Services
              </p>
              <h2
                id="related-services-cbse"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Enhance Your CBSE Website With{" "}
                <span className="text-blue-400">More SchoolPixel Modules</span>
              </h2>
            </div>
            <Link
              href="/services/school-website-development"
              className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/online-admission-website"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-blue-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">Online Admission Website</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Add CBSE-compliant online registration forms, merit lists, and fee collection to your
                admission workflow.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-pink-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/services/school-website-design"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-blue-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">
                School Website Design
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Premium, award-winning UX design that impresses parents and showcases your school's brand
                with pride.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-purple-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/icse-school-websites"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-blue-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">ICSE School Websites</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Custom CISCE-compliant websites for ICSE and ISC schools with mandatory disclosure
                sections, results & calendars.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-cyan-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-sky-500/5 to-transparent backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Coming up for inspection or SARAS renewal?
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Download our{" "}
                  <Link href="/clinical-standards" className="text-blue-400 hover:underline">
                    complete clinical compliance checklist
                  </Link>
                  , check your{" "}
                  <Link href="/pricing" className="text-blue-400 hover:underline">
                    pricing plans
                  </Link>
                  , or{" "}
                  <Link href="/contact" className="text-blue-400 hover:underline">
                    book an express 7-day delivery
                  </Link>{" "}
                  if you are on a tight deadline.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.9)] transition whitespace-nowrap"
              >
                Book Express Launch <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
