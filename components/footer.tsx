"use client"

import { AlterMundiLogo } from "@/components/altermundi-logo"
import { ScrollLink } from "@/components/ui/scroll-link"
import { FooterDecorations } from "@/components/section-decorations"
import { useLanguage } from "@/lib/i18n"

const currentYear = new Date().getFullYear()

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="relative border-t-2 border-border bg-card">
      <FooterDecorations />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="flex items-center justify-center sm:justify-start h-full">
            <AlterMundiLogo className="h-12 sm:h-14 w-auto" />
          </div>

          {/* Navigation */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              {t.footer.navigation}
            </h3>
            <nav className="flex flex-col gap-1.5 sm:gap-2">
              <a
                href="/about/"
                className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                {t.footer.aboutUs}
              </a>
              <ScrollLink
                targetId="projects"
                scrollBlock="start"
                className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                {t.footer.projects}
              </ScrollLink>
              <ScrollLink
                targetId="contact"
                className="text-xs sm:text-sm font-mono text-foreground/70 hover:text-primary transition-colors text-left"
              >
                {t.footer.contact}
              </ScrollLink>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              {t.footer.connect}
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
          <p className="text-[10px] sm:text-xs text-foreground/60 font-mono">© {currentYear} {t.footer.legal}</p>
          <p className="text-[10px] sm:text-xs text-primary/70 font-mono crt-glow">{t.footer.motto}</p>
        </div>
      </div>
    </footer>
  )
}
