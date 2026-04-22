import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutBreakthrough } from "@/components/about/about-breakthrough"
import { AboutWhoIHelp } from "@/components/about/about-who-i-help"
import { AboutApproach } from "@/components/about/about-approach"
import { AboutCredentials } from "@/components/about/about-credentials"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About - Ideal Clarity Solutions",
  description:
    "I've been where you are. Stuck knowing what to do but unable to make myself do it. Learn about my journey and how I can help you break through your blocks.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutBreakthrough />
        <AboutWhoIHelp />
        <AboutApproach />
        <AboutCredentials />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  )
}
