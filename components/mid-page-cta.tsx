"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export function MidPageCTA() {
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
    <section className="py-16 md:py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Ready to Get Unstuck?</h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
          Stop overthinking. Start moving forward. Book your free clarity session or explore all the ways we can work
          together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            asChild
          >
            <a
              href="https://calendly.com/idealclaritysolutions/free-30-minute-career-clarity-session"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free 30-Min Call
            </a>
          </Button>

          <Button
            size="lg"
            onClick={handleViewPackages}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            View All Packages
          </Button>
        </div>
      </div>
    </section>
  )
}
