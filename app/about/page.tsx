import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"
import { AboutContent } from "@/components/about-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — AlterMundi",
  description: "AlterMundi builds open hardware and libre software for community networks, helping communities deploy affordable, autonomous connectivity.",
  alternates: { canonical: "/about/" },
  openGraph: { url: "/about/" },
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full min-w-0 overflow-x-hidden noise-texture">
      <PageBackground />
      <Navbar />
      <main className="pt-14 sm:pt-16 md:pt-20">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
