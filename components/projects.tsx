import { Button } from "@/components/ui/button"
import { CornerBrackets } from "@/components/ui/corner-brackets"
import { ProjectsDecorations } from "@/components/section-decorations"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  name: string
  shortDescription: string
  tags: string[]
  status: string
  url: string
  repoUrl: string
  modelUrl?: string
}

const PROJECTS: Project[] = [
  {
    name: "LibreRouter / LibreMesh",
    shortDescription:
      "An open-hardware WiFi router and companion mesh networking firmware, purpose-built for community networks. Designed to be affordable, durable, and deployable with low technical barriers, already powering initiatives like QuintanaLibre in rural Cordoba.",
    tags: ["Networking", "Hardware", "Firmware"],
    status: "Flagship",
    url: "https://libremesh.org/",
    repoUrl: "https://github.com/libremesh/librerouter",
  },
  {
    name: "LibreIncu",
    shortDescription:
      "An open-source poultry incubator system for family farming, developed with CTO. It integrates temperature and humidity monitoring and control, local WiFi access through a mobile app, and remote dashboard data for practical field use.",
    tags: ["IoT", "Agriculture", "Hardware"],
    status: "Active",
    url: "https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora",
    repoUrl: "https://github.com/AlterMundi-MonitoreoyControl/Proyecto-Incubadora",
  },
  {
    name: "SAI (Sistema de Alerta de Incendios)",
    shortDescription:
      "A distributed early wildfire detection system that combines computer vision, edge devices, and automated alerts. Built as robust, scalable infrastructure for communities, municipalities, and private landowners protecting forests and agricultural land.",
    tags: ["Computer Vision", "IoT", "Safety"],
    status: "Active",
    url: "https://sainet.info/",
    repoUrl: "https://github.com/AlterMundi/sai-cam",
    modelUrl: "/models/sai-prueba-pagina.stl",
  },
  {
    name: "Phideus",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    tags: ["Open Source", "Infrastructure"],
    status: "Active",
    url: "https://github.com/altermundi",
    repoUrl: "https://github.com/altermundi",
  },
  {
    name: "Harmonic Beacon",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    tags: ["Connectivity", "Software"],
    status: "Active",
    url: "https://github.com/altermundi",
    repoUrl: "https://github.com/altermundi",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col container mx-auto px-4 lg:px-8 pt-8 pb-12 lg:pt-10 lg:pb-16 border-t border-border scroll-mt-16"
    >
      <ProjectsDecorations />
      <div className="relative z-10 flex flex-col flex-1 space-y-12">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-primary crt-glow">&gt; FEATURED_WORK</span>
          <h2 className="font-mono text-3xl lg:text-4xl font-bold leading-tight">Our Projects</h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
            Open-source tools built for real-world deployment - from community network infrastructure to fire detection
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              className={`relative bg-card border-2 border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(7,68,52,0.15)] group flex flex-col min-w-0 ${
                index < 3 ? "md:col-span-2" : "md:col-span-2 md:col-start-2 md:[&:last-child]:col-start-4"
              }`}
            >
              <CornerBrackets />

              <div className="bg-card p-6 flex flex-col flex-1 min-h-0">
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

                {/* Actions */}
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
