import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function AboutSection() {
  const iKnow = [
    "How to structure your day when you work 9-5",
    "How to build visibility without your employer freaking out",
    "How to get clients through conversations (not complicated marketing)",
    'How to handle the guilt, exhaustion, and "am I being disloyal?" feelings',
    'When "I don\'t know my niche" is real confusion vs. a block',
  ]

  const methodology = [
    "Week 1: Identify the block you can't see",
    "Between sessions: Daily dismantling work (breathwork + evidence)",
    "Weeks 2-4: Execute without the block in the way",
  ]

  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-balance">Why Work With Me?</h2>
        
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="grid lg:grid-cols-5 gap-8 p-8 sm:p-12">
              {/* Image Column */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
                  <Image src="/images/portrait.jpg" alt="Chidinma 'Chi-Chi' Jones" fill className="object-cover" />
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-1">Chi-Chi Jones</h3>
                  <p className="text-lg text-primary font-medium">Founder, Ideal Clarity Solutions</p>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-3 space-y-8">
                {/* Building While Employed */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4">
                    I&apos;m Building This While Employed. Right Now.
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Most business coaches teach what they did 5 years ago. I teach what I&apos;m doing today.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    I&apos;m building Ideal Clarity Solutions while working full-time in corporate. I know:
                  </p>
                  <ul className="space-y-2">
                    {iKnow.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proprietary Methodology */}
                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4">
                    I Have A Proprietary Methodology
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    The Breakthrough Protocol isn&apos;t borrowed from someone else. It&apos;s what I created to break through my own blocks.
                  </p>
                  <ul className="space-y-2 mb-4">
                    {methodology.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Won't Let You Hide */}
                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl sm:text-2xl font-bold text-accent mb-4">
                    I Won&apos;t Let You Hide
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Other coaches let you stay in &quot;I&apos;m working on it&quot; mode for months.
                    I don&apos;t. Week 4, you make the offers. No more delays.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                Book Your Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
