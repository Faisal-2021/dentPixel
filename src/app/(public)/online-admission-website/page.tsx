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
  FileText,
  CreditCard,
  Upload,
  Download,
  Bell,
  Search,
  Users,
  ShieldCheck,
  BarChart3,
  ClipboardList,
  Receipt,
  Mail,
  Smartphone,
  Database,
  Lock,
  Sparkles,
  Layers,
  GitBranch,
  Target,
  TrendingUp,
  Clock,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.services.admission.title,
  description: PAGE_SEO.services.admission.description,
  keywords: PAGE_SEO.services.admission.keywords,
  alternates: {
    canonical: "/online-admission-website",
  },
  openGraph: {
    title: PAGE_SEO.services.admission.title,
    description: PAGE_SEO.services.admission.description,
    url: `${SEO_CONFIG.siteUrl}/online-admission-website`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.services.admission.title,
    description: PAGE_SEO.services.admission.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const admissionFAQs = [
  {
    question: "Can I customize the online admission form fields for my school?",
    answer:
      "Absolutely. Our online admission system lets you add, remove, or reorder form fields with a drag-and-drop builder. Capture everything from basic student details to medical history, sibling information, previous school records, and custom entrance exam scores. You can set fields as required or optional, add conditional logic, and even create multi-step forms for a smoother parent experience.",
  },
  {
    question: "Which payment gateways do you support for admission fee collection?",
    answer:
      "We integrate all major Indian payment gateways including Razorpay, PayU, Instamojo, PhonePe, CCAvenue, and HDFC/SBI/ICICI bank PGs. UPI, debit/credit cards, net banking, and EMI options are all supported. Fees can be collected as application registration fees, entrance exam fees, or seat booking deposits — each with custom GST, tax invoices, and automated payment receipts sent to parents via email and SMS.",
  },
  {
    question: "What documents can parents upload during the admission process?",
    answer:
      "Parents can upload birth certificates, Aadhaar cards, transfer certificates (TC), previous class marksheets, passport-sized photographs, medical fitness certificates, address proof, income certificates (for EWS quota), and any custom documents you require. The system validates file formats (PDF, JPG, PNG), file size limits, and even lets you request missing documents later through automated reminders.",
  },
  {
    question: "Can I export the admission form data to Excel or my school ERP?",
    answer:
      "Yes. Application data can be exported in one click to XLSX, CSV, or PDF formats with all attachments bundled as a ZIP file. We also provide API integrations and webhook support for pushing student records directly into popular ERPs like Fedena, Edunext, Chanakya, SchoolSoft, or your custom management system. Duplicate applications are flagged automatically based on mobile number or email.",
  },
  {
    question: "How do parents receive notifications about their application status?",
    answer:
      "Parents receive automated notifications through WhatsApp, SMS, and email at every stage — application submission, payment confirmation, document verification status, entrance exam schedule, interview call letter, first/second merit list release, and final seat confirmation. You can also broadcast bulk messages to all applicants or filter by status for targeted communication.",
  },
  {
    question: "Can parents track their child's admission application status online?",
    answer:
      "Yes. Every parent gets a unique application ID and a secure login portal where they can check real-time status (Submitted → Under Review → Verified → Shortlisted → Interview Scheduled → Selected → Confirmed). The dashboard also displays pending document requests, upcoming dates, fee payment history, and downloadable offer letters or admission receipts.",
  },
  {
    question: "Is the online admission data secure and GDPR/Indian privacy compliant?",
    answer:
      "We take data security very seriously. All personally identifiable information (PII) is encrypted at rest using AES-256 and in transit via TLS 1.3. We comply with India's DPDP Act, GDPR, and UGC guidelines. Role-based access control (RBAC) means only authorized admin staff can view applications. Regular security audits, automated backups, and firewall protection are included by default.",
  },
  {
    question: "Do you handle the admission season load spike without website crashes?",
    answer:
      "Definitely. Our infrastructure auto-scales during peak admission season, handling thousands of concurrent form submissions without slowdowns. We use edge-cached CDN delivery, database read replicas, and rate limiting to prevent downtime. Schools on our Premium plan get guaranteed 99.99% uptime with priority 24/7 telephone support during March–June admissions.",
  },
];

export default function OnlineAdmissionWebsitePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Online Admission Website" },
        ]}
      />
      <ServiceSchema
        serviceName="Online Admission Website for Schools"
        description="End-to-end online admission system with customizable forms, payment gateway integration, document uploads, application tracking, and automated parent notifications for Indian schools."
        price="24999"
        features={[
          "Custom admission form builder",
          "Payment gateway integration",
          "Document management",
          "Application status tracking",
          "Automated notifications",
          "Data export & ERP integration",
        ]}
      />
      <FAQSchema faqs={admissionFAQs} />

      <section aria-labelledby="admission-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.18),transparent_70%)]" />
        <div className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl -z-10" />

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
            <span className="text-pink-400">Online Admission Website</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-xs font-medium tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Admission Season Ready • Launch in 7 Days
            </span>
            <h1
              id="admission-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              Online Admission Website for{" "}
              <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 bg-clip-text text-transparent">
                Schools India
              </span>{" "}
              | Digital Enrollment System
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Replace stacks of paper forms and chaotic admission counters with a fully digital enrollment
              experience. Our <strong className="text-white/85">online admission website</strong> for Indian
              schools lets parents register, pay fees, upload documents, and track their child&apos;s application
              — all from their smartphone. Administrative staff gets a clean dashboard with merit lists,
              reporting, and one-click integrations into your existing school ERP.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(236,72,153,0.7)] hover:shadow-[0_0_60px_-10px_rgba(236,72,153,0.9)] transition"
              >
                Book Free Demo <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Pricing Plans
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/55">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-pink-400" /> 200+ Schools Trust Us
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-pink-400" /> 3 Lakh+ Applications Processed
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-pink-400" /> All Payment Gateways
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="why-admission-matters"
        className="py-24 md:py-32 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-pink-400 font-medium mb-4">
              Why It Matters
            </p>
            <h2
              id="why-admission-matters"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Why a Modern <span className="text-pink-400">Online Admission System</span> Is No Longer
              Optional for Your School
            </h2>
          </header>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-14">
            <article
              aria-labelledby="why-matters-1"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <h3 id="why-matters-1" className="font-display text-2xl font-bold text-white mb-4">
                Meet Parents Where They Are — On Their Phones
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Indian parents are 2.5× more likely to complete an admission inquiry on a mobile-friendly
                digital form versus visiting the school in person first. According to our 2026 parent survey,
                78% of urban and 56% of semi-urban parents say they will reject a school that does not offer
                an online registration option. Parents juggling work commutes and multiple children simply
                cannot afford half-day visits to collect prospectuses and submit documents.
              </p>
              <p className="text-white/65 leading-relaxed">
                A well-designed <em className="text-white/80">online admission website</em> removes friction
                at the most critical step in your enrollment funnel. Parents can start an application at
                9 PM after work, save their progress, and resume whenever they have time — dramatically
                improving your form completion rates and the number of serious candidates applying.
              </p>
            </article>

            <article
              aria-labelledby="why-matters-2"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-pink-400" />
              </div>
              <h3 id="why-matters-2" className="font-display text-2xl font-bold text-white mb-4">
                Cut Administrative Workload by 70% During Peak Season
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                A single admission season can push your office staff to the breaking point. Manual form
                sorting, document checklist verification, cashier queues for fee receipts, and hundreds of
                phone calls asking &quot;has&apos;s my form been received yet?&quot; consume 8–10 weeks of productive staff
                time every academic year.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our clients report a 70%+ reduction in administrative workload after migrating to our
                digital admission platform. Automatic validations eliminate incomplete forms. Online
                payments remove cashier bottlenecks. Parents self-serve their status checks through a
                dedicated login portal — freeing your reception and accounts teams to focus on genuine
                inquiries, student onboarding, and quality conversations with prospective families.
              </p>
            </article>

            <article
              aria-labelledby="why-matters-3"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-pink-400" />
              </div>
              <h3 id="why-matters-3" className="font-display text-2xl font-bold text-white mb-4">
                Data-Driven Admissions That Actually Improve Conversion
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                With paper forms, you are flying blind. How many prospects visited your school but never
                submitted an application? At which step do parents drop off? Which marketing source brings
                in the most confirmed admissions? Without answers, every admission season is guesswork.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our system gives you real-time funnel analytics: traffic sources, form start vs. completion
                rates, abandonment stages, payment conversion percentages, and geographic heatmaps of
                applicants. School principals using our data dashboards typically improve their inquiry-to-seat
                conversion ratio by 22–40% in the very first admission season — translating directly into
                more filled classrooms and stronger revenue.
              </p>
            </article>

            <article
              aria-labelledby="why-matters-4"
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-500/15 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-pink-400" />
              </div>
              <h3 id="why-matters-4" className="font-display text-2xl font-bold text-white mb-4">
                Eliminate Paper Loss, Duplicate Applications, and Cash Irregularities
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Every admission horror story we have heard involves paper. Forms being misfiled or lost
                entirely during office shifting. A single parent submitting three forms for the same child
                and demanding a refund. Cash receipt books mismatching at the end of the week. Documents
                fading in storage or being destroyed accidentally by water or pests.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our digital enrollment system eliminates these risks completely. Every submission is
                timestamped, logged, deduplicated against mobile number and email, and stored in
                geo-redundant encrypted databases with daily backups. All payments are digital and
                automatically reconciled with auditable invoices — zero cash handling risks, zero manual
                accounting errors, and 100% transparency for your school management and auditors.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="admission-features"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-pink-400 font-medium mb-4">
              Key Features
            </p>
            <h2
              id="admission-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Everything You Need to Run a{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                Smooth Digital Admission
              </span>{" "}
              Season
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Ten purpose-built capabilities engineered specifically for the nuances of Indian school
              admission processes — including reservation quotas, entrance tests, and multi-round merit lists.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText className="w-5 h-5 text-pink-400" />,
                title: "Drag-and-Drop Form Builder",
                desc: "Create unlimited admission forms with conditional logic, section grouping, and multi-step wizards without writing a single line of code.",
              },
              {
                icon: <CreditCard className="w-5 h-5 text-pink-400" />,
                title: "Integrated Fee Collection",
                desc: "Razorpay, PayU, PhonePe, CCAvenue and more. Collect registration, entrance exam, and seat booking fees with automated GST invoices.",
              },
              {
                icon: <Upload className="w-5 h-5 text-pink-400" />,
                title: "Smart Document Uploads",
                desc: "Automatic validation for file type, size, and image clarity. Request resubmissions with one-click reminders sent to parents.",
              },
              {
                icon: <Download className="w-5 h-5 text-pink-400" />,
                title: "One-Click Data Export",
                desc: "Export complete applicant data, merit lists, and fee reports to XLSX, CSV, PDF. Bundle all uploaded documents in organized ZIPs per student.",
              },
              {
                icon: <Bell className="w-5 h-5 text-pink-400" />,
                title: "Multi-Channel Notifications",
                desc: "Automated SMS, WhatsApp, and email alerts for every application milestone. Customizable templates in English, Hindi, and regional languages.",
              },
              {
                icon: <Search className="w-5 h-5 text-pink-400" />,
                title: "Advanced Filters & Search",
                desc: "Filter applicants by class, gender, category, quota, status, city, marks, or any custom field. Save complex filters for later reuse.",
              },
              {
                icon: <ClipboardList className="w-5 h-5 text-pink-400" />,
                title: "Merit List & Quota Engine",
                desc: "Handle general, SC/ST/OBC, EWS, staff ward, and sibling quotas. Weighted scoring for marks, distance, interviews, or entrance test results.",
              },
              {
                icon: <Receipt className="w-5 h-5 text-pink-400" />,
                title: "Invoice & Receipt Generation",
                desc: "Professional fee receipts, offer letters, and admission confirmations with school letterhead. Parents download PDFs anytime from their portal.",
              },
              {
                icon: <Lock className="w-5 h-5 text-pink-400" />,
                title: "Secure Parent Portal",
                desc: "OTP-verified login for application status tracking, fee payment history, document resubmission, and direct messaging with admissions office.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-pink-500/30 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
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
        aria-labelledby="whats-included-admission"
        className="py-24 md:py-32 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 md:gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-pink-400 font-medium mb-4">
                What&apos;s Included
              </p>
              <h2
                id="whats-included-admission"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-7"
              >
                A Complete{" "}
                <span className="text-pink-400">Admission Management Ecosystem</span> — Not Just a Contact
                Form
              </h2>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                We build your entire admission workflow end-to-end, mapping to your existing school process
                rather than forcing you to adapt to generic software. Here is what every SchoolPixel online
                admission website includes:
              </p>

              <ul className="space-y-4">
                {[
                  "Dedicated, branded admission landing page optimized for search and conversion",
                  "Unlimited form fields with validation, conditional logic, and multi-step workflows",
                  "100% mobile-responsive form experience with offline draft autosave",
                  "Up to 5 payment gateway integrations (Razorpay, PayU, PhonePe, CCAvenue, bank PG)",
                  "Document uploads with virus scanning, format validation, and size limits",
                  "Admin dashboard with applicant cards, tagging, and bulk status updates",
                  "OTP-based parent self-service login for application tracking",
                  "Automated WhatsApp + SMS + email notifications with custom templates",
                  "Merit list builder, reservation quota engine, and entrance exam scoring",
                  "One-click Excel, CSV, PDF export plus ERP webhook integration",
                  "DPDP Act compliant data handling with AES-256 encryption and daily backups",
                  "24/7 priority WhatsApp support during your peak admission season",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex-none w-5.5 h-5.5 rounded-full bg-pink-500/15 flex items-center justify-center border border-pink-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                    </span>
                    <span className="text-white/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-pink-500/20 via-rose-500/10 to-transparent blur-2xl -z-10" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_-30px_rgba(236,72,153,0.45)]">
                <Image
                  src="/dashboard-admin.png"
                  alt="Online admission dashboard admin panel with applicant list, form builder, and payment analytics for Indian schools"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-pink-400">22%</div>
                  <div className="text-xs text-white/55 mt-1">Avg. Conversion Lift</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-pink-400">70%</div>
                  <div className="text-xs text-white/55 mt-1">Less Admin Work</div>
                </div>
                <div className="p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                  <div className="font-display text-2xl font-bold text-pink-400">4×</div>
                  <div className="text-xs text-white/55 mt-1">Faster Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="admission-process"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-pink-400 font-medium mb-4">
              How It Works
            </p>
            <h2
              id="admission-process"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Our 5-Step{" "}
              <span className="text-pink-400">Online Admission Website</span> Delivery Process
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              From kickoff call to going live and processing your first 100 applications — all within 7
              business days.
            </p>
          </header>

          <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 relative">
            {[
              {
                step: "01",
                icon: <ClipboardList className="w-6 h-6" />,
                title: "Discovery & Process Mapping",
                desc: "We learn your admission workflow: classes available, quotas, fees, documents needed, and merit list criteria.",
              },
              {
                step: "02",
                icon: <Layers className="w-6 h-6" />,
                title: "Form & Dashboard Design",
                desc: "Our team builds branded multi-step forms, document upload flows, and admin screens tailored exactly to your school.",
              },
              {
                step: "03",
                icon: <CreditCard className="w-6 h-6" />,
                title: "Payment & SMS Integration",
                desc: "We connect your chosen gateway, configure WhatsApp Business API, SMS templates, and test every rupee end-to-end.",
              },
              {
                step: "04",
                icon: <Database className="w-6 h-6" />,
                title: "User Acceptance Testing",
                desc: "Your team runs full test applications — form submissions, failed payments, document uploads, and status transitions.",
              },
              {
                step: "05",
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Go-Live & Season Support",
                desc: "We launch your admission microsite, train your staff, and provide priority 24/7 support throughout the season.",
              },
            ].map((s, idx) => (
              <li key={idx} className="relative">
                <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <span className="font-display text-3xl font-bold text-pink-500/30">{s.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed flex-1">{s.desc}</p>
                </div>
                {idx < 4 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 text-pink-500/40" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="admission-benefits" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-pink-400 font-medium mb-4">
              Real-World Impact
            </p>
            <h2
              id="admission-benefits"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Tangible Benefits Your School Will See{" "}
              <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                Within One Admission Season
              </span>
            </h2>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-pink-500/15 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-pink-400" />
                </span>
                Higher Enrollment, Better Quality Applicants
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Schools running our online admission platform consistently receive 35–120% more completed
                applications compared to paper-only or outdated form systems. The convenience attracts
                working parents from farther neighborhoods, expanding your catchment area. Because
                applications are richer in detail — including past marks, hobbies, and parent background —
                your selection team makes more informed shortlisting decisions.
              </p>
              <p className="text-white/65 leading-relaxed">
                One CBSE school in Jaipur told us: &quot;We had 2,800 completed applications last year on paper.
                This year with SchoolPixel, we received 6,100 — and our cutoff mark for Class 1 jumped by
                12.&quot; That is the power of removing friction.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-pink-500/15 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-pink-400" />
                </span>
                Staff Can Finally Focus on Families, Not Paperwork
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Admissions season should be about building relationships with the families joining your
                community — not manually entering 2,000 names into Excel or hunting for missing TC copies.
                Our platform automates the entire record-keeping pipeline.
              </p>
              <p className="text-white/65 leading-relaxed">
                Receptionists who used to spend 40+ hours a week answering &quot;what&apos;s my status?&quot; calls now
                redirect parents to the self-serve portal — reclaiming that time for campus tours, fee
                counseling, and genuinely helping parents navigate their first interaction with your school.
                Morale goes up. Quality of conversation goes up. And everyone in the office leaves on time.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-pink-500/15 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-pink-400" />
                </span>
                Transparent Reporting for Management & Auditors
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Principals, trustees, and CA auditors get complete, unalterable visibility into the entire
                admission lifecycle. Every form submission timestamped, every rupee traced to a payment ID,
                every merit list change logged with admin username and reason.
              </p>
              <p className="text-white/65 leading-relaxed">
                No more disagreements about &quot;when was the form submitted.&quot; No more last-minute scramble to
                prepare quota-wise enrollment reports for board inspections or government audits. Everything
                is searchable, sortable, and exportable in seconds. You stay audit-ready at all times —
                especially for CBSE and State Education Department scrutiny rounds.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-pink-500/15 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-pink-400" />
                </span>
                A Brand Upgrade That Competitors Notice
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Let us be honest: parents judge a school&apos;s quality by its website and admission experience.
                A smooth, professional, WhatsApp-integrated digital admission process signals to families
                that your institution is modern, efficient, and respects their time. It is the single most
                powerful first impression you can make.
              </p>
              <p className="text-white/65 leading-relaxed">
                Principals repeatedly tell us that after their new admission system launched, they started
                hearing unsolicited comments like &quot;your process was so easy compared to the other three
                schools we applied to.&quot; That is word-of-mouth advertising money cannot buy — and it starts
                compounding every single year.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="admission-faqs"
        className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-pink-400 font-medium mb-4">
              Frequently Asked Questions
            </p>
            <h2
              id="admission-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Answers to Questions{" "}
              <span className="text-pink-400">Principals & Administrators</span> Ask Most Often
            </h2>
          </header>

          <div className="space-y-5">
            {admissionFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-pink-500/15 text-pink-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="related-services-admission" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-pink-400 font-medium mb-4">
                Related Services
              </p>
              <h2
                id="related-services-admission"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Explore Our Other{" "}
                <span className="text-pink-400">School Website Services</span>
              </h2>
            </div>
            <Link
              href="/services/school-website-development"
              className="inline-flex items-center gap-2 text-pink-400 font-medium hover:text-pink-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/services/school-website-development"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-pink-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">
                School Website Development
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                End-to-end custom websites with admin panels, CMS, online admission, CBSE compliance, and
                ERP integrations.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-blue-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/cbse-school-websites"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-pink-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">CBSE School Websites</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                100% CBSE Bye-Law 8.10 compliant websites with all 14 mandatory disclosure sections,
                automatically updated.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-sky-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/icse-school-websites"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-pink-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">ICSE School Websites</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                CISCE-compliant websites for ICSE/ISC schools with mandatory disclosures, academic
                calendars, and result publishing.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-cyan-400 font-medium group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-pink-500/10 via-rose-500/5 to-transparent backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Not sure what your school needs?
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Browse our <Link href="/pricing" className="text-pink-400 hover:underline">pricing plans</Link>,
                  read our <Link href="/clinical-standards" className="text-pink-400 hover:underline">clinical standards guide</Link>,
                  or request a{" "}
                  <Link href="/contact" className="text-pink-400 hover:underline">
                    free personalized demo
                  </Link>{" "}
                  tailored to your school&apos;s board and size.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold hover:shadow-[0_0_60px_-10px_rgba(236,72,153,0.9)] transition whitespace-nowrap"
              >
                Get Free Demo <ArrowRight className="w-4.5 h-4.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
