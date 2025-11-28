import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UrgencySection } from "@/components/offerings/urgency-section"
import { ValueProposition } from "@/components/offerings/value-proposition"
import { OfferingsGrid } from "@/components/offerings/offerings-grid"
import { OfferingsCallToAction } from "@/components/offerings/offerings-cta"
import { FloatingCTA } from "@/components/offerings/floating-cta"

export const metadata = {
  title: "Work With Me - Ideal Clarity Solutions",
  description:
    "Get unstuck and gain clarity on your career decisions. Choose from single sessions, packages, or ongoing support.",
}

export default function WorkWithMePage() {
  return (
    <>
      <Header />
      <main>
        <UrgencySection />
        <ValueProposition />
        <OfferingsGrid />
        <OfferingsCallToAction />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
