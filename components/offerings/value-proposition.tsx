"use client"

import { Brain, Target, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ValueProposition() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Prop Header */}
        <div id="the-approach" className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <div className="inline-block bg-secondary/10 px-5 py-2 rounded-full">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide">The Approach</p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            This Isn't Cookie-Cutter Coaching. It's <span className="text-accent">Real Clarity.</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>
              <strong className="text-foreground">
                No frameworks. No prescriptive advice. No one telling you what to do.
              </strong>
            </p>
            <p>
              I listen deeply, ask the questions that matter, and help you see what you&#39;ve been missing. This isn&#39;t about me having &quot;the answer,&quot; it&#39;s about you finding YOUR answer with someone thinking alongside you.
            </p>
          </div>
        </div>

        {/* Transformation Highlight */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-accent/5 via-secondary/5 to-accent/5 border-2 border-accent/20 p-10 md:p-14 rounded-3xl shadow-lg">
            <p className="text-xl md:text-2xl font-bold mb-6 text-center text-foreground">
              But here's what makes it truly transformational:
            </p>
            <div className="space-y-6 text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed">
              <p>
                You don't just get clarity once. You learn{" "}
                <span className="font-bold text-accent text-xl">HOW to get clear.</span> You develop the thinking
                skills, pattern recognition, and confidence to navigate every career crossroads from here, on your own.
              </p>
              <div className="pt-4">
                <p className="text-2xl md:text-3xl font-bold text-accent">I'm not a Band-Aid. I'm a skill-builder.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <Button
            asChild
            size="lg"
            className="rounded-full text-lg px-10 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold"
          >
            <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
              Book Free Session
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-lg px-10 py-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-secondary text-white hover:bg-secondary/90 border-0 font-semibold"
            onClick={() => {
              document.getElementById("packages")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            View All Packages
          </Button>
        </div>

        {/* Before/After Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 px-5 py-2 rounded-full mb-4">
              <p className="text-sm font-semibold text-accent uppercase tracking-wide">The Transformation</p>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              What Changes After <span className="text-accent">Working With Me</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Before/After Card 1 */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="bg-red-500/5 p-6 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-500/10 p-2.5 rounded-lg">
                    <Brain className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="font-bold text-lg text-red-500">Before</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  You spend weeks replaying the same thoughts, making lists that don't help, asking friends who don't
                  really understand, lying awake wondering if you're making a mistake.
                </p>
              </div>
              <div className="bg-green-500/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500/10 p-2.5 rounded-lg">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-bold text-lg text-green-500">After</h4>
                </div>
                <p className="text-foreground font-semibold leading-relaxed">
                  You know what you want. You know why. And you're already moving.
                </p>
              </div>
            </div>

            {/* Before/After Card 2 */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="bg-red-500/5 p-6 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-500/10 p-2.5 rounded-lg">
                    <Brain className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="font-bold text-lg text-red-500">Before</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  You have options, maybe too many, but you can&#39;t choose. Every path feels like it means abandoning another.
                </p>
              </div>
              <div className="bg-green-500/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500/10 p-2.5 rounded-lg">
                    <Target className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-bold text-lg text-green-500">After</h4>
                </div>
                <p className="text-foreground font-semibold leading-relaxed">
                  You've made peace with your choice. The noise is gone. You're focused.
                </p>
              </div>
            </div>

            {/* Before/After Card 3 */}
            <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300">
              <div className="bg-red-500/5 p-6 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-500/10 p-2.5 rounded-lg">
                    <Brain className="w-6 h-6 text-red-500" />
                  </div>
                  <h4 className="font-bold text-lg text-red-500">Before</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  You're afraid of making the wrong decision, so you make no decision. Months pass. Nothing changes.
                </p>
              </div>
              <div className="bg-green-500/5 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-500/10 p-2.5 rounded-lg">
                    <Zap className="w-6 h-6 text-green-500" />
                  </div>
                  <h4 className="font-bold text-lg text-green-500">After</h4>
                </div>
                <p className="text-foreground font-semibold leading-relaxed">
                  You've decided. You've acted. And you realize the "wrong decision" was staying stuck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
