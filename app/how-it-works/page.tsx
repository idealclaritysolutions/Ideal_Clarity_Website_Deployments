import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BreakthroughHero } from "@/components/breakthrough/breakthrough-hero"
import { BreakthroughProblem } from "@/components/breakthrough/breakthrough-problem"
import { BreakthroughProtocol } from "@/components/breakthrough/breakthrough-protocol"
import { BreakthroughWhy } from "@/components/breakthrough/breakthrough-why"
import { BreakthroughAfter } from "@/components/breakthrough/breakthrough-after"
import { BreakthroughCTA } from "@/components/breakthrough/breakthrough-cta"

export const metadata: Metadata = {
  title: "The Breakthrough Protocol - How It Works | Ideal Clarity Solutions",
  description:
    "How I identify the block you can't see and help you remove it systematically. You can't think your way past a block. Learn how the Breakthrough Protocol works.",
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BreakthroughHero />
        <BreakthroughProblem />
        <BreakthroughProtocol />
        <BreakthroughWhy />
        <BreakthroughAfter />
        <BreakthroughCTA />
      </main>
      <Footer />
    </div>
  )
}
