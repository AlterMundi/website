import { ContactDecorations } from "@/components/section-decorations"
import { Mail, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative container mx-auto px-4 lg:px-8 py-12 lg:py-20 border-t border-border scroll-mt-16">
      <ContactDecorations />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; CONTACT</span>
              <h2 className="font-mono text-3xl lg:text-4xl font-bold leading-tight">Work with Us</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We value collaboration as the foundation of everything we do. Whether you want to fund a project,
                contribute code, test our tools, or start a community network - every action counts.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-sm font-mono">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@altermundi.net" className="hover:text-primary transition-colors hover:crt-glow">
                  info@altermundi.net
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm font-mono">
                <Github className="w-5 h-5 text-primary" />
                <a
                  href="https://github.com/altermundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors hover:crt-glow"
                >
                  github.com/altermundi
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
