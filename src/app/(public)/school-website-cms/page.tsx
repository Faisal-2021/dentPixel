import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PAGE_SEO, SEO_CONFIG, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, ArrowLeft, Edit3, Users, Lock, Bell, Save, Eye, FolderOpen, FileText, Search, BarChart3, Upload, Settings, Clock, BookOpen, Calendar, MessageSquare, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.services.cms.title,
  description: PAGE_SEO.services.cms.description,
  keywords: PAGE_SEO.services.cms.keywords,
  alternates: { canonical: "/school-website-cms" },
  openGraph: {
    title: PAGE_SEO.services.cms.title,
    description: PAGE_SEO.services.cms.description,
    url: `${SEO_CONFIG.siteUrl}/school-website-cms`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    images: [{ url: `${SEO_CONFIG.siteUrl}/og-image.png` }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.services.cms.title,
    description: PAGE_SEO.services.cms.description,
    images: [`${SEO_CONFIG.siteUrl}/og-image.png`],
  },
};

const cmsFaqs = [
  {
    question: "How steep is the learning curve for your school CMS?",
    answer: "Our CMS is intentionally designed for non-technical users with a learning curve measured in minutes, not days. Administrative staff can publish their first notice within 10 minutes of training. The dashboard uses familiar word-processor-style editing, drag-and-drop media uploads, and large clearly labelled buttons. Most schools report complete team comfort after our 2-hour training session.",
  },
  {
    question: "Can multiple users access and edit the CMS at the same time?",
    answer: "Yes. Our CMS supports unlimited concurrent users with role-based permissions. The Principal, IT coordinator, teachers, front-desk staff, and marketing team can all work simultaneously without conflict. We even include content-locking so two staff members cannot accidentally overwrite the same page section.",
  },
  {
    question: "Does the CMS support offline editing or draft saving?",
    answer: "Absolutely. Every page, notice, and post supports unlimited drafts with autosave every 10 seconds. You can start editing a notice before morning assembly, save as draft, preview on desktop, and publish after Principal review at noon. Version history preserves the last 25 revisions of any page with one-click rollback.",
  },
  {
    question: "How do roles and permissions work in the CMS?",
    answer: "Our CMS ships with five pre-configured roles: Super Admin, Admin, Editor, Author, and Viewer. Super Admins manage users and settings. Admins publish content without approval. Editors review submissions from Authors. Authors draft content requiring approval before publishing. Viewers access only the dashboard analytics. Custom roles can be created to match your school's exact approval workflows.",
  },
  {
    question: "Will we get notifications when content needs updating?",
    answer: "Yes. The CMS includes intelligent notification features. Content expiry alerts send email and dashboard reminders before dated content like admission open dates, fee payment deadlines, or temporary holidays automatically unpublish. You can configure periodic reminders for annual updates like board result pages, fee structure pages, or staff directory refreshes.",
  },
  {
    question: "How is content backed up and can we restore previous versions?",
    answer: "Your entire CMS database and media library are automatically backed up every 6 hours with 30-day retention. Every page revision is stored individually — restoring accidentally deleted content or reverting an incorrect edit takes literally two clicks. On-demand backups can be triggered at any time before major content refreshes, and we support downloading full site exports for your internal records.",
  },
  {
    question: "Can teachers update their own class pages and assignments?",
    answer: "Yes. Create department or class-specific editors with limited CMS access. A Class 10 Mathematics teacher can edit their own assignments page, upload worksheets, and post homework deadlines — but cannot modify the homepage or fee structure. Access boundaries are fully configurable per teacher, class, department, or activity club.",
  },
  {
    question: "Is the CMS mobile accessible for on-the-go updates?",
    answer: "Yes. Our CMS is fully responsive and works flawlessly on smartphones and tablets. Principals approve admission notice drafts from car rides. Teachers upload sports day photos during the event itself. Front-desk staff post immediate holiday closures using their phones. The mobile CMS maintains all desktop features with touch-optimized controls.",
  },
];

