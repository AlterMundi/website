"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollSpy(ids: string[]): {
  activeId: string | null
  setActiveId: (id: string) => void
} {
  const [activeId, setActiveId] = useState<string | null>(null)
  const idsRef = useRef(ids)

  useEffect(() => {
    const update = () => {
      const mid = window.innerHeight * 0.5
      let current: string | null = null
      for (const id of idsRef.current) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < mid) current = id
      }
      setActiveId(current)
    }

    window.addEventListener("scroll", update, { passive: true })
    update()
    return () => window.removeEventListener("scroll", update)
  }, [])

  return { activeId, setActiveId }
}
