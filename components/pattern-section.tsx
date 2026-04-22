"use client"

import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function PatternSection() {
  const loopSteps = [
    { text: '"I need to figure out my niche first."', timing: "You say:" },
    { text: '"Actually, maybe I should get certified."', timing: "Three weeks later:" },
    { text: '"I should build my website before I reach out to anyone."', timing: "Two months later:" },
  ]

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Sound Familiar?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* The Loop Visual */}
          <Card className="p-8 sm:p-12 bg-white border-2 border-border shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-accent mb-8 text-center">The Loop:</h3>
            
            <div className="space-y-6 mb-10">
              {loopSteps.map((step, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wide min-w-[140px]">
                    {step.timing}
                  </span>
                  <div className="flex items-center gap-3 flex-1">
                    {index > 0 && (
                      <ArrowRight className="hidden sm:block w-5 h-5 text-muted-foreground shrink-0" />
                    )}
                    <p className="text-lg sm:text-xl text-foreground/90 italic">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-border pt-8 space-y-4">
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                The reasons keep changing. <span className="font-bold text-foreground">But the pattern doesn&apos;t.</span>
              </p>
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                You stay in planning mode. You never execute.
              </p>
              <p className="text-lg sm:text-xl font-bold text-accent leading-relaxed">
                That&apos;s not strategic thinking. That&apos;s a block.
              </p>
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                And you can&apos;t think your way past a block.
              </p>
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                You have to identify what it is, remove it systematically, then take action.
              </p>
              <p className="text-xl sm:text-2xl font-bold text-primary mt-6">
                That&apos;s what I do.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
