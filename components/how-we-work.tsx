import { CornerBrackets } from "@/components/ui/corner-brackets"
import { HowWeWorkDecorations } from "@/components/section-decorations"

export function HowWeWork() {
  const areas = [
    {
      title: "Connectivity",
      description:
        "We promote the co-creation of internet infrastructure - open hardware, mesh networking software, and public policy advocacy.",
    },
    {
      title: "Collaborative Economy",
      description:
        "We provide technical and methodological support for community-driven economic projects, improving local management, resources, and growth.",
    },
    {
      title: "Renewable Energy",
      description:
        "We develop accessible and sustainable technologies for responsible energy use, designed for long-term viability in resource-limited contexts.",
    },
    {
      title: "Artificial Intelligence",
      description:
        "We drive access to and decentralization of AI, building practical open tools that strengthen technological autonomy.",
    },
    {
      title: "Education",
      description:
        "We foster learning that unlocks creative and technological potential, cultivating individual and collective skills for a changing world.",
    },
    {
      title: "IoT & Monitoring",
      description:
        "We build and simplify monitoring and control systems that strengthen local production and safety projects.",
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
            We work across six interconnected areas - all driven by the same approach: listen to communities,
            co-design solutions, build open tools, and support long-term autonomy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {areas.map((area) => (
            <div
              key={area.title}
              className="relative bg-card border-2 border-border p-4 sm:p-5 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(13,81,100,0.15)]"
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
