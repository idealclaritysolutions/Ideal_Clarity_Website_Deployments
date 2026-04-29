"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Clock, ArrowRight } from "lucide-react"

export function ExitIntentOffer() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    // Check if already dismissed in this session
    if (sessionStorage.getItem("exitIntentDismissed")) {
      setDismissed(true)
      return
    }

    let hasTriggered = false

    // Trigger 1: After scrolling past 40% of the page
    const handleScroll = () => {
      if (hasTriggered) return
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 40) {
        hasTriggered = true
        setShow(true)
      }
    }

    // Trigger 2: Mouse leaving viewport (desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return
      if (e.clientY <= 0) {
        hasTriggered = true
        setShow(true)
      }
    }

    // Trigger 3: After 45 seconds on page
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        hasTriggered = true
        setShow(true)
      }
    }, 45000)

    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
    }
  }, [dismissed])

  const handleDismiss = () => {
    setDismissed(true)
    sessionStorage.setItem("exitIntentDismissed", "true")
  }

  if (!show || dismissed) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-in slide-in-from-bottom duration-500">
      {/* Golden glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#d4a574]/20 to-transparent blur-xl -z-10" />
      
      <div className="bg-gradient-to-r from-[#1a2332] via-[#1a2332] to-[#0f141c] border-t-2 border-[#d4a574] p-4 sm:p-5 shadow-2xl shadow-black/50">
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left content */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="hidden sm:flex w-12 h-12 rounded-full bg-[#d4a574]/20 items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-[#d4a574]" />
            </div>
            <div>
              <p className="font-bold text-white text-base sm:text-lg">
                Still planning? Skip months of trial and error.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Get my exact playbook for building your business while employed — <span className="text-[#d4a574] font-semibold">just $27</span>
              </p>
            </div>
          </div>
          
          {/* Right CTA */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-[#d4a574] hover:bg-[#c49560] text-[#1a2332] font-bold px-6 py-5 h-auto rounded-full shadow-lg shadow-[#d4a574]/20 transition-all hover:scale-105"
            >
              <Link href="/resources/business-while-employed">
                Get the Playbook
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <button
              onClick={handleDismiss}
              className="text-gray-500 hover:text-white transition-colors p-2"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
