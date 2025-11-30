"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, Mail } from "lucide-react"
import { ServiceSelectionDialog } from "../service-selection-dialog"
import { NewsletterDialog } from "./newsletter-dialog"

export function DualFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isServiceDialogOpen, setIsServiceDialogOpen] = useState(false)
  const [isNewsletterDialogOpen, setIsNewsletterDialogOpen] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (footerRect.top < windowHeight) {
          setIsFooterVisible(true)
        } else {
          setIsFooterVisible(false)
        }
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible || isFooterVisible) {
    return null
  }

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <Button
          onClick={() => setIsServiceDialogOpen(true)}
          size="lg"
          className="rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary to-accent text-white border-0 px-6 py-6 text-base font-semibold"
        >
          <Sparkles className="h-5 w-5 mr-2" />
          <span>Get Career Clarity Now</span>
        </Button>

        <Button
          onClick={() => setIsNewsletterDialogOpen(true)}
          size="lg"
          variant="secondary"
          className="rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-6 py-6 text-base font-semibold"
        >
          <Mail className="h-5 w-5 mr-2" />
          <span>Subscribe to The Clarity Guide</span>
        </Button>
      </div>

      <ServiceSelectionDialog isOpen={isServiceDialogOpen} onClose={() => setIsServiceDialogOpen(false)} />
      <NewsletterDialog isOpen={isNewsletterDialogOpen} onClose={() => setIsNewsletterDialogOpen(false)} />
    </>
  )
}
