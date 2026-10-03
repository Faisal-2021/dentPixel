import type { Metadata } from "next";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PAGE_SEO, SERVICE_PAGES } from "@/lib/seo-config";
import {
  CheckCircle,
  Zap,
  ShieldCheck,
  BarChart3,
  BadgeCheck,
  Target,
  Users,
  Clock,
  Code2,
  Gauge,
  Shield,
  MonitorSmartphone,
  Settings,
  FileText,
  GraduationCap,
  Globe,
  Search,
  Database,
  LineChart,
  Languages,
  ClipboardList,
  PenTool,
  Code,
  Bug,
  Rocket,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { JsonLd } from "@/components/site/Schema";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: PAGE_SEO.services.development.title,
  description: PAGE_SEO.services.development.description,
  alternates: { canonical: "/services/school-website-development" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to develop a school website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At SchoolPixel, we deliver a fully functional school website within 7 days after your approval of the initial demo."
      }
    },
    {
      "@type": "Question",
      "name": "Are your school websites CBSE compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our school websites are built to meet CBSE Bye-Law 8.10 requirements, including all 14 mandatory disclosure sections."
      }
    },
    {
      "@type": "Question",
      "name": "What technology stack do you use for school website development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use a modern, production-ready stack featuring Next.js 15 with React and TypeScript for the frontend, Tailwind CSS for responsive styling, and a robust CMS backend powered by Supabase or PostgreSQL. Our architecture ensures lightning-fast performance, SEO optimization, and effortless scalability as your school grows. Every site is built with mobile-first responsiveness and Core Web Vitals optimization baked in from day one."
      }
    },
    {
      "@type": "Question",
      "name": "Is website hosting included with your development services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every SchoolPixel development package includes premium, managed hosting on secure Indian servers with 99.9% uptime guarantee. We handle SSL certificates, CDN configuration, daily backups, and automatic security patches so your IT team never has to worry about server maintenance. For schools requiring dedicated infrastructure, we also offer custom VPS and cloud hosting solutions on AWS or GCP with tailored SLAs."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build custom integrations with our existing school software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialize in building custom API integrations with virtually any existing school software, including fee management systems, library databases, transport tracking tools, and biometric attendance systems. Our developers work with REST APIs, GraphQL, webhooks, and custom middleware to ensure your website functions as a unified digital hub rather than a disconnected standalone platform. Every integration is tested end-to-end before launch."
      }
    },
    {
      "@type": "Question",
      "name": "Do you integrate ERP, SMS, and email notification systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer seamless integration with leading school ERPs like Fedena, Edumarshal, SchoolPad, and Vidyalaya. SMS gateway integrations support popular providers such as MSG91, Textlocal, and Fast2SMS for instant fee reminders, attendance alerts, and circular notifications. Email systems like Gmail Workspace, Zoho Mail, and SendGrid are configured for automated newsletters, admission updates, and parent communication workflows with detailed delivery analytics."
      }
    },
    {
      "@type": "Question",
      "name": "Will we own the full source code of our school website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, upon full payment, your school receives 100% ownership of the complete source code, database schema, design assets, and deployment configuration. We provide a downloadable code repository via GitHub or GitLab, along with comprehensive technical documentation for future developers. Unlike SaaS platforms that lock you in, our custom development means you are never dependent on any single vendor for modifications, migrations, or hosting changes."
      }
    },
    {
      "@type": "Question",
      "name": "What post-launch training and support do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every project includes two complimentary live training sessions conducted via Google Meet or Zoom for your administrative staff, teachers, and content managers. We cover CMS usage, notice publishing, photo gallery updates, admission form management, and basic analytics. Additionally, we provide pre-recorded video tutorials in English and Hindi, a searchable knowledge base, and 30 days of free priority email and WhatsApp support following go-live. Ongoing maintenance packages are available for schools needing continuous support."
      }
    }
  ]
};

