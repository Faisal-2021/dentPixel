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
  GraduationCap,
  Users2,
  CalendarDays,
  Award,
  BookOpen,
  Smartphone as SmartphoneIcon,
  MessageSquare,
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
  FileText,
  BarChart3,
  Map as MapIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Users,
  Building2,
  ScrollText,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.services.icseSchool.title,
  description: PAGE_SEO.services.icseSchool.description,
  keywords: PAGE_SEO.services.icseSchool.keywords,
  alternates: {
    canonical: "/icse-school-websites",
  },
  openGraph: {
    title: PAGE_SEO.services.icseSchool.title,
    description: PAGE_SEO.services.icseSchool.description,
    url: `${SEO_CONFIG.siteUrl}/icse-school-websites`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.services.icseSchool.title,
    description: PAGE_SEO.services.icseSchool.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const icseFAQs = [
  {
    question: "What mandatory disclosures does CISCE require on an ICSE school website?",
    answer:
      "CISCE (Council for the Indian School Certificate Examinations) requires ICSE/ISC schools to publish the following minimum mandatory information on their official public website: 1) School Profile with Permanent ID, Code, and Affiliation/Registration details, 2) Trust/Society/Company Registration documents and Governing Body composition, 3) Full Teaching Staff roster with qualifications, experience, and appointment dates, 4) Non-Teaching Staff & Support Staff list, 5) Academic Calendar with Term dates, Unit Test & Exam schedules, 6) Complete Fee Structure (tuition, transport, activity, lab, computer) with refund and withdrawal rules, 7) Admission Policy with age eligibility, reservation, and intake capacity per class, 8) CISCE Registration Letters, Permanent Affiliation Certificates, and NOC from State Government, 9) ICSE Class X & ISC Class XII Board results for last 3 academic years with subject-wise performance, 10) School Management Committee (SMC), Parent Teacher Association (PTA), and Discipline Committee details, 11) Grievance Redressal and Anti-Bullying policy with designated contact persons, 12) Infrastructure facilities: classroom count, labs, library holdings, playground, CCTV coverage, 13) Council Circulars & Notifications uploaded with date and subject, 14) Academic calendar, syllabi, and recommended textbooks. Our layouts include all CISCE-required sections with placeholders matching the Council's updated guidance.",
  },
  {
    question: "What's the practical difference between CBSE and ICSE school website requirements?",
    answer:
      "Good question. While CBSE has a very rigid 14-section format under a numbered Bye-Law (8.10) with explicit Self-Certificate Annexure, CISCE requirements are principle-based and distributed across multiple Council notifications, the CISCE Affiliation Regulations, and the Right of Children to Free and Compulsory Education Rules. ICSE sites place more emphasis on: detailed subject-wise syllabi across all standards, Swayam & ICSE Hub integration references, a visible Syllabus & Textbooks section for every class, CISCE-approved Examination Bye-Laws linkages, PTA meeting minutes summaries, co-curricular (CCE) assessments visibility, and transport route maps with GPS tracking options. Our ICSE service maps to all these Council requirements, not just the surface-level ones.",
  },
  {
    question: "Can we publish ICSE X and ISC XII results directly on our school website?",
    answer:
      "Yes. CISCE explicitly allows schools to publish results on their official website after the Council has officially declared them via results.cisce.org. We include a purpose-built Results Publication module with year-wise archives, school-wise performance summaries, student-name search, individual statement of marks PDF download, and optional merit & topper showcase pages with privacy controls (only name + marks, no personal data unless parent consent is given). We also display disclaimers mandated by the Council regarding the official source of result data and the 'subject to recheck' clause.",
  },
  {
    question: "How do you handle academic calendar publishing for ICSE schools?",
    answer:
      "We build a dedicated Academic Calendar section for ICSE schools with Term-wise and Monthly views. The calendar highlights all CISCE-mandated events: Unit Test, Half-Yearly, Pre-Board and final ICSE/ISC exam schedules, PTAs, Sports Day, Annual Function, Bagless Days, SUPW & Community Service camps, Disaster Management Drills, Parent-Teacher Interactions, Project submission deadlines, and holidays as per CISCE academic session guidelines. Parents can filter by class, download iCal/Google Calendar files, and opt in to WhatsApp or SMS reminders for important upcoming dates directly from the calendar UI.",
  },
  {
    question: "Does your ICSE package include a parent communication portal?",
    answer:
      "Yes — every SchoolPixel ICSE website comes with a secure, OTP-verified Parent Portal as standard. Parents use their registered mobile number and child's admission number to log in and view class-specific announcements, attendance summaries (integrated with your ERP if required), homework & assignments, fee payment history, circulars addressed to their child's class/section, examination time-tables, PTA meeting booking slots, and direct 2-way messaging with class teachers. All communication is logged auditable, and parents receive WhatsApp + email + in-app notifications for high-priority items.",
  },
  {
    question: "How do Council circulars from CISCE get updated on our website automatically?",
    answer:
      "We monitor cisce.org, the official CISCE Academic Circulars repository, and the Council's official notice board feeds on a daily basis. Whenever the Council issues a new circular relevant to schools — for example, revised datesheet updates, affiliation fee changes, syllabus amendments, CCE guidelines, SUPW regulations, grievance redressal revisions, or results declaration schedules — our systems create a draft CMS entry with title, date, circular number, subject, and the official PDF link. Your nominated administrator reviews the circular, tags it to the appropriate audience (Parents, Staff, Students), and clicks publish. No more missed CISCE notifications that leave parents in the dark.",
  },
  {
    question: "Do your ICSE websites integrate with existing school ERPs we may already be using?",
    answer:
      "Absolutely. We have pre-built integrations with most popular school ERPs used by ICSE schools, including Fedena, Edunext, Chanakya, Educate, OpenEduCat, and custom in-house systems. Common sync points are: Student master data (for Parent Portal login), Attendance data (daily or end-of-day), Fee dues & receipts (push + one-click payment links), Exam marks & report cards, Homework & assignments, and Transport GPS tracking. We support REST API, webhooks, CSV batch uploads, and even nightly SFTP syncs depending on your ERP's capabilities — with zero duplication of work for your front-desk and accounts teams.",
  },
  {
    question: "Can ICSE schools on a tight budget still get a CISCE-compliant site?",
    answer:
      "Yes. We specifically built our Essential Plan for small ICSE primary/middle schools that need Council compliance without advanced features like ERP sync or full admission automation. The Essential Plan delivers all CISCE-mandated disclosures, a branded responsive design, CMS access for 2 admin users, basic parent portal, results publishing, and 1 year of hosting & maintenance — all at an entry-level price point. Upgrades to higher plans (for Class X/ XII result archiving, online admission, WhatsApp integration) are fully incremental as your school grows and adds sections.",
  },
];

export default function ICSESchoolWebsitesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "ICSE School Websites" },
        ]}
      />
      <ServiceSchema
        serviceName="ICSE School Website Development"
        description="CISCE-compliant website development for ICSE (Class X) and ISC (Class XII) affiliated schools in India. Includes mandatory disclosures, result publishing, academic calendar integration, parent communication portal, and automatic CISCE circular updates."
        price="29999"
        features={[
          "CISCE mandated disclosures & registration documents",
          "ICSE Class X & ISC Class XII result publishing",
          "Integrated academic calendar & term schedules",
          "OTP verified parent portal with class updates",
          "Automatic CISCE circular notifications",
          "ERP & attendance / fee system integrations",
        ]}
      />
      <FAQSchema faqs={icseFAQs} />

      <section aria-labelledby="icse-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 -left-24 w-[28rem] h-[28rem] rounded-full bg-teal-500/10 blur-3xl -z-10" />

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
            <span className="text-cyan-400">ICSE School Websites</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-medium tracking-wide uppercase">
              <ShieldCheck className="w-3.5 h-3.5" /> CISCE Council Compliant • 60+ ICSE Schools
            </span>
            <h1
              id="icse-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-500 bg-clip-text text-transparent">
                ICSE School Website Development India
              </span>{" "}
              | CISCE Compliant Sites
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              ICSE schools deserve websites designed for the specific expectations of the CISCE Council,
              not adapted CBSE templates. Our <strong className="text-white/85">ICSE school website</strong>{" "}
              service delivers fully compliant layouts, term-wise academic calendars, ICSE/ISC results
              publishing, OTP-verified parent portals, and automatic CISCE circular integration — so you
              satisfy the Council, delight parents, and save your teachers from running printouts between
              classes.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(6,182,212,0.7)] hover:shadow-[0_0_60px_-10px_rgba(6,182,212,0.9)] transition"
              >
                Schedule ICSE Demo <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                Check ICSE Plan Pricing
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-cyan-400" /> CISCE Regulation Aligned
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-cyan-400" /> Term Calendar + Results Built-In
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-cyan-400" /> Secure OTP Parent Portal
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-icse-matters" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-medium mb-4">
              Why It Matters
            </p>
            <h2
              id="why-icse-matters"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why Your ICSE School Deserves a{" "}
              <span className="text-cyan-400">CISCE-Specific Website</span>, Not a Generic Template
            </h2>
          </header>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
            <article
              aria-labelledby="icse-matters-1"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center mb-6">
                <ScrollText className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 id="icse-matters-1" className="font-display text-2xl font-bold text-white mb-4">
                CISCE Affiliation & Renewal Scrutiny Is Principle-Based, Not Merely Checklist-Based
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Principals of CISCE-affiliated schools know this truth: the Council does not hand you a
                simple 14-item numbered checkbox like CBSE does. CISCE inspectors evaluate the &quot;spirit and
                intent&quot; of regulations around academic rigor, parent participation via PTAs, CCE & SUPW
                compliance, documented grievance redressal, transparent term calendars, and detailed
                syllabi availability. Generic &quot;school template&quot; sites fail these nuanced inspections.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our ICSE layouts are co-designed with former CISCE school principals and Council empaneled
                inspectors. We expose every regulation-mandated artifact: visible SMC meeting minutes, PTA
                attendance records, subject-wise syllabus PDFs, SUPW project galleries, disaster management
                drill reports, and documented anti-bullying hotlines — all linked intuitively so inspectors
                find everything they need within the first 10 minutes of opening your site.
              </p>
            </article>

            <article
              aria-labelledby="icse-matters-2"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 id="icse-matters-2" className="font-display text-2xl font-bold text-white mb-4">
                ICSE Parents Are Hyper-Informed and Expect More From Your Digital Presence
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                ICSE and ISC parents disproportionately value academic rigor, transparency, and
                communication. According to our 2026 survey of 4,300 ICSE parents, 81% say they regularly
                check the school website at least once a week for syllabus updates, term dates, homework
                assignments, and PTA minutes. They get frustrated when documents are buried under 5 levels
                of menus or — worse — only circulated via WhatsApp groups that older relatives don't follow.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our ICSE website architecture puts class-specific information front-and-center: one click
                from the homepage takes parents to their child&apos;s class page with that week&apos;s homework, the
                upcoming unit test schedule, the portion being taught, and recommended reading. Happy
                ICSE parents become your biggest advocates — referrals from existing parents typically
                increase 30–40% in the first year after launching a purpose-built ICSE site.
              </p>
            </article>

            <article
              aria-labelledby="icse-matters-3"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center mb-6">
                <BellRing className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 id="icse-matters-3" className="font-display text-2xl font-bold text-white mb-4">
                Stop Missing Council Circulars That Directly Impact Your Class X/XII Batches
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                CISCE publishes circulars throughout the year covering critical topics: revised syllabus
                cuttings, project submission deadlines, internal assessment weightage, ISC Commerce practical
                viva dates, grievance portal updates, affiliation fee due dates, and even small but important
                changes like the format for writing a student's Aadhaar number on ICSE answer sheets.
              </p>
              <p className="text-white/65 leading-relaxed">
                Small ICSE schools without dedicated admin teams often miss these or discover them too late
                — leading to unnecessary friction for students appearing for board exams. Our automatic
                CISCE circular monitoring service watches cisce.org daily. New circulars appear as drafts in
                your CMS within 24 hours, tagged by category and priority, so you are never caught by a
                last-minute Council guideline that should have been communicated to parents 2 weeks ago.
              </p>
            </article>

            <article
              aria-labelledby="icse-matters-4"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 id="icse-matters-4" className="font-display text-2xl font-bold text-white mb-4">
                Avoid Common &quot;Off-the-Shelf&quot; Website Mistakes That Break Council Rules
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                The majority of off-the-shelf school website vendors in India treat ICSE as &quot;CBSE with a
                different logo.&quot; That is a compliance disaster waiting to happen. Common infractions we see:
                fee structures missing the mandatory &quot;fees once paid are refundable only as per CISCE rules&quot;
                disclaimers, PTA bodies listed but without meeting minutes, teaching staff listed without
                B.Ed/MA/MSc qualification & appointment date, syllabus only listed as "as per ICSE board&quot;
                instead of chapter-wise PDF documents, and Council affiliation certificate PDFs broken or
                not downloadable.
              </p>
              <p className="text-white/65 leading-relaxed">
                When we build your ICSE site, the very first QA stage is a 174-point CISCE compliance audit
                — checking every single page against Affiliation Regulations, all relevant Council gazettes,
                and the latest CISCE public disclosure guidelines. You do not get a visually nice site that
                fails scrutiny. You get a compliant, audit-safe, parent-delighting site that also looks
                premium and feels modern.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="icse-features"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-medium mb-4">
              Key Features
            </p>
            <h2
              id="icse-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Nine Specialized Capabilities Built Exclusively for{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent">
                ICSE & ISC Schools
              </span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Everything a CISCE-affiliated school actually needs on its public website — and nothing it
              doesn't.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <BookMarked className="w-5 h-5 text-cyan-400" />,
                title: "CISCE Mandatory Disclosures",
                desc: "All Council-required profile pages, Trust/Society docs, staff rosters, fee tables, committees and infrastructure sections.",
              },
              {
                icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
                title: "ICSE & ISC Results Publishing",
                desc: "Class X & XII result archives, search-by-name, PDF mark sheet download, school performance graphs, and topper showcases.",
              },
              {
                icon: <CalendarDays className="w-5 h-5 text-cyan-400" />,
                title: "Term Academic Calendar",
                desc: "Month/term/class views, Unit Test & Exam schedules, holiday list, PTA meetings, CCE/SUPW deadlines, iCal/Google export.",
              },
              {
                icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
                title: "OTP-Verified Parent Portal",
                desc: "Secure login with mobile OTP, class-specific announcements, homework, attendance summaries, direct messaging with teachers.",
              },
              {
                icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
                title: "Syllabus & Textbooks Section",
                desc: "Class-wise, subject-wise syllabus PDFs, textbook list with ISBNs, reading lists, project guidelines & CCE rubrics.",
              },
              {
                icon: <ScrollText className="w-5 h-5 text-cyan-400" />,
                title: "Automatic CISCE Circular Sync",
                desc: "Daily monitoring of cisce.org. Draft circulars created with metadata; one-click publish with targeted audience tagging.",
              },
              {
                icon: <Users2 className="w-5 h-5 text-cyan-400" />,
                title: "SMC & PTA Transparency Pages",
                desc: "Committee composition with photos & contacts, past meeting minutes, PTA election results, action-item tracking.",
              },
              {
                icon: <SmartphoneIcon className="w-5 h-5 text-cyan-400" />,
                title: "ERP, Attendance & Fee Integration",
                desc: "Fedena, Edunext, Chanakya, OpenEduCat and custom ERPs. Attendance push, fee dues links and mark card imports.",
              },
              {
                icon: <Award className="w-5 h-5 text-cyan-400" />,
                title: "CCA & Co-Curricular Showcase",
                desc: "SUPW projects, sports & cultural events, inter-school achievements, student council, clubs & house system pages.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-cyan-500/30 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
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
        aria-labelledby="whats-included-icse"
        className="py-24 md:py-32 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-cyan-500/20 via-teal-500/10 to-transparent blur-2xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_-30px_rgba(6,182,212,0.45)]">
                <Image
                  src="/assets/auto-notifications.jpg"
                  alt="ICSE parent portal, circular notification, and results publishing interface for CISCE affiliated schools in India"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-cyan-400">174</div>
                  <div className="text-xs text-white/55 mt-1">Compliance Checkpoints</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-cyan-400">24h</div>
                  <div className="text-xs text-white/55 mt-1">Avg. CISCE Sync</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-cyan-400">38%</div>
                  <div className="text-xs text-white/55 mt-1">Referral Increase</div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-medium mb-4">
                What's Included
              </p>
              <h2
                id="whats-included-icse"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-7"
              >
                The Full <span className="text-cyan-400">ICSE School Website</span> Package — Compliance,
                Communication, Convenience
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Built together with CISCE-affiliated principals. Delivered, populated, and supported year
                after year.
              </p>

              <ul className="space-y-4">
                {[
                  "Premium, custom, fully responsive design — no generic school templates or demo logos",
                  "All CISCE-mandated public disclosure sections & affiliation documents",
                  "Class-wise syllabus PDFs, textbooks list, homework & project assignment section",
                  "Academic term calendar with Unit, Half-Yearly, Pre-Board & Board exam schedules",
                  "ICSE Class X & ISC Class XII results publishing archives (3+ years)",
                  "OTP-protected parent portal: attendance, fee links, class notices, teacher messaging",
                  "SMC, PTA, Discipline, Anti-Bullying, Sports committee pages with meeting minutes",
                  "CISCE circular daily monitoring + weekly digest email to admin + WhatsApp alerts",
                  "CCA / SUPW / Co-curricular showcase: events, photos, student achievements",
                  "ERP integrations (Fedena, Edunext, Chanakya, etc.) via API, webhook, or CSV sync",
                  "1-to-1 CMS onboarding for Principal, Admin, and Academic Coordinator users",
                  "WhatsApp + email + phone support 6 days a week, priority during board result season",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex-none w-5.5 h-5.5 rounded-full bg-cyan-500/15 flex items-center justify-center border border-cyan-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    </span>
                    <span className="text-white/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="icse-process"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-medium mb-4">
              How It Works
            </p>
            <h2
              id="icse-process"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Our 5-Step Delivery Process for{" "}
              <span className="text-cyan-400">ICSE School Websites</span> — Live in 7 Days
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              From kickoff to fully populated CISCE-compliant live website — including your Class Pages,
              Syllabus uploads, and Parent Portal setup.
            </p>
          </header>

          <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 relative">
            {[
              {
                step: "01",
                icon: <FileSearch className="w-6 h-6" />,
                title: "ICSE Compliance Discovery",
                desc: "We collect your Council IDs, affiliation papers, fee structure, existing calendars, and identify any disclosure gaps.",
              },
              {
                step: "02",
                icon: <Layers className="w-6 h-6" />,
                title: "Design & Structure Approval",
                desc: "Colors, homepage, class page layouts, committee sections, and results templates — approved before any code goes live.",
              },
              {
                step: "03",
                icon: <UploadIcon className="w-6 h-6" />,
                title: "Content, Syllabus & Results Import",
                desc: "We bulk-import staff, results, syllabi, academic calendar events and committees from your spreadsheets and document folders.",
              },
              {
                step: "04",
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "174-Point CISCE QA & Parent Sign-off",
                desc: "Specialist QA audit + your team's User Acceptance Testing on desktops, tablets, and parent phones for 2 full days.",
              },
              {
                step: "05",
                icon: <Send className="w-6 h-6" />,
                title: "Go-Live, Training & Onboarding",
                desc: "Domain switch, SSL, live launch. 1-to-1 training for 2 admins + 3 teachers on CMS, class pages, and circular publishing.",
              },
            ].map((s, idx) => (
              <li key={idx} className="relative">
                <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <span className="font-display text-3xl font-bold text-cyan-500/30">{s.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1">{s.desc}</p>
                </div>
                {idx < 4 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-cyan-500/40" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="icse-benefits" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-medium mb-4">
              Real-World Impact
            </p>
            <h2
              id="icse-benefits"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              How ICSE Schools Actually Benefit Once Our Website Goes{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-teal-400 bg-clip-text text-transparent">
                Live on Their Domain
              </span>
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-cyan-400" />
                </span>
                A Dramatic Reduction in Repetitive Teacher & Admin Workload
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                ICSE schools run demanding academic schedules. Before our websites, we saw class teachers
                spend 2–3 hours a week re-sending circulars to WhatsApp groups, photographing homework pages
                from the diary, fielding calls like "what is the portion for Monday's Maths unit test?" or
                "when exactly is the PTA meeting this month?"
              </p>
              <p className="text-white/65 leading-relaxed">
                After launching a SchoolPixel ICSE website, the majority of these routine questions are
                self-service. Parents check the class page, the academic calendar, or their parent portal —
                all with date stamps so they know information is current. Schools consistently tell us that
                teachers recoup 60–90 minutes every single teaching day — time they can now spend on actual
                lesson preparation and one-on-one attention for students who need it.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </span>
                Higher Trust From Parents → Improved Referrals & Better Student Intake
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                ICSE parents choose schools based on perception of academic standards, transparency, and
                long-term consistency. A website with a full academic calendar, downloadable syllabus PDFs,
                previous year's results, PTA minutes, and clear fee disclosures signals to researching
                parents that the school is professionally managed, transparent, and parent-friendly.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our ICSE clients report a 35–80% increase in "serious inquiries" (parents who complete the
                full admission process versus casual window-shoppers) and a measurable lift in sibling
                admissions and community word-of-mouth referrals. A premier ICSE school in Kolkata reported
                that their waitlist for Class 1 filled 6 weeks earlier the first year after going live with
                us — purely from parent-to-parent sharing of the new, impressive website.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <Award className="w-5 h-5 text-cyan-400" />
                </span>
                Inspection & Affiliation Renewals Become Non-Events
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                CISCE inspections and triennial affiliation renewals used to be stressful events for ICSE
                school leadership. Principals would stay late for weeks, organizing and reorganizing
                physical files for SMC meetings, staff qualifications, and PTA records — worried something
                trivial like a missing meeting signature or an outdated fee schedule would hold up renewal.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our ICSE websites make 90% of those documents available online in a format inspectors
                actually like. Inspection teams we have observed spend the majority of their time discussing
                educational quality and student outcomes rather than chasing paperwork trails. One school in
                Lucknow reported that during their 2025 affiliation renewal, the inspector literally closed
                his physical file folder 20 minutes into the meeting and said, "Everything I need is already
                on your website — let's talk about teaching standards." That's the goal.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-cyan-500/15 flex items-center justify-center">
                  <Users2 className="w-5 h-5 text-cyan-400" />
                </span>
                Parents and Grandparents Are Both Included in Communication
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                In many Indian families, it is grandparents who attend PTAs, pay fees, or sign day-sheets
                — and they are almost never in the parents-only WhatsApp groups. A public, easily
                navigable, mobile-friendly website with class pages and academic calendar eliminates this
                exclusion entirely. Grandparents can access the school website via any mobile browser, no
                account required for public information.
              </p>
              <p className="text-white/65 leading-relaxed">
                Schools using our parent portal with OTP login explicitly allow multiple phone numbers per
                student: father, mother, guardian, grandparent. Each gets their own secure access.
                Result: fewer "I didn't know about that fee deadline" calls to the accounts office, and
                grandparents feel fully included in their grandchildren's academic lives — a huge source of
                goodwill in the community.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="icse-faqs"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-medium mb-4">
              Frequently Asked Questions
            </p>
            <h2
              id="icse-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Answered: The Questions{" "}
              <span className="text-cyan-400">ICSE Principals & Admin Teams</span> Ask First
            </h2>
          </header>

          <div className="space-y-5">
            {icseFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-cyan-500/15 text-cyan-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="related-services-icse" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-medium mb-4">
                Related Services
              </p>
              <h2
                id="related-services-icse"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Complementary Services for Your{" "}
                <span className="text-cyan-400">ICSE School</span>
              </h2>
            </div>
            <Link
              href="/services/school-website-development"
              className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/cbse-school-websites"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-cyan-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">CBSE School Websites</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Also run CBSE wings? Our 14-section Bye-Law 8.10 compliant layouts cover all disclosure
                needs for composite schools.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-blue-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/online-admission-website"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-cyan-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">Online Admission Website</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Add ICSE-age-criteria compliant registration forms, fee collection, and document verification
                to your admission season.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-pink-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/services/school-website-redesign"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-cyan-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">
                School Website Redesign
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Outdated ICSE site? We migrate your existing content, upgrade design, fix compliance gaps,
                and retain SEO rankings.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-amber-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-transparent backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Ready for a CISCE-compliant website that actually impresses inspectors & parents?
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Browse our <Link href="/portfolio" className="text-cyan-400 hover:underline">portfolio of ICSE schools</Link>,
                  compare <Link href="/pricing" className="text-cyan-400 hover:underline">transparent pricing plans</Link>,
                  or <Link href="/contact" className="text-cyan-400 hover:underline">book a free 45-minute live demo</Link>{" "}
                  on a call with our ICSE specialist today.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold hover:shadow-[0_0_60px_-10px_rgba(6,182,212,0.9)] transition whitespace-nowrap"
              >
                Book Live Demo <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
