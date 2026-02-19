import { Button } from "@/components/ui/button"
import { NetworkMesh } from "@/components/network-mesh"
import { TerminalCard } from "@/components/ui/terminal-card"
import { ScrollLink } from "@/components/ui/scroll-link"

export function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 lg:px-8 pt-8 pb-16 lg:pt-10 lg:pb-20 scroll-mt-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-wider text-primary px-3 py-1.5 border-2 border-primary bg-primary/5">
                <span className="crt-glow">&gt; OPEN SOURCE TECHNOLOGY</span>
              </span>
            </div>

            <h1 className="font-mono text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              Engineering Open Tools for the <span className="font-sans font-extrabold text-5xl lg:text-7xl">Real World</span>
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              We design and build open-source hardware and software for resilient infrastructure — from community
              networks and fire detection to agricultural tools and beyond.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <ScrollLink targetId="projects">Explore projects</ScrollLink>
            </Button>
            <Button asChild variant="outline" size="lg">
              <ScrollLink targetId="contact">Work with us</ScrollLink>
            </Button>
          </div>

          {/* Status strip */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card border-2 border-border text-xs">
              <div className="w-2 h-2 bg-secondary animate-pulse" />
              <span className="font-mono uppercase tracking-wider">Active Projects: 3</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card border-2 border-primary/30 text-xs">
              <span className="font-mono uppercase tracking-wider text-primary">Open Source</span>
            </div>
          </div>
        </div>

        {/* Right: Network Mesh Illustration */}
        <div className="relative">
          <TerminalCard header="NETWORK_STATUS" variant="glow" className="scanlines">
            <div className="p-8 lg:p-12">
              <NetworkMesh />
            </div>
          </TerminalCard>
        </div>
      </div>
    </section>
  )
}
