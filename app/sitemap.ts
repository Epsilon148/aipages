import type { MetadataRoute } from "next";
import { bundles } from "@/data/bundles";
import { tools } from "@/data/tools";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const toolRoutes: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${site.url}/tools/${tool.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: tool.featured ? 0.8 : 0.65,
  }));

  const bundleRoutes: MetadataRoute.Sitemap = bundles.map((bundle) => ({
    url: `${site.url}/bundles/${bundle.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: bundle.featured ? 0.75 : 0.6,
  }));

  return [...staticRoutes, ...toolRoutes, ...bundleRoutes];
}
