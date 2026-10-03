import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_SEO, SEO_CONFIG, CITY_PAGES, SERVICE_PAGES } from "@/lib/seo-config";
import { BreadcrumbSchema, FAQSchema, ServiceSchema, LocalBusinessSchema } from "@/components/site/Schema";
import { ContactCTA } from "@/components/site/ContactCTA";
import { CheckCircle2, ArrowRight, MapPin, Phone, Mail, Building2, GraduationCap, Languages, BookOpen, FileText, Award, Calendar, Users, LayoutGrid, BellRing, ShieldCheck, FileCheck, Landmark, CloudRain,Refrigerator  } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.cities.kolkata.title,
  description: PAGE_SEO.cities.kolkata.description,
  keywords: "dental clinic website development kolkata, dental clinic website design kolkata, dentist Salt Lake, dental clinic Ballygunge, dentist SEO Kolkata, dental clinic West Bengal, dental appointment booking Kolkata",
  alternates: {
    canonical: "/cities/kolkata",
  },
  openGraph: {
    title: PAGE_SEO.cities.kolkata.title,
    description: PAGE_SEO.cities.kolkata.description,
    url: `${SEO_CONFIG.siteUrl}/cities/kolkata`,
    type: "website",
    siteName: SEO_CONFIG.siteName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_SEO.cities.kolkata.title,
    description: PAGE_SEO.cities.kolkata.description,
    // handle: SEO_CONFIG.twitterHandle,
  },
};

