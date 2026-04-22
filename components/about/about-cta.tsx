import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to remove what&apos;s blocking you?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Book your free strategy call and let&apos;s identify what&apos;s really keeping you stuck.
        </p>
        <Button
          asChild
          size="lg"
          className="text-lg px-12 py-6 h-auto rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all"
        >
          <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
            Book Your Free Strategy Call
          </Link>
        </Button>
      </div>
    </section>
  )
}
