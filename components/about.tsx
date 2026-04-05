import { CornerBrackets } from "@/components/ui/corner-brackets"
import { Button } from "@/components/ui/button"
import { AboutDecorations } from "@/components/section-decorations"

export function About() {
  const principles = [
    {
      label: "01",
      title: "Open Infrastructure",
      description:
        "Everything we create — code, hardware, documentation — is released under open licenses. Our tools are designed to be studied, adapted, and redistributed by the communities that use them.",
    },
    {
      label: "02",
      title: "Distributed by Design",
      description:
        "We build systems with no single point of failure. From mesh networks to local AI inference, decentralization is not an add-on — it is the architecture.",
    },
    {
      label: "03",
      title: "Perception over Accumulation",
      description:
        "We do not seek to collect more data. We seek to recognize when a signal is valuable, when it changes, when it deserves attention. Infrastructure as a means of perception, not a pipe.",
    },
    {
      label: "04",
      title: "Community Sovereignty",
      description:
        "Technology built with communities, not for them. Local knowledge shapes every project — from ideation through long-term maintenance — so autonomy outlasts our involvement.",
    },
  ]

  return (
    <section id="about" className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-10 sm:pb-12 lg:pb-20 scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20">
      <AboutDecorations />
      <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
        {/* Left: Introduction */}
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; ABOUT_US</span>
            <h2 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">What Is AlterMundi</h2>
          </div>

          <div className="space-y-4 text-foreground/80 leading-relaxed">
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

        {/* Right: Principles Cards */}
        <div className="space-y-3 sm:space-y-4">
          {principles.map((principle) => (
            <div
              key={principle.label}
              className="relative bg-card border-2 border-border p-4 sm:p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(7,68,52,0.15)]"
            >
              <CornerBrackets />
              
              <div className="flex items-start gap-3 sm:gap-4">
                <span className="font-mono text-xs sm:text-sm text-primary crt-glow mt-0.5 shrink-0">[{principle.label}]</span>
                <div className="flex-1 min-w-0 space-y-2">
                  <h3 className="font-mono text-base sm:text-lg font-bold uppercase tracking-wider">{principle.title}</h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
