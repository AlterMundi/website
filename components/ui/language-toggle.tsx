"use client"

import { LANGS, type Lang } from "@/lib/dictionaries"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const LABELS: Record<Lang, string> = { en: "EN", es: "ES" }
const FULL_NAMES: Record<Lang, string> = { en: "English", es: "Español" }

/**
 * Segmented EN | ES switch. Both options are always visible so the choice reads
 * as a state rather than an action, which matters here: the toggle does not
 * change the URL, so the highlighted half is the only cue for which language
 * you are reading.
 */
export function LanguageToggle({ className, onSelect }: { className?: string; onSelect?: () => void }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={cn("inline-flex items-stretch border-2 border-border font-mono text-xs shrink-0", className)}
      role="group"
      aria-label="Language"
    >
      {LANGS.map((code) => {
        const isActive = code === lang
        return (
          <button
            key={code}
            type="button"
            onClick={() => {
              setLang(code)
              onSelect?.()
            }}
            aria-pressed={isActive}
            lang={code}
            title={FULL_NAMES[code]}
            className={cn(
              "px-2 py-1 uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-foreground/60 hover:text-primary hover:bg-primary/10"
            )}
          >
            {LABELS[code]}
          </button>
        )
      })}
    </div>
  )
}
