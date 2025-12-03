import { Button } from "@/components/ui/button"
import { Check, MessageSquare, Package, Rocket, RefreshCw } from "lucide-react"
import Link from "next/link"
import { CheckoutButton } from "@/components/checkout-button"

export function OfferingsGrid() {
  const offerings = [
    {
      icon: MessageSquare,
      title: "The Career Clarity Sprint™",
      subtitle: "Find direction and confidence in one focused conversation",
      bestFor: [
        "You are a professional, executive leader or multi-passionate person who feels torn between options - whether it's leaving a job, accepting a new offer, shifting industries, or redefining your next role - and can't afford to keep second-guessing or overthinking.",
      ],
      features: [
        "A 60-minute one-on-one Career Clarity Session that pinpoints the real reason you feel stuck",
        "A custom Career Decision Map showing your best next step and why it fits",
        "A Clarity Anchor Summary (written recap) to revisit whenever doubt resurfaces",
        "3-day follow-up support by voice or email to keep momentum strong",
      ],
      price: "$699",
      impact: [
        "You'll learn how to separate fear from truth in future career decisions - a skill that compounds for life.",
        'Clients often say: "It felt like finally seeing myself clearly."',
      ],
      outcome: [
        "You'll know exactly which career direction feels right and why.",
        'You\'ll stop looping between "stay or go," "this or that," and make a confident call.',
        "You'll walk away grounded, decisive, and calm about what's next.",
      ],
      tagline: "One conversation. One confident career move. More confidence for the future.",
      highlight: false,
      popular: false,
      productId: "single-session",
    },
    {
      icon: Package,
      title: "The Momentum Month",
      subtitle: "From Decision to Direction",
      bestFor: [
        "You've made a decision - to apply, resign, launch or grow - but struggle with execution, confidence, or follow-through.",
        "Perfect after a Clarity Sprint or for people in transition who want strategic accountability.",
      ],
      features: [
        "4 weeks of private coaching (weekly 60-minute sessions)",
        "Tailored structure for execution",
        "Voice/text/email access for on-the-spot career support between sessions",
        "A tailored Momentum Tracker to visualize progress",
        "Custom Career Confidence Practices to handle uncertainty, fear, and change",
      ],
      price: "$2,499",
      savings: "Save $297",
      impact: [
        "By the end of the month, you'll have a repeatable system for acting on clarity in your career.",
        "No hesitation, no self-sabotage, just steady forward motion.",
      ],
      outcome: [
        'You\'ll move from "I decided" to "I\'m doing it".',
        "You'll manage fear, imposter thoughts, and external noise with poise.",
        "You'll build steady habits around communication, boundaries, and follow-through.",
      ],
      tagline: "Because clarity means nothing until you act on it.",
      highlight: false,
      popular: false,
      productId: "3-session-package",
    },
    {
      icon: Rocket,
      title: "The Career Clarity Partnership",
      subtitle: "3-Month Deep Rebuild",
      bestFor: [
        "You are a mid-career professional, executive leader, or founder ready for a full career reset. You've achieved success on paper but crave work that actually feels aligned.",
        "You want space to think, a partner to challenge you, and a roadmap that matches who you are now.",
      ],
      features: [
        "Six deep-dive private sessions over 12 weeks, fully tailored to your evolving goals",
        "Ongoing private voice/text/email access (Mon–Fri) for reflection, strategy, and decisions between sessions",
        "A shared Career Clarity Journal to track insights, pivots, and new direction",
        "Optional Career Narrative Review: LinkedIn, resume, or leadership story revamp for your new path",
        "Priority scheduling, check-ins, and continued guidance",
      ],
      price: "$4,999",
      impact: [
        "You'll walk away with a renewed sense of purpose and direction - clarity that integrates both your professional ambition and personal peace.",
        'Clients often describe it as "the quarter that changed how I see myself and my work."',
      ],
      outcome: [
        "You'll gain full clarity on your career direction: role, path, and purpose.",
        "You'll rebuild confidence in your professional identity and story.",
        "You'll leave reactive decision-making behind and start leading your career intentionally.",
      ],
      tagline: "Because your next chapter deserves more than another promotion: it deserves alignment.",
      highlight: true,
      popular: true,
      productId: "6-session-deep-dive",
    },
    {
      icon: RefreshCw,
      title: "The Clarity Retainer",
      subtitle: "Ongoing strategic partnership for professionals, founders, and executive leaders",
      bestFor: [
        "You're an Alumnus of the Momentum Month or Clarity Partnership and want continued access to thoughtful clarity support as you navigate new opportunities, transitions, or leadership challenges.",
      ],
      features: [
        "Three 60-minute private sessions per month",
        "Unlimited voice/text/email access (Mon–Fri) for ongoing clarity support",
        "Access to tailored Clarity Tools & Templates (decision mapping, transition planning, reflection prompts)",
        "Quarterly Decision Review (90-Minute Strategy Session)",
        "Priority scheduling and client status",
      ],
      price: "$2,499/mo",
      impact: [
        "You'll cultivate a rhythm of clarity: knowing how to pause, reflect, and realign as life and work evolve.",
        "Over time, this partnership becomes your professional clarity anchor, ensuring that every next step, pivot, or opportunity aligns with who you are and what you truly want.",
        'Clients often describe it as "having a trusted strategist who helps me make sense of everything before I act."',
      ],
      outcome: [
        "You'll have a sounding board for complex decisions: whether it's handling leadership dynamics, weighing new opportunities, or navigating uncertainty.",
        "You'll maintain focus, perspective, and calm through ongoing change.",
        "You'll move forward consistently, not reactively, with someone who understands your context and goals.",
      ],
      tagline: "Because clarity isn't a one-time event, it's a way of leading your career.",
      highlight: false,
      popular: false,
      productId: "monthly-retainer",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div id="packages" className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4">
          <div className="inline-block bg-primary/10 px-5 py-2 rounded-full border border-primary/20">
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">Your Options</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Choose Your <span className="text-primary">Path</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Each option is designed to meet you where you are
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`group rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                offering.highlight
                  ? // Enhanced Most Popular card with primary orange gradient and glow
                    "bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/10 border-primary/30 shadow-xl ring-4 ring-primary/20 hover:ring-primary/30"
                  : // Added subtle color borders for non-highlighted cards
                    "bg-card border-border hover:border-secondary/40 hover:shadow-secondary/10"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${
                    offering.highlight
                      ? "bg-primary/20 shadow-lg shadow-primary/20"
                      : "bg-gradient-to-br from-secondary/10 to-primary/10"
                  } group-hover:scale-110 transition-transform`}
                >
                  <offering.icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${offering.highlight ? "text-primary" : "text-secondary"}`}
                  />
                </div>
                {offering.popular && (
                  <span className="bg-gradient-to-r from-primary to-primary/90 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-xl shadow-primary/30 ring-2 ring-primary/20 animate-pulse">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Title */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-2">{offering.title}</h3>
                {offering.subtitle && (
                  <p
                    className={`text-base sm:text-lg md:text-xl font-semibold ${offering.highlight ? "text-primary" : "text-secondary"}`}
                  >
                    {offering.subtitle}
                  </p>
                )}
              </div>

              {/* Best For */}
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-gradient-to-r from-transparent via-border to-transparent">
                <p
                  className={`text-xs font-bold uppercase tracking-wide mb-3 ${offering.highlight ? "text-primary" : "text-secondary"}`}
                >
                  Best for you if:
                </p>
                <ul className="space-y-2">
                  {offering.bestFor.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className={offering.highlight ? "text-primary" : "text-secondary"}>•</span>
                      <span className="text-sm sm:text-base leading-relaxed text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <p
                  className={`text-xs font-bold uppercase tracking-wide mb-4 ${offering.highlight ? "text-primary" : "text-secondary"}`}
                >
                  What You Get:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div
                        className={`mt-1 shrink-0 p-0.5 rounded-full ${offering.highlight ? "bg-primary/10" : "bg-secondary/10"}`}
                      >
                        <Check
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${offering.highlight ? "text-primary" : "text-secondary"}`}
                        />
                      </div>
                      <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact & Outcome */}
              <div
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 space-y-4 sm:space-y-5 ${
                  offering.highlight
                    ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20"
                    : "bg-muted/40 border border-border"
                }`}
              >
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-wide mb-3 ${offering.highlight ? "text-primary" : "text-secondary"}`}
                  >
                    Immediate Outcomes:
                  </p>
                  <ul className="space-y-2">
                    {offering.outcome.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`mt-1 ${offering.highlight ? "text-primary" : "text-secondary"}`}>•</span>
                        <span className="text-sm md:text-base leading-relaxed font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`pt-3 border-t-2 ${offering.highlight ? "border-primary/20" : "border-border/50"}`}>
                  <p
                    className={`text-xs font-bold uppercase tracking-wide mb-3 ${offering.highlight ? "text-primary" : "text-secondary"}`}
                  >
                    Lasting Impact:
                  </p>
                  <ul className="space-y-2">
                    {offering.impact.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`mt-1 ${offering.highlight ? "text-primary" : "text-secondary"}`}>•</span>
                        <span className="text-sm md:text-base leading-relaxed font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline justify-between mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-border">
                <div>
                  <p
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                      offering.highlight ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {offering.price}
                  </p>
                </div>
                {offering.savings && (
                  <div className="text-right">
                    <p className="text-sm sm:text-base md:text-lg text-secondary font-bold bg-secondary/10 px-3 py-1 rounded-full">
                      {offering.savings}
                    </p>
                  </div>
                )}
              </div>

              {/* Tagline */}
              {offering.tagline && (
                <div className="mb-6 text-center">
                  <p className="text-sm sm:text-base italic text-muted-foreground font-medium leading-relaxed">
                    {offering.tagline}
                  </p>
                </div>
              )}

              {/* CTAs */}
              <div className="space-y-2 sm:space-y-3">
                <CheckoutButton
                  productId={offering.productId}
                  buttonText="Book & Pay Now"
                  className={`w-full rounded-full py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all ${
                    offering.highlight ? "bg-primary hover:bg-primary/90 shadow-primary/30" : ""
                  }`}
                />
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className={`w-full rounded-full py-5 sm:py-6 text-sm sm:text-base font-semibold hover:bg-muted/80 bg-transparent transition-all border-2 ${
                    offering.highlight
                      ? "border-primary/30 hover:border-primary text-primary hover:bg-primary/5"
                      : "border-secondary/30 hover:border-secondary text-secondary hover:bg-secondary/5"
                  }`}
                >
                  <Link href="https://calendly.com/idealclaritysolutions/30min" target="_blank">
                    Free Consultation First
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
