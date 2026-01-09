"use client"

import { Button } from "@/components/ui/button"
import { NetworkMesh } from "@/components/network-mesh"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="container mx-auto px-4 lg:px-8 pt-8 pb-16 lg:pt-10 lg:pb-20 scroll-mt-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-wider text-muted px-2 py-1 border border-border rounded">
                Open Source Technology
              </span>
            </div>

            <h1 className="font-mono text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
              Engineering Open Tools for the <span className="font-serif italic text-5xl lg:text-7xl">Real World</span>
            </h1>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              We design and build open-source hardware and software for resilient infrastructure — networks, safety
              systems, and field-ready tools.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Explore projects
            </Button>
            <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
              Work with us
            </Button>
          </div>

          {/* Status strip */}
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded text-xs">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-mono">Active Projects: 3</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded text-xs">
              <span className="font-mono">Open Source</span>
            </div>
          </div>
        </div>

        {/* Right: Network Mesh Illustration */}
        <div className="relative">
          <div className="bg-card border border-border rounded p-8 lg:p-12">
            <NetworkMesh />
          </div>
        </div>
      </div>
    </section>
  )
}
