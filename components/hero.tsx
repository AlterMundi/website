import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/ui/scroll-link"
import { HeroDecorations } from "@/components/hero-decorations"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between py-12 lg:py-16 container mx-auto px-6 lg:px-12 scroll-mt-20 overflow-hidden"
    >
      <HeroDecorations />
      {/* Top: Eyebrow */}
      <div className="flex justify-center z-10">
        <span className="text-xs font-mono uppercase tracking-wider text-primary px-3 py-1.5 border-2 border-primary bg-primary/5">
          <span className="crt-glow">&gt; OPEN SOURCE TECHNOLOGY</span>
        </span>
      </div>

      {/* Middle: Title + paragraph — exactly screen-centered (relative to section) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-balance">
            Engineering Open Tools for the{" "}
            <span className="font-sans font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
              Real World
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
            We design and build open-source hardware and software for resilient infrastructure — from
            community networks and fire detection to agricultural tools and beyond.
          </p>
        </div>
      </div>

      {/* Bottom: Actions + status */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 lg:gap-6 z-10">
        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg">
            <ScrollLink targetId="projects">Explore projects</ScrollLink>
          </Button>
          <Button asChild variant="outline" size="lg">
            <ScrollLink targetId="contact">Work with us</ScrollLink>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-card border-2 border-border text-xs">
            <div className="w-2 h-2 bg-secondary animate-pulse" />
            <span className="font-mono uppercase tracking-wider">3 Active Projects</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-card border-2 border-primary/30 text-xs">
            <span className="font-mono uppercase tracking-wider text-primary">Open Source</span>
          </div>
        </div>
      </div>
    </section>
  )
}
