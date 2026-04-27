"use client"

const primary = "#5ec974"
const forest  = "#5aaa7a"
const lime    = "#9ed64e"

const DOT_Y   = [8, 21, 42, 76, 131]
const DOT_CLR = [primary, forest, lime, forest, primary]
const DOT_ROW_X   = [55, 144, 288, 500, 712, 856, 945]
const DOT_ROW_CLR = [forest, lime, primary, forest, primary, lime, forest]

export function HeroDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">

      {/* ── Dot row at bottom of hero viewport ───────────────────────────── */}
      <svg
        className="absolute left-0 w-full h-2 animate-[fade-in_0.8s_ease-out_1.4s_both]"
        style={{ bottom: "4px" }}
        viewBox="0 0 1000 8" preserveAspectRatio="none" fill="none"
      >
        {DOT_ROW_X.map((x, i) => (
          <circle key={i} cx={x} cy="4" r="1.5" fill={DOT_ROW_CLR[i]} opacity="0.4" />
        ))}
      </svg>

      {/* ── Fibonacci dot columns ─────────────────────────────────────────── */}
      <div className="absolute left-3 lg:left-6 top-[30%] w-2 h-36 animate-[fade-in_0.8s_ease-out_1.6s_both]">
        <svg className="w-full h-full animate-[float-hero-wide_12s_ease-in-out_1.6s_infinite]"
          viewBox="0 0 8 144" fill="none">
          {DOT_Y.map((y, i) => (
            <circle key={i} cx="4" cy={y} r="1.5" fill={DOT_CLR[i]} opacity="0.45" />
          ))}
        </svg>
      </div>

      <div className="absolute right-3 lg:right-6 top-[30%] w-2 h-36 animate-[fade-in_0.8s_ease-out_1.8s_both]">
        <svg className="w-full h-full animate-[float-hero-wide_12s_ease-in-out_1.8s_infinite]"
          viewBox="0 0 8 144" fill="none">
          {DOT_Y.map((y, i) => (
            <circle key={i} cx="4" cy={y} r="1.5" fill={DOT_CLR[i]} opacity="0.45" />
          ))}
        </svg>
      </div>

      {/* ── Scattered field nodes throughout the page ─────────────────────── */}
      {[
        { cls: "top-[30%] left-[15%]",  fill: forest,  r: 2.5, delay: 2.0 },
        { cls: "top-[62%] left-[12%]",  fill: lime,    r: 2,   delay: 2.2 },
        { cls: "top-[45%] right-[14%]", fill: forest,  r: 2.5, delay: 2.1 },
        { cls: "top-[25%] right-[22%]", fill: primary, r: 2,   delay: 2.4 },
        { cls: "top-[72%] right-[18%]", fill: forest,  r: 2,   delay: 2.6 },
        { cls: "top-[55%] left-[42%]",  fill: forest,  r: 1.5, delay: 3.0 },
        { cls: "top-[80%] left-[30%]",  fill: primary, r: 2,   delay: 2.3 },
        { cls: "top-[85%] right-[28%]", fill: forest,  r: 1.5, delay: 2.5 },
      ].map(({ cls, fill, r, delay }, i) => (
        <svg key={i} className={`absolute ${cls} w-4 h-4`} viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r={r} fill={fill} fillOpacity="0.5"
            style={{ animation: `fade-in 500ms ease-out ${delay}s both` }} />
        </svg>
      ))}

    </div>
  )
}
