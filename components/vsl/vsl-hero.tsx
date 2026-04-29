"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export function VSLHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToVideo = () => {
    document.getElementById("vsl-video")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-[#1a2332] via-[#1a2332] to-[#141b27] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/vsl-abstract.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2332]/90 via-[#1a2332]/80 to-[#141b27]" />
      </div>
      
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#d4a574_1px,_transparent_1px)] bg-[length:32px_32px]" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a574]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a574]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Pre-headline - centered */}
        <p 
          className={`text-[#d4a574] uppercase tracking-[0.25em] text-xs sm:text-sm font-medium mb-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          For Corporate Professionals Stuck In Planning Mode
        </p>

        {/* Main headline - MUCH larger, centered */}
        <h1 
          className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-12 text-center transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          You&apos;ve Been Planning For 6+ Months.
          <span className="block mt-3 text-[#d4a574]">
            You Still Haven&apos;t Started.
          </span>
        </h1>

        {/* Story block - left aligned for readability */}
        <div 
          className={`max-w-2xl mx-auto space-y-6 mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Meanwhile, someone with less experience, worse credentials, and a mediocre offer just got their third client this month.
          </p>
        </div>

        {/* The punchline - LARGE and centered */}
        <div 
          className={`text-center mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-lg sm:text-xl text-gray-300 mb-2">
            Not because they know more than you.
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Because they made offers. You haven&apos;t.
          </p>
        </div>

        {/* The reframe - callout box style for emphasis */}
        <div 
          className={`max-w-2xl mx-auto mb-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="bg-[#0f141c]/80 border-l-4 border-[#d4a574] rounded-r-lg px-6 py-5 backdrop-blur-sm">
            <p className="text-lg sm:text-xl text-[#d4a574] font-serif font-medium leading-relaxed text-center sm:text-left">
              This isn&apos;t procrastination. It&apos;s a block. And it&apos;s costing you time, money, and opportunities you&apos;ll never get back.
            </p>
          </div>
        </div>

        {/* Video CTA block - centered with clear hierarchy */}
        <div 
          className={`text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-4 leading-relaxed">
            Watch this 15-minute video to discover which of the 3 blocks is keeping you stuck—and how to remove it so you make your first 10 offers in 30 days (while still employed).
          </p>
          
          <p className="text-sm text-gray-500 italic mb-8">
            Or keep planning. See where you are in another 6 months.
          </p>

          <Button
            onClick={scrollToVideo}
            size="lg"
            className="text-lg sm:text-xl px-12 sm:px-16 py-7 sm:py-8 h-auto rounded-full bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-bold shadow-2xl shadow-[#d4a574]/30 transition-all hover:scale-105"
          >
            Watch The Free Training Now
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-500" />
        </div>
      </div>
    </section>
  )
}
