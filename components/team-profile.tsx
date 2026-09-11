"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import type { TeamMember } from "@/lib/team-data"

const copy = {
  es: { back: "Volver al equipo", areas: "Áreas de trabajo", links: "Enlaces públicos", portrait: "Retrato de" },
  en: { back: "Back to the team", areas: "Areas of work", links: "Public links", portrait: "Portrait of" },
} as const

export function TeamProfile({ member, backHref = "/equipo/" }: { member: TeamMember; backHref?: string }) {
  const { lang } = useLanguage()
  const strings = copy[lang]

  return (
    <article className="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href={backHref}
          className="mb-8 inline-flex min-h-11 items-center gap-2 py-2 font-mono text-sm text-primary underline decoration-primary/40 underline-offset-4 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ArrowLeft className="size-4" aria-hidden />{strings.back}
        </Link>

        <header className="flex flex-col items-start gap-6 overflow-hidden border-2 border-border bg-card p-6 sm:flex-row sm:items-center sm:gap-9 sm:p-10 lg:p-12">
          <div className="relative size-36 shrink-0 overflow-hidden rounded-full border-2 border-primary/40 bg-background shadow-[0_0_0_6px_rgba(94,201,116,0.05)] sm:size-44 lg:size-52">
            {member.portrait ? (
              <Image
                src={member.portrait}
                alt={`${strings.portrait} ${member.name}`}
                fill
                priority
                sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
                className="object-cover grayscale-[15%] contrast-[1.06]"
                style={{
                  objectPosition: member.portraitPosition ?? "50% 50%",
                  transform: `scale(${member.portraitZoom ?? 1})`,
                  transformOrigin: member.portraitOrigin ?? "50% 50%",
                }}
              />
            ) : null}
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{member.role[lang]}</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">{member.name}</h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-foreground/75 sm:text-lg">{member.summary[lang]}</p>
          </div>
        </header>

        <div className="grid gap-10 border-x-2 border-b-2 border-border bg-background/70 p-6 sm:p-10 lg:grid-cols-[1.5fr_0.7fr] lg:p-12">
          <div className="space-y-6 text-base leading-[1.8] text-foreground/80 sm:text-lg">
            {member.quote ? (
              <blockquote className="border-l-2 border-primary bg-card/60 px-5 py-4 text-lg font-medium italic leading-relaxed text-foreground sm:px-6 sm:py-5 sm:text-xl">
                <p>“{member.quote}”</p>
                <footer className="mt-3 font-mono text-xs not-italic uppercase tracking-[0.14em] text-primary">
                  — {member.quoteAttribution ?? member.name}
                </footer>
              </blockquote>
            ) : null}
            {member.biography[lang].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <aside className="space-y-8 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <section aria-labelledby="areas-title">
              <h2 id="areas-title" className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{strings.areas}</h2>
              <ul className="mt-4 space-y-3">
                {member.areas[lang].map((area) => (
                  <li key={area} className="border-l-2 border-primary/50 pl-3 text-sm text-foreground/75">{area}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="links-title">
              <h2 id="links-title" className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{strings.links}</h2>
              <div className="mt-4 flex flex-col gap-2">
                {member.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center justify-between gap-3 border border-border px-4 py-2 font-mono text-sm text-foreground/75 transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {link.label}<ExternalLink className="size-4" aria-hidden />
                  </a>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </article>
  )
}
