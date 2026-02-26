"use client"

/**
 * Decorative graphics for page sections. Variants share the brand palette
 * but use different patterns for visual interest across the site.
 * Colors: primary (#074434), secondary (#abc685), gold (#e9d942),
 * forest (#3d745e), lime (#8aba4b), navy (#284a65).
 */

const primary = "#074434"
const secondary = "#abc685"
const gold = "#e9d942"
const forest = "#3d745e"
const lime = "#8aba4b"
const navy = "#284a65"

/** About: node clusters, lines — pushed to edges to avoid overlapping content */
export function AboutDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Bottom-left: network cluster */}
      <svg className="absolute bottom-12 left-0 lg:left-2 w-20 h-20 lg:w-24 lg:h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="20" cy="60" r="3" fill={primary} />
        <circle cx="45" cy="75" r="2.5" fill={forest} />
        <circle cx="15" cy="25" r="2.5" fill={lime} />
        <circle cx="55" cy="50" r="3" fill={gold} />
        <line x1="20" y1="60" x2="45" y2="75" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="20" y1="60" x2="15" y2="25" stroke={forest} strokeWidth="1.5" opacity="0.6" />
        <line x1="20" y1="60" x2="55" y2="50" stroke={lime} strokeWidth="1.5" opacity="0.6" />
      </svg>
      {/* Right side: vertical accent + nodes — at far edge */}
      <div
        className="absolute right-0 lg:right-2 top-1/3 w-0.5 h-20"
        style={{ background: `linear-gradient(to bottom, ${primary}66, ${forest}66, ${lime}66)` }}
      />
      <svg className="absolute right-1 lg:right-2 top-[50%] w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="25" cy="15" r="2" fill={forest} />
        <circle cx="10" cy="30" r="1.5" fill={primary} />
      </svg>
      {/* Top-left: small cluster */}
      <svg className="absolute top-16 left-0 lg:left-2 w-12 h-12" viewBox="0 0 50 50" fill="none">
        <circle cx="12" cy="15" r="2" fill={primary} />
        <circle cx="35" cy="25" r="1.5" fill={lime} />
      </svg>
    </div>
  )
}

/** HowWeWork: circuit lines + node clusters — outside content (negative offset) */
export function HowWeWorkDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden>
      {/* Top-right: circuit */}
      <svg className="absolute top-12 -right-2 lg:right-0 w-24 h-24 lg:w-28 lg:h-28" viewBox="0 0 120 120" fill="none">
        <path d="M95 25 L55 25 L55 55 L25 55" stroke={primary} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M105 75 L75 75 L75 95" stroke={forest} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M15 85 L45 85 L45 65" stroke={lime} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
        <circle cx="55" cy="25" r="3" fill={primary} />
        <circle cx="25" cy="55" r="3" fill={lime} />
        <circle cx="75" cy="75" r="3" fill={forest} />
        <circle cx="45" cy="65" r="2" fill={gold} />
      </svg>
      {/* Bottom-left: network cluster — pushed outside to avoid overlapping cards */}
      <svg className="absolute bottom-12 -left-4 lg:-left-2 w-20 h-20 lg:w-24 lg:h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="20" cy="75" r="3" fill={primary} />
        <circle cx="50" cy="85" r="2.5" fill={forest} />
        <circle cx="15" cy="40" r="2.5" fill={gold} />
        <circle cx="45" cy="55" r="2" fill={lime} />
        <line x1="20" y1="75" x2="50" y2="85" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="20" y1="75" x2="15" y2="40" stroke={forest} strokeWidth="1.5" opacity="0.6" />
      </svg>
      {/* Top-left: nodes — pushed outside to avoid overlapping header */}
      <svg className="absolute top-12 -left-4 lg:-left-2 w-14 h-14" viewBox="0 0 50 50" fill="none">
        <circle cx="15" cy="15" r="2" fill={primary} />
        <circle cx="35" cy="30" r="2" fill={lime} />
        <line x1="15" y1="15" x2="35" y2="30" stroke={primary} strokeWidth="1" opacity="0.5" />
      </svg>
      {/* Right side: dotted vertical */}
      <svg className="absolute -right-2 lg:right-0 top-[30%] h-32 w-2" viewBox="0 0 8 120" fill="none" preserveAspectRatio="none">
        <circle cx="4" cy="10" r="1.2" fill={primary} />
        <circle cx="4" cy="30" r="1.2" fill={forest} />
        <circle cx="4" cy="50" r="1.2" fill={lime} />
        <circle cx="4" cy="70" r="1.2" fill={gold} />
        <circle cx="4" cy="90" r="1.2" fill={primary} />
      </svg>
    </div>
  )
}

