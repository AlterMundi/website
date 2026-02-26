"use client"

/**
 * Decorative graphics for the hero section.
 * Brand palette: primary (#074434), secondary (#abc685), accent (#e8ff99),
 * isotipo: gold (#e9d942), forest (#3d745e), lime (#8aba4b), navy (#284a65).
 */

const primary = "#074434"
const secondary = "#abc685"
const accent = "#e8ff99"
const gold = "#e9d942"
const forest = "#3d745e"
const lime = "#8aba4b"
const navy = "#284a65"

export function HeroDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Top-left: network node cluster */}
      <svg
        className="absolute top-8 left-4 lg:top-12 lg:left-8 w-24 h-24 lg:w-32 lg:h-32"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle cx="30" cy="30" r="4" fill={primary} />
        <circle cx="60" cy="20" r="3" fill={forest} />
        <circle cx="90" cy="40" r="4" fill={primary} />
        <circle cx="20" cy="60" r="3" fill={lime} />
        <circle cx="50" cy="55" r="5" fill={gold} />
        <line x1="30" y1="30" x2="60" y2="20" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="60" y1="20" x2="90" y2="40" stroke={forest} strokeWidth="1.5" opacity="0.6" />
        <line x1="30" y1="30" x2="50" y2="55" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="50" y1="55" x2="20" y2="60" stroke={lime} strokeWidth="1.5" opacity="0.6" />
      </svg>

      {/* Top-right: network cluster (matches top-left style) */}
      <svg
        className="absolute top-8 right-4 lg:top-12 lg:right-8 w-24 h-24 lg:w-32 lg:h-32"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle cx="90" cy="30" r="4" fill={primary} />
        <circle cx="60" cy="20" r="3" fill={forest} />
        <circle cx="30" cy="40" r="4" fill={lime} />
        <circle cx="100" cy="60" r="3" fill={navy} />
        <circle cx="70" cy="55" r="5" fill={gold} />
        <line x1="90" y1="30" x2="60" y2="20" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="60" y1="20" x2="30" y2="40" stroke={forest} strokeWidth="1.5" opacity="0.6" />
        <line x1="90" y1="30" x2="70" y2="55" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="70" y1="55" x2="100" y2="60" stroke={lime} strokeWidth="1.5" opacity="0.6" />
      </svg>

      {/* Bottom-left: circuit lines */}
      <svg
        className="absolute bottom-16 left-4 lg:bottom-20 lg:left-8 w-28 h-28 lg:w-36 lg:h-36"
        viewBox="0 0 140 140"
        fill="none"
      >
        <path d="M0 80 L40 80 L40 40 L80 40" stroke={primary} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M100 120 L100 60 L140 60" stroke={lime} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M20 100 L60 100 L60 120" stroke={forest} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
        <circle cx="40" cy="80" r="4" fill={primary} />
        <circle cx="80" cy="40" r="4" fill={forest} />
        <circle cx="100" cy="60" r="4" fill={gold} />
        <circle cx="60" cy="100" r="3" fill={lime} />
      </svg>

      {/* Bottom-right: network cluster */}
      <svg
        className="absolute bottom-16 right-4 lg:bottom-20 lg:right-8 w-24 h-24 lg:w-32 lg:h-32"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle cx="90" cy="90" r="4" fill={primary} />
        <circle cx="60" cy="100" r="3" fill={lime} />
        <circle cx="30" cy="80" r="4" fill={navy} />
        <circle cx="100" cy="60" r="3" fill={forest} />
        <circle cx="55" cy="65" r="5" fill={gold} />
        <line x1="90" y1="90" x2="60" y2="100" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="60" y1="100" x2="30" y2="80" stroke={lime} strokeWidth="1.5" opacity="0.6" />
        <line x1="90" y1="90" x2="55" y2="65" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="55" y1="65" x2="100" y2="60" stroke={forest} strokeWidth="1.5" opacity="0.6" />
      </svg>

      {/* Side accents - thicker, more visible */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-0.5 h-40 bg-primary/30" />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-0.5 h-40 bg-primary/30" />

      {/* Left edge: scattered nodes */}
      <svg className="absolute left-2 lg:left-6 top-[35%] w-16 h-16" viewBox="0 0 60 60" fill="none">
        <circle cx="10" cy="15" r="2.5" fill={primary} />
        <circle cx="25" cy="45" r="2" fill={lime} />
        <line x1="10" y1="15" x2="25" y2="45" stroke={primary} strokeWidth="1" opacity="0.4" />
      </svg>
      <svg className="absolute left-4 lg:left-8 top-[65%] w-14 h-14" viewBox="0 0 50 50" fill="none">
        <circle cx="15" cy="8" r="2" fill={forest} />
        <circle cx="8" cy="35" r="2" fill={primary} />
      </svg>

      {/* Right edge: scattered nodes */}
      <svg className="absolute right-2 lg:right-6 top-[35%] w-16 h-16" viewBox="0 0 60 60" fill="none">
        <circle cx="50" cy="15" r="2.5" fill={primary} />
        <circle cx="35" cy="45" r="2" fill={lime} />
        <line x1="50" y1="15" x2="35" y2="45" stroke={primary} strokeWidth="1" opacity="0.4" />
      </svg>
      <svg className="absolute right-4 lg:right-8 top-[65%] w-14 h-14" viewBox="0 0 50 50" fill="none">
        <circle cx="35" cy="8" r="2" fill={forest} />
        <circle cx="42" cy="35" r="2" fill={primary} />
      </svg>
    </div>
  )
}