export default function SchoolWebsiteCmsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "School Website CMS" },
        ]}
      />
      <ServiceSchema
        serviceName="School Website CMS"
        description={PAGE_SEO.services.cms.description}
        price="0"
        features={["Drag & Drop Editor", "Role-Based Access", "Revision History", "Mobile Responsive", "Auto-Save Drafts", "Content Expiry Alerts", "Media Library", "Multilingual Support"]}
      />
      <FAQSchema faqs={cmsFaqs} />

      <section aria-labelledby="cms-hero-heading" className="relative pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/50 hover:text-white transition flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-[#10B981] font-medium">School Website CMS</span>
          </nav>

          <header className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 mb-6">
              <Edit3 className="w-4 h-4 text-[#10B981]" />
              <span className="text-[#10B981] text-sm font-medium">No-Code Content Management System</span>
            </div>
            <h1 id="cms-hero-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05]">
              School Website CMS India |{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                Easy Content Management for Schools
              </span>
            </h1>
            <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-3xl">
              Stop waiting weeks for developers to post simple notices. Our purpose-built school CMS puts publishing power directly in your team&apos;s hands — no coding, no confusion, no frustration. Update pages, upload photos, publish events, and manage your entire digital presence with the simplicity of writing an email.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold hover:from-[#059669] hover:to-[#047857] transition shadow-[0_0_35px_rgba(16,185,129,0.35)]"
              >
                Book a CMS Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition"
              >
                Explore Pricing Plans
              </Link>
            </div>
          </header>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "10 mins", label: "Average Training Time to First Post", icon: <Clock className="w-5 h-5 text-[#10B981]" /> },
              { stat: "5+", label: "Role-Based Access Levels Included", icon: <Lock className="w-5 h-5 text-[#10B981]" /> },
              { stat: "6h", label: "Automatic Content Backup Frequency", icon: <Save className="w-5 h-5 text-[#10B981]" /> },
              { stat: "25", label: "Stored Revisions Per Page, Rollback Ready", icon: <BarChart3 className="w-5 h-5 text-[#10B981]" /> },
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

      <section aria-labelledby="cms-why-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 id="cms-why-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Why a Dedicated School CMS{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                Beats Generic Tools
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              WordPress, Wix, and generic page builders lack the specific workflow, permissions, and board-compliance structure that Indian educational institutions require. Here is why our purpose-built CMS changes everything for your administrative team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article aria-labelledby="empower-heading" className="space-y-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 id="empower-heading" className="font-display text-2xl font-bold text-white mb-3">
                  Empower Non-Technical Staff
                </h3>
                <p className="text-white/65 leading-relaxed">
                  The biggest complaint we hear from schools is &ldquo;we need to call our developer every time we want to change a comma.&rdquo; Our CMS eliminates this dependency entirely. Front-desk receptionists publish last-minute bus route updates within three minutes of typing them. Sports coordinators upload tournament photos directly from their phones mid-event. Accountants update the annual fee structure document without scheduling developer tickets. Every staff member gains professional publishing capability with zero coding knowledge required.
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 flex items-center justify-center mb-5">
                  <Bell className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Never Miss Timely Updates
                </h3>
                <p className="text-white/65 leading-relaxed">
                  Schools operate on tight, time-sensitive schedules. Notice boards outside classrooms work fine for on-campus students — but parents working in offices discover information only after logging into the website in the evening. Our CMS lets your administrative team publish parent circulars, exam schedule updates, parent-teacher meeting reminders, and holiday announcements the instant they are approved. Smart content expiry prevents outdated admission open notices from confusing parents six months after closure.
                </p>
              </div>
            </article>

            <article aria-labelledby="workflow-heading" className="space-y-6">
              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 id="workflow-heading" className="font-display text-2xl font-bold text-white mb-3">
                  Institutional Workflow &amp; Approvals
                </h3>
                <p className="text-white/65 leading-relaxed">
                  Generic CMS platforms treat every editor the same. Not schools. Our CMS mirrors your institutional hierarchy perfectly. The junior teacher drafting a field trip report submits their draft; the Head of Department gets an approval notification with a preview; only after HOD sign-off does the Principal receive a final review alert before publishing. Financial information like fee structures requires additional Comptroller approval by default. No accidental publishes. No unauthorized content ever reaches parents without the proper sign-off chain.
                </p>
              </div>

              <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 flex items-center justify-center mb-5">
                  <BookOpen className="w-6 h-6 text-[#10B981]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  Board-Compliant Publishing Structure
                </h3>
                <p className="text-white/65 leading-relaxed">
                  CBSE Bye-Law 8.10 and CISCE disclosure rules demand very specific page structures, content visibility rules, and mandatory document displays. Our CMS ships with 14 pre-built, board-approved section templates. Disclosures, fee statements, staff qualifications, affiliation documents, and safety certificates automatically publish in the exact format board inspectors expect. Updating a single staff member&apos;s qualification record automatically refreshes both their profile page and the mandatory staff list simultaneously — no duplication of effort.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="cms-features-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 id="cms-features-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Complete CMS Feature{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                Overview
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Everything your publishing team needs to manage an award-winning school website, from daily notices to annual audits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Visual Drag-and-Drop Editor",
                desc: "Word-processor style interface with formatted text, bullet lists, tables, links, embeds, and color styling. Click, type, publish.",
                icon: <Edit3 className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Role-Based Permission System",
                desc: "Five preconfigured roles: Super Admin, Admin, Editor, Author, and Viewer. Create any custom role with granular permissions.",
                icon: <Lock className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Revision History & Rollback",
                desc: "25 previous versions of every page stored. Click to compare revisions. One-click restore to any historical version.",
                icon: <Save className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Live Preview Before Publishing",
                desc: "See exactly how parents will experience your draft page before it goes live. Preview across mobile, tablet, and desktop views.",
                icon: <Eye className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Media Library Management",
                desc: "Organize photos, PDFs, documents, and videos into named folders. Search by date, keyword, or file type. Reuse media anywhere.",
                icon: <FolderOpen className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Smart Notice Board Module",
                desc: "Dedicated notice publishing with expiry dates, priority flags, parent email notifications, and automatic carousel display on homepage.",
                icon: <FileText className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Global Site Search",
                desc: "Parents and administrators instantly find pages, notices, staff names, events, and documents using full-text site search.",
                icon: <Search className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "User Activity Dashboard",
                desc: "Track who published what, when edits occurred, which pages received traffic, and how many notices went live per month.",
                icon: <BarChart3 className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Bulk Media Uploader",
                desc: "Upload entire photo galleries, admission prospectus PDFs, or 100 student result documents at once with drag-drop bulk support.",
                icon: <Upload className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Content Scheduling",
                desc: "Write admission opening announcements today and schedule automatic publish for the exact date your admission season begins.",
                icon: <Calendar className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Multi-Language Editor",
                desc: "Maintain Hindi, English, and regional language versions side by side. Switch between languages with a single selector while editing.",
                icon: <MessageSquare className="w-6 h-6 text-[#10B981]" />,
              },
              {
                title: "Custom Settings Console",
                desc: "Update school contact details, logo, favicon, social media links, homepage banner text, and analytics ID without developer help.",
                icon: <Settings className="w-6 h-6 text-[#10B981]" />,
              },
            ].map((feature, i) => (
              <article key={i} className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] transition group">
                <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 flex items-center justify-center mb-5 group-hover:bg-[#10B981]/15 transition">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="cms-included-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 id="cms-included-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                What Is{" "}
                <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                  Included With Our CMS
                </span>
              </h2>
              <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-xl">
                Our CMS is not an afterthought plugin — it is custom-built for the realities of running a modern Indian school, with deep integrations into every website module.
              </p>

              <div className="mt-10 space-y-5">
                <h3 className="font-display text-xl font-bold text-white">Tailored Onboarding &amp; Training</h3>
                <p className="text-white/65 leading-relaxed">
                  Every CMS rollout includes personal onboarding for your key administrative users. We walk through the dashboard, demonstrate core publishing workflows, create sample content alongside your team, and answer questions live. Follow-up sessions address role-specific use cases: we teach front-desk staff the quick-notice workflow, show teachers assignment page editing, and walk Principals through the approval dashboard.
                </p>

                <h3 className="font-display text-xl font-bold text-white mt-8">Continuous Product Evolution</h3>
                <p className="text-white/65 leading-relaxed">
                  Unlike generic CMS platforms that churn through updates unrelated to education, our development roadmap is driven exclusively by feedback from Indian school administrators. Every quarterly release adds features principals actually requested. Recent updates based directly on client feedback include the content expiry reminder system, class-specific editor roles, Hindi language grammar check integration, and parent notification email previews.
                </p>

                <h3 className="font-display text-xl font-bold text-white mt-8">Security &amp; Data Protection Built In</h3>
                <p className="text-white/65 leading-relaxed">
                  School CMS instances run on isolated infrastructure with multi-factor authentication enforced for all admin-level accounts. Brute-force login protection, rate limiting, session timeouts, and automatic security patch updates happen without any action from your team. Audit logs record every login, edit, publish action, and user change for 180 days — exactly the kind of traceability auditors appreciate during affiliation inspections.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="font-display text-lg font-bold text-white mb-5 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981]" /> Full CMS Capability List
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Word-processor style visual editor with text formatting",
                    "Media library with folders, search, and reusable assets",
                    "Drag-drop image upload with automatic compression",
                    "Five standard user roles plus fully custom permission creation",
                    "Content approval chains and multi-step review flows",
                    "Draft autosave every 10 seconds with unlimited saved drafts",
                    "Version history with 25 stored revisions and one-click rollback",
                    "Mobile, tablet, and desktop preview before publishing",
                    "Content expiry dates with automatic unpublish and email alerts",
                    "Scheduled publishing for future dates and times",
                    "Dedicated notice board, event, and gallery module editors",
                    "CBSE disclosure section templates with board-required fields",
                    "Bulk page editor for updating information sitewide",
                    "Full-text search across pages, notices, documents, and media",
                    "Multi-language editor for Hindi, English, and regional languages",
                    "Usage analytics dashboard with user activity reports",
                    "User invitation system with email onboarding links",
                    "Export any page or document as PDF for offline records",
                    "Custom navigation menu editor without technical knowledge",
                    "Redirect manager for fixing broken links or old URLs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#10B981] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/services/school-website-development" className="block p-7 rounded-3xl border border-[#10B981]/30 bg-[#10B981]/5 backdrop-blur-sm hover:bg-[#10B981]/10 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#10B981] font-semibold mb-2">Bundled With All Websites</div>
                    <div className="font-display text-2xl font-bold text-white">Our CMS comes included with every development and redesign project</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#10B981]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="cms-process-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16 text-center mx-auto">
            <h2 id="cms-process-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              CMS Rollout{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                Process: From Setup to Publishing
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              A structured 4-step onboarding journey ensures every staff member is comfortable publishing before we consider the project complete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Configuration & Setup",
                desc: "We provision your dedicated CMS instance, configure user roles matching your school hierarchy, and import existing content structure.",
              },
              {
                step: "02",
                title: "Custom Workflow Design",
                desc: "Approval chains are mapped: who drafts, who reviews, who approves, and who finally publishes each content type across departments.",
              },
              {
                step: "03",
                title: "Interactive Group Training",
                desc: "Two live training sessions cover publishing workflows for all roles. Hands-on exercises ensure participants publish their first content successfully.",
              },
              {
                step: "04",
                title: "Go-Live & Ongoing Support",
                desc: "Full CMS handover with recorded tutorials, custom PDF manual, and 90 days of priority support via WhatsApp and email.",
              },
            ].map((item, i) => (
              <article key={i} className="relative p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="font-display text-5xl font-bold text-[#10B981]/20 mb-4">{item.step}</div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-white/10" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="cms-boards-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-16">
            <h2 id="cms-boards-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              CMS Advantages by{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                School Board Type
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Board-specific content templates, mandatory disclosure workflows, and publishing conveniences tailored for every type of Indian institution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-semibold uppercase tracking-wider mb-5">
                CBSE Schools
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">CBSE Affiliated Institutions</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> 14 pre-built Bye-Law 8.10 mandatory disclosure templates</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> Locked disclosure sections preventing accidental edits</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> Automatic staff qualification list updates from directory changes</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> CBSE circular update workflow with Principal approval gate</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> RTE admission and EWS category sections with publishing rules</li>
              </ul>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-semibold uppercase tracking-wider mb-5">
                ICSE / CISCE
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">Council for Indian School Certificate</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> CISCE mandated disclosure formatting templates</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> Board result publishing with downloadable PDF attachments</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> Council inspection document storage with access logs</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> Co-scholastic achievements and House competition publishing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> ISC and ICSE merit list update multi-approval workflow</li>
              </ul>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-semibold uppercase tracking-wider mb-5">
                State & International
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">State Board &amp; International Schools</h3>
              <ul className="space-y-3 text-sm text-white/65 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> Regional language publishing with native typing support</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> IB/MYP/DP/IGCSE curriculum detail structured templates</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> State board government mandate disclosure publishing</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> University placement tracking and alumni publishing system</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" /> Scholarship and financial aid announcement publishing flows</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="cms-related-heading" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12">
            <h2 id="cms-related-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Complementary{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                Services &amp; Resources
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/school-website-maintenance" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Service</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#10B981] transition">Website Maintenance</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">Ongoing monthly support including CMS update rollouts, security patching, backup verification, and content publishing assistance.</p>
              <div className="flex items-center gap-2 text-[#10B981] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/services/school-website-development" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Service</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#10B981] transition">Website Development</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">Every development project ships with our CMS included, pre-configured roles, and tailored publishing workflows for your institution.</p>
              <div className="flex items-center gap-2 text-[#10B981] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/school-website-redesign" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Service</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#10B981] transition">Website Redesign</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">Migrating from WordPress or a static site? Our redesign service includes full content import plus CMS training for your entire team.</p>
              <div className="flex items-center gap-2 text-[#10B981] text-sm font-medium">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>

            <Link href="/contact" className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/20 transition group">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-3">Demo</div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#10B981] transition">Book Live CMS Walkthrough</h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">See our CMS in action with a personalized 30-minute demo. We walk through publishing workflows, roles, and answer every question.</p>
              <div className="flex items-center gap-2 text-[#10B981] text-sm font-medium">
                Book demo <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="cms-faq-heading" className="py-24 md:py-32 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 id="cms-faq-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              CMS Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="mt-5 text-lg text-white/65 leading-relaxed">
              Common questions from principals, IT coordinators, and administrative staff evaluating school content management systems.
            </p>
          </div>

          <div className="space-y-4">
            {cmsFaqs.map((faq, i) => (
              <article key={i} className="p-7 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <h3 className="font-display text-lg font-bold text-white mb-3 flex gap-3">
                  <span className="text-[#10B981] font-semibold flex-shrink-0">Q{i + 1}.</span>
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
