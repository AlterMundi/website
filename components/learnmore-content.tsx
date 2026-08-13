"use client"

import Link from "next/link"
import { CornerBrackets } from "@/components/ui/corner-brackets"
import { useLanguage } from "@/lib/i18n"

const p = "#5ec974"
const f = "#5aaa7a"
const l = "#9ed64e"

export function LearnMoreContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Title section */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-4">
        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          <Link
            href="/"
            className="inline-block text-xs font-mono uppercase tracking-wider text-primary/60 hover:text-primary transition-colors crt-glow"
          >
            {t.learnmore.back}
          </Link>
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">{t.learnmore.eyebrow}</span>
            <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {t.learnmore.heading}
            </h1>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        {/* Fibonacci dot columns flanking card */}
        <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
          <svg className="absolute left-[8%] top-[20%] w-2 h-32 opacity-40 animate-[float-wide_14s_ease-in-out_infinite]"
            viewBox="0 0 8 130" fill="none">
            {[8, 21, 42, 76, 121].map((y, i) => (
              <circle key={i} cx="4" cy={y} r="1.3" fill={[p, f, l, f, p][i]} />
            ))}
          </svg>
          <svg className="absolute right-[8%] top-[30%] w-2 h-32 opacity-40 animate-[float-wide_12s_ease-in-out_2s_infinite]"
            viewBox="0 0 8 130" fill="none">
            {[8, 21, 42, 76, 121].map((y, i) => (
              <circle key={i} cx="4" cy={y} r="1.3" fill={[f, l, p, l, f][i]} />
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="relative bg-card border-2 border-border p-6 sm:p-8 lg:p-12">
            <CornerBrackets />
            <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed font-sans">
              {t.learnmore.paragraphs.map((block, i) => (
                <p key={i} style={{ whiteSpace: "pre-line" }}>
                  {block}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
