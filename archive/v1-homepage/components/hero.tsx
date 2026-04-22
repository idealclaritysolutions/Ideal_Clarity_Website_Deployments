"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  const handleScrollToPackages = () => {
    // Navigate to work-with-me page
    window.location.href = "/work-with-me#packages"
  }

  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-presenting.jpg"
          alt="Ideal Clarity Presentation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-12 sm:py-16">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-balance">
            Stuck at a Career Crossroads? Let's Get You Moving
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-10 font-medium leading-relaxed">
            Do you have multiple passions or abilities? Are you torn between roles? Considering a pivot to
            entrepreneurship? Dreaming of something bigger but can't seem to make it happen? OR Don't know what career
            path to take? You don't have to figure it out alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                Book Your Free Session
              </Link>
            </Button>
            <Button
              onClick={handleScrollToPackages}
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              Start Your Clarity Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
