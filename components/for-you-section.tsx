"use client"

import { Check, X } from "lucide-react"

export function ForYouSection() {
  const forYou = [
    "You've been planning to start for 6+ months but can't seem to execute",
    "You know WHAT to do but can't make yourself DO it",
    "Your reasons for waiting keep changing but you're always in preparation mode",
    "You're employed and want to build on the side (not quit and hope)",
    "You're ready to invest $3,500 to finally break the pattern",
    "You're willing to make 10 offers in 4 weeks (even if you're scared)",
  ]

  const notForYou = [
    "You're still exploring ideas (not ready to commit to one)",
    "You genuinely don't know what business you want to build",
    "You're looking for Instagram growth tactics or marketing funnels",
    "You're not ready to actually START in the next 30 days",
    "$3,500 feels impossible right now",
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* This Is For You */}
            <div className="p-8 sm:p-10 rounded-2xl bg-secondary/5 border-2 border-secondary/20">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-accent">This Is For You If:</h3>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-secondary/20 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* This Is NOT For You */}
            <div className="p-8 sm:p-10 rounded-2xl bg-muted/50 border-2 border-border">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-accent">This Is NOT For You If:</h3>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-destructive/10 shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
