import { Button } from "@/components/ui/button"
import { CornerBrackets } from "@/components/ui/corner-brackets"
import { ExternalLink, Github } from "lucide-react"

const PROJECTS = [
  {
    name: "LibreRouter / LibreMesh",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Network infrastructure for community networks.",
    tags: ["Networking", "Hardware", "Firmware"],
    status: "Flagship",
    url: "https://librerouter.org",
    repoUrl: "https://github.com/libremesh/librerouter",
  },
  {
    name: "LibreIncu",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Community incubator platform.",
    tags: ["Platform", "Community", "Education"],
    status: "Active",
    url: "https://example.com/libreincu",
    repoUrl: "https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora",
  },
  {
    name: "SAI (Sistema de Alerta de Incendios)",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fire alert system for communities.",
    tags: ["IoT", "Safety", "Monitoring"],
    status: "Active",
    url: "https://sai.altermundi.net",
    repoUrl: "https://github.com/AlterMundi/sai-cam",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 border-t border-border scroll-mt-16"
    >
      <div className="space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; FEATURED_WORK</span>
          <h2 className="font-mono text-3xl lg:text-4xl font-bold leading-tight">Our Projects</h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
            Open-source hardware and software projects built for resilient infrastructure and real-world deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="relative bg-card border-2 border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(13,81,100,0.15)] group flex flex-col"
            >
              <CornerBrackets />

              <div className="p-6 flex flex-col flex-1">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-mono text-lg font-bold leading-tight text-balance group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2 py-1 text-xs font-mono uppercase tracking-wider shrink-0 ${
                        project.status === "Flagship"
                          ? "bg-primary/10 text-primary border-2 border-primary/30"
                          : "bg-secondary/10 text-secondary border-2 border-secondary/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed text-pretty">{project.shortDescription}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono uppercase tracking-wider px-2 py-1 bg-surface border-2 border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Spacer to push buttons to bottom */}
                <div className="flex-1 min-h-4" />

                {/* Actions - always at bottom */}
                <div className="flex gap-2 pt-4 mt-auto">
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Website
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Repo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
