import { Card } from "@/components/ui/card"
import { Clock, Brain, TrendingDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CostSection() {
  const costs = [
    {
      icon: Clock,
      title: "Wasted Time",
      description:
        "Weeks or months replaying the same thoughts, having the same conversations, getting nowhere. That time is gone forever.",
    },
    {
      icon: Brain,
      title: "Mental Energy Drain",
      description: "Lying awake at 3am. Can't focus. Constantly distracted by the thing you can't figure out.",
    },
    {
      icon: TrendingDown,
      title: "Missed Opportunities",
      description: "While you're stuck, opportunities pass you by. Competitors move faster. Life moves on without you.",
    },
  ]

  return (
    <section className="py-20 bg-primary/5 border-l-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg sm:text-xl text-foreground/85 leading-relaxed">
            You've been thinking about this for weeks. Maybe months. Stay or go? Corporate or entrepreneurship? This
            path or that one? You have ideas, but fear, doubt, or too many options keep you stuck. In one conversation,
            we'll cut through the noise, uncover what's really holding you back, and get you clear on your next move.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">
          The Real Cost of Staying Stuck
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Being stuck isn't just frustrating - it's expensive.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {costs.map((cost, index) => (
            <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow">
              <cost.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-accent mb-4">{cost.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{cost.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="text-lg px-10 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <Link href="/work-with-me#the-approach">See How I Can Help</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
