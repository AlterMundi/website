"use client"

const primary = "#074434"
const forest  = "#3d745e"
const lime    = "#8aba4b"
const gold    = "#e9d942"

// ── Fibonacci spiral paths ────────────────────────────────────────────────────
// Full spiral — CW, radii 55→34→21→13→8, viewBox "0 0 95 60"
// Path length ≈ 206 SVG units → dasharray 210
const SPIRAL_PATH =
  "M 89 0 A 55 55 0 0 1 34 55 A 34 34 0 0 1 0 21 A 21 21 0 0 1 21 0 A 13 13 0 0 1 34 13 A 8 8 0 0 1 26 21"

// Partial spiral — inner 3 arcs (r: 21→13→8), viewBox "0 0 40 25"
// Path length ≈ 66 → dasharray 68
const SMALL_PATH =
  "M 0 21 A 21 21 0 0 1 21 0 A 13 13 0 0 1 34 13 A 8 8 0 0 1 26 21"

// Mini spiral — 2 arcs (r: 8→5), viewBox "0 0 38 25"
// Path length ≈ 21 → dasharray 22
const MINI_PATH =
  "M 34 13 A 8 8 0 0 1 26 21 A 5 5 0 0 1 21 16"

const SPIRAL_NODES = [
  { cx: 89, cy:  0, r: 4,   fill: primary },
  { cx: 34, cy: 55, r: 3.5, fill: forest  },
  { cx:  0, cy: 21, r: 3,   fill: lime    },
  { cx: 21, cy:  0, r: 2.5, fill: gold    },
  { cx: 34, cy: 13, r: 2,   fill: primary },
  { cx: 26, cy: 21, r: 1.5, fill: forest  },
]

const SMALL_NODES = [
  { cx:  0, cy: 21, r: 2.5, fill: primary },
  { cx: 21, cy:  0, r: 2,   fill: forest  },
  { cx: 34, cy: 13, r: 1.5, fill: lime    },
  { cx: 26, cy: 21, r: 1.5, fill: gold    },
]

// ── Timing ────────────────────────────────────────────────────────────────────
// Corner spirals: draw starts 0.3s, lasts 2s.
// Arc fracs: 0%, 42%, 68%, 84%, 94%, 100%
const CORNER_NODE_DELAYS = [0, 0.42, 0.68, 0.84, 0.94, 1.0].map(
  (f) => 0.3 + f * 2
) // → [0.3, 1.14, 1.66, 1.98, 2.18, 2.3]

const DOT_Y   = [8, 21, 42, 76, 131]
const DOT_CLR = [primary, forest, lime, gold, primary]
const DOT_ROW_X   = [55, 144, 288, 500, 712, 856, 945]
const DOT_ROW_CLR = [forest, lime, primary, gold, primary, lime, forest]

type DrawStyle = React.CSSProperties & { "--path-len"?: string }

function draw(len: number, dur: number, delay: number): DrawStyle {
  return {
    strokeDasharray: len,
    "--path-len": String(len),
    animation: `draw-path ${dur}s ease-in-out ${delay}s both`,
  }
}

