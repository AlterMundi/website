"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react"
import { dictionaries, isLang, type Dictionary, type Lang } from "@/lib/dictionaries"

const STORAGE_KEY = "altermundi:lang"

/**
 * The chosen language lives outside React, in this module.
 *
 * The site is a static export: every page ships prerendered in English, which is
 * what crawlers and no-JS visitors get. The browser's actual preference is only
 * knowable on the client, so it is modelled as an external store and read with
 * useSyncExternalStore — hydration uses the server snapshot ("en") and matches
 * the prerendered HTML, then React re-renders once with the real value.
 */
let current: Lang | null = null
const listeners = new Set<() => void>()

function readPreference(): Lang {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLang(stored)) return stored
  } catch {
    // Storage can be unavailable (private mode, blocked cookies) — fall through.
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en"
}

/** Cached so repeated renders return the same snapshot, as the hook requires. */
function getSnapshot(): Lang {
  current ??= readPreference()
  return current
}

function getServerSnapshot(): Lang {
  return "en"
}

function subscribe(onChange: () => void): () => void {
  listeners.add(onChange)
  return () => listeners.delete(onChange)
}

function writePreference(next: Lang) {
  current = next
  try {
    window.localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // A failed write only costs the preference on the next visit.
  }
  listeners.forEach((listener) => listener())
}

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => writePreference(next), [])
  const toggleLang = useCallback(() => writePreference(getSnapshot() === "en" ? "es" : "en"), [])

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: dictionaries[lang] }),
    [lang, setLang, toggleLang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used inside <LanguageProvider>")
  }
  return context
}
