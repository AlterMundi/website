import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { HowWeWork } from "@/components/how-we-work"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen grid-background noise-texture">
      <Navbar />
      <main>
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
