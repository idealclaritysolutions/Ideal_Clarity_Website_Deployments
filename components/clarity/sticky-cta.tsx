"use client"

import { useCallback, useEffect, useState } from "react"

export function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after the user scrolls past the hero, hide near the booking section
      const scrolled = window.scrollY > 600
      const bookEl = document.getElementById("book")
      let nearBooking = false
      if (bookEl) {
        const rect = bookEl.getBoundingClientRect()
        nearBooking = rect.top < window.innerHeight && rect.bottom > 0
      }
      setVisible(scrolled && !nearBooking)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToBook = useCallback(() => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-[#B8935F]/30 bg-[#1A2332]/95 backdrop-blur-sm px-4 py-3 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={scrollToBook}
        className="w-full bg-[#B8935F] text-[#FAF7F0] font-sans text-sm uppercase tracking-[0.15em] font-medium py-4 rounded-full active:scale-[0.99] transition-transform"
      >
        Book Your Session
      </button>
    </div>
  )
}
