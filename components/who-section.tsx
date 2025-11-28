import { CheckCircle } from "lucide-react"

export function WhoSection() {
  const targetAudience = [
    "You're a professional at a crossroads: stay in your current role, take the promotion, or leave for something new?",
    "You've been successful in corporate but dream of starting your own thing - coaching, consulting, a business - and can't seem to make it happen",
    "You're torn between two or more paths and have been going in circles for weeks or months",
    "You have too many interests and abilities, which makes choosing harder, not easier",
    "You've been laid off or are sensing change coming, and you're not sure what's next for you",
    "You know what you want but fear, doubt, or overthinking keeps you stuck",
    "You're afraid of being visible, putting yourself out there, or failing publicly",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
          This Is For You If
        </h2>
        <ul className="max-w-3xl mx-auto space-y-5">
          {targetAudience.map((item, index) => (
            <li key={index} className="flex items-start gap-4 text-lg">
              <CheckCircle className="w-7 h-7 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
        <p className="max-w-3xl mx-auto mt-12 text-center text-lg text-foreground/80 leading-relaxed">
          You don't need more information. You need someone who's been where you are to help you see clearly and move
          forward.
        </p>
      </div>
    </section>
  )
}
