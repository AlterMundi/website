"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Mail, Github } from "lucide-react"

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Non-functional for now - could add mailto fallback
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const subject = "Contact from AlterMundi website"
    const message = formData.get("message")

    window.location.href = `mailto:info@altermundi.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message as string)}`
  }

  return (
    <section id="contact" className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 border-t border-border scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: CTA */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-muted">Get in Touch</span>
              <h2 className="font-mono text-3xl lg:text-4xl font-bold leading-tight">Work with Us</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interested in collaborating or learning more
                about our work?
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@altermundi.net" className="hover:text-primary transition-colors">
                  info@altermundi.net
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Github className="w-5 h-5 text-primary" />
                <a
                  href="https://github.com/altermundi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/altermundi
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card border border-border rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-3 py-2 bg-background border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
