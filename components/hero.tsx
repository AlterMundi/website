import { ScrollLink } from "@/components/ui/scroll-link"
import { Button } from "@/components/ui/button"

// Per-letter offsets: alternate above/below with slight horizontal drift
// so each letter feels like it's arriving from its own place on screen
const LETTER_OFFSETS: { ty: string; tx: string }[] = [
  { ty: "-48px", tx: "-6px" }, // A
  { ty: "36px", tx: "4px" }, // l
  { ty: "-28px", tx: "-3px" }, // t
  { ty: "44px", tx: "5px" }, // e
  { ty: "-38px", tx: "-4px" }, // r
  { ty: "32px", tx: "6px" }, // M
  { ty: "-42px", tx: "-5px" }, // u
  { ty: "40px", tx: "3px" }, // n
  { ty: "-30px", tx: "-6px" }, // d
  { ty: "46px", tx: "4px" }, // i
]

const WORD = "AlterMundi"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-[calc(100dvh-3.5rem)] sm:h-[calc(100dvh-4rem)] md:h-[calc(100dvh-5rem)] overflow-hidden px-4"
    >
      {/* Animated AlterMundi title */}
      <h1
        className="font-sans font-black text-center px-4 select-none z-10 mb-8"
        style={{
          fontSize: "clamp(2rem, 10vw, 6rem)",
          letterSpacing: "-0.02em",
          color: "#ffffff",
          textShadow: "0 0 80px rgba(255,255,255,0.08), 0 4px 32px rgba(0,0,0,0.6)",
        }}
      >
        {WORD.split("").map((letter, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              "--ty": LETTER_OFFSETS[i].ty,
              "--tx": LETTER_OFFSETS[i].tx,
              animation: `hero-letter-in 1.1s cubic-bezier(0.16, 1, 0.3, 1) both`,
              animationDelay: `${0.08 + i * 0.09}s`,
            } as React.CSSProperties}
          >
            {letter}
          </span>
        ))}
      </h1>

      {/* Description text */}
      <div
        className="relative z-10 flex flex-col items-center gap-4 text-center max-w-3xl"
        style={{ animation: "fade-in 1.2s ease both 1.2s" }}
      >
        <p
          className="text-foreground/80 leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)", maxWidth: "540px" }}
        >
          AlterMundi is a research and experimentation ecosystem converging
          on a common core: the exploration of{" "}
          <a
            href="https://hit.altermundi.net"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            Harmonic Information Theory (HIT)
          </a>{" "}
          and the development of technologies capable of investigating,
          translating, and applying harmonic patterns across physical,
          biological, perceptual, and computational systems.
        </p>
        <p
          className="text-foreground/60 leading-relaxed"
          style={{ fontSize: "clamp(0.85rem, 1.5vw, 1rem)", maxWidth: "540px" }}
        >
          With this perspective and a human-centered focus, it sustains and
          projects other areas of work linked to connectivity, agroecological
          production, monitoring and prevention, health, and AI. We currently
          work with human-AI multi-agent systems across most of our projects.
        </p>
        <Button asChild variant="outline" size="sm" className="mt-2">
          <a href="/about/">Learn more</a>
        </Button>
      </div>

      {/* Scroll arrow */}
      <div
        className="absolute bottom-10 sm:bottom-12 z-10"
        style={{ animation: "hero-arrow-appear 0.5s ease both 1.8s" }}
      >
        <ScrollLink
          targetId="projects"
          className="text-primary/50 hover:text-primary transition-colors duration-300 focus:outline-none block"
          aria-label="Scroll to Projects"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "arrow-bounce 2s ease-in-out infinite 2.3s" }}
          >
            <polyline points="6 13 18 25 30 13" />
          </svg>
        </ScrollLink>
      </div>
    </section>
  )
}
