"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { CornerBrackets } from "@/components/ui/corner-brackets"
import { useLanguage } from "@/lib/i18n"
import { teamMembers, type TeamMember } from "@/lib/team-data"
import { cn } from "@/lib/utils"

const copy = {
  es: {
    eyebrow: "> EQUIPO",
    heading: "Personas que hacen AlterMundi",
    intro: "Un equipo diverso que cruza redes comunitarias, hardware abierto, investigación, salud, producción, diseño e inteligencia artificial.",
    readMore: "Leer más",
    profileLinks: "Enlaces de",
    portrait: "Retrato de",
  },
  en: {
    eyebrow: "> TEAM",
    heading: "The people who make AlterMundi",
    intro: "A diverse team connecting community networks, open hardware, research, health, production, design and artificial intelligence.",
    readMore: "Read more",
    profileLinks: "Links for",
    portrait: "Portrait of",
  },
} as const

function MemberCard({ member, prominent = false }: { member: TeamMember; prominent?: boolean }) {
  const { lang } = useLanguage()
  const strings = copy[lang]

  return (
    <article className={cn(
      "group relative overflow-hidden border-2 border-border bg-card transition-colors hover:border-primary/60 focus-within:border-primary/70",
      prominent ? "grid min-h-[25rem] sm:grid-cols-[minmax(13rem,0.8fr)_1.2fr]" : "flex min-h-full flex-col"
    )}>
      <CornerBrackets size={prominent ? "md" : "sm"} />
      <div className={cn("relative overflow-hidden bg-background", prominent ? "min-h-64 sm:min-h-full" : "aspect-[4/3]")}>
        {member.portrait ? (
          <Image
            src={member.portrait}
            alt={`${strings.portrait} ${member.name}`}
            fill
            sizes={prominent ? "(max-width: 640px) 100vw, 34vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
            className="object-cover grayscale-[20%] contrast-[1.06] transition duration-500 group-hover:grayscale-0 group-hover:scale-[1.02]"
            style={{ objectPosition: member.portraitPosition ?? "50% 50%" }}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center font-mono text-5xl text-primary/60" aria-hidden>
            {member.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className={cn("relative z-10 flex flex-1 flex-col", prominent ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6")}>
        <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">{member.role[lang]}</p>
        <h3 className={cn("font-extrabold leading-tight text-foreground", prominent ? "text-3xl lg:text-4xl" : "text-xl sm:text-2xl")}>
          {member.name}
        </h3>
        <p className={cn("mt-4 leading-relaxed text-foreground/75", prominent ? "text-base lg:text-lg" : "text-sm")}>
          {member.summary[lang]}
        </p>

        <div className="mt-auto pt-6">
          <div className="mb-4 flex flex-wrap gap-2" aria-label={`${strings.profileLinks} ${member.name}`}>
            {member.links.slice(0, prominent ? 3 : 2).map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 border border-border px-3 py-2 font-mono text-xs text-foreground/70 transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}<ExternalLink className="size-3.5" aria-hidden />
              </a>
            ))}
          </div>
          <Link
            href={`/equipo/${member.slug}/`}
            className="inline-flex min-h-11 items-center gap-2 py-2 font-mono text-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {strings.readMore}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function Team({ fullPage = false }: { fullPage?: boolean }) {
  const { lang } = useLanguage()
  const strings = copy[lang]
  const featured = teamMembers.filter((member) => member.featured)
  const rest = teamMembers.filter((member) => !member.featured)
  const Heading = fullPage ? "h1" : "h2"

  return (
    <section
      id="team"
      className={cn(
        "relative container mx-auto px-4 sm:px-6 lg:px-8 border-t border-border scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20",
        fullPage ? "py-10 sm:py-14 lg:py-20" : "py-14 sm:py-16 lg:py-24"
      )}
    >
      <div className="relative z-10 mx-auto max-w-6xl space-y-8 sm:space-y-10">
        <header className="grid gap-4 border-b border-border pb-7 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-primary crt-glow">{strings.eyebrow}</span>
            <Heading className={cn("font-extrabold leading-[1.05] tracking-tight", fullPage ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-5xl")}>
              {strings.heading}
            </Heading>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg md:justify-self-end">{strings.intro}</p>
        </header>

        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((member) => <MemberCard key={member.slug} member={member} prominent />)}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((member) => <MemberCard key={member.slug} member={member} />)}
        </div>
      </div>
    </section>
  )
}
