import { Check, X } from "lucide-react"

export function AboutCredentials() {
  const experience = [
    "15+ years in corporate (nearly a decade at Fortune 1 company)",
    "Built multiple businesses from scratch",
    "Currently building while employed",
  ]

  const dontHave = [
    "Coaching certifications (my credibility is my lived experience)",
    "A perfect Instagram feed (I teach execution, not aesthetics)",
    "A fancy marketing funnel (my clients come from conversations)",
  ]

  const doHave = [
    "A proprietary methodology that works (The Breakthrough Protocol)",
    "Proof I'm doing what I teach (building while employed right now)",
    "The ability to see your blocks when you can't",
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Credentials</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Experience */}
            <div className="p-6 rounded-xl bg-accent/5 border border-accent/20">
              <h3 className="text-lg font-bold text-accent mb-4">Experience</h3>
              <ul className="space-y-3">
                {experience.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I DON'T Have */}
            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <h3 className="text-lg font-bold text-accent mb-4">What I DON&apos;T Have</h3>
              <ul className="space-y-3">
                {dontHave.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/70">
                    <X className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What I DO Have */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-lg font-bold text-accent mb-4">What I DO Have</h3>
              <ul className="space-y-3">
                {doHave.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
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
