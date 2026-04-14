import { AboutDecorations } from "@/components/section-decorations"

export function About() {
  return (
    <section id="about" className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-14 pb-8 sm:pb-10 lg:pb-14 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20">
      <AboutDecorations />
      <div className="relative z-10 max-w-5xl mx-auto space-y-5 sm:space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; ABOUT_US</span>
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">About AlterMundi</h2>
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
  )
}
