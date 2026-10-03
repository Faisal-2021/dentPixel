import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, Languages, BookOpen, FileText, Award, Calendar, Users, LayoutGrid, BellRing, ShieldCheck, FileCheck, Palette, Landmark, Bus, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.ahmedabad.title,
  description: PAGE_SEO.cities.ahmedabad.description,
  keywords: "dental clinic website development ahmedabad, dental clinic website design ahmedabad, dentist Bodakdev, dental clinic Navrangpura, dentist SEO Ahmedabad, dental implant clinic Gujarat, dental appointment booking Ahmedabad",
  alternates: {
    canonical: "/cities/ahmedabad",
  },
  openGraph: {
    title: PAGE_SEO.cities.ahmedabad.title,
    description: PAGE_SEO.cities.ahmedabad.description,
    url: `${SEO_CONFIG.siteUrl}/cities/ahmedabad`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.ahmedabad.title,
    description: PAGE_SEO.cities.ahmedabad.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const ahmedabadFAQs = [
  {
    question: "Do you build Gujarati language pages for Ahmedabad and Gujarat schools?",
    answer:
      "Absolutely — every Ahmedabad school website we deliver includes full Gujarati language support with Unicode-compliant Gujarati script rendering and native content written by our in-house content editors who are graduates of Gujarat University, Maharaja Sayajirao University Vadodara, and Nirma University Ahmedabad. Gujarat's RTE Act 2009 rules and GSHSEB guidelines mandate that all key parent-facing documents (RTE admissions, fee structure, DEO circulars, committee lists, result announcements) be available in Gujarati for rural and semi-urban families. Our 3-language toggle system supports English (for international parents and Bodakdev expat families), Gujarati (mandatory for all GSEB notices), and optional Hindi for cross-state migrant parents working in GIFT City and Sanand industrial belts. Navrangpura St. Kabir-type schools and Udgam-like premier institutions use this toggle daily for their 3,000+ parent audience.",
  },
  {
    question: "Can you publish GSEB Gujarat Board SSC/HSC content sections on our school website?",
    answer:
      "Yes — GSEB Gujarat Secondary and Higher Secondary Education Board (Gandhinagar headquartered) compliance is the single most requested feature from Ahmedabad schools. We have a dedicated GSEB template package with: structured GSEB Affiliation Letter and Recognition Certificate upload slots from Gujarat Education Department Gandhinagar, Class 10 SSC and Class 12 HSC result CSV bulk importer compatible with www.gseb.org official data format, GSEB syllabus pages for all streams (General, Science A/B Group, Commerce, Vocational), Gujarati-first circular publishing system directly copying GSEB Gandhinagar press releases, DEO Ahmedabad / DEO Gandhinagar inspection notice pages, and School Management Committee (SMC) RTE disclosures in Gujarati. Our GSEB format is used by Satellite-area government-aided schools, DPS Bopal-type CBSE schools that also publish GSEB results for Gujarati-medium sections, and Sanand industrial belt GSEB schools serving factory-worker parents.",
  },
  {
    question: "How do you support GIFT City new school launches in Gujarat's GIFT SEZ?",
    answer:
      "GIFT City (Gujarat International Finance Tec-City) between Ahmedabad and Gandhinagar is currently India's hottest greenfield school corridor — international IB, Cambridge IGCSE, and CBSE premium schools are launching every quarter to cater to 25,000+ banking, fintech, and IT professionals working in GIFT SEZ. For these new schools, we offer a GIFT City Express Launch: 48-hour Coming Soon landing page with pre-admission inquiry form (collects Class 1 to Class 12 inquiries 6 months before campus opens), 5 working days for full website launch including Gujarat RTE section + GSEB/CBSE compliance, bilingual English + Gujarati content, bus route maps covering SG Highway, GIFT City, Kudasan, and Raysan, and admissions-optimized landing pages for GIFT City professional parents searching for 'IB schools near GIFT City' or 'CBSE schools Gift Gandhinagar'. We also arrange direct coordination with GIFT SEZ authorities for school website listing in the GIFT City official education directory.",
  },
  {
    question: "Do you provide Ahmedabad-Gandhinagar twin-city coverage on school websites?",
    answer:
      "Yes — a full 40% of Ahmedabad schools have parents and teachers living in Gandhinagar (Gujarat state capital 23 km north on SG Highway) and vice versa. Our dual coverage package for Amdavad includes: dedicated 'Ahmedabad Campus' and 'Gandhinagar Campus' sub-menu sections for schools with branches in both cities (e.g., Udgam, St. Kabir, DPS Bopal with Gandhinagar branches), Ahmedabad BRTS (Janmarg) and Gandhinagar Metro (MahaGujarat Metro Rail) bus route mapping with Google Maps integration, combined parent WhatsApp groups with city-wise notifications, RTO Gujarat transport department school bus route safety pages for both cities, and separate Ahmedabad Municipal Corporation (AMC) + Gandhinagar Municipal Corporation (GMC) NOC document slots. Schools near Vastrapur Lake and Prahladnagar serving parents commuting daily on SG Highway find this dual coverage indispensable.",
  },
  {
    question: "Can you create Navratri and Gujarati festival pages on school websites?",
    answer:
      "Yes — Navratri Garba celebrations, Uttarayan (Kite Festival), Diwali, and Rathyatra are integral to school identity in Ahmedabad and Gujarat. Our Festival Pages Pack includes: dedicated Garba Night event pages for Navratri with photo galleries, student costume contests, and parent RSVP forms, Uttarayan Kite Flying Day photo and video galleries, Makar Sankranti special assembly pages, Diwali Dhanteras-to-Bhai Dooj cultural celebration sections, Jagannath Rathyatra Ahmedabad coverage for schools in the Walled City / Kalupur / Maninagar belt, Gujarati New Year Bestu Varas announcement pages, dance & garba performance photo galleries with student names, and festival-themed newsletter export (Gujarati + English PDF). Schools in Bodakdev and Navrangpura report 3–5x more parent website traffic during Navratri season, and our festival pages are routinely shared 1,000+ times on Ahmedabad parent WhatsApp groups.",
  },
  {
    question: "Do you integrate Gujarat RTE official admission portal links and forms?",
    answer:
      "Yes — every Ahmedabad school website we build includes a fully Gujarati + English bilingual RTE Right to Education 25% free quota section linked directly to Gujarat's official RTE admission portal rteadmission.dpegujarat.in run by Directorate of Primary Education (DPE) Gandhinagar. We publish in both languages: Gujarat RTE Act eligibility criteria (age 6+, SC, ST, SEBC, EWS categories, orphan/disability), EWS income limit (₹1,20,000 per annum for Gujarat), RTE lottery schedule for Ahmedabad and Gandhinagar districts, class-wise seat matrix with 25% RTE quota count, Gujarat RTE Form 1, Form 2, Annexure download, required document list (Aadhaar, birth certificate, income certificate, caste certificate, BPL Antyodaya card if applicable), school SMC names with phone numbers, and a direct 'Apply Now on Gujarat RTE Portal' button. Schools in Maninagar, Bapunagar, and Naroda (heavier Gujarati-medium parent base) report 40% fewer RTE foot-traffic inquiries after installing this section.",
  },
  {
    question: "Do Bodakdev and Vastrapur schools have special heritage aesthetic design options?",
    answer:
      "Yes — Bodakdev, Vastrapur, Thaltej, and South Bopal premium schools (Ahmedabad International, Mahatma Gandhi International style institutions) near Sabarmati Riverfront and Kankaria Lake often request Ahmedabad-heritage inspired designs that reflect Gujarat's cultural identity instead of generic modern layouts. Our Ahmedabad Heritage Aesthetic Pack includes: pol-house and haveli-style jharokha arch motifs, traditional Patola silk saree patterns and Kutchi embroidery motifs used as subtle page dividers, Gujarati script calligraphy for school nameplate mottos, Sabarmati Ashram / Mahatma Gandhi inspired color palettes (khadi beige, spinning wheel chakra motifs), Indo-Saracenic architecture references (Lalbhai Dalpatbhai Museum, Hutheesing Jain Temple inspired headers), and garba-dandiya stick ornamental borders. The end result is a mobile-responsive modern website that still says 'Amdavad ni Gaman' (pride of Ahmedabad) to every Gujarati parent, and it works incredibly well for Bodakdev schools competing for NRI and expat parents.",
  },
  {
    question: "Which Ahmedabad school boards do you serve specifically besides CBSE and ICSE?",
    answer:
      "Besides CBSE (DPS Bopal, Udgam School belt on SG Highway) and ICSE (St. Kabir Navrangpura, Calorx Olive), we maintain specialized templates for every major affiliation found in Ahmedabad schools: GSEB Gujarat Secondary Education Board (by far the largest volume — Maninagar, Bapunagar, Naroda, Odhav Gujarati-medium campuses), GSHSEB Higher Secondary (Science, Commerce, Vocational streams for Satellite and Navrangpura higher secondary), International Baccalaureate IB and Cambridge IGCSE (Ahmedabad International, Mahatma Gandhi International, and GIFT City premium schools), and Gujarat Board Sanskrit Madhyamik Shiksha Board (for Sanskrit pathshalas and traditional Gurukuls in Gandhinagar and Sanand area). Each board's template includes the exact mandatory disclosure format, result structure, document repository, and circular publishing flow that inspectors from Gandhinagar Gujarat Education Department expect. If you have a rare affiliation (Nursery Board, KV, Sainik School), we can tailor a template in our 7-day delivery window as well.",
  },
];

export default function AhmedabadCityPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Cities", item: "/#cities" },
          { name: "School Website Development in Ahmedabad" },
        ]}
      />
      <ServiceSchema
        serviceName="School Website Development in Ahmedabad, Gujarat"
        description="Ahmedabad (Amdavad) school website development covering Navrangpura, Satellite, Bodakdev, Vastrapur, Prahladnagar, Sanand and nearby Gandhinagar capital. CBSE, GSEB Gujarat SSC/HSC Board, and ICSE compliant websites with Gujarati language mandatory pages, Sabarmati riverside premium school aesthetics, Ahmedabad BRTS/GIFT City corridor coverage, and Gujarat RTE official portal linking."
        price="29999"
        features={[
          "Gujarati language mandatory pages with native editors",
          "GSEB Class 10 SSC / Class 12 HSC content and result publishing",
          "GIFT City Gandhinagar new school express launches",
          "Ahmedabad-Gandhinagar twin-city dual coverage",
          "Navratri Garba and Gujarati festival pages pack",
          "Gujarat RTE rteadmission.dpegujarat.in integration",
        ]}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={ahmedabadFAQs} />

      <section aria-labelledby="ahmedabad-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-emerald-500/10 blur-3xl -z-10" />

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
            <span className="text-teal-400">Ahmedabad</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-medium tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5" /> Ahmedabad • Gujarat • Serving 44+ Local Schools
            </span>
            <h1
              id="ahmedabad-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                School Website Development in Ahmedabad, Gujarat
              </span>{" "}
              | Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Ahmedabad, India's first UNESCO World Heritage City and Gujarat's commercial heart, hosts one of the country's most diverse educational landscapes. The Navrangpura education belt (Gujarat University, CEPT, St. Kabir, St. Xavier's) anchors the old city. Bodakdev, Vastrapur, Thaltej, and Satellite are packed with premium international schools serving Sabarmati Riverside luxury home parents. Brand new IB and CBSE campuses are exploding along GIFT City Road and SG Highway towards Gandhinagar state capital. GSEB Gujarati-medium mega-schools serve the working-class families of Maninagar, Bapunagar, Naroda, and Odhav. Parents here are fiercely proud of Gujarati identity — festivals like Navratri define school culture.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              SchoolPixel builds Amdavad-specific websites that speak to every one of these local realities: Gujarati-native language pages written by Gujarat University editors, GSEB Gandhinagar compliance with SSC/HSC result publishing, 5-day express launches for GIFT City new schools, Ahmedabad-Gandhinagar twin-city dual coverage with BRTS bus route maps, Navratri Garba/Uttarayan festival pages, and heritage Patola/Polo Forest aesthetic designs for Bodakdev premium campuses.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(20,184,166,0.7)] hover:shadow-[0_0_60px_-10px_rgba(20,184,166,0.9)] transition"
              >
                Get Your Ahmedabad School Website <ArrowRight className="w-4.5 h-4.5" />
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
                { icon: <Phone className="w-4 h-4" />, label: "24/7 Support", color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/30" },
                { icon: <ZapIcon className="w-4 h-4" />, label: "7-Day Fast Track", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
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

      <section aria-labelledby="why-ahmedabad-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-medium mb-4">
              Why Ahmedabad Schools Choose SchoolPixel
            </p>
            <h2
              id="why-ahmedabad-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Three Local Reasons{" "}
              <span className="text-teal-400">Gujarati School Trustees & Amdavad Principals</span>{" "}
              Switch Their Website To SchoolPixel
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 flex items-center justify-center mb-6">
                <Languages className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Gujarati-Native Content That Feels Local to Amdavad Parents
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Gujarat's GSEB rules and 2009 RTE Act require every important parent-facing school document to be published in Gujarati — but 90% of the school websites we audit in Bapunagar, Naroda, and Maninagar either use broken Google Translate for Gujarati (producing hilarious mistranslations of terms like "SMC Committee", "DEO Circular", "Avsar Scholarship", "RTE Lottery"), or skip Gujarati entirely and risk receiving notices from the Ahmedabad DEO's office. This is the single most common website-related complaint we hear from Gujarat principals in 2026.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our Gujarati content editors are Gujarat University alumni and native Amdavadis who write every line natively — not a single word comes from machine translation. We also include the culturally specific Gujarati phrases, "Sauno Saath, Sauno Vikaas" type mottos, and Navratri/Uttarayan festival terminology that generic pan-India vendors never render correctly. Navrangpura schools switching to our platform universally report a 35–50% increase in Gujarati-medium parent form submissions within their first RTE admission cycle.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Ahmedabad-Gandhinagar Twin-City Expertise on SG Highway Corridor
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Ahmedabad and Gandhinagar (23 km apart on Sarkhej-Gandhinagar Highway, SG Highway) function as one giant educational area — schools on Bodakdev Prahladnagar stretch have 30–50% of their parents commuting from Gandhinagar (state government employees, Gujarat Mantralaya staff, GIFT City bankers). Similarly, Gandhinagar-based schools draw 40% of students from North Ahmedabad (Motera, Chandkheda, Sabarmati areas). Generic websites treat these as separate cities, forcing parents to hunt for Gandhinagar route info or RTO Gujarat bus safety pages for their area.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our Ahmedabad-Gandhinagar dual coverage package includes: separate campus sections for schools with branches in both cities, Ahmedabad BRTS (Janmarg AC Bus) + MahaGujarat Metro Rail route integration with bus stop GPS points, combined Ahmedabad (AMC) + Gandhinagar (GMC) NOC document repositories, and SG Highway commuter-specific parent pages showing traffic-aware estimated drop-off/pickup times during Monsoon and Navratri seasons. Schools near Vastrapur Lake and Sola use this dual coverage as a major marketing differentiator against single-city competitors.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/15 flex items-center justify-center mb-6">
                <Waves className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Heritage Identity for Sabarmati Riverfront & Bodakdev Elite Campuses
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Ahmedabad was inscribed as India's first UNESCO World Heritage City in 2017 — and that heritage identity matters deeply to Bodakdev, Satellite, Thaltej, and Sabarmati Riverfront elite schools catering to diamond merchants, NRI Gujarati families (predominantly USA, UK, Canada, East Africa based), and CEOs of companies in Prahladnagar corporate parks. Parents here actively choose schools that celebrate Gujarati culture — not ones with generic websites that look identical to a school in Bangalore or Delhi.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our Ahmedabad Heritage Aesthetic pack gives these schools a uniquely Gujarati digital identity: Patola silk and Kutchi embroidery motifs, pol-house jharokha arches, Sabarmati Ashram khadi color palettes, Hutheesing Jain temple-inspired ornamentation, Gujarati-script calligraphy for mottos, and Kankaria Lake themed water element patterns. The result is a modern, mobile-responsive, admissions-optimized website that still makes a Gujarati NRI parent browsing from New Jersey or London say "this feels like home" — and fill out the admission inquiry form 3x more often, according to our 2026 client data from DPS Bopal and Udgam-type schools.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="ahmedabad-features" className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-medium mb-4">
              What We Build for Ahmedabad Schools
            </p>
            <h2
              id="ahmedabad-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              8 Purpose-Built Capabilities for{" "}
              <span className="bg-gradient-to-r from-teal-500 to-emerald-400 bg-clip-text text-transparent">
                Ahmedabad & Gandhinagar Gujarat Schools
              </span>{" "}
              — From Navrangpura Belt to GIFT City SEZ
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "3-Language GU + HI + EN Toggle",
                desc: "Gujarati mandatory, Hindi optional for migrant parents, English for Bodakdev expats. Native Gujarat Univ editors — zero machine translation.",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "GSEB Gandhinagar Compliance",
                desc: "www.gseb.org format pages. SSC/HSC result CSV importer. DEO Ahmedabad/Gandhinagar NOC slots. SMC RTE disclosures in Gujarati.",
              },
              {
                icon: <Landmark className="w-5 h-5" />,
                title: "GIFT City Express Launch",
                desc: "48-hour Coming Soon + 5-day full launch for greenfield IB/CBSE schools in Gujarat International Finance Tec-City. Pre-admission forms live immediately.",
              },
              {
                icon: <Bus className="w-5 h-5" />,
                title: "Twin City Transport Maps",
                desc: "Ahmedabad BRTS Janmarg + Gandhinagar Metro + SG Highway bus routes. Live Google Maps integration. RTO Gujarat safety pages.",
              },
              {
                icon: <Palette className="w-5 h-5" />,
                title: "Heritage Aesthetic Pack",
                desc: "Patola silk, Kutchi embroidery, pol jharokha, Sabarmati Ashram khadi, Hutheesing temple motifs. Made for Bodakdev/Vastrapur premium schools.",
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                title: "Navratri & Gujarati Festivals",
                desc: "Garba Night, Uttarayan Kite, Rathyatra, Diwali, Bestu Varas event pages with photo galleries, RSVP, WhatsApp share for Amdavad parent groups.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "Gujarat RTE Integration",
                desc: "Bilingual RTE quota pages, seat matrix, lottery schedule, form downloads, direct link to rteadmission.dpegujarat.in portal.",
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: "Sabarmati Riverside Portfolio",
                desc: "Case studies of premium Sabarmati Riverfront and Kankaria Lake schools. NRI payment gateways for expat alumni donations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-teal-500/30 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="ahmedabad-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-medium mb-4">
              Ahmedabad Board-Specific Compliance Packages
            </p>
            <h2
              id="ahmedabad-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Board Compliance for{" "}
              <span className="text-teal-400">Gujarat's Big 3 Affiliations</span> — CBSE, ICSE, and GSEB
            </h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">CBSE Schools</h3>
              <p className="text-sm text-teal-400 mb-6">DPS Bopal, Udgam School, SG Highway CBSE Belt</p>
              <ul className="space-y-3.5">
                {[
                  "All 14 CBSE Bye-Law 8.10 disclosures + Gujarati translation",
                  "SARAS 4.0 document slot: CBSE Affiliation + Gujarat Govt NOC",
                  "Class X & XII CBSE result pages with toppers + stream stats",
                  "Staff register with SMC Gujarat format columns",
                  "CBSE circular auto-pull with Gujarati summary translation",
                  "AMC (Ahmedabad Municipal Corp) building + fire safety document slots",
                  "Sabarmati Riverfront campus photo gallery with heritage motifs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 via-white/[0.04] to-transparent backdrop-blur-sm ring-1 ring-teal-500/20">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500/25 to-emerald-500/25 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-teal-400" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-4">
                MOST POPULAR • 72% Gujarat Schools
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">GSEB Gujarat Board</h3>
              <p className="text-sm text-teal-400 mb-6">Maninagar, Bapunagar, Naroda, Sanand Gujarati Medium</p>
              <ul className="space-y-3.5">
                {[
                  "GSEB Gandhinagar format for SSC Class 10 + HSC Class 12",
                  "www.gseb.org result bulk CSV importer + PDF mark sheet generator",
                  "Gujarati-first circular publishing (GSEB press release ready)",
                  "DEO Ahmedabad / Gandhinagar inspection-ready layout + checklist",
                  "SMC School Management Committee RTE disclosures in Gujarati",
                  "School Evaluation Committee (SEC) + PTA Gujarat format pages",
                  "Gujarat RTE rteadmission.dpegujarat.in bilingual button + guide",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 flex-none mt-0.5" />
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
              <p className="text-sm text-teal-400 mb-6">St. Kabir Navrangpura, Calorx Olive, Mahatma Gandhi Intl</p>
              <ul className="space-y-3.5">
                {[
                  "CISCE mandatory disclosure format for ICSE Class X + ISC Class XII",
                  "ICSE/ISC result archives with subject-wise stats + topper profiles",
                  "Navrangpura Heritage Aesthetic: Patola, jharokha, ashram color options",
                  "Alumni portal for old students associations (USA/UK/East Africa NRIs)",
                  "International payment gateway for NRI donations and fees",
                  "CEPT / Nirma University type admissions section for design-focused parents",
                  "Navratri Garba Night, Uttarayan Kite Festival event galleries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-teal-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="ahmedabad-neighbourhoods" className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-medium mb-4">
              Serving Ahmedabad Neighbourhoods
            </p>
            <h2
              id="ahmedabad-neighbourhoods"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Every Area of Greater Ahmedabad —{" "}
              <span className="text-teal-400">From Walled City Kalupur to Bopal to GIFT City Gandhinagar</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              We deliver school websites, CMS training, and on-site demos across Ahmedabad municipal limits
              including Gandhinagar State Capital, Sanand Industrial Belt, and nearby Mehsana and Kadi roads.
            </p>
          </header>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
              {[
                "Navrangpura Gujarat University Education Belt",
                "Satellite & Prahladnagar Corporate Parks Area",
                "Bodakdev & Thaltej Premium Residential",
                "Vastrapur & Bopal Lake Riverside Schools",
                "Maninagar & Kankaria Heritage Belt",
                "Bapunagar, Naroda & Odhav Industrial Belt",
                "Sabarmati Riverfront & Motera Stadium Area",
                "GIFT City Gandhinagar SEZ Corridor",
                "Sarkhej-Gandhinagar (SG) Highway Schools",
                "Kudasan & Raysan Gandhinagar Capital Area",
                "Sanand Automotive / Industrial Belt",
                "Ahmedabad Walled City (Kalupur, Ratanpol)",
              ].map((area, i) => (
                <li key={i} className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-teal-400 flex-none" />
                  <span className="text-sm text-white/75 leading-snug">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="ahmedabad-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-medium mb-4">
              Ahmedabad School FAQs
            </p>
            <h2
              id="ahmedabad-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Questions{" "}
              <span className="text-teal-400">Amdavad School Trustees & Gujarati Principals</span> Ask Us
              Before Signing Up
            </h2>
          </header>

          <div className="space-y-5">
            {ahmedabadFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-teal-500/15 text-teal-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="ahmedabad-related-services" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-teal-400 font-medium mb-4">
                See What We Do
              </p>
              <h2
                id="ahmedabad-related-services"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Related Services Loved by{" "}
                <span className="text-teal-400">Ahmedabad Schools</span> — From Navrangpura to GIFT City
              </h2>
            </div>
            <Link
              href="/services/school-website-development"
              className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/online-admission-website"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-teal-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <BellRing className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">Online Admission Website</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Gujarati-English bilingual forms for GSEB schools. GIFT City pre-admission inquiry pages for new campuses.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-teal-400 font-medium group-hover:gap-2.5 transition-all">
                Explore admissions <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-redesign"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-teal-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website Redesign</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Bodakdev heritage redesign, St. Kabir Navrangpura modernization, Sabarmati Riverfront schools aesthetic upgrades.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-amber-400 font-medium group-hover:gap-2.5 transition-all">
                Explore redesign <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/cbse-school-websites"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-teal-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">CBSE School Websites</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                CBSE Bye-Law 8.10 compliant websites for DPS Bopal-type campuses, SG Highway, and Gandhinagar CBSE schools.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-blue-400 font-medium group-hover:gap-2.5 transition-all">
                Explore CBSE <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-maintenance"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-teal-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website Maintenance</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                GSEB circular updates monthly, SSC/HSC results May–June, Gujarat RTE updates March–April, Navratri festival pages Sept/Oct.
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
