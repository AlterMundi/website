import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageBackground } from "@/components/page-background"
import { Team } from "@/components/team"

export const metadata: Metadata = {
  title: "Equipo — AlterMundi",
  description: "Las personas que investigan, construyen y sostienen los proyectos de AlterMundi.",
  alternates: { canonical: "/equipo/" },
  openGraph: { url: "/equipo/" },
}

export default function TeamPage() {
  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden noise-texture">
      <PageBackground />
      <Navbar />
      <main className="pt-14 sm:pt-16 md:pt-20"><Team fullPage /></main>
      <Footer />
    </div>
  )
}

