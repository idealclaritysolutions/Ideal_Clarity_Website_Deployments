"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function ExitIntentOffer() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    const handleMouseLeave = (e: MouseEvent) => {
      if ((e.clientY) <= 0) {
        setShow(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [dismissed])

  if (!show || dismissed) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[99] bg-gradient-to-r from-[#d4a574] to-[#c49560] text-[#1a2332] p-4 flex items-center justify-between gap-4 shadow-lg">
      <div className="flex-1 max-w-2xl">
        <p className="font-bold text-sm sm:text-base">
          Before you go: Get the paid guide &quot;Running Your Business While Employed&quot; for $27 — roadmap + my exact system.
        </p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <Button
          asChild
          size="sm"
          className="bg-[#1a2332] hover:bg-[#0f141c] text-[#d4a574] font-bold"
        >
          <a href="https://buy.stripe.com/6oU6oI9Qu8j73Uz7zBdAk0q" target="_blank" rel="noopener noreferrer">
            Get Guide $27
          </a>
        </Button>
        <button
          onClick={() => setDismissed(true)}
          className="text-[#1a2332]/60 hover:text-[#1a2332] transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
