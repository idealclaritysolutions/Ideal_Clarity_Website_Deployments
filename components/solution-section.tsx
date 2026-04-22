"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function SolutionSection() {
  const blocks = [
    {
      surface: '"If I choose the wrong niche, I\'ll waste years"',
      real: "Block: Terror of wasting time",
    },
    {
      surface: '"People won\'t take me seriously without credentials"',
      real: "Block: Need for external validation",
    },
    {
      surface: '"I can\'t start until I quit my job"',
      real: "Block: Belief you must choose between security and building",
    },
    {
      surface: '"My website needs to be perfect first"',
      real: 'Block: Fear of being seen before you\'re "ready"',
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                You Don&apos;t Have An Information Problem. You Have A Block.
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Here&apos;s what&apos;s actually happening:
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  You know HOW to start a business. You&apos;ve consumed enough content.
                </p>
                <p className="text-lg font-semibold text-foreground leading-relaxed">
                  The problem isn&apos;t knowledge. It&apos;s execution.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  There&apos;s a disconnect between knowing what to do and making yourself do it.
                </p>
                <p className="text-xl font-bold text-primary leading-relaxed">
                  That disconnect? It&apos;s a block.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/mental-block.jpg"
                  alt="Breaking through mental blocks"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Blocks Grid */}
          <div className="mt-16">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-accent">
              Common blocks that look like logic:
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {blocks.map((block, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <p className="text-foreground/80 mb-3 italic">{block.surface}</p>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-primary font-semibold">{block.real}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Your logical reasons are covering up something deeper.
              </p>
              <p className="text-xl font-bold text-accent leading-relaxed max-w-3xl mx-auto">
                Once we identify the actual block and remove it, you can execute what you already know how to do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
