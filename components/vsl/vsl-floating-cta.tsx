"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function VSLFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show after 30 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 30000)

    return () => clearTimeout(timer)
  }, [isDismissed])

  // Also show when user scrolls past 50% of page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 50 && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-500 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div className="max-w-lg mx-auto bg-[#1a2332] rounded-2xl shadow-2xl shadow-black/50 border border-[#d4a574]/20 p-4 sm:p-6 relative">
        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-gray-500 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-center sm:text-left flex-1">
            <p className="text-white font-bold text-lg">Stop Planning. Start Building.</p>
            <p className="text-gray-400 text-sm">Book your free strategy call now</p>
          </div>

          <Button
            asChild
            className="rounded-full bg-[#d4a574] hover:bg-[#c49564] text-[#1a2332] font-bold px-6 py-3 h-auto whitespace-nowrap"
          >
            <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
              Book Free Call
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
