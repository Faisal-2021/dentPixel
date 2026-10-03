import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/lib/seo-config";

const SITE = SEO_CONFIG.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/login/",
          "*.json",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/login/",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/login/",
        ],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: [
          "/admin/",
          "/api/",
          "/login/",
        ],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
