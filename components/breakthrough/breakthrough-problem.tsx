import { Card } from "@/components/ui/card"
import { BookOpen, ListChecks, Zap, Users, X } from "lucide-react"

export function BreakthroughProblem() {
  const tried = [
    { icon: BookOpen, text: "Consuming more content" },
    { icon: ListChecks, text: "Making more plans" },
    { icon: Zap, text: 'Telling yourself to "just do it"' },
    { icon: Users, text: 'Talking to friends who say "you should just start"' },
  ]

  const beliefs = [
    '"If I choose the wrong niche, I\'ll waste years."',
    '"People won\'t take me seriously without credentials."',
    '"I can\'t succeed at both my job and my business."',
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">The Problem</h2>
          
          <Card className="p-8 sm:p-10 bg-muted/30 border-2 border-border mb-12 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary mb-6">
              You can&apos;t think your way past a block.
            </p>
            
            <p className="text-lg text-foreground/80 mb-6">You&apos;ve tried:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {tried.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                  <div className="p-2 rounded-lg bg-destructive/10">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-foreground/70">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl font-bold text-accent">None of it worked.</p>
          </Card>

          <div className="text-center space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Because the block isn&apos;t conscious. It&apos;s not something you can logic away.
            </p>
            <p className="text-xl font-bold text-accent">
              It&apos;s a belief that feels like a fact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {beliefs.map((belief, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-lg text-sm italic"
                >
                  {belief}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mt-8">
              These feel true. So your brain protects you by keeping you in planning mode.
            </p>
            <p className="text-xl font-bold text-primary">
              The only way past it: identify the belief, prove it&apos;s not true, rewire it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
