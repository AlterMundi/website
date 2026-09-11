import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/previw/" },
    sitemap: "https://altermundi.net/sitemap.xml",
    host: "https://altermundi.net",
  }
}
