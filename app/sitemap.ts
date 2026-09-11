import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const BASE_URL = "https://altermundi.net"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = ["/", "/about/", "/learnmore/"]
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }))
}