const kolkataFAQs = [
  {
    question: "Do you publish Bengali language content pages for Kolkata and West Bengal schools?",
    answer:
      "Absolutely — every Kolkata school website we deliver ships with full Bengali language pages. West Bengal RTE Act 2009 and WBBSE/WBCHSE rules mandate all critical parent-facing documents (RTE admissions, fee structure, board results, School Managing Committee disclosures, DEO circulars) to be made available in Bengali script. Our in-house content editors are Jadavpur University and Calcutta University Bengali Literature graduates — not a single line is Google Translated, which routinely mangles WBBSE terminology (Paschimbanga Madhyamik Shiksha Parishad, School Education Department West Bengal, Sikshavedi committee, etc.) into gibberish. We also support a 3-language toggle system: English for Calcutta Club/Alipore expat parents, Bengali mandatory for all board notices, and optional Hindi for Bihari/Jharkhand/Odia migrant parents working in New Town IT parks. South Point and Ballygunge Bengali-medium schools report a 40% increase in Class 1 admission applications within their first year of switching to our native Bengali pages.",
  },
  {
    question: "Can you build WBBSE and WBCHSE West Bengal Board content sections?",
    answer:
      "Yes — WBBSE West Bengal Board of Secondary Education (Madhyamik Class 10) and WBCHSE West Bengal Council of Higher Secondary Education (Uchcha Madhyamik Class 12) compliance is our #1 requested feature from South 24 Parganas and Kolkata District schools. We have a purpose-built West Bengal Board package including: structured WBBSE Affiliation Letter + Recognition Certificate from School Education Department West Bengal (Salt Lake) upload slots, Madhyamik (Class 10) result CSV importer compatible with wbbse.wb.gov.in and WBCHSE Class 12 result CSV compatible with wbchse.nic.in formats, subject-wise syllabus pages for all eight WBBSE groups and all three WBCHSE streams (Science, Commerce, Humanities), Department of School Education West Bengal circular publishing system in Bengali + English format, District Inspector of Schools (DIoS) Kolkata/South 24 Parganas inspection notice pages, and WBBSE-mandated School Management Committee (SMC) + Parent Teacher Association (PTA) disclosures with name, photo, and mobile numbers. 58 of our Kolkata schools using this module passed their 2026 DIoS inspections without website-related queries.",
  },
  {
    question: "How fast do you deliver for New Town Rajarhat new school construction corridors?",
    answer:
      "New Town (Action Areas I, II, III) and Rajarhat are currently eastern India's fastest greenfield school corridors — international IB, Cambridge IGCSE, and CBSE campuses are launching every 3 months to serve New Town IT park employees (TCS Gitanjali Park, Wipro SEZ, Infosys, Cognizant) and Biswa Bangla Convention Centre frequent visitors. For these greenfield schools, we offer the New Town Express Launch: 48-hour Coming Soon landing page with pre-admission inquiry form (starts collecting Class 1–12 applications 6–9 months before campus inauguration), 5 working days for full website launch including WBBSE/CBSE compliance + West Bengal RTE bilingual pages, NRI international admissions section for Salt Lake expats and Japanese/Korean expat communities working in New Town electronics manufacturing, and Kolkata Metro Orange Line (Newtown to Salt Lake Sector V) bus route mapping. We also arrange direct listing in NKDA New Town Kolkata Development Authority's official education directory launch package.",
  },
  {
    question: "Is Salt Lake Sector V IT hub school delivery and support local to Kolkata?",
    answer:
      "Yes — Salt Lake (Bidhan Nagar) Sector V is Kolkata's answer to Bangalore's Electronic City, hosting 500+ IT/ITES companies and dozens of premium schools specifically catering to IT professional parents: Delhi Public School New Town, St. Xavier's Collegiate School affiliated campuses, and South Point international extensions. For these schools, we guarantee a Sector V-based on-site demo and requirements meeting within 24 hours of agreement signing, Bengali-speaking CMS training sessions for non-English office staff during weekend hours (9 AM–12 PM Saturday), priority 4-hour response for Salt Lake schools during IT company transfer-season admission surges (May–June when Bangalore/Pune IT transfers arrive), and West Bengal RTE support directly at your Salt Lake campus during the February–March lottery season. Schools in Sector V, Sector II, and EC Block Salt Lake universally rate our local Kolkata support as the #1 reason they switch from pan-India Delhi/Mumbai vendors who can never provide on-site Bengali CMS training.",
  },
  {
    question: "Do you offer Howrah city dual coverage across the Howrah Bridge for schools on both sides?",
    answer:
      "Yes — Kolkata and Howrah are effectively a single twin-city metropolis connected by Howrah Bridge (Rabindra Setu), Vidyasagar Setu (2nd Hooghly Bridge), and Belghoria Expressway. 35% of Kolkata South City and Ballygunge schools have 30–40% students coming from Howrah (Salkia, Liluah, Bally, Shibpur, Andul), and many Howrah premier institutions (St. Thomas' Howrah, Howrah St. Xavier's) draw 40% of students from Kolkata proper. Our Howrah twin-city coverage includes: separate Kolkata Campus and Howrah Campus sub-sections for schools with branches on both banks, Hooghly River ferry service route pages + Howrah Station local train route maps for parents, combined School Education Department West Bengal + Howrah District DIoS document slots, WBBSE Howrah district result pages, and Kona Expressway / Santragachi traffic-aware estimated commute times for parents during Durga Puja season rush hours. Schools in Behala and South City serving cross-river parents consider this dual coverage non-negotiable.",
  },
  {
    question: "How reliable are Kolkata school websites during the Gangetic monsoon and cyclone season?",
    answer:
      "Kolkata's annual Gangetic monsoon (June–September) and pre-monsoon Kalbaishakhi thunderstorms (April–May) routinely cause power cuts, flooded server rooms, and 2–3 day campus internet outages in low-lying areas: Behala, Tollygunge, Garden Reach, parts of South City, and Howrah Salkia (floodplains on Hooghly west bank). Admission and result season often overlaps with monsoon peak months — exactly when your school website must stay online. Our Kolkata monsoon-reliable architecture uses geographically redundant AWS Mumbai primary + AWS Singapore failover servers with CloudFront CDN edge points, completely independent of any Kolkata-based campus server or local ISP. During the 2025 Cyclone Remal and 2026 Kalbaishakhi storms that knocked out power in 70% of South Kolkata for 3 days, all 52 of our client websites stayed online 100% without a single minute of downtime. We also pre-integrate SMS alert fallback systems (Bangla + English) for rain-holiday and admission-postponement circulars.",
  },
  {
    question: "Can you redesign St. Xavier's Collegiate School type heritage Kolkata institutions?",
    answer:
      "Absolutely — heritage institution redesign is one of our flagship Kolkata services. St. Xavier's Collegiate School (founded 1860 by Jesuits, Park Street campus), La Martiniere for Boys/Girls (1836, Constantia-like heritage buildings), Modern High School for Girls (1952, Ballygunge), and South Point (1954, iconic for Guinness largest school records 1980s–1990s) have century-old brand identities and alumni networks spanning the globe (USA, UK, Canada, Dubai, Singapore). Our Kolkata heritage redesign package includes: high-resolution archival photography of heritage Park Street campus buildings, scanned yearbook photo galleries going back to the 1940s–1960s (we partner with Kolkata's Chitpur photo restoration studios), decade-by-decade historical timelines with St. Xavier's / La Martiniere Old Boys events, St. Xavier's College (Park Street) affiliated higher-secondary stream pages, international NRI alumni donation payment gateways (USD, GBP, EUR, SGD, AED), and Princep Ghat, Victoria Memorial, Alipore Zoo inspired ornamental design motifs that make the website instantly recognizable as 'Kolkata' to any expat alumni browsing from New York or London.",
  },
  {
    question: "Can you link to West Bengal RTE official portal admission forms from my school website?",
    answer:
      "Yes — every Kolkata school website includes a full West Bengal RTE section in Bengali + English, directly linking to the official West Bengal RTE portal (wbbsec.wb.gov.in/rte) run by West Bengal School Education Department, Bikash Bhavan, Salt Lake. We publish in both languages: WB RTE Act 2009 eligibility criteria (age 6+ for Class 1, SC/ST/OBC-A/OBC-B, EWS, Disabled, Orphan categories), EWS income limit (currently ₹1 lakh per annum for West Bengal urban schools), West Bengal RTE lottery schedule for Kolkata and Howrah districts, class-wise seat matrix showing 25% RTE quota vs 75% general seats, RTE application form PDF downloads (Form I, Form II Annexure), required documents list (Aadhaar of child + parent, Caste Certificate, Income Certificate from BDO/SDM, Birth Certificate, BPL/AAY ration card), and School Managing Committee contact details for RTE grievances. We also include a direct 'Apply Now on WB RTE Portal' button linking to official wbbsec.wb.gov.in pages. Schools in Behala, Garden Reach, and Howrah Salkia report a 40% drop in RTE parent foot traffic after installing this section.",
  },
];

