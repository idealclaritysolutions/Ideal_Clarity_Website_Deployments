import { Card } from "@/components/ui/card"
import { Search, Zap, Rocket } from "lucide-react"

export function AboutApproach() {
  const approaches = [
    {
      icon: Search,
      number: "1",
      title: "I Identify The Block You Can't See",
      before: 'You think it\'s "I don\'t know my niche."',
      after: 'I show you it\'s "I\'m terrified of choosing wrong and wasting time."',
    },
    {
      icon: Zap,
      number: "2",
      title: "I Help You Remove It Systematically",
      before: "Not with affirmations or positive thinking.",
      after: "With The Breakthrough Protocol: daily breathwork + evidence-based belief rewiring.",
    },
    {
      icon: Rocket,
      number: "3",
      title: "I Make You Execute",
      before: "Week 4: You make 10 offers to real people.",
      after: "I don't let you delay. I don't let you hide.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Approach</h2>
          
          <div className="space-y-6">
            {approaches.map((approach, index) => (
              <Card key={index} className="p-8 bg-white border-2 border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-primary">{approach.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-accent mb-4">{approach.title}</h3>
                    <div className="space-y-2">
                      <p className="text-foreground/70">{approach.before}</p>
                      <p className="text-foreground/90 font-medium">{approach.after}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
