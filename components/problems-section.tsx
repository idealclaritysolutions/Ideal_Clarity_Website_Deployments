import { Card } from "@/components/ui/card"
import { CircleDashed, Eye, PauseCircle } from "lucide-react"

export function ProblemsSection() {
  const problems = [
    {
      icon: CircleDashed,
      title: '"I keep going in circles"',
      description:
        "You've thought about this a hundred times. Made lists. Talked to friends. Done tons of research. But you're still exactly where you started.",
    },
    {
      icon: Eye,
      title: '"I can\'t see clearly"',
      description:
        "Everything feels foggy. You have options, maybe too many, but you can't figure out which path is actually right for you.",
    },
    {
      icon: PauseCircle,
      title: '"I feel paralyzed"',
      description:
        "You know you need to move forward, but you can't. Fear, uncertainty, or overwhelm has you frozen in place.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">Sound Familiar?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="p-10 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white"
            >
              <problem.icon className="w-20 h-20 mx-auto mb-6 text-primary/80" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
