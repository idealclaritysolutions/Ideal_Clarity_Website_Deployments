import { Button } from "@/components/ui/button"
import Link from "next/link"
export function WhatMakesDifferent() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            What Makes This <span className="text-accent">Different</span>
          </h2>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-accent">No frameworks.</span>{" "}
                <span className="font-semibold text-accent">No prescriptive advice.</span>{" "}
                <span className="font-semibold text-accent">No telling you what to do.</span>
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I listen deeply, ask the questions that matter, and help you see what you've been missing. This isn't
                about me having "the answer", it's about you finding YOUR answer with someone thinking alongside you.
              </p>
            </div>

            <div className="border-l-4 border-accent pl-6 py-2 bg-accent/5 rounded-r-xl">
              <p className="text-xl font-semibold mb-3">But here's what makes it truly transformational:</p>
              <p className="text-lg leading-relaxed">
                You don't just get unstuck once. You learn{" "}
                <span className="font-semibold text-accent">HOW to get unstuck</span>. You develop the thinking skills,
                pattern recognition, and confidence to navigate complexity on your own in the future.
              </p>
            </div>

            <div className="text-center pt-4">
              <p className="text-2xl md:text-3xl font-bold text-accent">I'm not a Band-Aid. I'm a skill-builder.</p>
            </div>
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-lg font-semibold">Already know what you need?</p>
            <p className="text-muted-foreground">Skip the free session and book your clarity package now.</p>
            <Link href="#packages">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                Skip Free Session - Book & Pay Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
