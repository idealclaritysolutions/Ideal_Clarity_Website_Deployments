"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Calendar, ArrowRight } from "lucide-react"

export function WhatYouGet() {
  const router = useRouter()

  const handleChooseYourPath = () => {
    router.push("/work-with-me")
    setTimeout(() => {
      document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-balance">
          What Happens in One Session
        </h2>

        <p className="text-xl sm:text-2xl text-center font-semibold text-foreground mb-12">
          In 90 minutes, everything shifts.
        </p>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80 leading-relaxed mb-12">
          <p>
            You've been carrying this decision around for weeks, maybe months. It's the first thing you think about in
            the morning and the last thing keeping you awake at night. You've made lists. You've talked to people.
            You've Googled "how to know if I should leave my job" more times than you'd admit.
          </p>

          <p className="font-semibold text-foreground">None of it has worked.</p>

          <p className="text-xl font-semibold text-accent mt-8 mb-4">Here's what happens when we get on a call:</p>

          <div className="space-y-6 pl-4 border-l-4 border-primary/30">
            <div>
              <h3 className="text-lg font-bold text-primary mb-2">You'll finally say it out loud.</h3>
              <p>
                The thing you've been circling around. The fear you haven't fully admitted. The option you've been
                afraid to take seriously. In a space with no judgment and no agenda, you'll hear yourself clearly, maybe
                for the first time.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-2">You'll discover what's really keeping you stuck.</h3>
              <p>
                It's not what you think. It's never just "I don't know what to do." There's something underneath: a
                fear, a belief, a pattern that's been running the show. We'll find it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-2">You'll see your options with fresh eyes.</h3>
              <p>
                The fog lifts. What felt impossible to choose between suddenly becomes clear. Not because I told you
                what to do, but because you can finally see what you actually want.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-2">You'll leave with a decision and a plan.</h3>
              <p>
                Not "things to think about." Not "more reflection." A clear next step you're ready to take, and the
                conviction to take it.
              </p>
            </div>
          </div>

          <p className="text-xl font-semibold text-accent italic mt-10">
            What most clients say after: "Why did I wait so long to do this?"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="https://calendly.com/idealclaritysolutions/free-30-min-clarity-call">
                <Calendar className="mr-2 h-5 w-5" />
                Book Free Session
              </a>
            </Button>
            <Button
              onClick={handleChooseYourPath}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Choose Your Path
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
