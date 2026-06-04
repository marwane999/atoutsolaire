import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atoutsolaire.ma";

  const pages = [
    "",
    "/vision",
    "/produits",
    "/installations",
    "/distributeurs",
    "/showroom",
    "/facture",
    "/garantie",
    "/contact",
    "/mentions-legales",
    "/privacy",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
