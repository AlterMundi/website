"use client"

/**
 * Full-page background layer — sits behind every section.
 * Spiral decorations removed; only phyllotaxis dot clusters remain.
 */

const primary = "#5ec974"
const forest = "#5aaa7a"
const lime = "#9ed64e"
const gold = "#e9d942"
const COLORS = [primary, forest, lime, gold, primary, forest]

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

const LARGE = sunflower(144, 13)
const MEDIUM = sunflower(89, 10)
const SMALL = sunflower(55, 8)

const CLUSTERS = [
  { key: "tr", wrapCls: "absolute -top-24 -right-24 w-[420px] opacity-[0.10]", svgView: "-200 -200 400 400", dots: LARGE, fadeDelay: "1.5s", fadeDur: "2s" },
  { key: "ml", wrapCls: "absolute top-[38%] -left-24 w-[280px] opacity-[0.08]", svgView: "-140 -140 280 280", dots: MEDIUM, fadeDelay: "2s", fadeDur: "2s" },
  { key: "bc", wrapCls: "absolute bottom-[8%] left-[30%] w-[200px] opacity-[0.09]", svgView: "-120 -120 240 240", dots: SMALL, fadeDelay: "2.5s", fadeDur: "1.5s" },
  { key: "br", wrapCls: "absolute -bottom-20 -right-16 w-[300px] opacity-[0.08]", svgView: "-150 -150 300 300", dots: MEDIUM, fadeDelay: "2s", fadeDur: "2s" },
]

export function PageBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
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
