"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlterMundiLogo } from "@/components/altermundi-logo"
import { ScrollLink } from "@/components/ui/scroll-link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b-2 border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <ScrollLink
            targetId="hero"
            className="flex items-center hover:opacity-80 transition-opacity group"
            aria-label="AlterMundi Home"
          >
            <AlterMundiLogo className="h-14 w-auto" />
          </ScrollLink>

          <div className="hidden md:flex items-center gap-6">
            <ScrollLink
              targetId="about"
              className="text-base font-mono font-medium uppercase tracking-wider hover:text-primary hover:crt-glow transition-all px-2 py-1 border-2 border-transparent hover:border-primary/30"
            >
              About
            </ScrollLink>
            <ScrollLink
              targetId="projects"
              className="text-base font-mono font-medium uppercase tracking-wider hover:text-primary hover:crt-glow transition-all px-2 py-1 border-2 border-transparent hover:border-primary/30"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              targetId="contact"
              className="text-base font-mono font-medium uppercase tracking-wider hover:text-primary hover:crt-glow transition-all px-2 py-1 border-2 border-transparent hover:border-primary/30"
            >
              Contact
            </ScrollLink>
          </div>

          <Button asChild size="sm">
            <ScrollLink targetId="contact">Work with us</ScrollLink>
          </Button>
        </div>
      </div>
    </nav>
  )
}
