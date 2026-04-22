"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function ContactHero() {
  const router = useRouter()

  const handleViewProgram = () => {
    router.push("/programs")
  }

  return (
    <section className="bg-gradient-to-br from-accent via-accent/95 to-accent/90 py-16 md:py-24 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Let&apos;s Talk</h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Book a free 30-minute strategy call. We&apos;ll identify what&apos;s blocking you and map out your next 4 weeks.
        </p>
      </div>
    </section>
  )
}
