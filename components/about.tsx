import { Button } from "@/components/ui/button"
import { AboutDecorations } from "@/components/section-decorations"

export function About() {
  return (
    <section id="about" className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-14 sm:pb-18 lg:pb-28 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20">
      <AboutDecorations />
      <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; ABOUT_US</span>
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">What Is AlterMundi</h2>
        </div>

        <div className="space-y-5 text-base sm:text-lg text-foreground/80 leading-relaxed">
          <p>
            More than ten years ago we wrote a motto: <em>"AlterMundi — the technological leg of that other possible world."</em>{" "}
            For a long time it was a guide. Today, we can attest to it.
          </p>
          <p>
            Our trajectory began with connectivity — mesh networks, distributed routing, open hardware. AlterMesh, LibreMesh,
            LibreRouter, 44mesh were not isolated projects: they were different expressions of the same search. We learned to
            build community networks that operate robustly in any terrain, and in that process we understood infrastructure
            as something modular, comprehensible, and deployable at any scale.
          </p>
          <p>
            That foundation became the base for something larger. Today we think of our infrastructure as a{" "}
            <strong>distributed nervous system</strong> — a conjunction of perceptors that capture signals from the environment,
            integrators that organize and contextualize them locally, and intelligences — human or artificial — that detect
            patterns and act when something of importance emerges.
          </p>
        </div>

        <Button asChild variant="outline">
          <a href="https://altermundi.net/" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </Button>
      </div>
    </section>
  )
}