/** Projects: vertical accent, corner clusters — pushed to edges */
export function ProjectsDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Left: vertical dotted line + nodes */}
      <svg className="absolute left-0 lg:left-2 top-20 w-2 h-36 lg:h-40" viewBox="0 0 12 192" fill="none" preserveAspectRatio="none">
        <circle cx="6" cy="12" r="1.5" fill={primary} />
        <circle cx="6" cy="36" r="1.5" fill={forest} />
        <circle cx="6" cy="60" r="1.5" fill={lime} />
        <circle cx="6" cy="84" r="1.5" fill={gold} />
        <circle cx="6" cy="108" r="1.5" fill={primary} />
      </svg>
      <svg className="absolute left-1 lg:left-2 top-[35%] w-12 h-12" viewBox="0 0 50 50" fill="none">
        <circle cx="12" cy="25" r="2" fill={primary} />
        <circle cx="35" cy="15" r="2" fill={lime} />
        <line x1="12" y1="25" x2="35" y2="15" stroke={forest} strokeWidth="1" opacity="0.5" />
      </svg>
      {/* Top-right: network cluster */}
      <svg className="absolute top-12 right-0 lg:right-2 w-20 h-20 lg:w-24 lg:h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="75" cy="20" r="3" fill={primary} />
        <circle cx="55" cy="40" r="2.5" fill={forest} />
        <circle cx="85" cy="55" r="3" fill={gold} />
        <circle cx="45" cy="30" r="2" fill={lime} />
        <line x1="75" y1="20" x2="55" y2="40" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="75" y1="20" x2="85" y2="55" stroke={forest} strokeWidth="1.5" opacity="0.6" />
        <line x1="55" y1="40" x2="45" y2="30" stroke={lime} strokeWidth="1.5" opacity="0.6" />
      </svg>
      {/* Bottom-right: circuit accent */}
      <svg className="absolute bottom-16 right-0 lg:right-2 w-16 h-16 lg:w-20 lg:h-20" viewBox="0 0 80 80" fill="none">
        <path d="M60 60 L30 60 L30 40" stroke={primary} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M70 25 L55 25 L55 45" stroke={lime} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="30" cy="60" r="2.5" fill={primary} />
        <circle cx="30" cy="40" r="2" fill={forest} />
        <circle cx="55" cy="25" r="2" fill={gold} />
      </svg>
      {/* Bottom-left: small cluster */}
      <svg className="absolute bottom-16 left-0 lg:left-2 w-12 h-12" viewBox="0 0 50 50" fill="none">
        <circle cx="15" cy="35" r="2" fill={gold} />
        <circle cx="35" cy="15" r="1.5" fill={navy} />
      </svg>
    </div>
  )
}

/** Contact: corner clusters, side accents — pushed to edges */
export function ContactDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {/* Top-left: network cluster */}
      <svg className="absolute top-12 left-0 lg:left-2 w-20 h-20 lg:w-24 lg:h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="25" cy="25" r="3" fill={primary} />
        <circle cx="55" cy="35" r="2.5" fill={forest} />
        <circle cx="20" cy="55" r="2.5" fill={lime} />
        <circle cx="50" cy="15" r="2" fill={gold} />
        <line x1="25" y1="25" x2="55" y2="35" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="25" y1="25" x2="20" y2="55" stroke={forest} strokeWidth="1.5" opacity="0.6" />
        <line x1="25" y1="25" x2="50" y2="15" stroke={lime} strokeWidth="1.5" opacity="0.6" />
      </svg>
      {/* Bottom-right: cluster */}
      <svg className="absolute bottom-12 right-0 lg:right-2 w-20 h-20 lg:w-24 lg:h-24" viewBox="0 0 100 100" fill="none">
        <circle cx="75" cy="75" r="3" fill={primary} />
        <circle cx="45" cy="65" r="2.5" fill={lime} />
        <circle cx="80" cy="45" r="2.5" fill={forest} />
        <circle cx="55" cy="85" r="2" fill={gold} />
        <line x1="75" y1="75" x2="45" y2="65" stroke={primary} strokeWidth="1.5" opacity="0.6" />
        <line x1="75" y1="75" x2="80" y2="45" stroke={forest} strokeWidth="1.5" opacity="0.6" />
      </svg>
      {/* Left side: vertical bar */}
      <div
        className="absolute left-0 lg:left-2 top-1/3 h-16 w-0.5"
        style={{ background: `linear-gradient(to bottom, ${primary}50, ${lime}50)` }}
      />
      {/* Right side: nodes */}
      <svg className="absolute right-0 lg:right-2 top-[45%] w-12 h-12" viewBox="0 0 50 50" fill="none">
        <circle cx="35" cy="15" r="2" fill={forest} />
        <circle cx="15" cy="35" r="2" fill={primary} />
        <line x1="35" y1="15" x2="15" y2="35" stroke={lime} strokeWidth="1" opacity="0.5" />
      </svg>
      <svg className="absolute right-1 lg:right-2 top-[75%] w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="25" cy="25" r="2" fill={gold} />
        <circle cx="10" cy="15" r="1.5" fill={primary} />
      </svg>
      {/* Bottom center: colored dotted line */}
      <svg className="absolute left-1/2 bottom-12 -translate-x-1/2 w-28 h-2" viewBox="0 0 112 8" fill="none">
        <circle cx="14" cy="4" r="1.5" fill={primary} />
        <circle cx="35" cy="4" r="1.5" fill={forest} />
        <circle cx="56" cy="4" r="1.5" fill={lime} />
        <circle cx="77" cy="4" r="1.5" fill={gold} />
        <circle cx="98" cy="4" r="1.5" fill={primary} />
      </svg>
    </div>
  )
}

/** Footer: subtle corner accents — at edges */
export function FooterDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg className="absolute top-8 left-2 lg:left-4 w-12 h-12 opacity-70" viewBox="0 0 50 50" fill="none">
        <circle cx="15" cy="20" r="2" fill={primary} />
        <circle cx="35" cy="35" r="1.5" fill={forest} />
      </svg>
      <svg className="absolute top-8 right-2 lg:right-4 w-12 h-12 opacity-70" viewBox="0 0 50 50" fill="none">
        <circle cx="35" cy="20" r="2" fill={lime} />
        <circle cx="15" cy="35" r="1.5" fill={primary} />
      </svg>
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-16 h-px bg-primary/30" />
    </div>
  )
}
