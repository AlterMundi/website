import type React from "react"
import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "AlterMundi - Community Networks & Open Technology",
  description: "Building community networks and open technology solutions for digital inclusion and connectivity.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${sourceCodePro.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
