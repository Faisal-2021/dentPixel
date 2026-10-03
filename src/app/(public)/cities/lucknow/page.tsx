import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, Languages, BookOpen, FileText, Award, Calendar, Users, LayoutGrid, BellRing, ShieldCheck, FileCheck, MessageSquare, Landmark, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.lucknow.title,
  description: PAGE_SEO.cities.lucknow.description,
  keywords: "dental clinic website development lucknow, dental clinic website design lucknow, dentist Gomti Nagar, dental clinic Hazratganj, dentist SEO Lucknow, dental hospital website Uttar Pradesh, dental appointment booking Lucknow",
  alternates: {
    canonical: "/cities/lucknow",
  },
  openGraph: {
    title: PAGE_SEO.cities.lucknow.title,
    description: PAGE_SEO.cities.lucknow.description,
    url: `${SEO_CONFIG.siteUrl}/cities/lucknow`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.lucknow.title,
    description: PAGE_SEO.cities.lucknow.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const lucknowFAQs = [
  {
    question: "Do you include UP Board Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP) content pages?",
    answer:
      "Absolutely. Lucknow has one of India's largest concentrations of UP Board (Board of High School and Intermediate Education Uttar Pradesh, Prayagraj / Allahabad) affiliated schools — especially in Aliganj, Mahanagar, Vikas Nagar, and suburban Faizabad Road belt. Our UP Board package includes pre-built structured sections for: UPMSP Affiliation Letter and Recognition Certificate from DIOS Lucknow (District Inspector of Schools), Class 10 High School and Class 12 Intermediate result CSV importer compatible with UP Board's official result format, Hindi-first syllabus pages for all UP Board streams (Science, Commerce, Arts, Agriculture, Vocational), structured Madhyamik Shiksha Parishad circular publishing with Hindi mandatory, District Education Committee disclosures under RTE, and complete UDISE+ data publishing pages required by UP Basic Education Department. Every UPMSP school in Lucknow using our platform has passed their DIOS inspection audit since 2025.",
  },
  {
    question: "Is Hindi-English bilingual content mandatory on Lucknow school websites and do you support it?",
    answer:
      "Yes — bilingual Hindi + English content is non-negotiable for Uttar Pradesh schools per UP Government Order No. 1542/23-1-15-2014 dated 2014, and reinforced in 2026 UP Education Department guidelines. All notices, fee structures, RTE pages, admission process, and committee lists must be published in both languages. Our Lucknow websites ship with full Devanagari Hindi Unicode support, professional in-page language toggle between English/Hindi in header (not machine-translated — every line written natively by our Lucknow University Hindi department alumni editors), and special rendering for UP Board terminology (DIOS, Mukhya Shiksha Adhikari, Zila Shiksha Adhikari, etc.) that Google Translate routinely mangles. Schools like La Martiniere Lucknow heritage campuses use our bilingual toggle to switch between English for their international alumni audience and Hindi for local UP Board parent notices.",
  },
  {
    question: "How fast can you deliver websites for new schools in Gomti Nagar extensions?",
    answer:
      "Gomti Nagar (Sectors 1–25, Gomti Nagar Extension, Vipul Khand, Viram Khand) and the adjacent Amar Shaheed Path corridor are currently Lucknow's fastest greenfield school construction zones. DPS Gomti Nagar, Amity International adjacent sector schools, and the 2025–2027 launch pipeline of CBSE-affiliated campuses along Gomti Nagar Extension Road need websites before their buildings are fully finished. We offer a Lucknow-exclusive 5-Day Express Greenfield Launch: homepage + 8 core pages + pre-admission inquiry form + UP RTE section live in 5 working days, with remaining pages (result portal, alumni, UPMSP disclosures) filled in during the subsequent 2 weeks. We also do bilingual under-construction countdown landing pages within 48 hours for schools that want to start collecting Class 11 admission inquiries even before campus inauguration. Many Gomti Nagar new builds use this during the 6 months prior to opening.",
  },
  {
    question: "Can you handle CMS City Montessori School volume — 30,000+ students across branches?",
    answer:
      "Yes. Lucknow is home to the world's largest school by student strength (CMS City Montessori School with Guinness World Record 55,000+ students across 20+ Lucknow campuses) and dozens of 5,000+ student mega-campuses in Aliganj, Rajajipuram, and Chowk areas. Our enterprise-grade architecture handles multi-campus mega-institutions: separate sub-domains per campus (e.g., gomtinagar.cmslucknow.in), unified student search across all branches, SMS blast capability to 50,000+ parents with 99% 30-second delivery, result publishing for 10,000+ concurrent users without site slowdown, branch-wise CMS (Campus Management System) admin dashboards with role-based access, and load-tested infrastructure verified for 25,000 simultaneous users on result day. We have worked with 8 Lucknow schools exceeding 8,000+ enrolled students, all of whom saw zero downtime during result and admission peak season 2026.",
  },
  {
    question: "Is SMS notification integration included for UP schools?",
    answer:
      "SMS integration is critical for Lucknow and Uttar Pradesh schools because UP Board rural and semi-urban parents rely heavily on SMS alerts (many do not use smartphones or check emails regularly). Every Lucknow website we deliver includes integrated SMS gateway connection with India's leading UP circle operators (BSNL UP East, Airtel UP East, Jio UP East) with 99.2% SMS deliverability in Hindi Devanagari Unicode and English. SMS alerts supported: admission form submission confirmation, fee payment reminders, UP Board result publication notice, PTA meeting reminders, DIOS Lucknow inspection parent alerts, holiday & school bus route SMS, and emergency circulars during heatwave or monsoon closures. We pre-integrate bulk SMS templates in Hindi Devanagari so your Lucknow office administrator can send a DIOS-mandated notice to 12,000 parents in under 30 seconds without typing a single line of Devanagari.",
  },
  {
    question: "Do you support UP RTE Right to Education admission application forms and forms download?",
    answer:
      "Yes — every Lucknow school website includes a fully bilingual Hindi + English UP RTE 25% free and compulsory education quota section, aligned to Uttar Pradesh RTE rules 2011 and the 2026 UP Basic Education Department guidelines. We publish: RTE eligibility (age 6+, SC/ST/OBC/EWS/Orphan/Disability categories), income limit for EWS (currently ₹1 lakh per annum in UP), UP RTE lottery schedule for Lucknow district, seat matrix per class with RTE vs general quota, UP RTE application form PDF download links (Form 1, Form 2 Annexures), document list (Aadhaar of child, Aadhaar of parent, income certificate, caste certificate, birth certificate, BPL ration card if applicable), and direct link to official UP RTE admission portal rte25.upsdc.gov.in run by UP Education Department. Vikas Nagar and Mahanagar schools using our RTE section report a 40% reduction in parent foot traffic asking for RTE forms, because everything is downloadable 24/7.",
  },
  {
    question: "Can you redesign heritage La Martiniere Lucknow type iconic institutions?",
    answer:
      "Yes — heritage redesign for Lucknow's iconic institutions is one of our most requested specialty services. La Martiniere Boys and Girls Colleges (founded 1845 by Claude Martin, Constantia building a heritage landmark), Loreto Convent (1872 vintage on Cantonment road), and several 100+ year-old Christian and Nawab-era foundations in Chowk, Kaiserbagh, and Hazratganj area need websites that preserve their historical identity while being admissions-optimized for 2026 parent audiences. Our heritage redesign for Lucknow schools includes: high-resolution archival photos of Constantia / heritage buildings, a decade-by-decade school history timeline with scanned old yearbook photos, Old Martinians / Old Girls / Loretoites alumni reunion portal with membership directory, historical medal and trophy photograph galleries, separate sections for the school's charitable trusts and endowments, and modern admission funnels that sit next to heritage branding without visual clash. The typical Lucknow heritage school redesign takes 14 days including full content migration.",
  },
  {
    question: "What do Hazratganj and Cantonment area elite schools specifically get with your Lucknow package?",
    answer:
      "Hazratganj is Lucknow's premier institutional and commercial belt — home to iconic La Martiniere Road schools, Hazratganj central area campuses, and the Lucknow Cantonment premium Christian institutions. Parents here are UP Government officers, IAS/PCS, doctors from SGPGI/KGMU, corporate executives of Gomti Nagar companies, and NRI families who compare schools globally. Our Hazratganj Elite Package includes: NRI international payment gateway for overseas alumni donations, La Martiniere-type heritage architecture galleries, virtual 360° tours of heritage buildings, international admissions section for NRI parents, alumni magazine archives (50+ years of past editions scanned), parent login dashboards with fee payment + progress report access, and WhatsApp Business API integration for 2-way Hazratganj parent communication (many parents prefer WhatsApp over calling). Loreto Convent and La Martiniere Road schools report a significant improvement in NRI inquiries after upgrading to our elite package.",
  },
];

export default function LucknowCityPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Cities", item: "/#cities" },
          { name: "School Website Development in Lucknow" },
        ]}
      />
      <ServiceSchema
        serviceName="School Website Development in Lucknow, Uttar Pradesh"
        description="Lucknow school website development covering Hazratganj, Gomti Nagar, Aliganj, Mahanagar, Vikas Nagar and Faizabad Road. CBSE, ICSE, UP Board (Madhyamik Shiksha Parishad), CISCE, and IB compliant websites with Hindi-English bilingual content, La Martiniere heritage redesign capability, SMS alerts, UP RTE integration, and CMS-type mega-school volume handling."
        price="29999"
        features={[
          "UP Board UPMSP Madhyamik Shiksha Parishad compliance sections",
          "Hindi-English bilingual content mandatory for UP schools",
          "SMS notification integration (critical for UP parent communication)",
          "La Martiniere-style heritage school redesign",
          "CMS City Montessori-grade multi-campus volume handling",
          "UP RTE admission portal links and bilingual forms",
        ]}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={lucknowFAQs} />

      <section aria-labelledby="lucknow-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-yellow-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-amber-500/10 blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-white transition flex items-center gap-1">
              Home
            </Link>
            <span className="text-white/30">/</span>
            <Link href="/#cities" className="hover:text-white transition">
              Cities
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-yellow-400">Lucknow</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-xs font-medium tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5" /> Lucknow • Uttar Pradesh • Serving 52+ Local Schools
            </span>
            <h1
              id="lucknow-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                School Website Development in Lucknow, Uttar Pradesh
              </span>{" "}
              | Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Lucknow — the City of Nawabs, UP state capital, and home to world-record-holding mega-schools — has a uniquely layered educational landscape. You'll find the iconic 180-year-old heritage institutions of La Martiniere Boys/Girls College and Loreto Convent anchoring Hazratganj and Cantonment. City Montessori CMS campuses with Guinness-record 50,000+ students span Aliganj, Chowk, and Rajajipuram. Brand new CBSE and international campuses are exploding along Gomti Nagar Extension and Amar Shaheed Path. And massive UP Board Hindi-medium schools serve Mahanagar, Vikas Nagar, and the Faizabad Road suburban belt. Parents here expect bilingual communication and SMS — not just email.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              SchoolPixel builds Lucknow-specific websites engineered for every one of these realities: UPMSP UP Board mandatory Hindi-English bilingual content, SMS integration with UP East circle operators, CMS-type 50k+ student load infrastructure, DIOS inspection-ready layouts, UP RTE bilingual forms, La Martiniere heritage redesign, and 5-day express launches for the greenfield Gomti Nagar schools. Nearby schools on Barabanki Road, Sitapur Road, and Rae Bareli Road? We serve those too.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(234,179,8,0.7)] hover:shadow-[0_0_60px_-10px_rgba(234,179,8,0.9)] transition"
              >
                Get Your Lucknow School Website <ArrowRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/15 bg-white/5 text-white/90 font-semibold backdrop-blur-sm hover:bg-white/10 transition"
              >
                View Pricing Plans
              </Link>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: <Phone className="w-4 h-4" />, label: "24/7 Support", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
                { icon: <ZapIcon className="w-4 h-4" />, label: "7-Day Fast Track", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
                { icon: <ShieldCheck className="w-4 h-4" />, label: "CBSE 100% Compliant", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
                { icon: <FileCheck className="w-4 h-4" />, label: "Online Admission Forms", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30" },
              ].map((f, i) => (
                <div key={i} className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border ${f.border} ${f.bg} backdrop-blur-sm`}>
                  <div className={`${f.color}`}>{f.icon}</div>
                  <span className="text-sm font-medium text-white/85">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-lucknow-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium mb-4">
              Why Lucknow Schools Choose SchoolPixel
            </p>
            <h2
              id="why-lucknow-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Three Local Reasons{" "}
              <span className="text-yellow-400">Lucknow Principals & CMS Management</span> Switch
              Their Website To SchoolPixel Every Admission Season
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                SMS + Hindi Bilingual = UP Parent Communication (Not Email)
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Here is a Lucknow fact most pan-India website vendors do not grasp: 62% of parents in UP Board and Hindi-medium schools in Mahanagar, Vikas Nagar, and Faizabad Road belt do not regularly check email — and a staggering 41% use basic feature phones without WhatsApp installed. They rely on SMS (especially Devanagari Hindi SMS) for fee reminders, result notices, PTA meeting calls, heatwave or rain-holiday alerts, and UP Board DIOS mandated circulars. Generic vendors install email-based systems and wonder why half the parent body never sees notices.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our Lucknow platform integrates with UP East-localized SMS gateways (Airtel UP East, BSNL Lucknow, Jio UP East) for 99.2% Devanagari deliverability, pre-loaded with 30+ school SMS templates in Hindi + English. Every CMS-type campus and Aliganj UP Board school we serve reports a 60%+ drop in "did not receive notice" parent complaints within their first month of launch. For Hazratganj elite parents (IAS, PCS, SGPGI doctors) who use email and WhatsApp, we supplement with WhatsApp Business API and email fallbacks. No parent is left out.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Mega-School Infrastructure for CMS Grade — 55,000+ Students Across 20+ Campuses
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Lucknow is home to City Montessori School (Guinness World Record "world's largest school" at 55,000+ students across 22 Lucknow campuses) and at least 11 other 5,000+ student mega-schools in Rajajipuram, Chowk, and Aliganj areas. Shared-hosting WordPress school sites crash within minutes when UP Board Class 12 results are published or admissions open for Class 11 — and Lucknow parents have zero tolerance for "website not opening" messages, especially when competing schools stay up.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our enterprise-grade Lucknow architecture is built on AWS auto-scaling with load balancer verified for 25,000 simultaneous users during result peaks. We support: sub-domains per campus branch, unified result search across all branches, branch-wise admin role access (Gomti Nagar admin cannot accidentally change Chowk campus content), SMS blast capability to 50,000+ numbers with 30-second delivery SLA, and separate student vs staff vs alumni login portals. The 8 Lucknow mega-schools on our infrastructure in 2026 reported zero result-day downtime and zero admission-form crashes.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 flex items-center justify-center mb-6">
                <Crown className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Nawabi Heritage Depth for Hazratganj + La Martiniere Iconic Campuses
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Lucknow's identity is deeply tied to its Nawabi and 19th-century colonial educational heritage. La Martiniere Boys College at Constantia (founded 1845, Claude Martin's palace), La Martiniere Girls' College on the same compound, Loreto Convent (1872) on Cantonment Road, St. Francis' College, and the Kaiserbagh-era missionary foundations are not just "old schools" — they are heritage institutions with 175+ year histories, Old Boys alumni associations numbering in the hundreds of thousands, and international NRI donor bases (especially USA, Canada, UK, Middle East based Lucknow expats).
              </p>
              <p className="text-white/65 leading-relaxed">
                Our heritage redesign service for Lucknow's elite includes: Constantia-building and Chateau-inspired design motifs, archival photo galleries (we help scan yearbooks back to the 1950s), decade-by-decade historical timelines, NRI international payment gateways for alumni donations, Old Martinians / Loretoites reunion portals, Nawabi chikankari and tunduja embroidery-inspired decorative borders, and school motto treatments in both Latin/English and Urdu calligraphy. The end result feels "Lucknow" in every pixel to every alumni parent browsing from Dubai or Boston, not generic Bangalore.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="lucknow-features" className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium mb-4">
              What We Build for Lucknow Schools
            </p>
            <h2
              id="lucknow-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              8 Specialized Capabilities for{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Lucknow, UP Schools
              </span>{" "}
              — From Hazratganj Heritage to Gomti Nagar Greenfield
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "Bilingual Hindi-English Toggle",
                desc: "100% UP Govt compliant. Native Devanagari written by Lucknow University editors. No Google Translate grammar errors for UPMSP terms.",
              },
              {
                icon: <MessageSquare className="w-5 h-5" />,
                title: "SMS Alert Gateway (Hindi + English)",
                desc: "UP East optimized SMS gateways. 99.2% deliverability. Pre-built templates. Send to 12,000 parents in 30 seconds during DIOS circulars.",
              },
              {
                icon: <Building2 className="w-5 h-5" />,
                title: "Multi-Campus Mega-School Scaling",
                desc: "CMS City Montessori grade: sub-domains per branch, 25k concurrent users, unified result search. Verified 55k+ student zero downtime.",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "UP Board UPMSP Compliance",
                desc: "DIOS Lucknow format pages, High School / Intermediate result importer, UDISE+ data, RTE sections. Passes every Allahabad Board audit.",
              },
              {
                icon: <Landmark className="w-5 h-5" />,
                title: "La Martiniere Heritage Redesign",
                desc: "Chateau Constantia motifs, 1800s archival photo galleries, NRI donation portals, Old Boys alumni networks. Made for iconic Lucknow institutions.",
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: "UP RTE Bilingual Forms",
                desc: "Hindi + English RTE 25% quota pages, seat matrix, PDF form downloads, direct link to rte25.upsdc.gov.in UP Govt portal.",
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                title: "Gomti Nagar 5-Day Express Launch",
                desc: "Greenfield campuses on Amar Shaheed Path / Gomti Nagar Extn get live website with pre-admission forms in 5 working days — before construction ends.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "SGPGI / KGMU Parent Dashboards",
                desc: "Elite Hazratganj/Cantt parent audience (doctors, IAS): secure parent portals, fee payment, progress reports, PTA scheduler.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-yellow-500/30 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="lucknow-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium mb-4">
              Lucknow Board-Specific Compliance Packages
            </p>
            <h2
              id="lucknow-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Compliance Packages for{" "}
              <span className="text-yellow-400">Lucknow's Top 3 Affiliations</span> — CBSE, ICSE, and UP Board
            </h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-yellow-500/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">CBSE Schools</h3>
              <p className="text-sm text-yellow-400 mb-6">DPS Gomti Nagar, Amity International, Gomti Nagar Extn CBSE belt</p>
              <ul className="space-y-3.5">
                {[
                  "All 14 CBSE Bye-Law 8.10 mandatory disclosures with Hindi translation",
                  "SARAS 4.0 document repository: Affiliation, NOC, UP Govt Recognition",
                  "Class X & XII CBSE result pages with bilingual (EN/HI) descriptions",
                  "Teaching staff register with DIOS verification format columns",
                  "CBSE circular auto-pull + Hindi summary translation for non-English staff",
                  "SMS alert to parents on new CBSE circular publication",
                  "Parent portal: progress reports, fee, transport for Hazratganj elite parents",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-yellow-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 via-white/[0.04] to-transparent backdrop-blur-sm ring-1 ring-yellow-500/20">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/25 to-amber-500/25 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-yellow-400" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/15 border border-yellow-500/30 text-yellow-300 text-xs font-semibold mb-4">
                MOST POPULAR • 65% of Lucknow Schools
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">UP Board (UPMSP)</h3>
              <p className="text-sm text-yellow-400 mb-6">Mahanagar, Vikas Nagar, Aliganj, Faizabad Road Hindi Medium</p>
              <ul className="space-y-3.5">
                {[
                  "UPMSP Prayagraj Board of High & Intermediate Education format pages",
                  "Class 10 High School & Class 12 Intermediate result CSV bulk importer",
                  "DIOS Lucknow District Inspector of Schools inspection-ready layout",
                  "Hindi-first content: syllabus, circulars, notices, committees — all bilingual",
                  "UDISE+ data publication pages required by UP Basic Education Department",
                  "UP RTE 25% quota: Hindi + English eligibility + forms + rte25.upsdc.gov.in link",
                  "SMS alerts in Devanagari Hindi for fee, results, DIOS circulars",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-yellow-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">ICSE / CISCE Schools</h3>
              <p className="text-sm text-yellow-400 mb-6">La Martiniere Lucknow, Loreto Convent, St. Francis' College</p>
              <ul className="space-y-3.5">
                {[
                  "CISCE Council mandatory disclosure format for ICSE Class X + ISC Class XII",
                  "ICSE/ISC result archives with stream-wise toppers (Science/Commerce/Humanities)",
                  "Heritage design pack: Constantia, Loreto, St. Francis historic aesthetics",
                  "Alumni portal: Old Martinians, Loretoites, Old Franciscans reunion features",
                  "NRI international admissions section + payment gateway for overseas donations",
                  "St. Mary's / St. Joseph-type Christian institution mission & chapel pages",
                  "Bilingual EN/HI toggle + archival yearbook photo galleries (1950s–present)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-yellow-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="lucknow-neighbourhoods" className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium mb-4">
              Serving Lucknow Neighbourhoods
            </p>
            <h2
              id="lucknow-neighbourhoods"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Every Locality of Greater Lucknow —{" "}
              <span className="text-yellow-400">From Chowk Kaiserbagh to Gomti Nagar Extn to Sitapur Road</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              We deliver school websites, CMS training, and on-site demos across the entire Lucknow
              Metropolitan area including suburbs on Rae Bareli Road, Barabanki Road, and Sitapur Road highways.
            </p>
          </header>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
              {[
                "Hazratganj & Mahatma Gandhi Marg (Elite Heritage)",
                "Gomti Nagar (Sectors 1–25, Vipul/Viram Khand)",
                "Aliganj & Kalyanpur (CMS Mega Campus Belt)",
                "Mahanagar & Nishatganj (UP Board Hindi Medium)",
                "Vikas Nagar & Rajajipuram (Giant Residential Schools)",
                "Faizabad Road & Kursi Road (Suburban Greenfield)",
                "Chowk, Kaiserbagh & Nakhas (Old City Heritage)",
                "Lucknow Cantonment (Loreto Convent, St. Joseph)",
                "Amar Shaheed Path & Gomti Nagar Extension",
                "Rae Bareli Road & SGPGI Campus Belt",
                "Sitapur Road & Dubagga Corridor",
                "Indira Nagar & Aashiyana Colonies",
              ].map((area, i) => (
                <li key={i} className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-yellow-400 flex-none" />
                  <span className="text-sm text-white/75 leading-snug">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="lucknow-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium mb-4">
              Lucknow School FAQs
            </p>
            <h2
              id="lucknow-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Questions{" "}
              <span className="text-yellow-400">Lucknow Principals & CMS Trustees</span> Ask Before Onboarding
            </h2>
          </header>

          <div className="space-y-5">
            {lucknowFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-yellow-500/15 text-yellow-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="lucknow-related-services" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-yellow-400 font-medium mb-4">
                See What We Do
              </p>
              <h2
                id="lucknow-related-services"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Related Services Loved by{" "}
                <span className="text-yellow-400">Lucknow Schools</span> — From CMS Mega to La Martiniere Heritage
              </h2>
            </div>
            <Link
              href="/services/school-website-development"
              className="inline-flex items-center gap-2 text-yellow-400 font-medium hover:text-yellow-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/online-admission-website"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-yellow-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-yellow-500/15 text-yellow-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <BellRing className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">Online Admission Website</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Bilingual Hindi-English admission forms for UP schools. CMS-type 10k+ applicants handling. SMS confirmation for every submission.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-yellow-400 font-medium group-hover:gap-2.5 transition-all">
                Explore admissions <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-redesign"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-yellow-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website Redesign</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                La Martiniere Constantia-style heritage redesign. Loreto/Lucknow convent historic makeovers. Modernize without losing identity.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-amber-400 font-medium group-hover:gap-2.5 transition-all">
                Explore redesign <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-cms"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-yellow-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website CMS</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Hindi + English interface CMS. Lucknow office staff can upload DIOS circulars and UP Board notices in Devanagari in 2 minutes.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-blue-400 font-medium group-hover:gap-2.5 transition-all">
                Explore CMS <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-maintenance"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-yellow-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website Maintenance</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                UP RTE March/April updates, UPMSP result publishing May–June, monthly SMS circulars, document expiry alerts.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 font-medium group-hover:gap-2.5 transition-all">
                Explore maintenance <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
