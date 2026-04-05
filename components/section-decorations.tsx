"use client"

const primary = "#5ec974"
const forest  = "#5aaa7a"
const lime    = "#9ed64e"
const gold    = "#e9d942"

// Full Fibonacci spiral — CW, radii 55→34→21→13→8, viewBox "0 0 95 60"
// Same path used everywhere so all spirals share the same recognisable shape.
const SPIRAL_PATH =
  "M 89 0 A 55 55 0 0 1 34 55 A 34 34 0 0 1 0 21 A 21 21 0 0 1 21 0 A 13 13 0 0 1 34 13 A 8 8 0 0 1 26 21"

const SPIRAL_NODES = [
  { cx: 89, cy:  0, r: 3,   fill: primary },
  { cx: 34, cy: 55, r: 2.5, fill: forest  },
  { cx:  0, cy: 21, r: 2,   fill: lime    },
  { cx: 21, cy:  0, r: 1.5, fill: gold    },
]

const FIB_CLR = [primary, forest, lime, gold, primary]

/** About */
export function AboutDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      {/* Bottom-left: spiral flipped vertically */}
      <svg
        className="absolute bottom-8 left-2 lg:left-4 w-20 lg:w-28"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 10s ease-in-out infinite" }}
      >
        <g transform="scale(1,-1) translate(0,-60)">
          <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
          {SPIRAL_NODES.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} fillOpacity="0.5" />
          ))}
        </g>
      </svg>

      {/* Right: Fibonacci dot column */}
      <svg
        className="absolute right-2 lg:right-4 top-1/3 w-2 h-28"
        viewBox="0 0 8 120" fill="none"
        style={{ animation: "float-wide 14s ease-in-out 1s infinite" }}
      >
        {[8, 21, 42, 76].map((y, i) => (
          <circle key={i} cx="4" cy={y} r="1.2" fill={FIB_CLR[i]} opacity="0.4" />
        ))}
      </svg>

      {/* Top-left: faint accent spiral mirrored */}
      <svg
        className="absolute top-10 left-2 lg:left-4 w-16 lg:w-20"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 12s ease-in-out 3s infinite" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={forest} strokeWidth="1" opacity="0.2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}

/** HowWeWork */
export function HowWeWorkDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      {/* Top-right: spiral mirrored horizontally */}
      <svg
        className="absolute top-8 right-2 lg:right-4 w-20 lg:w-28"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 12s ease-in-out infinite" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
          {SPIRAL_NODES.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} fillOpacity="0.5" />
          ))}
        </g>
      </svg>

      {/* Bottom-left: Fibonacci dot row */}
      <svg
        className="absolute bottom-10 left-2 lg:left-4 w-28 h-2"
        viewBox="0 0 144 8" fill="none"
        style={{ animation: "float-wide 10s ease-in-out 2s infinite" }}
      >
        {[8, 21, 42, 76, 131].map((x, i) => (
          <circle key={i} cx={x} cy="4" r="1.2" fill={FIB_CLR[i]} opacity="0.4" />
        ))}
      </svg>

      {/* Right: Fibonacci dot column */}
      <svg
        className="absolute right-2 lg:right-4 top-[30%] w-2 h-24"
        viewBox="0 0 8 100" fill="none"
        style={{ animation: "float-wide 12s ease-in-out 1s infinite" }}
      >
        {[8, 21, 42, 76].map((y, i) => (
          <circle key={i} cx="4" cy={y} r="1.2" fill={FIB_CLR[i]} opacity="0.4" />
        ))}
      </svg>
    </div>
  )
}

