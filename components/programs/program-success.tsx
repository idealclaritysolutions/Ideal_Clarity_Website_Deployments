import { Check, X } from "lucide-react"

export function ProgramSuccess() {
  const guarantees = [
    "You'll identify the block keeping you stuck",
    "You'll systematically dismantle it",
    "You'll make 10 offers to real people by Week 4",
    "You'll get real market feedback",
    "You'll know what to do next (adjust and continue or pivot)",
  ]

  const notGuarantees = [
    "You'll close 10 clients (that depends on your offer, pricing, network, and how you show up)",
    "You'll make $10K in revenue (some clients do, some don't)",
    'You\'ll feel "100% confident" (confidence comes from action, not before it)',
  ]

  const willHave = [
    "Experience making offers (the hardest part is over)",
    "Data on what works and what doesn't",
    "Momentum to keep going",
    "The skill to identify and remove future blocks",
  ]

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Success Metrics</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What This Program Guarantees */}
            <div className="p-8 rounded-2xl bg-white border-2 border-secondary/20">
              <h3 className="text-xl font-bold mb-6 text-accent">What this program guarantees:</h3>
              <ul className="space-y-3">
                {guarantees.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-secondary/20 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* What This Program Does NOT Guarantee */}
            <div className="p-8 rounded-2xl bg-white border-2 border-border">
              <h3 className="text-xl font-bold mb-6 text-accent">What this program does NOT guarantee:</h3>
              <ul className="space-y-3">
                {notGuarantees.map((item, index) => (
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

          {/* What You WILL Have */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
            <h3 className="text-xl font-bold mb-6 text-accent text-center">What you WILL have:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {willHave.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-primary/20 shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-foreground/80 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
