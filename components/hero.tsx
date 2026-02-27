import { Button } from "@/components/ui/button"
import { ScrollLink } from "@/components/ui/scroll-link"
import { HeroDecorations } from "@/components/hero-decorations"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100dvh-5rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col py-8 sm:py-12 lg:py-16 container mx-auto px-4 sm:px-6 lg:px-12 scroll-mt-20 overflow-hidden"
    >
      <HeroDecorations />

      {/* Top: Eyebrow */}
      <div
        className="flex justify-center z-10 shrink-0 animate-[fade-in-up_400ms_ease-out_both] [animation-delay:100ms]"
      >
        <span className="text-[10px] min-[375px]:text-xs font-mono uppercase tracking-wider text-primary px-2 sm:px-3 py-1 sm:py-1.5 border-2 border-primary bg-primary/5">
          <span className="crt-glow">&gt; OPEN SOURCE TECHNOLOGY</span>
        </span>
      </div>

      {/* Middle: Title + paragraph — flex-1 keeps it in flow, prevents overlap with bottom */}
      <div className="flex flex-1 min-h-0 flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6 lg:space-y-8">
          <h1
            className="font-mono text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-balance animate-[fade-in-up_500ms_ease-out_both] [animation-delay:250ms]"
          >
            Engineering Open Tools for the{" "}
            <span className="font-sans font-extrabold text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl block sm:inline mt-1 sm:mt-0">
              Real World
            </span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-3xl animate-[fade-in-up_500ms_ease-out_both] [animation-delay:400ms]"
          >
            We design and build open-source hardware and software for resilient infrastructure — from
            community networks and fire detection to agricultural tools and beyond.
          </p>
        </div>
      </div>

      {/* Bottom: Actions + status — shrink-0 keeps it from overlapping middle */}
      <div
        className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 z-10 shrink-0 pt-4 sm:pt-6 animate-[fade-in-up_400ms_ease-out_both] [animation-delay:550ms]"
      >
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
          <Button asChild size="lg">
            <ScrollLink targetId="projects" scrollBlock="start">Explore projects</ScrollLink>
          </Button>
          <Button asChild variant="outline" size="lg">
            <ScrollLink targetId="contact">Work with us</ScrollLink>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 bg-card border-2 border-border text-[10px] min-[375px]:text-xs">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary animate-pulse shrink-0" />
            <span className="font-mono uppercase tracking-wider">3 Active Projects</span>
          </div>
          <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 bg-card border-2 border-primary/30 text-[10px] min-[375px]:text-xs">
            <span className="font-mono uppercase tracking-wider text-primary">Open Source</span>
          </div>
        </div>
      </div>
    </section>
  )
}
