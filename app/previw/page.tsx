import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageBackground } from "@/components/page-background"
import { Team } from "@/components/team"

export const metadata: Metadata = {
  title: "Revisión del equipo — AlterMundi",
  description: "Versión de revisión de las biografías y fotografías del equipo de AlterMundi.",
  robots: { index: false, follow: false, noarchive: true, nosnippet: true },
}

export default function TeamPreviewPage() {
  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden noise-texture">
      <PageBackground />
      <Navbar />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <div className="container mx-auto px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8">
          <div className="mx-auto max-w-6xl border-l-2 border-primary bg-card/70 px-5 py-4">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Versión de revisión · Review version</p>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-foreground/75 sm:text-base">
              Este enlace reúne las biografías, fotografías y enlaces del equipo para una revisión compartida. Cada integrante puede proponer correcciones o una nueva fotografía.
            </p>
          </div>
        </div>
        <Team fullPage profileBasePath="/previw" />
      </main>
      <Footer />
    </div>
  )
}
