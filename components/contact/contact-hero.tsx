"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function ContactHero() {
  const router = useRouter()

  const handleViewPackages = () => {
    router.push("/work-with-me")
    setTimeout(() => {
      const element = document.getElementById("packages")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <section className="bg-gradient-to-br from-accent/5 to-secondary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          Let's Connect
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6">Ready to Get Unstuck?</h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
          Whether you're ready to book your free clarity session or just have questions, I'm here to help. Reach out and
          let's start your journey to clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <a href="https://calendly.com/idealclaritysolutions/free-session" target="_blank" rel="noopener noreferrer">
              Book Free Session
            </a>
          </Button>
          <Button onClick={handleViewPackages} size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
