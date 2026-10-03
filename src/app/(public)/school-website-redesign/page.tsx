import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PAGE_SEO, SEO_CONFIG, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, ArrowLeft, RefreshCw, Rocket, ShieldCheck, Search, Smartphone, Globe, Image as ImageIcon, Users, FileText, Calendar, Award, Sparkles, LineChart, Database, Layers, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.services.redesign.title,
  description: PAGE_SEO.services.redesign.description,
  keywords: PAGE_SEO.services.redesign.keywords,
  alternates: { canonical: "/school-website-redesign" },
  openGraph: {
    title: PAGE_SEO.services.redesign.title,
    description: PAGE_SEO.services.redesign.description,
    url: `${SEO_CONFIG.siteUrl}/school-website-redesign`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    images: [{ url: `${SEO_CONFIG.siteUrl}/og-image.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.services.redesign.title,
    description: PAGE_SEO.services.redesign.description,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
};

const redesignFaqs = [
  {
    question: "How long does a school website redesign take?",
    answer: "Our typical school website redesign timeline ranges from 14 to 21 business days, depending on scope and content volume. We deliver a working demo within 7 days, then iterate through revisions. Complex integrations like ERP or custom admission portals may extend the timeline by a week.",
  },
  {
    question: "How much does it cost to redesign a school website in India?",
    answer: "School website redesign costs in India start from ₹24,999 for a standard redesign with content migration and CBSE compliance. Premium plans with advanced features like custom portals, multilingual support, and ERP integration range from ₹49,999 to ₹99,999. We offer transparent pricing with no hidden charges and include 30 days of post-launch support.",
  },
  {
    question: "Will you migrate my existing content to the new website?",
    answer: "Absolutely. Every redesign project includes full content migration at no extra cost. We systematically transfer pages, notices, photo galleries, event archives, staff profiles, and downloadable resources. Our team also cleans up outdated content, optimizes images, and restructures navigation for better discoverability.",
  },
  {
    question: "Do you preserve SEO rankings during redesign?",
    answer: "Yes. SEO preservation is a core part of our redesign methodology. We implement 301 redirects for all existing URLs, retain meta data, preserve heading structures, map internal links, and submit updated sitemaps to Google Search Console. We run pre and post-launch SEO audits to ensure rankings remain stable or improve.",
  },
  {
    question: "What happens to old student data and records on our website?",
    answer: "Old student data is never lost during a redesign. We create encrypted backups before starting any work. Student records, admission data, fee receipts, and historical documents are securely migrated or archived based on your preference. We also ensure compliance with data protection regulations during every step.",
  },
  {
    question: "When is the right time to redesign our school website?",
    answer: "Consider redesigning if your website is over 3 years old, has poor mobile experience, takes more than 4 seconds to load, lacks CBSE/CISCE compliance sections, has a high bounce rate, or receives fewer than 5 admission inquiries per month. Schools typically redesign every 3-4 years to keep up with technology and parent expectations.",
  },
  {
    question: "Can we keep our existing domain and hosting?",
    answer: "Yes. You retain full ownership of your domain name and can choose to keep existing hosting or upgrade. We provide free assistance with DNS configuration, SSL certificate installation, and hosting migration if needed. Our recommendations focus on performance, security, and cost-effectiveness for Indian schools.",
  },
  {
    question: "Do you offer training for our staff after the redesign?",
    answer: "Yes. Every redesign includes comprehensive CMS training sessions for your administrative staff. We provide 2 live 1-hour training calls, recorded video tutorials, and a custom PDF manual for your specific website. Our team is also available for 30 days post-launch to answer questions and assist with content updates.",
  },
];

export default function SchoolWebsiteRedesignPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "School Website Redesign" },
        ]}
      />
      <ServiceSchema
        serviceName="School Website Redesign Services"
        description={PAGE_SEO.services.redesign.description}
        price="24999"
        features={["Content Migration", "CBSE Compliance", "SEO Preservation", "Mobile Responsive", "CMS Training", "30-Day Support"]}
      />
      <FAQSchema faqs={redesignFaqs} />

      <section aria-labelledby="hero-heading" className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.18),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-white transition flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#F59E0B] font-medium">School Website Redesign</span>
          </nav>

          <header className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-6">
              <RefreshCw className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-[#F59E0B] text-sm font-medium">Professional Redesign Services</span>
            </div>
            <h1 id="hero-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              School Website Redesign Services India |{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                Modernize Your Digital Presence
              </span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-3xl">
              Give your outdated school website the transformation it deserves. Our redesign services breathe new life into tired digital platforms — upgrading performance, adding board compliance, integrating modern admissions tools, and delivering a stunning mobile-first experience that parents love.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white font-semibold hover:from-[#D97706] hover:to-[#B45309] transition shadow-[0_0_35px_rgba(245,158,11,0.35)]"
              >
                Get Free Redesign Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition"
              >
                View Redesign Plans
              </Link>
            </div>
          </header>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "50+", label: "School Websites Redesigned", icon: <RefreshCw className="w-5 h-5 text-[#F59E0B]" /> },
              { stat: "3.2x", label: "Average Admission Lift Post-Redesign", icon: <LineChart className="w-5 h-5 text-[#F59E0B]" /> },
              { stat: "14 Days", label: "Standard Redesign Timeline", icon: <Clock className="w-5 h-5 text-[#F59E0B]" /> },
              { stat: "100%", label: "Content Migration Guarantee", icon: <Database className="w-5 h-5 text-[#F59E0B]" /> },
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

      <section aria-labelledby="why-redesign-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 id="why-redesign-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Why Website Redesign{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                Matters for Schools
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              A stagnant website is a silent liability. Parents today research 3-5 schools online before even scheduling a campus visit. Here is why investing in a modern redesign directly impacts your institution&apos;s growth trajectory.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article aria-labelledby="parent-expectations" className="space-y-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/15 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h3 id="parent-expectations" className="font-display text-2xl font-bold text-white mb-3">
                  Rising Parent Expectations
                </h3>
                <p className="text-white/65 leading-relaxed">
                  Modern parents judge institutional credibility within 8 seconds of landing on your homepage. A dated design, broken links, or desktop-only layout signals an institution stuck in the past. A contemporary redesign immediately elevates perceived quality, encouraging deeper exploration and more admission form submissions. We build parent journeys that mirror what families are actually looking for: transparent fee structures, academic results, campus life visuals, and easy access to contact information.
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/15 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Board Compliance &amp; Regulatory Needs
                </h3>
                <p className="text-white/65 leading-relaxed">
                  CBSE Bye-Law 8.10, CISCE disclosure requirements, and state board mandates evolve continuously. Websites built three years ago rarely include all 14 mandatory CBSE sections or the latest display formats. Our redesign process audits your current compliance status, adds missing sections with board-approved structure, and implements a framework that makes future circular updates effortless. Avoid last-minute scrambles, show-cause notices, or affiliation renewal delays.
                </p>
              </div>
            </article>

            <article aria-labelledby="performance-benefits" className="space-y-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/15 flex items-center justify-center mb-5">
                  <Search className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h3 id="performance-benefits" className="font-display text-2xl font-bold text-white mb-3">
                  Search Visibility &amp; Organic Discovery
                </h3>
                <p className="text-white/65 leading-relaxed">
                  Older school websites accumulate outdated code, unoptimized images, broken plugins, and URL structures that Google penalizes. Our redesign rebuilds your site on a clean, SEO-optimized Next.js foundation with proper schema markup, image compression, lazy loading, and semantic HTML. Schools typically see a 40-70% increase in organic traffic within 60 days of redesign launch, translating directly to more discovery by parents searching for schools in your city or board category.
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/15 flex items-center justify-center mb-5">
                  <Sparkles className="w-6 h-6 text-[#F59E0B]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Operational Efficiency &amp; Admin Savings
                </h3>
                <p className="text-white/65 leading-relaxed">
                  Legacy school websites often force administrators to call developers for every tiny change or rely on clunky backends. A redesign with our purpose-built CMS puts publishing power back in your team&apos;s hands. Post notices, update calendars, modify fee structures, add staff profiles, and upload event photos in minutes — without writing a single line of code. Our clients report saving 6-10 administrative hours per week after redesign, time redirected toward parent engagement and academic initiatives.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 id="features-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Key Features of Our{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                Redesign Service
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              A comprehensive overhaul that touches every aspect of your digital presence — aesthetics, performance, compliance, and functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Full Content Migration",
                desc: "Systematic transfer of all existing pages, notices, documents, galleries, and records to the new structure with zero data loss.",
                icon: <Database className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Mobile-First Redesign",
                desc: "Built from the ground up for smartphone users who represent 85%+ of Indian parent traffic, with flawless tablet and desktop experience.",
                icon: <Smartphone className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "CBSE & CISCE Compliance",
                desc: "All 14 mandatory CBSE disclosure sections plus CISCE-specific requirements implemented with board-approved formatting.",
                icon: <ShieldCheck className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Performance Optimization",
                desc: "Core Web Vitals optimization targeting sub-2-second load times, image compression, CDN setup, and caching for blazing-fast access.",
                icon: <Rocket className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "SEO Preservation & Boost",
                desc: "301 redirect maps, retained metadata, schema implementation, sitemap regeneration, and pre/post SEO audits to protect or improve rankings.",
                icon: <Search className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Modern CMS Admin Panel",
                desc: "Our proprietary school CMS with drag-and-drop editing, role-based access, revision history, and one-click publishing workflows.",
                icon: <Layers className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Admission Conversion Design",
                desc: "Strategically placed inquiry forms, prominent CTAs, trust-building testimonials, and optimized admission page funnels.",
                icon: <Users className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Photo & Media Gallery",
                desc: "Modern responsive galleries with lazy loading, event albums, campus tours, and automatic thumbnail generation for fast browsing.",
                icon: <ImageIcon className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Multilingual Ready",
                desc: "Hindi, English, and regional language support built into the architecture — activate additional languages whenever you need them.",
                icon: <Globe className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Online Admission Portal",
                desc: "Integrated inquiry and application forms with document upload, payment gateway, email/SMS alerts, and admin lead management dashboard.",
                icon: <FileText className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Events & Calendar System",
                desc: "Dynamic academic calendar, sports schedules, exam timetables, PTA meetings, and cultural events with RSVP and reminder features.",
                icon: <Calendar className="w-6 h-6 text-[#F59E0B]" />,
              },
              {
                title: "Staff Training & Handover",
                desc: "Two live CMS training sessions, recorded video tutorials, custom PDF manual, and 30 days of priority WhatsApp and email support.",
                icon: <Award className="w-6 h-6 text-[#F59E0B]" />,
              },
            ].map((feature, i) => (
              <article key={i} className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] transition group">
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center mb-5 group-hover:bg-[#F59E0B]/15 transition">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="included-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 id="included-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                What Is{" "}
                <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                  Included in Every Redesign
                </span>
              </h2>
              <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl">
                Our redesign engagement is a turnkey transformation. From strategy and content audit to launch and training, every project follows a structured checklist covering every critical detail.
              </p>
              <div className="mt-10 space-y-5">
                <h3 className="font-display text-xl font-bold text-white">Comprehensive Pre-Design Audit</h3>
                <p className="text-white/65 leading-relaxed">
                  Before drawing a single pixel, we run your existing site through a 50-point audit covering speed, SEO health, compliance gaps, content inventory, mobile responsiveness, security, accessibility, and conversion bottlenecks. This forms the baseline for measuring redesign success and prioritizes fixes for pre-existing issues.
                </p>
                <h3 className="font-display text-xl font-bold text-white mt-8">Custom Visual Direction &amp; Brand Refresh</h3>
                <p className="text-white/65 leading-relaxed">
                  We create two distinct visual design directions based on your school&apos;s identity, values, and target parent demographic. Choose between modern-minimal, vibrant-energetic, or traditional-prestige aesthetics, then refine through unlimited revisions until the homepage mockup reflects your institution&apos;s character perfectly.
                </p>
                <h3 className="font-display text-xl font-bold text-white mt-8">End-to-End Quality Assurance</h3>
                <p className="text-white/65 leading-relaxed">
                  Before launch, we conduct cross-browser testing on Chrome, Safari, Firefox, and Edge across 15+ device sizes. We verify every form submission, contact integration, and external link works correctly. Accessibility checks ensure screen reader compatibility, color contrast ratios meet WCAG standards, and keyboard navigation functions flawlessly.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F59E0B]" /> Redesign Deliverables Checklist
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Free 50-point website audit with improvement prioritization",
                    "Two custom homepage design concepts with unlimited revisions",
                    "Up to 40 inner pages designed with consistent visual language",
                    "Complete migration of all existing pages, posts, and media files",
                    "CBSE Bye-Law 8.10 compliance with all 14 disclosure sections",
                    "Next.js / React architecture with 90+ Lighthouse scores",
                    "SSL certificate, CDN, and optimized hosting configuration",
                    "Full SEO: 301 redirects, metadata, schema, sitemap, robots.txt",
                    "Custom CMS admin with drag-and-drop content editor",
                    "Online admission form with document upload and email alerts",
                    "Staff directory, academic calendar, and notice board modules",
                    "Photo gallery, video embed support, and media library",
                    "WhatsApp, email, and inquiry phone integration throughout",
                    "Parent testimonials, achievements, and accreditation sections",
                    "Two live CMS training sessions plus video tutorial library",
                    "30 days of complimentary priority support post-launch",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#F59E0B] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/pricing" className="block p-7 rounded-3xl border border-[#F59E0B]/30 bg-[#F59E0B]/5 backdrop-blur-sm hover:bg-[#F59E0B]/10 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#F59E0B] font-semibold mb-2">Transparent Pricing</div>
                    <div className="font-display text-2xl font-bold text-white">Redesign plans start at ₹24,999</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#F59E0B]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 id="process-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Our Redesign{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                Process: 5 Clear Steps
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              A transparent, collaborative journey from old to new with regular checkpoints and zero surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "We analyze your current website, interview stakeholders, identify goals, and document requirements through structured questionnaires.",
              },
              {
                step: "02",
                title: "Design & Approval",
                desc: "Two homepage concepts, iterative revisions, internal page templates, and sign-off on the complete visual direction before development.",
              },
              {
                step: "03",
                title: "Build & Migrate",
                desc: "Our team builds the site on modern Next.js architecture, migrates all content, configures CMS, and integrates all requested modules.",
              },
              {
                step: "04",
                title: "Review & Refine",
                desc: "Your team reviews the staging site, flags any adjustments, we run full QA, and perform comprehensive pre-launch SEO checks.",
              },
              {
                step: "05",
                title: "Launch & Train",
                desc: "Zero-downtime deployment, SSL and domain configuration, staff CMS training, and 30-day priority support transition.",
              },
            ].map((item, i) => (
              <article key={i} className="relative p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="font-display text-5xl font-bold text-[#F59E0B]/20 mb-4">{item.step}</div>
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

      <section aria-labelledby="boards-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 id="boards-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Redesign Benefits for{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                Every School Board
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              We tailor every redesign around your specific board&apos;s regulatory requirements and parent expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-5">
                CBSE Affiliated
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Central Board of Secondary Education</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Bye-Law 8.10 compliance with all 14 mandatory sections</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Standardized disclosure format approved by CBSE circles</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> CBSE affiliation renewal documentation integration</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Automatic updates framework for board circulars</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Mandatory public display of RTE compliance sections</li>
              </ul>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-5">
                ICSE / ISC
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Council for the Indian School Certificate Examinations</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> CISCE mandatory disclosure sections and formats</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> ICSE and ISC board results integration pages</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Council inspection documentation download sections</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Academic and co-scholastic achievements galleries</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Sister institution and alumni network showcases</li>
              </ul>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-5">
                International
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">IB, IGCSE &amp; International Boards</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Global aesthetic standards and international parent UX</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Multi-language support with RTL and transliteration</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> MYP, DP, and IGCSE curriculum detail sections</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> International university placement and IB results pages</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" /> Global accreditation, authorization, and membership badges</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 id="related-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Related Services to{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                Explore Alongside Redesign
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/school-website-development" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Service</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#F59E0B] transition">School Website Development</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">End-to-end custom development for schools building from scratch or seeking advanced integrations.</p>
              <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/services/school-website-design" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Service</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#F59E0B] transition">School Website Design</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">UX-focused design services tailored for parent engagement and admission conversion optimization.</p>
              <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/clinical-standards" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Compliance</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#F59E0B] transition">Clinical Standards &amp; Accreditation</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">DCI registration, NABH readiness, Class-B autoclave sterilization protocols, and digital consent forms for clinics.</p>
              <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/pricing" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Pricing</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#F59E0B] transition">Pricing &amp; Packages</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">Transparent, no-hidden-fees pricing for redesign, development, CMS, and ongoing maintenance services.</p>
              <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-medium">
                View plans <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 id="faq-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Everything school principals, trustees, and administrators ask before embarking on a website redesign project.
            </p>
          </div>

          <div className="space-y-4">
            {redesignFaqs.map((faq, i) => (
              <article key={i} className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="font-display text-lg font-bold text-white mb-3 flex gap-3">
                  <span className="text-[#F59E0B] font-semibold flex-shrink-0">Q{i + 1}.</span>
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