/** Projects */
export function ProjectsDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      {/* Left: Fibonacci dot column */}
      <svg
        className="absolute left-2 lg:left-4 top-20 w-2 h-40"
        viewBox="0 0 8 160" fill="none"
        style={{ animation: "float-wide 14s ease-in-out infinite" }}
      >
        {[8, 21, 42, 76, 131].map((y, i) => (
          <circle key={i} cx="4" cy={y} r="1.2" fill={FIB_CLR[i]} opacity="0.4" />
        ))}
      </svg>

      {/* Top-right: spiral mirrored with nodes */}
      <svg
        className="absolute top-8 right-2 lg:right-4 w-20 lg:w-28"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 10s ease-in-out 1s infinite" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
          {SPIRAL_NODES.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r}
              fill={[primary, gold, lime, forest][i]} fillOpacity="0.5" />
          ))}
        </g>
      </svg>

      {/* Bottom-left: faint spiral */}
      <svg
        className="absolute bottom-12 left-2 lg:left-4 w-16 lg:w-20"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 12s ease-in-out 2s infinite" }}
      >
        <path d={SPIRAL_PATH} stroke={lime} strokeWidth="1" opacity="0.25" strokeLinecap="round" />
      </svg>
    </div>
  )
}

/** Contact */
export function ContactDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      {/* Top-left: spiral with nodes */}
      <svg
        className="absolute top-10 left-2 lg:left-4 w-20 lg:w-28"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 10s ease-in-out infinite" }}
      >
        <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        {SPIRAL_NODES.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} fillOpacity="0.5" />
        ))}
      </svg>

      {/* Bottom-right: spiral rotated 180° with nodes */}
      <svg
        className="absolute bottom-10 right-2 lg:right-4 w-20 lg:w-28"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 10s ease-in-out 2s infinite" }}
      >
        <g transform="scale(-1,-1) translate(-95,-60)">
          <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
          {SPIRAL_NODES.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r}
              fill={[primary, lime, gold, forest][i]} fillOpacity="0.5" />
          ))}
        </g>
      </svg>

      {/* Left: Fibonacci dot column */}
      <svg
        className="absolute left-2 lg:left-4 top-1/3 w-2 h-20"
        viewBox="0 0 8 80" fill="none"
        style={{ animation: "float-wide 12s ease-in-out 1s infinite" }}
      >
        {[8, 21, 42].map((y, i) => (
          <circle key={i} cx="4" cy={y} r="1.2" fill={FIB_CLR[i]} opacity="0.4" />
        ))}
      </svg>

      {/* Bottom center: Fibonacci dot row */}
      <svg
        className="absolute left-1/2 bottom-10 -translate-x-1/2 w-28 h-2"
        viewBox="0 0 144 8" fill="none"
        style={{ animation: "float-wide 10s ease-in-out infinite" }}
      >
        {[8, 21, 42, 76, 131].map((x, i) => (
          <circle key={i} cx={x} cy="4" r="1.2" fill={FIB_CLR[i]} opacity="0.4" />
        ))}
      </svg>
    </div>
  )
}

/** Footer */
export function FooterDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible opacity-60" aria-hidden="true">
      {/* Top-left: small spiral */}
      <svg
        className="absolute top-4 left-2 lg:left-4 w-14 lg:w-20"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 14s ease-in-out infinite" }}
      >
        <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <circle cx="89" cy="0"  r="1.5" fill={primary} fillOpacity="0.55" />
        <circle cx="34" cy="55" r="1.2" fill={forest}  fillOpacity="0.55" />
      </svg>

      {/* Top-right: spiral mirrored */}
      <svg
        className="absolute top-4 right-2 lg:right-4 w-14 lg:w-20"
        viewBox="0 0 95 60" fill="none" overflow="visible"
        style={{ height: "auto", animation: "float 14s ease-in-out 2s infinite" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1" opacity="0.5" strokeLinecap="round" />
          <circle cx="89" cy="0"  r="1.5" fill={lime}   fillOpacity="0.55" />
          <circle cx="34" cy="55" r="1.2" fill={primary} fillOpacity="0.55" />
        </g>
      </svg>

      {/* Top center: Fibonacci divider dots */}
      <svg
        className="absolute left-1/2 top-6 -translate-x-1/2 w-20 h-1"
        viewBox="0 0 120 4" fill="none"
      >
        {[10, 23, 44, 78].map((x, i) => (
          <circle key={i} cx={x} cy="2" r="1" fill={FIB_CLR[i]} opacity="0.4" />
        ))}
      </svg>
    </div>
  )
}
