import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PatternSection } from "@/components/pattern-section"
import { ProblemsSection } from "@/components/problems-section"
import { SolutionSection } from "@/components/solution-section"
import { Testimonial } from "@/components/testimonial"
import { AboutSection } from "@/components/about-section"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PatternSection />
        <ProblemsSection />
        <SolutionSection />
        <Testimonial />
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
