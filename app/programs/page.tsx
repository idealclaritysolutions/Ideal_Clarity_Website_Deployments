import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProgramsHero } from "@/components/programs/programs-hero"
import { ProgramWeeks } from "@/components/programs/program-weeks"
import { ProgramIncludes } from "@/components/programs/program-includes"
import { ProgramInvestment } from "@/components/programs/program-investment"
import { ProgramSuccess } from "@/components/programs/program-success"
import { ProgramForYou } from "@/components/programs/program-for-you"
import { ProgramNextSteps } from "@/components/programs/program-next-steps"

export const metadata: Metadata = {
  title: "From Idea to First Offer - Programs | Ideal Clarity Solutions",
  description:
    "4 weeks. $3,500. From stuck in planning to 10 offers made. The program that removes your blocks and gets you executing.",
}

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProgramsHero />
        <ProgramWeeks />
        <ProgramIncludes />
        <ProgramInvestment />
        <ProgramSuccess />
        <ProgramForYou />
        <ProgramNextSteps />
      </main>
      <Footer />
    </div>
  )
}
