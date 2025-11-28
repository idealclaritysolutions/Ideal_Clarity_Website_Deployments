"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function HowItWorks() {
  const router = useRouter()

  const handlePackagesClick = () => {
    router.push("/work-with-me")
    setTimeout(() => {
      document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  const steps = [
    {
      number: 1,
      title: "Book Your Session",
      description: "Pick a time that works. We meet on Zoom for 90 minutes. Come ready to think out loud.",
    },
    {
      number: 2,
      title: "We Talk It Through",
      description: "No generic advice. We dig into YOUR specific situation until the real issue becomes clear.",
    },
    {
      number: 3,
      title: "You Walk Away with Clarity",
      description:
        "You'll know exactly what to do next. Plus, you'll have the thinking tools to navigate complexity on your own.",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">How It Works</h2>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">Simple. Effective. No BS.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <Card key={step.number} className="p-8 text-center bg-white hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-md">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Link href="https://calendly.com/idealclaritysolutions/career-clarity-coaching-intro-call" target="_blank">
              Book Free Session
            </Link>
          </Button>
          <Button
            size="lg"
            onClick={handlePackagesClick}
            className="text-lg px-8 py-6 h-auto rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            See All Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
