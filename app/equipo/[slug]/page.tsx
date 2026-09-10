import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { PageBackground } from "@/components/page-background"
import { TeamProfile } from "@/components/team-profile"
import { getTeamMember, teamMembers } from "@/lib/team-data"

export const dynamicParams = false

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const member = getTeamMember(slug)
  if (!member) return {}

  return {
    title: `${member.name} — Equipo AlterMundi`,
    description: member.summary.es,
    alternates: { canonical: `/equipo/${member.slug}/` },
    openGraph: {
      url: `/equipo/${member.slug}/`,
      images: member.portrait ? [{ url: member.portrait, alt: `Retrato de ${member.name}` }] : undefined,
    },
  }
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = getTeamMember(slug)
  if (!member) notFound()

  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden noise-texture">
      <PageBackground />
      <Navbar />
      <main className="pt-14 sm:pt-16 md:pt-20"><TeamProfile member={member} /></main>
      <Footer />
    </div>
  )
}

