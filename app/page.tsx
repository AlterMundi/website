import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HowWeWork } from "@/components/how-we-work"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden grid-background noise-texture">
      <Navbar />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <Hero />
        <About />
        <HowWeWork />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
