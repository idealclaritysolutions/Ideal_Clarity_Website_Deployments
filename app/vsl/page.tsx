import type { Metadata } from "next"
import { VSLHero } from "@/components/vsl/vsl-hero"
import { VSLVideo } from "@/components/vsl/vsl-video"
import { VSLBenefits } from "@/components/vsl/vsl-benefits"
import { VSLSocialProof } from "@/components/vsl/vsl-social-proof"
import { VSLFAQ } from "@/components/vsl/vsl-faq"
import { VSLFinalCTA } from "@/components/vsl/vsl-final-cta"
import { VSLFloatingCTA } from "@/components/vsl/vsl-floating-cta"
import { VSLFooter } from "@/components/vsl/vsl-footer"

export const metadata: Metadata = {
  title: "Free Training: Remove The Block Keeping You Stuck | Ideal Clarity",
  description:
    "You've been planning to start your business for 6+ months. Watch this free 15-minute training to discover which of the 3 blocks is keeping you stuck—and how to remove it.",
}

export default function VSLPage() {
  return (
    <main className="min-h-screen bg-[#1a2332]">
      <VSLHero />
      <VSLVideo />
      <VSLBenefits />
      <VSLSocialProof />
      <VSLFAQ />
      <VSLFinalCTA />
      <VSLFooter />
      <VSLFloatingCTA />
    </main>
  )
}
