import type { Metadata } from "next";
import { Services } from "@/components/site/Services";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PAGE_SEO } from "@/lib/seo-config";
import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_SEO.services.coaching.title,
  description: PAGE_SEO.services.coaching.description,
  alternates: { canonical: "/services/coaching-institute-website" },
};

export default function CoachingWebsitePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Result-Oriented <span className="text-[#10B981]">Coaching Institute</span> Website Development
            </h1>
            <p className="mt-6 text-xl text-white/65 leading-relaxed">
              Scale your academy with a website that showcases your results, simplifies course enrollment, and manages student inquiries efficiently.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Course Catalog",
                desc: "Beautifully display your courses, schedules, and fee structures for easy browsing.",
                icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
              },
              {
                title: "Inquiry Funnels",
                desc: "High-converting forms designed to capture lead data for your sales team.",
                icon: <Users className="w-6 h-6 text-blue-400" />,
              },
              {
                title: "Toppers Showcase",
                desc: "Dedicated sections to highlight your success stories and build credibility.",
                icon: <Trophy className="w-6 h-6 text-amber-400" />,
              },
              {
                title: "LMS Integration",
                desc: "Optional integration with Learning Management Systems for online classes and tests.",
                icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
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

      <Services />
      <ContactCTA />
    </>
  );
}
