import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: COMPANY.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
