import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { HeroDecorations } from "@/components/hero-decorations"
import { LearnMoreContent } from "@/components/learnmore-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About AlterMundi",
  description: "AlterMundi is a research and experimentation ecosystem exploring Harmonic Information Theory and developing technologies for harmonic pattern analysis.",
  alternates: { canonical: "/learnmore/" },
  openGraph: { url: "/learnmore/" },
}

export default function LearnMorePage() {
  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden noise-texture">
      <PageBackground />
      <HeroDecorations />
      <Navbar />

      <main className="pt-14 sm:pt-16 md:pt-20">
        <LearnMoreContent />
      </main>

      <Footer />
    </div>
  )
}
