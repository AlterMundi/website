import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { HeroDecorations } from "@/components/hero-decorations"
import { CornerBrackets } from "@/components/ui/corner-brackets"

export const metadata = {
  title: "About AlterMundi",
  description: "AlterMundi is a research and experimentation ecosystem exploring Harmonic Information Theory and developing technologies for harmonic pattern analysis.",
}

const paragraphs = [
  `In its current iteration AlterMundi is focused on Harmonically Aware Technology Developement, our historical buildup is not limited to conectivity or open hardware and software, its an infraestructure that allows to comprehend how information is organized. How information travels, propagates and how it can be recieved by networks, sensors, distributed systems and artifitial intelligences and its relation to real world phenomena.`,

  `Our path to this undarstanding began with connectivity. AlterMundi's work was consolidated though mesh networks, distributed routing, open hardware and software, sensor monitoring and telemetry.\nLibreMesh, LibreRouter, 44mesh, LibreAgro and their related ecosystems were not isolated projects: they are different expressions of the same search.\nWe learned to build community mesh networks capable of operating in a robust and replicable way and, in that process, we understood infraestructure as a concept that can be comprehended and deployed in a modular logic.`,

  `This work is not just a chapter of history, it is the material base for everything that came after. The network is no longer just a channel, it becomes a system that can take signals, organize them locally, prioritize what is sallient, reduce noise, distribute attention and allow the emergence of new cones of conciousness.\nAt this point, our trajectory shifts scale, today, we think of this infraestructure as a distributed nervous system, a conjunction of perceptors, integrators and intelligences.\nThe perceptors capture the enviroment signals, the integrators organize, filter and contextualize them locally. Intelligences at different levels — human or artifitial — attach to the information flow and can react within the relevant context when something of importance emerges.\nWith this idea, the knowledge that we adopted and applied though mesh netwoks makes this descentralized logic take a step out of being just a conectivity solution and becomes the base for a distributed nervous system.`,

  `The current AlterMundi approach focuses on building robust systems that have no single point of failure and can handle multi-level attention logic. We want to learn how to recognize when particular signals are valuable, change significantly, get interrupted or deserve more resolution. At this point, the infraestructure evolves from a collection of data pipes to become a means of perception and action.`,

  `This mutation began with a particulary basic question: what is information?`,

  `This question led us to write a very precise hypothesis: information can be described better not through isolated values, but as relation. Ratio, interval, proportion, become the elemental unit of information from which interference pattern can be constructed and derived. Rythm, recurrence, harmonic structure become basic to understanding.`,

  `AlterMundi has recently published the Harmonic Information Theory Foundations manuscript. You can access the book's portal at hit.altermundi.net.`,
]

const p = "#5ec974"
const f = "#5aaa7a"
const l = "#9ed64e"

export default function LearnMorePage() {
  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden noise-texture">
      <PageBackground />
      <HeroDecorations />
      <Navbar />

      <main className="pt-14 sm:pt-16 md:pt-20">
        {/* Title section */}
        <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-4">
          <div className="relative z-10 max-w-3xl mx-auto space-y-3">
            <Link
              href="/"
              className="inline-block text-xs font-mono uppercase tracking-wider text-primary/60 hover:text-primary transition-colors crt-glow"
            >
              ← Back
            </Link>
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; ALTERMUNDI_TODAY</span>
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                About AlterMundi
              </h1>
            </div>
          </div>
        </section>

        {/* Content section */}
        <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
          {/* Fibonacci dot columns flanking card */}
          <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
            <svg className="absolute left-[8%] top-[20%] w-2 h-32 opacity-40 animate-[float-wide_14s_ease-in-out_infinite]"
              viewBox="0 0 8 130" fill="none">
              {[8, 21, 42, 76, 121].map((y, i) => (
                <circle key={i} cx="4" cy={y} r="1.3" fill={[p, f, l, f, p][i]} />
              ))}
            </svg>
            <svg className="absolute right-[8%] top-[30%] w-2 h-32 opacity-40 animate-[float-wide_12s_ease-in-out_2s_infinite]"
              viewBox="0 0 8 130" fill="none">
              {[8, 21, 42, 76, 121].map((y, i) => (
                <circle key={i} cx="4" cy={y} r="1.3" fill={[f, l, p, l, f][i]} />
              ))}
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="relative bg-card border-2 border-border p-6 sm:p-8 lg:p-12">
              <CornerBrackets />
              <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed font-sans">
                {paragraphs.map((block, i) => (
                  <p key={i} style={{ whiteSpace: "pre-line" }}>
                    {block}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
