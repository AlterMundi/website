import type React from "react"
import type { Metadata, Viewport } from "next"
import { Source_Code_Pro, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const sourceCodePro = Source_Code_Pro({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-mono",
})

const montserrat = Montserrat({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
})

const SITE_URL = "https://altermundi.net"
const SITE_TITLE = "AlterMundi - Community Networks & Open Technology"
const SITE_DESCRIPTION =
  "AlterMundi builds open hardware and libre software for community networks, helping communities deploy affordable, autonomous connectivity."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: "v0.app",
  icons: {
    icon: "/isotipo-alter-negro.svg",
    apple: "/isotipo-alter-negro.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AlterMundi",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/logo-blanco-aM.png",
        width: 1200,
        height: 630,
        alt: "AlterMundi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo-blanco-aM.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${montserrat.variable} ${sourceCodePro.variable} font-sans antialiased overflow-x-hidden`}>
        {/* Ensure animated elements are visible when JS is disabled */}
        <noscript>
          <style>{`[class*="animate-[fade-in"],[class*="animate-[slide-in"]{animation:none!important;opacity:1!important}`}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
