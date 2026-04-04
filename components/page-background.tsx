"use client"

/**
 * Fibonacci phyllotaxis (sunflower) dot clusters.
 * Each dot is placed at radius = scale*√n, angle = n * goldenAngle (137.508°).
 * This is the exact spiral arrangement used by sunflowers, pinecones, and galaxies.
 */

const primary = "#074434"
const forest  = "#3d745e"
const lime    = "#8aba4b"
const gold    = "#e9d942"
const COLORS  = [primary, forest, lime, gold, primary, forest]

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

// Pre-computed at module level — no re-renders needed
const LARGE  = sunflower(144, 13) // ~190px radius — Fibonacci 144
const MEDIUM = sunflower(89,  10) // ~94px radius  — Fibonacci 89
const SMALL  = sunflower(55,   8) // ~59px radius  — Fibonacci 55

// Cluster config: wrapper holds position + target opacity; SVG fades in inside it.
// Opacity on the wrapper caps the max opacity. fade-in on the SVG goes 0→1 so the
// combined effect is: 0 × wrapper_opacity → 1 × wrapper_opacity. No CSS conflict.
const CLUSTERS = [
  {
    key: "tr",
    wrapCls: "absolute -top-24 -right-24 w-[420px] opacity-[0.055]",
    svgView: "-200 -200 400 400",
    dots: LARGE,
    fadeDelay: "1.5s",
    fadeDur: "2s",
  },
  {
    key: "ml",
    wrapCls: "absolute top-[38%] -left-24 w-[280px] opacity-[0.04]",
    svgView: "-140 -140 280 280",
    dots: MEDIUM,
    fadeDelay: "2s",
    fadeDur: "2s",
  },
  {
    key: "bc",
    wrapCls: "absolute bottom-[8%] left-[30%] w-[200px] opacity-[0.045]",
    svgView: "-120 -120 240 240",
    dots: SMALL,
    fadeDelay: "2.5s",
    fadeDur: "1.5s",
  },
  {
    key: "br",
    wrapCls: "absolute -bottom-20 -right-16 w-[300px] opacity-[0.04]",
    svgView: "-150 -150 300 300",
    dots: MEDIUM,
    fadeDelay: "2s",
    fadeDur: "2s",
  },
]

export function PageBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {CLUSTERS.map(({ key, wrapCls, svgView, dots, fadeDelay, fadeDur }) => (
        <div key={key} className={wrapCls}>
          <svg
            className="w-full"
            viewBox={svgView}
            fill="none"
            style={{
              height: "auto",
              animation: `fade-in ${fadeDur} ease-out ${fadeDelay} both`,
            }}
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
