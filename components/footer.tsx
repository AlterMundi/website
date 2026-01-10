"use client"

import { AlterMundiLogo } from "@/components/altermundi-logo"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t-2 border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <AlterMundiLogo className="h-8 w-8" />
              <span className="font-mono font-bold text-lg">ALTERMUNDI</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Building community networks and open technology solutions for digital inclusion.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
              // Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; About_Us
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; Contact
              </button>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
              // Connect
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@altermundi.net"
                className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors"
              >
                &gt; info@altermundi.net
              </a>
              <a
                href="https://github.com/altermundi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors"
              >
                &gt; github.com/altermundi
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t-2 border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/60 font-mono">© {new Date().getFullYear()} AlterMundi. All rights reserved.</p>
          <p className="text-xs text-primary font-mono crt-glow">[ Built with open tools &amp; open hearts ]</p>
        </div>
      </div>
    </footer>
  )
}
