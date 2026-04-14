"use client"

const primary = "#5ec974"
const forest = "#5aaa7a"
const lime = "#9ed64e"
const gold = "#e9d942"

const FIB_CLR = [primary, forest, lime, gold, primary]

/** About */
export function AboutDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      <svg
        className="absolute right-2 lg:right-4 top-1/3 w-2 h-28"
        viewBox="0 0 8 120" fill="none"
        style={{ animation: "float-wide 14s ease-in-out 1s infinite" }}
      >
        {[8, 21, 42, 76].map((y, i) => (
          <circle key={i} cx="4" cy={y} r="1.2" fill={FIB_CLR[i]} opacity="0.35" />
        ))}
      </svg>
    </div>
  )
}

/** HowWeWork */
export function HowWeWorkDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      <svg
        className="absolute right-2 lg:right-4 top-[30%] w-2 h-24"
        viewBox="0 0 8 100" fill="none"
        style={{ animation: "float-wide 12s ease-in-out 1s infinite" }}
      >
        {[8, 21, 42, 76].map((y, i) => (
          <circle key={i} cx="4" cy={y} r="1.2" fill={FIB_CLR[i]} opacity="0.35" />
        ))}
      </svg>
    </div>
  )
}

/** Projects */
export function ProjectsDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      <svg
        className="absolute left-2 lg:left-4 top-20 w-2 h-40"
        viewBox="0 0 8 160" fill="none"
        style={{ animation: "float-wide 14s ease-in-out infinite" }}
      >
        {[8, 21, 42, 76, 131].map((y, i) => (
          <circle key={i} cx="4" cy={y} r="1.2" fill={FIB_CLR[i]} opacity="0.35" />
        ))}
      </svg>
    </div>
  )
}

/** Contact */
export function ContactDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      <svg
        className="absolute left-2 lg:left-4 top-1/3 w-2 h-20"
        viewBox="0 0 8 80" fill="none"
        style={{ animation: "float-wide 12s ease-in-out 1s infinite" }}
      >
        {[8, 21, 42].map((y, i) => (
          <circle key={i} cx="4" cy={y} r="1.2" fill={FIB_CLR[i]} opacity="0.35" />
        ))}
      </svg>
    </div>
  )
}

/** Footer */
export function FooterDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible opacity-60" aria-hidden="true">
      <svg
        className="absolute left-1/2 top-6 -translate-x-1/2 w-20 h-1"
        viewBox="0 0 120 4" fill="none"
      >
        {[10, 23, 44, 78].map((x, i) => (
          <circle key={i} cx={x} cy="2" r="1" fill={FIB_CLR[i]} opacity="0.35" />
        ))}
      </svg>
    </div>
  )
}
