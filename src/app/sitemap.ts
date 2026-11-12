import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Update lastModified when the page content meaningfully changes.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date("2026-11-11"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-11-11"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date("2026-05-04"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
