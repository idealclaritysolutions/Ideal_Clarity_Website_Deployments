import type { Metadata } from "next"
import { VSLHero } from "@/components/vsl/vsl-hero"
import { VSLVideo } from "@/components/vsl/vsl-video"
import { VSLBenefits } from "@/components/vsl/vsl-benefits"
import { VSLSocialProof } from "@/components/vsl/vsl-social-proof"
import { VSLFAQ } from "@/components/vsl/vsl-faq"
import { VSLFinalCTA } from "@/components/vsl/vsl-final-cta"
import { VSLFooter } from "@/components/vsl/vsl-footer"
import { ChooseYourPath } from "@/components/vsl/choose-your-path"
import { RealityCheck } from "@/components/vsl/reality-check"
import { ExitIntentOffer } from "@/components/vsl/exit-intent-offer"

export const metadata: Metadata = {
  title: "Free Training: Remove The Block Keeping You Stuck | Ideal Clarity",
  description:
    "You've been planning to start your business for 6+ months. Watch this free 15-minute training to discover which of the 3 blocks is keeping you stuck—and how to remove it.",
}

export default function VSLPage() {
  return (
    <main className="min-h-screen bg-[#1a2332]">
      {/* 1. Hook them with the problem */}
      <VSLHero />
      
      {/* 2. Gated video - email capture */}
      <VSLVideo />
      
      {/* 3. What they'll learn (builds desire) */}
      <VSLBenefits />
      
      {/* 4. Reality check - bold statements to trigger decision */}
      <RealityCheck />
      
      {/* 5. Choose your path - 3 clear options for every budget */}
      <ChooseYourPath />
      
      {/* 5. Social proof (validates decision) */}
      <VSLSocialProof />
      
      {/* 6. Handle objections */}
      <VSLFAQ />
      
      {/* 7. Final push */}
      <VSLFinalCTA />
      
      <VSLFooter />
      
      {/* Conversion tool - sticky bottom bar */}
      <ExitIntentOffer />
    </main>
  )
}
