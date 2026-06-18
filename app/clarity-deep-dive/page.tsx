import type { Metadata } from "next"
import { Fraunces, Lora } from "next/font/google"
import { ClarityHero } from "@/components/clarity/clarity-hero"
import { ClarityMirror } from "@/components/clarity/clarity-mirror"
import { ClarityFormula } from "@/components/clarity/clarity-formula"
import { ClarityBarriers } from "@/components/clarity/clarity-barriers"
import { ClarityProof } from "@/components/clarity/clarity-proof"
import { ClaritySession } from "@/components/clarity/clarity-session"
import { ClarityOutcomes } from "@/components/clarity/clarity-outcomes"
import { ClarityAbout } from "@/components/clarity/clarity-about"
import { ClarityIsThisYou } from "@/components/clarity/clarity-is-this-you"
import { ClarityOffer } from "@/components/clarity/clarity-offer"
import { ClarityFAQ } from "@/components/clarity/clarity-faq"
import { ClarityBooking } from "@/components/clarity/clarity-booking"
import { ClarityClose } from "@/components/clarity/clarity-close"
import { ClarityFooter } from "@/components/clarity/clarity-footer"
import { StickyCTA } from "@/components/clarity/sticky-cta"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Clarity Deep Dive | Ideal Clarity",
  description:
    "You've had the business idea for months — maybe years — and you're still not moving. It was never a strategy problem. One 75-minute conversation to see what's actually in your way.",
}

export default function ClarityDeepDivePage() {
  return (
    <main className={`${fraunces.variable} ${lora.variable} bg-[#FAF7F0] min-h-screen`}>
      <ClarityHero />
      <ClarityMirror />
      <ClarityFormula />
      <ClarityBarriers />
      <ClarityProof />
      <ClaritySession />
      <ClarityOutcomes />
      <ClarityAbout />
      <ClarityIsThisYou />
      <ClarityOffer />
      <ClarityFAQ />
      <ClarityBooking />
      <ClarityClose />
      <ClarityFooter />
      <StickyCTA />
    </main>
  )
}
