"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Clock } from "lucide-react"

export function UrgencySection() {
  return (
    <>
      <section className="relative bg-background py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight px-4 text-center">
              You Already Know Something Has To Change
            </h1>

            <div className="text-center space-y-6 sm:space-y-8 px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                You've been thinking about this for weeks. Maybe months. The same questions on repeat:{" "}
                <span className="font-semibold italic">
                  Stay or go? This path or that one? Play it safe or finally go after what I really want?
                </span>
              </p>
            </div>

            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-5xl ring-2 sm:ring-4 ring-primary/20 hover:ring-primary/40 transition-all">
              <Image
                src="/images/hero-presenting-new.jpg"
                alt="Chi-Chi presenting on career clarity at 1 Million Cups"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-primary py-16 sm:py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 space-y-6 sm:space-y-8 border border-white/20 shadow-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-2">
                What Happens If You Don't Take Action Now?
              </h2>

              <div className="h-1 w-24 bg-white/30 mx-auto rounded-full" />

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto px-2">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center">You already know.</p>

                <p className="text-center">
                  Another month of <span className="font-semibold">"I should really figure this out."</span> Another
                  quarter of staying in the wrong role, the wrong company, the wrong lane. Another year of wondering
                  "what if."
                </p>

                <div className="bg-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">
                  <p className="font-bold text-lg sm:text-xl md:text-2xl text-white text-center">
                    The cost of staying stuck isn't just frustration. It's time. It's opportunity. It's the version of
                    your career you could be building right now.
                  </p>
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center pt-4">
                  You've already spent enough time going in circles.
                </p>
              </div>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 px-4">
              <div className="flex items-center justify-center gap-2 text-white/90 text-sm font-medium">
                <Clock className="h-4 w-4" />
                <span>Limited availability</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-2xl mx-auto">
                <Button
                  asChild
                  size="lg"
                  className="text-base sm:text-lg rounded-full bg-white text-primary hover:bg-white/95 shadow-2xl hover:shadow-xl hover:scale-[1.02] transition-all px-8 sm:px-12 py-6 sm:py-7 font-bold"
                >
                  <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                    Book Your Free 30-Min Call
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="text-base sm:text-lg rounded-full bg-secondary text-white hover:bg-secondary/90 border-2 border-white/30 shadow-xl hover:scale-[1.02] transition-all px-8 sm:px-12 py-6 sm:py-7 font-bold"
                  onClick={() => {
                    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }}
                >
                  See All Packages
                </Button>
              </div>

              <p className="text-white/80 text-xs sm:text-sm">
                <span className="font-semibold">Only 3 spots available this month</span> • Book now to secure your
                session
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
