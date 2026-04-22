import { Card } from "@/components/ui/card"
import { X, Check } from "lucide-react"

export function BreakthroughWhy() {
  const mostCoaches = [
    { text: 'Tell you to "just start"', result: "(doesn't remove the block)" },
    { text: "Give you tactics", result: "(doesn't address why you can't execute the tactics)" },
    { text: 'Work on "confidence"', result: "(confidence doesn't dismantle beliefs)" },
  ]

  const protocol = [
    { text: "Identifies the REAL block", result: "(not the surface excuse)" },
    { text: "Dismantles it systematically", result: "(daily evidence work)" },
    { text: "Forces execution", result: "(you make the offers by Week 4)" },
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Why This Works When Other Things Don&apos;t
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Most Coaches */}
            <Card className="p-8 bg-muted/30 border-2 border-border">
              <h3 className="text-xl font-bold text-accent mb-6">Most coaches:</h3>
              <ul className="space-y-4">
                {mostCoaches.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-destructive/10 shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <span className="text-foreground/80">{item.text}</span>
                      <span className="text-foreground/50 text-sm ml-1">{item.result}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            {/* The Breakthrough Protocol */}
            <Card className="p-8 bg-primary/5 border-2 border-primary/20">
              <h3 className="text-xl font-bold text-accent mb-6">The Breakthrough Protocol:</h3>
              <ul className="space-y-4">
                {protocol.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-primary/20 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="text-foreground/90 font-medium">{item.text}</span>
                      <span className="text-foreground/60 text-sm ml-1">{item.result}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <p className="text-center text-xl font-bold text-primary mt-12">
            You don&apos;t &quot;get over&quot; the block. You remove it.
          </p>
        </div>
      </div>
    </section>
  )
}
