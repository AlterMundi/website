"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollSpy(ids: string[]): {
  activeId: string | null
  setActiveId: (id: string) => void
} {
  const [activeId, setActiveId] = useState<string | null>(null)
  const idsRef = useRef(ids)

  useEffect(() => {
    if (typeof window === "undefined") return

    const observers = idsRef.current.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        // Shrink the bottom of the viewport by 60% so only the section
        // actively filling the top half triggers the active state.
        { rootMargin: "0px 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      )

      observer.observe(el)
      return observer
    })

    return () => observers.forEach((o) => o?.disconnect())
  }, []) // stable: idsRef holds the array reference, no re-run needed

  return { activeId, setActiveId }
}
