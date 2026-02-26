import { CornerBrackets } from "@/components/ui/corner-brackets"
import { Button } from "@/components/ui/button"
import { AboutDecorations } from "@/components/section-decorations"

export function About() {
  const principles = [
    {
      label: "01",
      title: "Open by Default",
      description:
        "Everything we create - code, hardware designs, and documentation - is released under open licenses so anyone can study, adapt, and redistribute our tools.",
    },
    {
      label: "02",
      title: "Community-Centered",
      description:
        "We don't build for people, we build with them. Every project starts from real needs and integrates local knowledge from ideation to long-term maintenance.",
    },
    {
      label: "03",
      title: "Built to Last",
      description:
        "Our solutions are designed for real-world conditions: low-cost, high-performance, field-repairable, and scalable.",
    },
    {
      label: "04",
      title: "Empowerment through Technology",
      description:
        "We strengthen the autonomy of those affected by the digital divide through tools and training that enable active participation instead of dependency.",
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
              AlterMundi is a nonprofit organization of experienced community network builders and free software
              advocates based in Argentina. We develop open-source tools - hardware, software, and documentation - that
              solve real infrastructure problems: from internet connectivity in underserved areas to wildfire detection
              and agricultural technology.
            </p>
            <p>
              We believe technology should be a vehicle for equity and autonomy, not a privilege. Every tool we create
              is designed to be deployed, maintained, and adapted by the people and organizations who use it -
              fostering technological sovereignty from the ground up.
            </p>
            <p>
              Since 2022 we have expanded beyond connectivity into renewable energy, collaborative economy, IoT, AI, and
              education - always with the same principle: open, accessible, and built for the real world.
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
