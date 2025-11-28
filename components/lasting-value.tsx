"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function LastingValue() {
  const router = useRouter()

  const handleViewPackages = () => {
    router.push("/work-with-me")
    setTimeout(() => {
      const element = document.getElementById("packages")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">
          This Isn't Just About Your Next Move. It's About Who You Become.
        </h2>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80 leading-relaxed mb-12">
          <p>Let's be honest: you'll face another crossroads after this one.</p>

          <p>
            Another role to consider. Another opportunity that excites and terrifies you. Another moment where you have
            to choose between the safe path and the one that's calling you.
          </p>

          <p className="font-semibold text-foreground">
            The question isn't whether you'll get stuck again. The question is: how long will you stay stuck?
          </p>

          <p className="text-xl font-semibold text-accent mt-10 mb-6">Here's what changes after working with me:</p>

          <div className="space-y-6 pl-4 border-l-4 border-secondary/30">
            <div>
              <h3 className="text-lg font-bold text-secondary mb-2">You'll trust yourself.</h3>
              <p>
                Not blind confidence - real trust. The kind that comes from understanding how you make good decisions
                and knowing you can do it again.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-secondary mb-2">You'll catch yourself faster.</h3>
              <p>
                The overthinking, the spiraling, the paralysis: you'll notice it happening and know exactly how to move
                through it instead of drowning in it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-secondary mb-2">You'll stop outsourcing your decisions.</h3>
              <p>
                No more waiting for someone else to validate your choice. No more secretly hoping a mentor or friend
                will just tell you what to do. You'll know, and you'll act.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                You'll move through fear instead of being stopped by it.
              </h3>
              <p>Fear won't disappear. But it will stop being in charge. You'll feel it and move anyway.</p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-white rounded-lg border-l-4 border-primary">
            <h3 className="text-2xl font-bold mb-6 text-primary">The Real Transformation</h3>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-foreground mb-2">Before:</p>
                <p>
                  Career crossroads feel like quicksand. The more you think, the deeper you sink. Months pass.
                  Opportunities pass. You stay stuck in roles, companies, and paths that stopped fitting a long time
                  ago.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-2">After:</p>
                <p>
                  Crossroads become turning points, not traps. You see them for what they are: decisions, not life
                  sentences. You choose, you move, you adjust. And you stop losing years of your career to indecision.
                </p>
              </div>
            </div>

            <p className="text-lg font-bold text-accent mt-8">
              This is the difference between someone who gets stuck and someone who gets moving.
            </p>

            <p className="text-xl font-bold text-foreground mt-4">Which one do you want to be?</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                Book Your Free Call
              </Link>
            </Button>

            <Button
              onClick={handleViewPackages}
              size="lg"
              className="text-lg px-10 py-6 h-auto rounded-full bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
