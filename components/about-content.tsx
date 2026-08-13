"use client"

import { AboutDecorations } from "@/components/section-decorations"
import { useLanguage } from "@/lib/i18n"

export function AboutContent() {
  const { t } = useLanguage()

  return (
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
      <AboutDecorations />
      <div className="relative z-10 max-w-5xl mx-auto space-y-5 sm:space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">{t.about.eyebrow}</span>
          <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{t.about.heading}</h1>
        </div>

        <div className="space-y-5 text-lg sm:text-xl text-foreground/80 leading-relaxed">{t.about.body}</div>

        <a
          href="/learnmore/"
          className="inline-flex items-center gap-1 text-sm font-mono text-primary/70 hover:text-primary transition-colors underline underline-offset-4"
        >
          {t.about.readMore}
        </a>
      </div>
    </section>
  )
}
