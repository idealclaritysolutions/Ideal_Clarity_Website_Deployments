"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-planning-loop.jpg"
          alt="Breaking through the planning loop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/90 to-accent/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-16 sm:py-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-balance">
            You Know What To Do. You Just Can&apos;t Seem To Make Yourself Do It.
          </h1>
          
          <div className="space-y-4 mb-8 sm:mb-10">
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
              You&apos;ve been planning to start your business for 6+ months. You&apos;ve done the research. Watched the videos. You know what to do: build an offer, reach out to people, have conversations.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-semibold leading-relaxed">
              But every time you&apos;re about to start, something pulls you back into planning mode.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-bold leading-relaxed">
              There&apos;s a block. Let&apos;s remove it.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto bg-primary hover:bg-primary/90"
            >
              <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                Book Free Strategy Call
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-2 border-white/30"
            >
              <Link href="#how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
