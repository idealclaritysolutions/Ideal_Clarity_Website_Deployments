import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CostSection } from "@/components/cost-section"
import { ProblemsSection } from "@/components/problems-section"
import { WhatYouGet } from "@/components/what-you-get"
import { LastingValue } from "@/components/lasting-value"
import { Testimonial } from "@/components/testimonial"
import { HowItWorks } from "@/components/how-it-works"
import { WhoSection } from "@/components/who-section"
import { AboutSection } from "@/components/about-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { MidPageCTA } from "@/components/mid-page-cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CostSection />
        <WhoSection />
        <ProblemsSection />
        <MidPageCTA />
        <WhatYouGet />
        <LastingValue />
        <Testimonial />
        <HowItWorks />
        <AboutSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
