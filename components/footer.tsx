import { AlterMundiLogo } from "@/components/altermundi-logo"
import { ScrollLink } from "@/components/ui/scroll-link"

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <AlterMundiLogo className="h-14 w-auto mt-1" />
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Building open technology solutions for resilient infrastructure, digital inclusion, and real-world impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
              {"// Navigation"}
            </h3>
            <nav className="flex flex-col gap-2">
              <ScrollLink
                targetId="about"
                className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; About_Us
              </ScrollLink>
              <ScrollLink
                targetId="projects"
                className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; Projects
              </ScrollLink>
              <ScrollLink
                targetId="contact"
                className="text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                &gt; Contact
              </ScrollLink>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-primary">
              {"// Connect"}
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
          <p className="text-xs text-foreground/60 font-mono">© {currentYear} AlterMundi. All rights reserved.</p>
          <p className="text-xs text-primary font-mono crt-glow">[ Built with open tools &amp; open hearts ]</p>
        </div>
      </div>
    </footer>
  )
}
