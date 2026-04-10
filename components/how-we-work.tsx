import { CornerBrackets } from "@/components/ui/corner-brackets"
import { HowWeWorkDecorations } from "@/components/section-decorations"

export function HowWeWork() {
  const areas = [
    {
      title: "Network Infrastructure",
      description:
        "The material base for everything else. Open hardware, mesh networking software (LibreMesh, LibreRouter), distributed routing, and public policy advocacy for community-owned connectivity.",
    },
    {
      title: "Perceptors",
      description:
        "IoT sensors, environmental monitors, and signal-capture systems that read the world — fire, water, soil, air, motion. The nervous system starts with perception.",
    },
    {
      title: "Integrators",
      description:
        "Local processing layers that organize, filter, and contextualize signals before they travel further. Intelligence at the edge — reducing noise, prioritizing what matters.",
    },
    {
      title: "Intelligences",
      description:
        "Open AI tools and pattern-recognition systems that operate on locally processed data. Decentralized inference, anomaly detection, and decision support — without cloud dependency.",
    },
    {
      title: "Renewable Energy",
      description:
        "Accessible and sustainable power infrastructure for long-term operation in resource-limited contexts. Energy resilience is infrastructure resilience.",
    },
    {
      title: "Education",
      description:
        "Knowledge transfer that makes the whole system reproducible. We cultivate the capacity for communities to understand, maintain, and extend what we build together.",
    },
  ]

  return (
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20 border-t border-border scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20">
      <HowWeWorkDecorations />
      <div className="relative z-10 space-y-6 sm:space-y-8">
        <div className="space-y-3 sm:space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; AREAS_OF_WORK</span>
          <h2 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">What We Work On</h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl">
            A distributed nervous system with no single point of failure needs every layer working together. We build
            the network infrastructure that carries signals, the perceptors that capture them, the integrators that
            organize and contextualize them locally, and the intelligences — human or artificial — that recognize when
            a signal is valuable, has changed significantly, or deserves more resolution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {areas.map((area) => (
            <div
              key={area.title}
              className="relative bg-card border-2 border-border p-4 sm:p-5 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(94,201,116,0.2)]"
            >
              <CornerBrackets size="sm" />
              <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">{area.title}</h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
