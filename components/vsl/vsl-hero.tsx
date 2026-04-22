"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function VSLHero() {
  const scrollToVideo = () => {
    document.getElementById("vsl-video")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#1a2332] via-[#1a2332] to-[#141b27]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#d4a574_1px,_transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Pre-headline */}
        <p className="text-[#d4a574] uppercase tracking-[0.2em] text-sm font-medium mb-6">
          For Corporate Professionals Stuck In Planning Mode
        </p>

        {/* Main headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          You&apos;ve Been Planning To Start Your Business For 6+ Months.
          <span className="block mt-4 text-[#d4a574]">
            You Know Exactly What To Do. But You Can&apos;t Make Yourself Do It.
          </span>
        </h1>

        {/* Subheadline */}
        <div className="max-w-3xl mx-auto space-y-4 mb-10">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            You&apos;ve researched. Made lists. Watched videos. Changed your mind 47 times about your niche. But you haven&apos;t made a single offer to a single person.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Meanwhile, someone with less experience, worse credentials, and a mediocre offer just got their third client this month.
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            Not because they know more than you. <span className="text-white font-semibold">Because they made offers. You haven&apos;t.</span>
          </p>
          <p className="text-lg sm:text-xl text-[#d4a574] font-medium mt-6">
            This isn&apos;t procrastination. It&apos;s a block. And it&apos;s costing you time, money, and opportunities you&apos;ll never get back.
          </p>
        </div>

        {/* Video teaser text */}
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Watch this 15-minute video to discover which of the 3 blocks is keeping you stuck—and how to remove it so you make your first 10 offers in 30 days (while still employed).
        </p>

        {/* Alternative text */}
        <p className="text-sm text-gray-500 italic mb-10">
          Or keep planning. See where you are in another 6 months.
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToVideo}
          size="lg"
          className="text-lg sm:text-xl px-10 sm:px-14 py-6 sm:py-8 h-auto rounded-full bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-bold shadow-2xl shadow-[#d4a574]/20 transition-all hover:scale-105"
        >
          Watch The Free Training Now
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </div>
    </section>
  )
}
