import type { MetadataRoute } from "next";
import { getAllPosts, SITE_URL } from "@/lib/blog";
import { SERVICE_PAGES, CITY_PAGES } from "@/lib/seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  const staticPages = [
    { path: "", priority: 1, changeFreq: "weekly" as const },
    { path: "/pricing", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/portfolio", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/process", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/clinical-standards", priority: 0.9, changeFreq: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/services/school-website-development", priority: 0.95, changeFreq: "weekly" as const },
    { path: "/services/school-website-design", priority: 0.95, changeFreq: "weekly" as const },
    { path: "/services/coaching-institute-website", priority: 0.7, changeFreq: "monthly" as const },
  ];

  const newServicePages = [
    SERVICE_PAGES.find((p) => p.slug === "school-website-redesign"),
    SERVICE_PAGES.find((p) => p.slug === "school-website-cms"),
    SERVICE_PAGES.find((p) => p.slug === "school-website-maintenance"),
    SERVICE_PAGES.find((p) => p.slug === "online-admission-website"),
    SERVICE_PAGES.find((p) => p.slug === "cbse-school-websites"),
    SERVICE_PAGES.find((p) => p.slug === "icse-school-websites"),
  ].filter(Boolean).map((p) => ({
    path: p!.path,
    priority: 0.9,
    changeFreq: "weekly" as const,
  }));

  const cityPages = CITY_PAGES.map((city) => ({
    path: `/cities/${city.slug}`,
    priority: 0.85,
    changeFreq: "monthly" as const,
  }));

  const posts = getAllPosts().map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.75,
    changeFreq: "monthly" as const,
  }));

  const allPages = [
    ...staticPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: today,
      changeFrequency: p.changeFreq,
      priority: p.priority,
    })),
    ...newServicePages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: today,
      changeFrequency: p.changeFreq,
      priority: p.priority,
    })),
    ...cityPages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: today,
      changeFrequency: p.changeFreq,
      priority: p.priority,
    })),
    ...posts.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: p.lastModified,
      changeFrequency: p.changeFreq,
      priority: p.priority,
    })),
  ];

  return allPages;
}
