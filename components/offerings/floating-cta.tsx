"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, ShoppingCart, X } from "lucide-react"
import Link from "next/link"
import { ServiceSelectionDialog } from "../service-selection-dialog"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition > windowHeight * 0.3) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      const footer = document.querySelector("footer")
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        if (footerRect.top < windowHeight) {
          setIsFooterVisible(true)
        } else {
          setIsFooterVisible(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isHidden || isFooterVisible) return null

  return (
    <>
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-card rounded-full shadow-2xl border-2 border-accent/20 p-2 flex items-center gap-2 pr-4">
          <Button
            onClick={() => setIsDialogOpen(true)}
            size="lg"
            className="rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Book a Package</span>
            <span className="sm:hidden">Book a Package</span>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full shadow-lg hover:shadow-xl transition-all bg-transparent"
          >
            <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
              <Calendar className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Free Call</span>
              <span className="sm:hidden">Free</span>
            </Link>
          </Button>
          <button
            onClick={() => setIsHidden(true)}
            className="text-muted-foreground hover:text-foreground transition-colors ml-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <ServiceSelectionDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </>
  )
}
