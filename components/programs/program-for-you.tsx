import { Check, X } from "lucide-react"

export function ProgramForYou() {
  const forYou = [
    "You've been planning for 6+ months but can't execute",
    "You know what to do but can't make yourself do it",
    "You're employed and want to build on the side",
    "You're ready to invest $3,500",
    "You're willing to make 10 offers in 4 weeks",
  ]

  const notForYou = [
    "You're still exploring what business to build",
    "You want Instagram tactics or marketing funnels",
    "You're not ready to START in next 30 days",
    "$3,500 feels impossible",
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* This Is For You If */}
            <div className="p-8 rounded-2xl bg-secondary/5 border-2 border-secondary/20">
              <h3 className="text-2xl font-bold mb-6 text-accent">This Is For You If:</h3>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-secondary/20 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* This Is NOT For You If */}
            <div className="p-8 rounded-2xl bg-muted/50 border-2 border-border">
              <h3 className="text-2xl font-bold mb-6 text-accent">This Is NOT For You If:</h3>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-destructive/10 shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <p className="text-foreground/70">{item}</p>
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
