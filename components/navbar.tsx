"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlterMundiLogo } from "@/components/altermundi-logo"
import { ScrollLink } from "@/components/ui/scroll-link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const navLinks: { id: string; label: string; scrollBlock?: "start" | "center" | "end" }[] = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects", scrollBlock: "start" },
  { id: "contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { activeId, setActiveId } = useScrollSpy(["about", "projects", "contact"])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const closeMenu = () => setIsMobileMenuOpen(false)

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-[slide-in-from-top_400ms_ease-out_both]",
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b-2 border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <ScrollLink
            targetId="hero"
            className="flex items-center hover:opacity-80 transition-opacity group shrink-0"
            aria-label="AlterMundi Home"
            onClick={closeMenu}
          >
            <AlterMundiLogo className="h-10 sm:h-12 md:h-16 w-auto mt-1" />
          </ScrollLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map(({ id, label, scrollBlock }) => (
              <ScrollLink
                key={id}
                targetId={id}
                {...(scrollBlock && { scrollBlock })}
                onClick={() => setActiveId(id)}
                className={cn(
                  "text-sm lg:text-base font-mono font-medium uppercase tracking-wider transition-all px-2 py-1.5 border-2 border-transparent",
                  activeId === id
                    ? "text-primary crt-glow border-b-primary/80"
                    : "hover:text-primary hover:crt-glow hover:border-primary/30"
                )}
              >
                {label}
              </ScrollLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <ScrollLink targetId="contact">Work with us</ScrollLink>
            </Button>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 -mr-2 rounded-md border-2 border-transparent hover:border-primary/30 focus:outline-none focus-visible:border-primary/50 focus-visible:ring-2 focus-visible:ring-primary/20 text-foreground"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? (
                <X className="size-6" aria-hidden />
              ) : (
                <Menu className="size-6" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="py-4 pb-6 border-t border-border flex flex-col gap-1">
            {navLinks.map(({ id, label, scrollBlock }) => (
              <ScrollLink
                key={id}
                targetId={id}
                {...(scrollBlock && { scrollBlock })}
                onClick={() => { setActiveId(id); closeMenu() }}
                className={cn(
                  "text-base font-mono font-medium uppercase tracking-wider transition-all px-4 py-3 border-l-4",
                  activeId === id
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-transparent hover:text-primary hover:crt-glow hover:border-primary hover:bg-primary/5"
                )}
              >
                {label}
              </ScrollLink>
            ))}
            <div className="pt-2 mt-2 border-t border-border sm:hidden">
              <Button asChild size="default" className="w-full justify-center">
                <ScrollLink targetId="contact" onClick={closeMenu}>
                  Work with us
                </ScrollLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