export function HeroDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">

      {/* ── Background spirals ──────────────────────────────────────────────
          overflow="visible" lets path nodes render outside the SVG viewBox.
          Draw 3s from t=0; float starts at t=3.3s.                         */}
      <svg
        className="absolute top-4 right-4 lg:right-8 w-[340px] lg:w-[500px] opacity-[0.07] animate-[float_22s_ease-in-out_3.3s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <path d={SPIRAL_PATH} stroke={primary} strokeWidth="0.6"
          strokeLinecap="round" style={draw(210, 3, 0)} />
      </svg>

      <svg
        className="absolute top-[15%] left-4 lg:left-8 w-[280px] lg:w-[380px] opacity-[0.05] animate-[float_26s_ease-in-out_3.6s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={forest} strokeWidth="0.6"
            strokeLinecap="round" style={draw(210, 3, 0.2)} />
        </g>
      </svg>

      {/* ── Corner spirals ─────────────────────────────────────────────────
          overflow="visible" prevents node circles being cut at viewBox edges.
          Draw 2s starting at 0.3s; float from t=2.4s.                      */}
      <svg
        className="absolute top-8 left-4 lg:top-12 lg:left-8 w-28 lg:w-44 animate-[float_8s_ease-in-out_2.4s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1.5" opacity="0.4"
          strokeLinecap="round" style={draw(210, 2, 0.3)} />
        {SPIRAL_NODES.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} fillOpacity="0.6"
            style={{ animation: `fade-in 400ms ease-out ${CORNER_NODE_DELAYS[i].toFixed(2)}s both` }} />
        ))}
      </svg>

      <svg
        className="absolute top-8 right-4 lg:top-12 lg:right-8 w-28 lg:w-44 animate-[float_10s_ease-in-out_2.6s_infinite]"
        viewBox="0 0 95 60" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-95,0)">
          <path d={SPIRAL_PATH} stroke={primary} strokeWidth="1.5" opacity="0.4"
            strokeLinecap="round" style={draw(210, 2, 0.5)} />
          {SPIRAL_NODES.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} fillOpacity="0.6"
              style={{ animation: `fade-in 400ms ease-out ${(CORNER_NODE_DELAYS[i] + 0.2).toFixed(2)}s both` }} />
          ))}
        </g>
      </svg>

      {/* ── Full-width Fibonacci dot rows ─────────────────────────────────── */}
      <svg
        className="absolute top-3 left-0 w-full h-2 animate-[fade-in_0.8s_ease-out_1.2s_both]"
        viewBox="0 0 1000 8" preserveAspectRatio="none" fill="none"
      >
        {DOT_ROW_X.map((x, i) => (
          <circle key={i} cx={x} cy="4" r="1.5" fill={DOT_ROW_CLR[i]} opacity="0.4" />
        ))}
      </svg>

      <svg
        className="absolute bottom-4 left-0 w-full h-2 animate-[fade-in_0.8s_ease-out_1.4s_both]"
        viewBox="0 0 1000 8" preserveAspectRatio="none" fill="none"
      >
        {DOT_ROW_X.map((x, i) => (
          <circle key={i} cx={x} cy="4" r="1.5" fill={DOT_ROW_CLR[i]} opacity="0.4" />
        ))}
      </svg>

      {/* ── Mid-height partial spirals ─────────────────────────────────────── */}
      <svg
        className="absolute top-[38%] left-2 lg:left-6 w-16 lg:w-24 animate-[float_9s_ease-in-out_2s_infinite]"
        viewBox="0 0 40 25" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <path d={SMALL_PATH} stroke={forest} strokeWidth="1.5" opacity="0.35"
          strokeLinecap="round" style={draw(68, 1.2, 0.6)} />
      </svg>

      <svg
        className="absolute top-[55%] right-2 lg:right-6 w-16 lg:w-24 animate-[float_7s_ease-in-out_2.1s_infinite]"
        viewBox="0 0 40 25" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-40,0)">
          <path d={SMALL_PATH} stroke={lime} strokeWidth="1.5" opacity="0.35"
            strokeLinecap="round" style={draw(68, 1.2, 0.7)} />
        </g>
      </svg>

      {/* ── Bottom corner spirals ─────────────────────────────────────────── */}
      <svg
        className="absolute bottom-16 left-4 lg:bottom-20 lg:left-8 w-20 lg:w-28 animate-[float_6s_ease-in-out_2s_infinite]"
        viewBox="0 0 40 25" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <path d={SMALL_PATH} stroke={forest} strokeWidth="1.5" opacity="0.45"
          strokeLinecap="round" style={draw(68, 1.2, 0.6)} />
        {SMALL_NODES.map((n, i) => (
          <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} fillOpacity="0.6"
            style={{ animation: `fade-in 350ms ease-out ${(0.6 + (i / 3) * 1.2).toFixed(2)}s both` }} />
        ))}
      </svg>

      <svg
        className="absolute bottom-16 right-4 lg:bottom-20 lg:right-8 w-20 lg:w-28 animate-[float_6s_ease-in-out_2.1s_infinite]"
        viewBox="0 0 40 25" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-40,0)">
          <path d={SMALL_PATH} stroke={lime} strokeWidth="1.5" opacity="0.45"
            strokeLinecap="round" style={draw(68, 1.2, 0.7)} />
          {SMALL_NODES.map((n, i) => (
            <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} fillOpacity="0.6"
              style={{ animation: `fade-in 350ms ease-out ${(0.7 + (i / 3) * 1.2).toFixed(2)}s both` }} />
          ))}
        </g>
      </svg>

      {/* ── Mini spirals (mid flanks) ─────────────────────────────────────── */}
      <svg
        className="absolute top-[46%] left-[5%] w-10 animate-[float_14s_ease-in-out_1.8s_infinite]"
        viewBox="0 0 38 25" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <path d={MINI_PATH} stroke={gold} strokeWidth="1.2" opacity="0.35"
          strokeLinecap="round" style={draw(22, 0.8, 0.8)} />
        <circle cx="34" cy="13" r="1.5" fill={gold}   fillOpacity="0.5"
          style={{ animation: "fade-in 350ms ease-out 0.85s both" }} />
        <circle cx="26" cy="21" r="1.2" fill={forest} fillOpacity="0.5"
          style={{ animation: "fade-in 350ms ease-out 1.4s both" }} />
      </svg>

      <svg
        className="absolute top-[33%] right-[5%] w-10 animate-[float_12s_ease-in-out_2s_infinite]"
        viewBox="0 0 38 25" fill="none" overflow="visible" style={{ height: "auto" }}
      >
        <g transform="scale(-1,1) translate(-38,0)">
          <path d={MINI_PATH} stroke={lime} strokeWidth="1.2" opacity="0.35"
            strokeLinecap="round" style={draw(22, 0.8, 0.9)} />
          <circle cx="34" cy="13" r="1.5" fill={lime}    fillOpacity="0.5"
            style={{ animation: "fade-in 350ms ease-out 0.95s both" }} />
          <circle cx="26" cy="21" r="1.2" fill={primary} fillOpacity="0.5"
            style={{ animation: "fade-in 350ms ease-out 1.5s both" }} />
        </g>
      </svg>

      {/* ── Fibonacci dot columns ─────────────────────────────────────────────
          Wrapper fades in; SVG inside floats independently.                 */}
      <div className="absolute left-3 lg:left-6 top-[30%] w-2 h-36 animate-[fade-in_0.8s_ease-out_1.6s_both]">
        <svg className="w-full h-full animate-[float-wide_12s_ease-in-out_1.6s_infinite]"
          viewBox="0 0 8 144" fill="none">
          {DOT_Y.map((y, i) => (
            <circle key={i} cx="4" cy={y} r="1.5" fill={DOT_CLR[i]} opacity="0.45" />
          ))}
        </svg>
      </div>

      <div className="absolute right-3 lg:right-6 top-[30%] w-2 h-36 animate-[fade-in_0.8s_ease-out_1.8s_both]">
        <svg className="w-full h-full animate-[float-wide_12s_ease-in-out_1.8s_infinite]"
          viewBox="0 0 8 144" fill="none">
          {DOT_Y.map((y, i) => (
            <circle key={i} cx="4" cy={y} r="1.5" fill={DOT_CLR[i]} opacity="0.45" />
          ))}
        </svg>
      </div>

      {/* ── Scattered field nodes ─────────────────────────────────────────── */}
      {[
        { cls: "top-[30%] left-[15%]",  fill: gold,    r: 2.5, delay: 2.0 },
        { cls: "top-[62%] left-[12%]",  fill: lime,    r: 2,   delay: 2.2 },
        { cls: "top-[45%] right-[14%]", fill: forest,  r: 2.5, delay: 2.1 },
        { cls: "top-[25%] right-[22%]", fill: primary, r: 2,   delay: 2.4 },
        { cls: "top-[72%] right-[18%]", fill: gold,    r: 2,   delay: 2.6 },
      ].map(({ cls, fill, r, delay }, i) => (
        <svg key={i} className={`absolute ${cls} w-4 h-4`} viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r={r} fill={fill} fillOpacity="0.5"
            style={{ animation: `fade-in 500ms ease-out ${delay}s both` }} />
        </svg>
      ))}

    </div>
  )
}
