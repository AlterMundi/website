"use client"

import { Button } from "@/components/ui/button"
import { CornerBrackets } from "@/components/ui/corner-brackets"
import { ProjectsDecorations } from "@/components/section-decorations"
import { useLanguage } from "@/lib/i18n"
import type { Dictionary, ProjectId } from "@/lib/dictionaries"
import { Construction, ExternalLink, Github } from "lucide-react"

type Project = {
  /** Key into the dictionary, where the description and tags live. */
  id: ProjectId
  /** Proper name — the same in every language. */
  name: string
  status: keyof Dictionary["projects"]["status"]
  /** Omit when the project has no public site yet — the card shows a "site in progress" state. */
  url?: string
  repoUrl: string
  modelUrl?: string
  /**
   * Additional related sites, rendered after the Website/Repo buttons. Labels
   * are deliberately not translated: they name a specific resource, and the
   * anchor text is what search engines read.
   */
  extraLinks?: { label: string; url: string }[]
}

const PROJECTS: Project[] = [
  {
    id: "conectividad",
    name: "Conectividad",
    status: "flagship",
    url: "https://conectividad.altermundi.net/",
    repoUrl: "https://gitlab.com/librerouter/",
  },
  {
    id: "libreagro",
    name: "LibreAgro",
    status: "active",
    url: "https://libreincu.altermundi.net/",
    repoUrl: "https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora",
    extraLinks: [
      { label: "Cartilla avícola", url: "https://materialavicola.altermundi.net/" },
    ],
  },
  {
    id: "sai",
    name: "SAI (Sistema de Alerta de Incendios)",
    status: "active",
    url: "https://sainet.info/",
    repoUrl: "https://github.com/AlterMundi/sai-cam",
    modelUrl: "/models/sai-prueba-pagina.stl",
  },
  {
    id: "phideus",
    name: "Phideus",
    status: "active",
    url: "https://phideus.net",
    repoUrl: "https://github.com/AlterMundi/Phideus",
  },
  {
    id: "beacon",
    name: "Harmonic Beacon",
    status: "active",
    url: "https://harmonicbeacon.com",
    repoUrl: "https://github.com/altermundi",
  },
  {
    id: "daemonmatrix",
    name: "DaemonMatrix",
    status: "active",
    repoUrl: "https://github.com/AlterMundi/daimon-matrix",
    extraLinks: [{ label: "DaemonCraft", url: "https://daemoncraft.altermundi.net" }],
  },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-10 sm:pb-12 lg:pb-16 border-t border-border scroll-mt-14 sm:scroll-mt-16 md:scroll-mt-20"
    >
      <ProjectsDecorations />
      <div className="relative z-10 flex flex-col flex-1 space-y-8 sm:space-y-12">
        <div className="space-y-3 sm:space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">{t.projects.eyebrow}</span>
          <h2 className="font-mono text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{t.projects.heading}</h2>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-2xl">
            {t.projects.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6 auto-rows-fr">
          {PROJECTS.map((project) => {
            const copy = t.projects.items[project.id]

            return (
              <div
                key={project.id}
                className="relative bg-card border-2 border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(94,201,116,0.2)] group flex flex-col min-w-0 lg:col-span-2"
              >
                <CornerBrackets />

                <div className="bg-card p-4 sm:p-6 flex flex-col flex-1 min-h-0">
                  {/* Header */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start justify-between gap-2 min-w-0">
                      <h3 className="font-mono text-base sm:text-lg font-bold leading-tight text-balance group-hover:text-primary transition-colors min-w-0">
                        {project.name}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2 py-1 text-xs font-mono uppercase tracking-wider shrink-0 ${project.status === "flagship"
                            ? "bg-primary/10 text-primary border-2 border-primary/30"
                            : "bg-secondary/10 text-secondary border-2 border-secondary/30"
                          }`}
                      >
                        {t.projects.status[project.status]}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed text-pretty">{copy.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {copy.tags.map((tag) => (
                      <span key={tag} className="text-[10px] sm:text-xs font-mono uppercase tracking-wider px-1.5 sm:px-2 py-0.5 sm:py-1 bg-surface border-2 border-border">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col min-[400px]:flex-row min-[400px]:flex-wrap gap-2 pt-3 sm:pt-4 mt-auto">
                    {project.url ? (
                      <Button asChild size="sm" className="min-[400px]:flex-1">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {t.projects.website}
                        </a>
                      </Button>
                    ) : (
                      <span
                        className="inline-flex items-center justify-center gap-1.5 h-8 px-3 min-[400px]:flex-1 text-sm font-medium font-mono uppercase tracking-wider border-2 border-dashed border-border text-foreground/50"
                        aria-label={t.projects.noSiteAria}
                      >
                        <Construction className="w-4 h-4" />
                        {t.projects.noSite}
                      </span>
                    )}
                    <Button asChild variant="outline" size="sm">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        {t.projects.repo}
                      </a>
                    </Button>
                    {project.extraLinks?.map((link) => (
                      <Button key={link.url} asChild variant="outline" size="sm" className="min-[400px]:flex-1">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          {link.label}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
