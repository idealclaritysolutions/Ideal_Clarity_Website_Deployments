import { Card } from "@/components/ui/card"
import { Lightbulb, Target, Zap } from "lucide-react"

export function AboutBreakthrough() {
  const steps = [
    {
      icon: Target,
      week: "Week 1",
      title: "Identified the real block",
      description: '(not "I need more time" but "I\'m terrified of being seen and judged")',
    },
    {
      icon: Zap,
      week: "Days 2-10",
      title: "Systematically dismantled it",
      description: "using breathwork and evidence-based belief rewiring",
    },
    {
      icon: Lightbulb,
      week: "Weeks 2-4",
      title: "Executed",
      description: "Built my offer. Reached out to my network. Made offers.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-accent text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">The Breakthrough</h2>
          
          <Card className="p-8 sm:p-10 bg-white/5 border border-white/10 mb-12">
            <p className="text-xl sm:text-2xl font-bold text-primary mb-6 text-center">
              One day I realized: I&apos;m not confused. I&apos;m blocked.
            </p>
            <p className="text-lg text-white/80 leading-relaxed text-center">
              And the block wasn&apos;t going away by consuming more content or making more plans.
              I had to identify what was actually stopping me and dismantle it.
            </p>
          </Card>

          <h3 className="text-2xl font-bold mb-8 text-center">So I created The Breakthrough Protocol.</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 bg-white/5 border border-white/10 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary mb-2 block">{step.week}</span>
                <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                <p className="text-white/70 text-sm">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl font-bold text-white">And it worked.</p>
            <p className="text-lg text-white/80">
              Not because I &quot;got over my fear.&quot; Because I removed the block that was creating the fear.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
