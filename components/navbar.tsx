"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlterMundiLogo } from "@/components/altermundi-logo"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b-2 border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
            aria-label="AlterMundi Home"
          >
            <AlterMundiLogo className="h-8 w-8" />
            <span className="font-mono font-bold text-lg tracking-tight group-hover:text-primary transition-colors">ALTERMUNDI</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-mono font-medium uppercase tracking-wider hover:text-primary hover:crt-glow transition-all px-2 py-1 border-2 border-transparent hover:border-primary/30"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-mono font-medium uppercase tracking-wider hover:text-primary hover:crt-glow transition-all px-2 py-1 border-2 border-transparent hover:border-primary/30"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-mono font-medium uppercase tracking-wider hover:text-primary hover:crt-glow transition-all px-2 py-1 border-2 border-transparent hover:border-primary/30"
            >
              Contact
            </button>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            size="sm"
          >
            Work with us
          </Button>
        </div>
      </div>
    </nav>
  )
}
