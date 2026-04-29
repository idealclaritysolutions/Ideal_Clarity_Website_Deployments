import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Geist_Mono, Geist as V0_Font_Geist, Merriweather as V0_Font_Merriweather } from "next/font/google"

// Initialize fonts
const _geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _merriweather = V0_Font_Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Ideal Clarity Solutions LLC - You Know What To Do. You Just Can't Seem To Make Yourself Do It.",
  description:
    "You've been planning to start your business for 6+ months. There's a block. Let's remove it. From Idea to First Offer: 4 weeks, $3,500, from stuck in planning to 10 offers made.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
