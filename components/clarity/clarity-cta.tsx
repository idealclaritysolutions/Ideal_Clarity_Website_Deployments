"use client"

import { useCallback, type ReactNode } from "react"

interface ClarityCTAProps {
  children: ReactNode
  variant?: "gold" | "cream"
  className?: string
}

export function ClarityCTA({ children, variant = "gold", className = "" }: ClarityCTAProps) {
  const scrollToBook = useCallback(() => {
    const el = document.getElementById("book")
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [])

  const base =
    "inline-block font-sans text-sm uppercase tracking-[0.15em] font-medium px-10 py-5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"

  const variants = {
    gold: "bg-[#B8935F] text-[#FAF7F0] hover:bg-[#a98450] shadow-md shadow-[#B8935F]/20",
    cream: "bg-[#FAF7F0] text-[#1A2332] hover:bg-white shadow-md shadow-black/20",
  }

  return (
    <button onClick={scrollToBook} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
