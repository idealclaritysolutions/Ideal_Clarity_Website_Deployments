import { Quote } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ClientTestimonials() {
  const testimonials = [
    {
      text: "I was stuck for 3 months. After one session, I finally understood what was holding me back and knew exactly what to do next. But the best part? Now when I start to get stuck again, I catch myself way faster. I have the tools to think through complexity on my own.",
    },
    {
      text: "The mental fog lifted. I went from paralyzed to clear and moving forward in 90 minutes. And the thinking process I learned? I use it constantly now.",
    },
    {
      text: "Having someone on retainer to think through complexity with has been game-changing for my business. But what's even better is that I'm getting faster at navigating these situations myself.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What <span className="text-accent">Clients Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:border-accent/50 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-accent/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-xl font-semibold">Ready to experience this for yourself?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="https://calendly.com/idealclaritysolutions/free-clarity-call">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-semibold px-8 bg-transparent"
              >
                Start with Free Call
              </Button>
            </Link>
            <Link href="#packages">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                Book Paid Session Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
