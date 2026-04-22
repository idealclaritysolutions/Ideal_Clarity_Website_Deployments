"use client"

import { Clock, Brain, TrendingUp, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ProblemsSection() {
  const problems = [
    {
      icon: Clock,
      title: "Time",
      description: 'You\'ve been "almost ready" for how long now? 6 months? A year? Two years?',
      detail: "Every month you wait is a month someone else gets the clients you could have had.",
    },
    {
      icon: Brain,
      title: "Mental Energy",
      description: 'The constant loop. "Should I start? Am I ready? What if I choose wrong?"',
      detail: "It's exhausting. And it's keeping you from focusing on anything else.",
    },
    {
      icon: TrendingUp,
      title: "Opportunity",
      description: "While you're stuck perfecting your plan, people with worse offers and less experience are making money.",
      detail: "Not because they're better than you. Because they made offers. You haven't.",
    },
    {
      icon: AlertTriangle,
      title: "The Gap Widens",
      description: "The longer you stay stuck, the harder it gets to start.",
      detail: 'The fear compounds. The "I\'ve been planning for so long, what if it doesn\'t work?" gets louder.',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-accent text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            The Real Cost of Staying Stuck
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">{problem.title}</h3>
                  <p className="text-white/80 leading-relaxed mb-2">{problem.description}</p>
                  <p className="text-white/90 font-medium leading-relaxed">{problem.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6">
          <p className="text-xl sm:text-2xl font-bold text-primary">
            Stop the loop. Remove the block. Execute.
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-10 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all"
          >
            <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
              Book Your Free Strategy Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