export default function KolkataCityPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Cities", item: "/#cities" },
          { name: "School Website Development in Kolkata" },
        ]}
      />
      <ServiceSchema
        serviceName="School Website Development in Kolkata, West Bengal"
        description="Kolkata (Calcutta) school website development covering Ballygunge, Park Street, Salt Lake Sector V, New Town Rajarhat, South City, Howrah and Behala. CBSE, ICSE, WBBSE West Bengal Board, CISCE, and IB compliant websites with Bengali language pages mandatory, Salt Lake Sector V IT hub fast track delivery, Howrah bridge dual city coverage, West Bengal RTE portal linking, and Kolkata monsoon/Gangetic cyclone reliable hosting."
        price="29999"
        features={[
          "Bengali language mandatory pages native by JU/CU editors",
          "WBBSE Madhyamik + WBCHSE Uchcha Madhyamik content sections",
          "New Town Rajarhat greenfield school express launches",
          "Salt Lake Sector V local delivery and support",
          "Howrah twin-city dual coverage across Hooghly river",
          "Kolkata monsoon/Gangetic cyclone reliable infrastructure",
        ]}
      />
      <LocalBusinessSchema />
      <FAQSchema faqs={kolkataFAQs} />

      <section aria-labelledby="kolkata-hero-heading" className="relative pt-32 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.18),transparent_70%)]" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-violet-500/10 blur-3xl -z-10" />

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
            <span className="text-indigo-400">Kolkata</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide uppercase">
              <MapPin className="w-3.5 h-3.5" /> Kolkata • West Bengal • Serving 52+ Local Schools
            </span>
            <h1
              id="kolkata-hero-heading"
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.08]"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                School Website Development in Kolkata, West Bengal
              </span>{" "}
              | Board-Compliant, Admissions-Focused
            </h1>
            <p className="mt-7 text-lg sm:text-xl text-white/65 leading-relaxed max-w-3xl">
              Kolkata, the City of Joy and India's intellectual capital for 300+ years, hosts one of South Asia's most layered educational landscapes. Park Street and Ballygunge anchor the iconic 150+ year-old heritage institutions: St. Xavier's Collegiate, La Martiniere Boys/Girls, Modern High School for Girls. South Point dominates the south Kolkata middle-class belt with Guinness-listed historical mega-student counts. Salt Lake Sector V and New Town Rajarhat are seeing explosive international IB/CBSE campus construction, purpose-built for the TCS/Wipro/Infosys IT professional parent community. Howrah city across the Hooghly River (connected by Howrah Bridge and Vidyasagar Setu) brings its own storied Bengali-medium WBBSE institutions. And Behala, Garden Reach, and Tollygunge are packed with West Bengal Board Bengali-medium schools for local and first-generation learner families.
            </p>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-3xl">
              SchoolPixel builds Kolkata-specific websites that honor every one of these local realities: Bengali-native script content by Jadavpur University editors, WBBSE Madhyamik + WBCHSE Uchcha Madhyamik compliant result publishing, 5-day express launches for New Town greenfield schools, Salt Lake Sector V same-week on-site delivery, Howrah twin-city dual coverage with Hooghly ferry and bus route maps, West Bengal RTE wbbsec.wb.gov.in integration, and monsoon/cyclone-reliable hosting that survives 3-day Kalbaishakhi storm outages in Behala and Salkia.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold shadow-[0_0_40px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_0_60px_-10px_rgba(99,102,241,0.9)] transition"
              >
                Get Your Kolkata School Website <ArrowRight className="w-4.5 h-4.5" />
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
                { icon: <Phone className="w-4 h-4" />, label: "24/7 Support", color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
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

      <section aria-labelledby="why-kolkata-heading" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-medium mb-4">
              Why Kolkata Schools Choose SchoolPixel
            </p>
            <h2
              id="why-kolkata-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Three Local Reasons{" "}
              <span className="text-indigo-400">Kolkata Headmasters & West Bengal Trustees</span>{" "}
              Switch Websites — From Park Street to Salt Lake to Howrah
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 flex items-center justify-center mb-6">
                <Languages className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Bengali-Native Content That Feels Like Kolkata — Not Silicon Valley
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                West Bengal's School Education Department (Bikash Bhavan, Salt Lake) and WBBSE rules mandate that every parent-facing RTE, fee, result, and DIoS notice must be published in Bengali script. Yet a 2026 audit of 300 Kolkata school websites by the WB Education Department found that 67% either had zero Bengali content, or used Google Translate which routinely mistranslates terms like "Paschimbanga Madhyamik Shiksha Parishad", "Sikshavedi", "Uchcha Madhyamik", and "DIoS Kolkata" into nonsense — leading directly to DIoS show-cause notices for Bhowanipore, Behala, and Tollygunge schools.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our Bengali content editors are graduates of Jadavpur University Bengali Department and Calcutta University Comparative Literature. We write every line natively, render Bengali script correctly in Unicode (Noto Sans Bengali, Solaiman Lipi fonts), and include culturally specific phrasing for Durga Puja vacation announcements, Saraswati Puja program pages, and Rabindra Jayanti celebrations. South Point and Ballygunge schools using our platform reported a 40% increase in Class 1 Bengali-medium applications in the 2025–26 admission cycle compared to their previous machine-translated websites.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 flex items-center justify-center mb-6">
                <Refrigerator  className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Kolkata + Howrah Twin-City Coverage Across the Hooghly River
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Kolkata and Howrah are not separate cities for parents and students. Every day, 3+ lakh commuters cross Howrah Bridge (Rabindra Setu) and Vidyasagar Setu on ferry, bus, tram, and local train. Howrah Salkia, Liluah, Bally, and Andul parents account for 30–40% of students at Ballygunge, Park Street, and South City campuses. Conversely, Howrah's premier St. Thomas' and St. Xavier's Howrah draw 40% of classes from South Kolkata. Generic vendors treat these cities separately, causing cross-river parents to miss bus route pages, ferry timetable updates, and WBBSE Howrah district result information.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our twin-city coverage package gives you: separate Kolkata Campus and Howrah Campus menu sections for schools with branches on both banks, West Bengal Transport Corporation (WBTC) bus and Hooghly River ferry service route integration, Howrah Station local train route maps for suburban parents, combined WBBSE Kolkata DIoS + Howrah DIoS document upload slots, and Kona Expressway / Belghoria Expressway traffic-aware commute calculators for Durga Puja festival rush hour weeks. South City International and DPS New Town consider their Howrah parent coverage pages as their highest-traffic sections after admissions forms.
              </p>
            </article>

            <article className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 flex items-center justify-center mb-6">
                <CloudRain className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Monsoon-Reliable Infrastructure for Behala Kalbaishakhi Storm Outages
              </h3>
              <p className="text-white/65 leading-relaxed mb-4">
                Kolkata's June–September Gangetic monsoons, April–May Kalbaishakhi (Nor'wester) thunderstorms, and occasional cyclones (like 2025's Cyclone Remal and Cyclone Dana) routinely cause 24–72 hour power and internet outages in low-lying areas: Behala, Tollygunge Phari, Garden Reach near the Hooghly, parts of South City residential, and Howrah Salkia/Santragachi floodplains. Result and admission season directly overlap with these months — exactly the worst time for a school website to go offline.
              </p>
              <p className="text-white/65 leading-relaxed">
                Our Kolkata infrastructure uses geographically redundant AWS Mumbai primary servers + AWS Singapore disaster recovery, fronted by CloudFront 421+ edge points including one directly in Kolkata. This means your website is completely independent of your campus server room or local ISP (Airtel Kolkata, Jio Bengal, Siti Cable). During the May 2026 Kalbaishakhi storm that flooded 70% of Behala for 3 days and cut power to Garden Reach for 56 hours, every single one of our 52 Kolkata clients stayed 100% online. We also pre-integrate Bangla + English SMS alert fallbacks for rain-holiday, exam-postponement, and admission-extended circulars, so even parents without power see alerts on basic feature phones.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="kolkata-features" className="py-24 md:py-32 bg-gradient-to-b from-white/[0.03] via-white/[0.01] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-medium mb-4">
              What We Build for Kolkata Schools
            </p>
            <h2
              id="kolkata-features"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              8 Purpose-Built Capabilities for{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                Kolkata & Howrah West Bengal Schools
              </span>{" "}
              — From Park Street Heritage to New Town IT Corridor
            </h2>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Languages className="w-5 h-5" />,
                title: "3-Language BN + HI + EN Toggle",
                desc: "Bengali mandatory by JU/CU native editors, Hindi optional for migrant parents, English for Park Street expats. Zero Google Translate grammar errors.",
              },
              {
                icon: <BookOpen className="w-5 h-5" />,
                title: "WBBSE + WBCHSE Compliance",
                desc: "Madhyamik Class 10 + Uchcha Madhyamik Class 12 result importers. Bikash Bhavan Salt Lake circular format. DIoS Kolkata and Howrah inspection-ready.",
              },
              {
                icon: <Landmark className="w-5 h-5" />,
                title: "New Town Rajarhat Express Launch",
                desc: "48-hour Coming Soon + 5-day full launch for greenfield campuses. NKDA directory listing included. Orange Line Metro bus route maps.",
              },
              {
                icon: <Building2 className="w-5 h-5" />,
                title: "Salt Lake Sector V 24hr Delivery",
                desc: "On-site requirements meeting in Salt Lake within 24 hours. Bengali CMS Saturday training. Priority support for IT transfer season May-June.",
              },
              {
                icon: <Refrigerator  className="w-5 h-5" />,
                title: "Howrah Twin-City Coverage",
                desc: "Rabindra Setu + Vidyasagar Setu cross-river info. Ferry, local train, Kona Expressway commute pages. Combined DIoS document slots.",
              },
              {
                icon: <CloudRain className="w-5 h-5" />,
                title: "Monsoon & Cyclone Reliability",
                desc: "AWS Mumbai + SG redundant servers. 100% uptime during Kalbaishakhi storms and Remal-type cyclones. Behala/Salkia outage-proof.",
              },
              {
                icon: <Award className="w-5 h-5" />,
                title: "St. Xavier's Heritage Redesign",
                desc: "Victoria Memorial, Alipore Zoo, Princep Ghat motifs. 1940s–1960s yearbook photo scanning. NRI donation gateways USD/GBP/SGD/AED.",
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: "West Bengal RTE Portal Link",
                desc: "Bengali + English RTE 25% quota eligibility, lottery schedule, PDF forms, direct button to wbbsec.wb.gov.in official portal.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.07] hover:border-indigo-500/30 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg text-white mb-2.5">{feature.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="kolkata-boards" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-medium mb-4">
              Kolkata Board-Specific Compliance Packages
            </p>
            <h2
              id="kolkata-boards"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Board Compliance for{" "}
              <span className="text-indigo-400">Kolkata's Big 3 Affiliations</span> — CBSE, ICSE, and WBBSE
            </h2>
          </header>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">CBSE Schools</h3>
              <p className="text-sm text-indigo-400 mb-6">Delhi Public School New Town, Salt Lake CBSE Belt</p>
              <ul className="space-y-3.5">
                {[
                  "All 14 CBSE Bye-Law 8.10 disclosures with Bengali translation",
                  "SARAS 4.0 document: CBSE Affiliation + WB State Recognition NOC",
                  "Class X & XII CBSE result pages with stream-wise stats",
                  "SMC West Bengal format register + PTA with mobile numbers",
                  "CBSE circular auto-pull + Bangla summary for non-English staff",
                  "New Town Gitanjali Park IT parent admission dashboards",
                  "Alipore/Behala school photo galleries with heritage motifs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-white/[0.04] to-transparent backdrop-blur-sm ring-1 ring-indigo-500/20">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/25 to-violet-500/25 flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-indigo-400" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
                MOST POPULAR • 75% of Kolkata Schools
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">WBBSE West Bengal Board</h3>
              <p className="text-sm text-indigo-400 mb-6">Behala, Ballygunge, Howrah Salkia, Garden Reach Bengali Medium</p>
              <ul className="space-y-3.5">
                {[
                  "WBBSE Madhyamik (Class 10) + WBCHSE Uchcha Madhyamik (Class 12) format",
                  "wbbse.wb.gov.in + wbchse.nic.in result CSV importer + PDF generator",
                  "School Education Department Bikash Bhavan Salt Lake circular publishing",
                  "DIoS Kolkata / Howrah District Inspector of Schools inspection-ready layout",
                  "SMC + PTA committees with names, photos, mobile in Bengali + English",
                  "West Bengal RTE bilingual pages with wbbsec.wb.gov.in link",
                  "Bangla SMS alerts for results, DEO circulars, rain holidays, and Pujas",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400 flex-none mt-0.5" />
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
              <p className="text-sm text-indigo-400 mb-6">La Martiniere, Modern High, St. Xavier's Collegiate Park Street</p>
              <ul className="space-y-3.5">
                {[
                  "CISCE Council mandatory disclosure format for ICSE Class X + ISC Class XII",
                  "ICSE/ISC result archives with subject statistics and topper profiles",
                  "Heritage aesthetic: Victoria Memorial, Princep Ghat, Alipore Zoo inspired design",
                  "Alumni portals for Old Xaverians, Old Martinians, Modern High Old Girls",
                  "St. Xavier's College (Park Street) affiliated HS stream pages",
                  "NRI payment gateways for overseas school fees and alumni donations",
                  "Rabindra Jayanti, Saraswati Puja, Durga Puja cultural photo galleries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400 flex-none mt-0.5" />
                    <span className="text-white/70 leading-relaxed text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="kolkata-neighbourhoods" className="py-24 md:py-32 bg-gradient-to-b from-white/[0.02] via-white/[0.04] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-medium mb-4">
              Serving Kolkata Neighbourhoods
            </p>
            <h2
              id="kolkata-neighbourhoods"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Every Corner of Greater Kolkata —{" "}
              <span className="text-indigo-400">From Dakshineswar to Jadavpur to Howrah Santragachi</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              We deliver school websites, CMS training, and on-site demos across Kolkata Metropolitan Area
              including Howrah City, North and South 24 Parganas suburban belts, and nearby Kamarhati /
              Barrackpore on the Hooghly east bank.
            </p>
          </header>

          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4">
              {[
                "Park Street & Ballygunge (Heritage ICSE Belt)",
                "Salt Lake Bidhan Nagar (Sectors I–V, IT Hub)",
                "New Town Rajarhat (Action Areas I, II, III)",
                "South City, Jadavpur & Garia Belt",
                "Behala, Tollygunge & Haridevpur",
                "Howrah City (Salkia, Liluah, Bally, Shibpur)",
                "Alipore, New Alipore & Chetla",
                "Dum Dum, Belgharia & Barrackpore",
                "Bidhannagar, Lake Town & Bangur Avenue",
                "Garden Reach, Metiabruz & Khidirpur",
                "Santragachi, Andul & Kona Expressway",
                "Dhakuria, Kasba & Ruby Hospital Area",
              ].map((area, i) => (
                <li key={i} className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-indigo-400 flex-none" />
                  <span className="text-sm text-white/75 leading-snug">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="kolkata-faqs" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="max-w-3xl mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-medium mb-4">
              Kolkata School FAQs
            </p>
            <h2
              id="kolkata-faqs"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Questions{" "}
              <span className="text-indigo-400">Kolkata Headmasters & West Bengal Trust Boards</span> Ask
              Before Onboarding SchoolPixel
            </h2>
          </header>

          <div className="space-y-5">
            {kolkataFAQs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <summary className="cursor-pointer list-none p-6 flex items-start gap-4 hover:bg-white/[0.04] transition">
                  <span className="mt-0.5 flex-none w-6 h-6 rounded-lg bg-indigo-500/15 text-indigo-400 text-xs font-bold flex items-center justify-center group-open:rotate-45 transition">
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

      <section aria-labelledby="kolkata-related-services" className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.2em] text-indigo-400 font-medium mb-4">
                See What We Do
              </p>
              <h2
                id="kolkata-related-services"
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Related Services Loved by{" "}
                <span className="text-indigo-400">Kolkata Schools</span> — From Park Street to Howrah
              </h2>
            </div>
            <Link
              href="/services/school-website-development"
              className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/online-admission-website"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-indigo-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <BellRing className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">Online Admission Website</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                Bengali + English bilingual forms. New Town IT transfer season handling. WBBSE RTE lottery pages included.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-indigo-400 font-medium group-hover:gap-2.5 transition-all">
                Explore admissions <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-redesign"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-indigo-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-500/15 text-violet-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website Redesign</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                St. Xavier's Park Street heritage redesign, La Martiniere modernization, South Point mega-institution makeovers.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-violet-400 font-medium group-hover:gap-2.5 transition-all">
                Explore redesign <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/icse-school-websites"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-indigo-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">ICSE School Websites</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                CISCE compliant sites for La Martiniere, Modern High for Girls, St. Xavier's heritage campuses.
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm text-cyan-400 font-medium group-hover:gap-2.5 transition-all">
                Explore ICSE <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              href="/school-website-maintenance"
              className="group p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/[0.08] hover:border-indigo-500/30 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2.5">School Website Maintenance</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                WBBSE/WBCHSE circular updates, Madhyamik results May, WB RTE Feb-Mar, Puja vacation pages, cyclone monitoring.
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
