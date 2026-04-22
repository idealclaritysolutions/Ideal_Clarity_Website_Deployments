import { Card } from "@/components/ui/card"
import { Trophy, BarChart3, RefreshCw } from "lucide-react"

export function BreakthroughAfter() {
  const scenarios = [
    {
      icon: Trophy,
      title: "Scenario 1: You get 1-3 yes's",
      description: "Congratulations. You have clients. You're no longer stuck in planning mode.",
      outcome: "You know what to do next: keep making offers, serve your clients, refine your process.",
      highlight: true,
    },
    {
      icon: BarChart3,
      title: "Scenario 2: You get 10 no's",
      description: "This is still success.",
      outcome: 'You have data. You know what objections came up. You know what needs to adjust (pricing, offer, messaging). You\'re no longer stuck wondering "what if." You have market feedback.',
      highlight: false,
    },
    {
      icon: RefreshCw,
      title: "Scenario 3: You made 5 offers and couldn't make the other 5",
      description: "There's another block.",
      outcome: "We identify it and dismantle it.",
      highlight: false,
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">What Happens After</h2>
          <p className="text-xl text-foreground/80 text-center mb-12">
            By Week 4, you&apos;ve made 10 offers. Some scenarios:
          </p>
          
          <div className="space-y-6 mb-12">
            {scenarios.map((scenario, index) => (
              <Card 
                key={index} 
                className={`p-8 ${scenario.highlight ? 'bg-primary/5 border-2 border-primary/20' : 'bg-white border-2 border-border'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${scenario.highlight ? 'bg-primary/20' : 'bg-muted'} flex items-center justify-center shrink-0`}>
                    <scenario.icon className={`w-6 h-6 ${scenario.highlight ? 'text-primary' : 'text-foreground/60'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-accent mb-2">{scenario.title}</h3>
                    <p className="text-foreground/80 mb-2">{scenario.description}</p>
                    <p className={`${scenario.highlight ? 'text-foreground/90 font-medium' : 'text-foreground/70'}`}>
                      {scenario.outcome}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-accent text-white text-center">
            <p className="text-xl font-bold mb-2">All outcomes are progress.</p>
            <p className="text-white/80">
              Because the alternative—staying stuck in planning mode—gets you zero data and zero momentum.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
