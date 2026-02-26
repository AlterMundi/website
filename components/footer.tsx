import { AlterMundiLogo } from "@/components/altermundi-logo"
import { ScrollLink } from "@/components/ui/scroll-link"
import { FooterDecorations } from "@/components/section-decorations"

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative border-t-2 border-border bg-card">
      <FooterDecorations />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center">
              <AlterMundiLogo className="h-12 sm:h-14 w-auto mt-1" />
            </div>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Building open technology solutions for resilient infrastructure, digital inclusion, and real-world impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              {"// Navigation"}
            </h3>
            <nav className="flex flex-col gap-1.5 sm:gap-2">
              <ScrollLink
                targetId="about"
                className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; About_Us
              </ScrollLink>
              <ScrollLink
                targetId="projects"
                scrollBlock="start"
                className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; Projects
              </ScrollLink>
              <ScrollLink
                targetId="contact"
                className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; Contact
              </ScrollLink>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              {"// Connect"}
            </h3>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <a
                href="mailto:info@altermundi.net"
                className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-primary transition-colors break-all"
              >
                &gt; info@altermundi.net
              </a>
              <a
                href="https://github.com/altermundi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-primary transition-colors break-all"
              >
                &gt; github.com/altermundi
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t-2 border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs text-foreground/60 font-mono">© {currentYear} AlterMundi. All rights reserved.</p>
          <p className="text-[10px] sm:text-xs text-primary font-mono crt-glow">[ Built with open tools &amp; open hearts ]</p>
        </div>
      </div>
    </footer>
  )
}
