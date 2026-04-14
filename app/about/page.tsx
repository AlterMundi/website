import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { AboutDecorations } from "@/components/section-decorations"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden noise-texture">
      <PageBackground />
      <Navbar />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
          <AboutDecorations />
          <div className="relative z-10 max-w-5xl mx-auto space-y-5 sm:space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; ABOUT_US</span>
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">About AlterMundi</h1>
            </div>

            <div className="space-y-5 text-lg sm:text-xl text-foreground/80 leading-relaxed">
              <p>
                AlterMundi is currently focused on{" "}
                <strong>Harmonically Aware Technology Development</strong> — an approach rooted not only in
                connectivity or open hardware, but in understanding how information is organized: how it travels,
                propagates, and how it can be received by networks, sensors, distributed systems, and artificial
                intelligences in relation to real-world phenomena.
              </p>
              <p>
                Our path to this understanding began with connectivity. LibreMesh, LibreRouter, 44mesh, LibreAgro
                and their related ecosystems were not isolated projects — they are different expressions of the same
                search. We learned to build community mesh networks capable of operating robustly and replicably, and
                in that process we understood infrastructure as something that can be comprehended and deployed in a
                modular logic.
              </p>
              <p>
                Today that infrastructure has shifted scale. We think of it as a{" "}
                <strong>distributed nervous system</strong> — a conjunction of perceptors, integrators, and
                intelligences. This mutation began with a precise question: <em>what is information?</em> Our
                hypothesis: information is best described not through isolated values, but as relation — ratio,
                interval, proportion as the elemental unit from which rhythm, recurrence, and harmonic structure
                emerge. This hypothesis is formalized in the{" "}
                <a
                  href="https://hit.altermundi.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Harmonic Information Theory Foundations
                </a>{" "}
                manuscript.
              </p>
            </div>

            <a
              href="/learnmore"
              className="inline-flex items-center gap-1 text-sm font-mono text-primary/70 hover:text-primary transition-colors underline underline-offset-4"
            >
              Read more →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
