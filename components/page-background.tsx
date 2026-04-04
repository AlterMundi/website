"use client"

/**
 * Full-page background layer — sits behind every section.
 * Large Fibonacci spiral paths are placed here (not in per-section wrappers)
 * so they are never clipped at section boundaries.
 */

const primary = "#074434"
const forest  = "#3d745e"
const lime    = "#8aba4b"
const gold    = "#e9d942"
const COLORS  = [primary, forest, lime, gold, primary, forest]

// Full Fibonacci spiral — CW, radii 55→34→21→13→8, viewBox "0 0 95 60"
// Path length ≈ 206 → dasharray 210
const SPIRAL_PATH =
  "M 89 0 A 55 55 0 0 1 34 55 A 34 34 0 0 1 0 21 A 21 21 0 0 1 21 0 A 13 13 0 0 1 34 13 A 8 8 0 0 1 26 21"

// draw-path helper — same as hero-decorations
type DrawStyle = React.CSSProperties & { "--path-len"?: string }
function draw(len: number, dur: number, delay: number): DrawStyle {
  return {
    strokeDasharray: len,
    "--path-len": String(len),
    animation: `draw-path ${dur}s ease-in-out ${delay}s both`,
  }
}

// ─── Phyllotaxis dot clusters ─────────────────────────────────────────────────
const GOLDEN_ANGLE = 137.508 * (Math.PI / 180)

function sunflower(count: number, scale: number) {
  return Array.from({ length: count }, (_, i) => {
    const r = scale * Math.sqrt(i + 1)
    const θ = (i + 1) * GOLDEN_ANGLE
    return {
      x: parseFloat((r * Math.cos(θ)).toFixed(1)),
      y: parseFloat((r * Math.sin(θ)).toFixed(1)),
      r: i % 8 === 0 ? 2 : i % 3 === 0 ? 1.5 : 1,
    }
  })
}

const LARGE  = sunflower(144, 13)
const MEDIUM = sunflower(89,  10)
const SMALL  = sunflower(55,   8)

const CLUSTERS = [
  { key: "tr", wrapCls: "absolute -top-24 -right-24 w-[420px] opacity-[0.055]", svgView: "-200 -200 400 400", dots: LARGE,  fadeDelay: "1.5s", fadeDur: "2s"   },
  { key: "ml", wrapCls: "absolute top-[38%] -left-24 w-[280px] opacity-[0.04]", svgView: "-140 -140 280 280", dots: MEDIUM, fadeDelay: "2s",   fadeDur: "2s"   },
  { key: "bc", wrapCls: "absolute bottom-[8%] left-[30%] w-[200px] opacity-[0.045]", svgView: "-120 -120 240 240", dots: SMALL,  fadeDelay: "2.5s", fadeDur: "1.5s" },
  { key: "br", wrapCls: "absolute -bottom-20 -right-16 w-[300px] opacity-[0.04]", svgView: "-150 -150 300 300", dots: MEDIUM, fadeDelay: "2s",   fadeDur: "2s"   },
]

export function PageBackground() {
  return (
    // overflow-hidden clips at the natural viewport edge (page-background is inset-0 =
    // full viewport width), same as how the hero section handles its own spirals.
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">

      {/* ── Full-page background spirals ─────────────────────────────────────
          Hero-area spirals are handled by hero-decorations.tsx — start here
          at the About section and go down. Same style as hero spirals:
          overflow="visible", strokeWidth 0.6, draw + float animations.       */}

      {/* About — right */}
      <svg
        className="absolute top-[26%] right-4 lg:right-8 w-[300px] lg:w-[440px] opacity-[0.055] animate-[float_28s_ease-in-out_1s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={primary} strokeWidth="0.6" strokeLinecap="round" style={draw(210, 3, 0.4)} />
        </g>
      </svg>

      {/* HowWeWork — left */}
      <svg
        className="absolute top-[38%] left-4 lg:left-8 w-[280px] lg:w-[400px] opacity-[0.05] animate-[float_32s_ease-in-out_5s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <path d={SPIRAL_PATH} stroke={forest} strokeWidth="0.6" strokeLinecap="round" style={draw(210, 3, 0.6)} />
      </svg>

      {/* Projects — right */}
      <svg
        className="absolute top-[52%] right-4 lg:right-8 w-[300px] lg:w-[440px] opacity-[0.05] animate-[float_24s_ease-in-out_8s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={lime} strokeWidth="0.6" strokeLinecap="round" style={draw(210, 3, 0.8)} />
        </g>
      </svg>

      {/* Projects — left (extra) */}
      <svg
        className="absolute top-[57%] left-4 lg:left-8 w-[240px] lg:w-[360px] opacity-[0.045] animate-[float_20s_ease-in-out_3s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <path d={SPIRAL_PATH} stroke={forest} strokeWidth="0.6" strokeLinecap="round" style={draw(210, 3, 0.9)} />
      </svg>

      {/* Contact — left */}
      <svg
        className="absolute top-[68%] left-4 lg:left-8 w-[280px] lg:w-[420px] opacity-[0.055] animate-[float_30s_ease-in-out_2s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <path d={SPIRAL_PATH} stroke={primary} strokeWidth="0.6" strokeLinecap="round" style={draw(210, 3, 1.0)} />
      </svg>

      {/* Contact — right (extra) */}
      <svg
        className="absolute top-[73%] right-4 lg:right-8 w-[240px] lg:w-[360px] opacity-[0.045] animate-[float_26s_ease-in-out_7s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={gold} strokeWidth="0.6" strokeLinecap="round" style={draw(210, 3, 1.1)} />
        </g>
      </svg>

      {/* Footer area — right */}
      <svg
        className="absolute top-[82%] right-4 lg:right-8 w-[260px] lg:w-[380px] opacity-[0.04] animate-[float_36s_ease-in-out_6s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={gold} strokeWidth="0.6" strokeLinecap="round" style={draw(210, 3, 1.2)} />
        </g>
      </svg>

      {/* ── Phyllotaxis dot clusters ─────────────────────────────────────── */}
      {CLUSTERS.map(({ key, wrapCls, svgView, dots, fadeDelay, fadeDur }) => (
        <div key={key} className={wrapCls}>
          <svg
            className="w-full"
            viewBox={svgView}
            fill="none"
            style={{ height: "auto", animation: `fade-in ${fadeDur} ease-out ${fadeDelay} both` }}
          >
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={COLORS[i % COLORS.length]} />
            ))}
          </svg>
        </div>
      ))}
    </div>
  )
}