export default function SchoolDevelopmentPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Expert <span className="text-[#3B82F6]">School Website Development</span> in India
            </h1>
            <p className="mt-6 text-xl text-white/65 leading-relaxed">
              We specialize in building secure, fast, and board-compliant websites for educational institutions. From CBSE schools to large universities, we provide the technical foundation for your digital growth.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Custom Architecture",
                desc: "Websites built from scratch to match your school's unique brand and pedagogical approach.",
                icon: <Zap className="w-6 h-6 text-blue-400" />,
              },
              {
                title: "ERP Integration",
                desc: "Seamlessly connect your website with student management systems and payment gateways.",
                icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
              },
              {
                title: "CBSE Ready",
                desc: "Pre-built sections for mandatory disclosures as per the latest CBSE Bye-Laws.",
                icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
              },
              {
                title: "High Performance",
                desc: "Optimized for Core Web Vitals to ensure your site ranks high on Google Search.",
                icon: <CheckCircle className="w-6 h-6 text-amber-400" />,
              },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Professional <span className="text-[#3B82F6]">Development</span> Matters for Schools
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              In an era where 92% of Indian parents research schools online before visiting the campus, a professionally developed website is no longer optional—it is your most powerful tool for building credibility, driving admissions, and streamlining administration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Credibility & First Impressions",
                desc: "A polished, fast-loading website signals institutional excellence the moment a prospective parent lands on your homepage. Schools that invest in professional development report 40–60% higher inquiry conversion rates compared to template-based sites. Custom typography, secure certificates, and board-compliant layouts tell parents you care enough to invest in every parent-facing touchpoint, from the first click to the final admission confirmation.",
                icon: <BadgeCheck className="w-6 h-6" />,
              },
              {
                num: "02",
                title: "Admission-Driven Architecture",
                desc: "Generic business websites are not structured for the unique admission funnel of Indian schools. Our custom development prioritizes admission calls-to-action, inquiry form visibility, and fee structure placement based on data from hundreds of parent journey studies. Every page—from infrastructure galleries to faculty profiles—is engineered with strategically positioned conversion points that reduce bounce rate and accelerate the path from visitor to confirmed enrolment.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                num: "03",
                title: "Parent Trust Through Security",
                desc: "Parents entrust you with their children; they also entrust you with sensitive personal data like Aadhaar numbers, bank details for fee payments, and medical records. Professional development includes WAF protection, SQL injection prevention, CSRF mitigation, DDoS shielding, and end-to-end TLS encryption. A hacked or defaced website can irreparably damage a school's reputation built over decades. Our enterprise-grade security stack ensures parent data remains confidential and your brand stays protected.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                num: "04",
                title: "Long-Term Cost Efficiency",
                desc: "While cheap template sites appear affordable upfront, they cost far more over time due to frequent breakages, security vulnerabilities, plugin conflicts, and expensive redesigns within 12–18 months. Custom-built school websites from SchoolPixel are engineered to scale for 5+ years with minimal incremental cost. Clean, maintainable code means new features—such as alumni portals, e-learning integrations, or language support—can be added in days, not weeks, dramatically lowering total cost of ownership.",
                icon: <Clock className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <div key={i} className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden group hover:border-blue-500/40 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full" />
                <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white font-bold text-xl shadow-lg shadow-blue-500/20 mb-6">
                  {item.num}
                </div>
                <div className="relative text-blue-400 mb-4">{item.icon}</div>
                <h3 className="relative font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="relative text-white/65 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Full <span className="text-[#3B82F6]">Feature List</span> for Modern School Websites
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Every development project includes a comprehensive suite of enterprise-grade features designed specifically for the operational and marketing needs of Indian educational institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-7 h-7 text-blue-400" />,
                title: "Custom Development",
                desc: "Hand-coded, pixel-perfect implementations tailored to your school's brand identity, admission workflow, and administrative processes. No generic templates, no bloated plugins.",
              },
              {
                icon: <Gauge className="w-7 h-7 text-emerald-400" />,
                title: "Performance Optimization",
                desc: "Sub-2-second page load times across all devices, achieved through image optimization, CDN delivery, code splitting, lazy loading, and server-side rendering on every page.",
              },
              {
                icon: <Shield className="w-7 h-7 text-purple-400" />,
                title: "Enterprise Security",
                desc: "Multi-layered protection including WAF, malware scanning, firewall rules, brute-force prevention, and automated patching to safeguard sensitive student and parent data.",
              },
              {
                icon: <MonitorSmartphone className="w-7 h-7 text-amber-400" />,
                title: "Responsive Design",
                desc: "Mobile-first responsive layouts that deliver flawless experiences across every screen size—from 5-inch smartphones used by 85% of parents to 4K projector displays in school auditoriums.",
              },
              {
                icon: <Settings className="w-7 h-7 text-rose-400" />,
                title: "Admin Panel",
                desc: "Intuitive, role-based admin dashboard enabling non-technical staff to publish notices, manage admissions, upload photos, update timetables, and edit content without writing a single line of code.",
              },
              {
                icon: <FileText className="w-7 h-7 text-cyan-400" />,
                title: "Integrated CMS",
                desc: "Powerful content management system with drag-and-drop page building, revision history, scheduled publishing, multi-user roles, and bulk import/export for large content migrations.",
              },
              {
                icon: <GraduationCap className="w-7 h-7 text-indigo-400" />,
                title: "Online Admission System",
                desc: "End-to-end online admission module with customizable application forms, document upload, registration fee payment, merit list generation, and automated SMS/email acknowledgment for every applicant.",
              },
              {
                icon: <BookOpen className="w-7 h-7 text-teal-400" />,
                title: "CBSE Compliance Ready",
                desc: "Pre-structured, audit-ready sections for all 14 CBSE Bye-Law 8.10 mandatory disclosures including trust documents, MDM details, staff qualification records, and annual financial statements.",
              },
              {
                icon: <Languages className="w-7 h-7 text-orange-400" />,
                title: "Multilingual Support",
                desc: "Native support for Hindi, English, and 12+ regional Indian languages with switchable language menus, RTL support for Urdu, and language-specific SEO metadata for maximum discoverability.",
              },
              {
                icon: <Search className="w-7 h-7 text-lime-400" />,
                title: "Advanced SEO Setup",
                desc: "Complete on-page and technical SEO including schema markup, Open Graph tags, XML sitemaps, canonical URLs, breadcrumb navigation, and structured data optimized for Google and Bing search ranking.",
              },
              {
                icon: <Database className="w-7 h-7 text-fuchsia-400" />,
                title: "Automated Backup System",
                desc: "Triple-redundant automated daily backups stored across geographically separate data centres with on-demand snapshots, one-click restore, and downloadable archive exports for maximum data resilience.",
              },
              {
                icon: <LineChart className="w-7 h-7 text-sky-400" />,
                title: "Analytics & Insights",
                desc: "Integrated Google Analytics 4, Search Console, and custom dashboards showing admission funnel performance, page-wise engagement, traffic sources, and parent behaviour insights to guide marketing decisions.",
              },
            ].map((feature, i) => (
              <div key={i} className="p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/30 transition-all">
                <div className="mb-5 p-3 inline-flex rounded-xl bg-gradient-to-br from-blue-500/15 to-blue-500/5 border border-blue-500/10">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Our 5-Step <span className="text-[#3B82F6]">Development Process</span>
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              A proven, transparent, and time-tested methodology refined across 50+ school development projects that delivers predictable, high-quality outcomes within committed timelines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "Step 1",
                num: "1",
                title: "Discovery & Requirements",
                icon: <ClipboardList className="w-7 h-7" />,
                desc: "We begin with a structured discovery call with your principal, IT coordinator, and admission team to document every functional requirement, branding guideline, board compliance need, and integration requirement. We analyse competitor websites, map your admission funnel, and define measurable success metrics before writing a single line of code.",
              },
              {
                step: "Step 2",
                num: "2",
                title: "Architecture & Approval",
                icon: <PenTool className="w-7 h-7" />,
                desc: "Our solution architects design the complete technical architecture including site map, database schema, API integration points, and page wireframes. You receive a visual prototype of the homepage, key internal pages, and admin panel flows for formal written approval. This stage also includes finalizing the technology stack, hosting choice, and deployment strategy.",
              },
              {
                step: "Step 3",
                num: "3",
                title: "Development & Content Integration",
                icon: <Code className="w-7 h-7" />,
                desc: "Our senior engineers begin agile development sprints, building reusable components, integrating your CMS, and connecting third-party APIs such as payment gateways and SMS services. Parallelly, our content team assists with migrating existing content, optimizing images, and structuring board-mandated disclosure sections so your site launches with production-ready content.",
              },
              {
                step: "Step 4",
                num: "4",
                title: "QA, Testing & Revisions",
                icon: <Bug className="w-7 h-7" />,
                desc: "Every site undergoes a comprehensive 120-point quality checklist including cross-browser compatibility on 15+ devices, security penetration testing, Core Web Vitals auditing, accessibility compliance, and integration end-to-end testing. We share a password-protected staging environment for your team's review and incorporate unlimited rounds of revisions before go-live.",
              },
              {
                step: "Step 5",
                num: "5",
                title: "Launch & Training",
                icon: <Rocket className="w-7 h-7" />,
                desc: "On the scheduled launch date, our DevOps team performs zero-downtime deployment to your production environment, configures custom domains, SSL, DNS, CDN, and email routing. Following a successful launch, we conduct two live training sessions covering admin operations, content publishing, and analytics. You receive 30 days of priority post-launch support with guaranteed response times under 4 hours.",
              },
            ].map((item, i) => (
              <div key={i} className="relative p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">{item.step}</span>
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#3B82F6] text-white font-bold font-display shadow-lg shadow-blue-500/20">
                    {item.num}
                  </div>
                </div>
                <div className="text-blue-400 mb-5">{item.icon}</div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Benefits for <span className="text-[#3B82F6]">Indian School Boards</span>
            </h2>
            <p className="text-white/70 leading-relaxed text-lg">
              Our development team possesses deep domain expertise across every major Indian school board, ensuring your website meets specific regulatory requirements while maximizing parent engagement and admission conversions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CBSE Schools",
                icon: <BookOpen className="w-8 h-8 text-blue-400" />,
                bullets: [
                  "100% CBSE Bye-Law 8.10 compliance across all 14 mandatory disclosure sections",
                  "Pre-built templates for MDM, SMC, PTA, RTI, and Grievance Redressal pages",
                  "Structured staff qualification and experience tabular disclosures",
                  "Automatic updates whenever CBSE issues new circular mandates",
                  "Audit-ready document galleries with date-stamped PDFs",
                  "Direct link to <Link href=\"/clinical-standards\" className=\"text-blue-400 underline hover:text-blue-300\">Clinical Standards Checklist</Link>",
                  "Dedicated <Link href=\"/cbse-school-websites\" className=\"text-blue-400 underline hover:text-blue-300\">CBSE School Websites</Link> solution page",
                ],
              },
              {
                title: "ICSE Schools",
                icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
                bullets: [
                  "CISCE-affiliated mandatory disclosures for ICSE and ISC schools",
                  "Academic council and governing body structured listings",
                  "Integrated ICSE syllabus alignment and textbook information portals",
                  "Examination results publishing with secure student login access",
                  "ISC subject-wise faculty specialization showcase pages",
                  "Inter-school competition and CCA achievement galleries",
                  "Parent-teacher meeting scheduling and reporting portals",
                ],
              },
              {
                title: "International & State Board Schools",
                icon: <Globe className="w-8 h-8 text-emerald-400" />,
                bullets: [
                  "IB, Cambridge IGCSE, and international curriculum showcase pages",
                  "State Board compliance for Maharashtra, Karnataka, UP, Rajasthan, MP boards",
                  "Regional language content portals with Hindi, Marathi, Kannada, Bengali, Gujarati, Telugu",
                  "State government education department linkage pages",
                  "Scholarship and government scheme application integration",
                  "Alumni network portals with batch-wise grouping and donation features",
                  "International student exchange and foreign university tie-up showcases",
                ],
              },
            ].map((board, i) => (
              <div key={i} className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-7 pb-7 border-b border-white/10">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/15 to-transparent border border-blue-500/10">
                    {board.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{board.title}</h3>
                </div>
                <ul className="space-y-4">
                  {board.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                      <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: bullet }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Explore Our <span className="text-[#3B82F6]">Related Services</span>
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Complement your custom website development with specialized services designed to maximize the return on your digital investment and simplify long-term operations.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_PAGES.filter(s => s.slug !== "school-website-development").slice(0, 8).map((service) => (
              <Link
                key={service.slug}
                href={service.path}
                className="group p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-500/40 transition-all flex flex-col"
              >
                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5 flex-1">
                  {service.slug === "school-website-design" && "UX-led design solutions that create admission-driven parent journeys."}
                  {service.slug === "school-website-redesign" && "Modernize outdated websites with contemporary features and compliance."}
                  {service.slug === "school-website-cms" && "Simple, powerful backend for non-technical staff to manage content easily."}
                  {service.slug === "school-website-maintenance" && "Monthly security updates, backups, and priority technical support."}
                  {service.slug === "online-admission-website" && "End-to-end digital admission with payment gateway and lead management."}
                  {service.slug === "cbse-school-websites" && "Board-ready CBSE-compliant websites built for Bye-Law 8.10 audits."}
                  {service.slug === "icse-school-websites" && "CISCE-tailored solutions for ICSE and ISC affiliated institutions."}
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <ContactCTA />
    </>
  );
}
