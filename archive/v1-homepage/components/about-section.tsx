import Image from "next/image"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-balance">About Your Guide</h2>
        <Card className="max-w-5xl mx-auto overflow-hidden bg-white">
          <div className="grid md:grid-cols-5 gap-8 p-8 sm:p-12">
            <div className="md:col-span-2 flex flex-col items-center md:items-start justify-center">
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/images/portrait.jpg" alt="Chidinma 'Chi-Chi' Jones" fill className="object-cover" />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-1">Chidinma 'Chi-Chi' Jones</h3>
                <p className="text-lg text-accent font-medium">Founder & Clarity Strategist</p>
                <div className="mt-4 flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>20+ professionals helped get unstuck</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4" />
                    <span>Strategic Problem-Solving Expert</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 flex flex-col items-start justify-center">
              <p className="text-xl font-bold text-foreground mb-2 leading-tight">Hi, I'm Chi-Chi.</p>
              <p className="text-xl font-bold text-foreground mb-6 leading-tight">
                I've been where you are. Multiple times.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                I've spent 15+ years in corporate, most of it at a Fortune 1, leading teams, building systems and
                processes, navigating the politics and complexity of organizational life. I've also built multiple
                businesses from scratch.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                I've been the person torn between staying in a stable role and going after my true fulfillment. I've
                wrestled with having too many interests and no idea which one to pursue. I've felt the fear of being
                visible and the frustration of starting things I didn't finish.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                And I figured it out. Not by finding the "one perfect answer," but by learning how to see clearly, make
                decisions, and actually move.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                Now I help professionals at career crossroads do the same.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-4 mb-6 rounded-r">
                <p className="text-lg font-semibold text-foreground mb-2">What makes me different:</p>
                <p className="text-base leading-relaxed text-foreground/80">
                  I'm not offering theory or generic frameworks, but lived experience. I've been a corporate leader and
                  an entrepreneur. I understand both paths from the inside. When you're torn between them, or between
                  any two directions, I can help you see what's really going on and what's actually your aligned path.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                Because here's what I've learned: you are not stuck because you lack information or options. You're
                stuck because you can't see clearly due to fear, doubt, too many possibilities, or old stories about who
                you're supposed to be.{" "}
                <span className="font-semibold text-foreground">Once that clears, everything changes.</span>
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 mb-4">
                And that's what I do. I help you see clearly, decide confidently, and follow through.
              </p>

              <p className="text-lg font-semibold text-accent">
                Whatever crossroads you're facing, I've likely faced some version of it myself. Let's figure yours out.
              </p>
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
              Work With Chi-Chi
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
