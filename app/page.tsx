import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { HeroDecorations } from "@/components/hero-decorations"

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden noise-texture">
      <PageBackground />
      <HeroDecorations />
      <Navbar />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

