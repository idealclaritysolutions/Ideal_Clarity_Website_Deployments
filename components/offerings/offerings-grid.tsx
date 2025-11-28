import { Button } from "@/components/ui/button"
import { Check, MessageSquare, Package, Rocket, RefreshCw, Info } from "lucide-react"
import Link from "next/link"
import { CheckoutButton } from "@/components/checkout-button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function OfferingsGrid() {
  const offerings = [
    {
      icon: MessageSquare,
      title: "Single Clarity Session",
      subtitle: "One Decision. One Conversation. Done.",
      bestFor: [
        "Should I take this job offer or stay where I am?",
        "I'm torn between two roles and I can't decide.",
        "I've been going back and forth on this decision for months — I just need to resolve it.",
        "I want to venture into entrepreneurship but not sure which business to start",
      ],
      whoNeedsThis: [
        "You have a specific, contained decision you're stuck on",
        "You know WHAT you're choosing between — you just can't choose",
        "You're capable of executing on your own once you're clear",
        "You don't need ongoing accountability or support — just clarity",
      ],
      features: [
        "90-minute deep-dive session (remote)",
        "Uncover what's really keeping you stuck (not what you think it is)",
        "Walk away with clarity on your decision and 2-3 concrete next steps",
        "Relief from the mental spiral that's been draining you",
      ],
      price: "$699",
      impact:
        "You'll learn the thinking process that got you unstuck, so the next time you're at a crossroads, you'll know how to move through it faster.",
      outcome:
        "Within one week of our session, you'll have made your decision and taken your first real step. The endless deliberation? Over.",
      highlight: false,
      productId: "single-session",
    },
    {
      icon: Package,
      title: "3-Session Package",
      subtitle: "Clarity + Momentum",
      bestFor:
        "You're facing a bigger career move, a pivot, a leap into something new, a transition you've been putting off, and you want more than clarity. You want someone in your corner as you actually make it happen.",
      features: [
        "Session 1: Uncover what's blocking you and map your path forward",
        "Session 2 (2 weeks later): Work through the obstacles, fears, and doubts that show up once you start moving",
        "Session 3 (4 weeks later): Troubleshoot challenges and lock in momentum",
        "Email/Voxer access between sessions for real-time support",
      ],
      price: "$1,499",
      savings: "Save $598",
      impact:
        "By session 3, you won't just have clarity, you'll trust yourself to navigate hard decisions. You'll recognize your old patterns before they trap you.",
      outcome:
        'One month from now, you\'ll be in motion. Not "thinking about it." Not "planning to." Actually doing it, whether that\'s negotiating a new role, launching your business, or walking confidently into a new chapter.',
      highlight: true,
      popular: true,
      productId: "3-session-package",
    },
    {
      icon: Rocket,
      title: "6-Session Deep Dive",
      subtitle: "Major Career Transition",
      bestFor:
        "You're in the middle of a significant career reinvention, leaving corporate, building something of your own, stepping into a completely new identity, and you need sustained support through the full journey.",
      features: [
        "6 bi-weekly sessions over 3 months",
        "Deep support through every phase of your transition",
        "Accountability and troubleshooting as you implement",
        "Email/Voxer access between sessions",
      ],
      price: "$2,999",
      savings: "Save $1,195",
      impact:
        "You'll fundamentally change how you approach career decisions, faster, clearer, with less second-guessing. This becomes part of who you are.",
      outcome:
        "Three months from now, you'll be on the other side. New role. Business launched. Direction locked in. You'll look back at the version of you who started this journey and realize how far you've come.",
      highlight: false,
      productId: "6-session-deep-dive",
    },
    {
      icon: RefreshCw,
      title: "Monthly Retainer",
      subtitle: "Career Thinking Partner",
      bestFor:
        "Senior leaders and professionals who face constant complexity, multiple opportunities, evolving decisions, high stakes, and want a trusted thinking partner on speed dial.",
      features: [
        "2 scheduled clarity sessions per month (90 minutes each)",
        "Unlimited async support via Voxer or email",
        "Priority scheduling (book within 48 hours when urgent)",
        "A thinking partner whenever challenges arise",
      ],
      price: "$2,499/month",
      savings: "Save $900/month",
      impact:
        "Each session sharpens your ability to think clearly under pressure. Over time, you'll navigate ambiguity with ease, it becomes your competitive advantage.",
      outcome:
        "Decisions that used to cost you weeks of agonizing now take one conversation. You move faster, sleep better, and stop losing momentum to indecision.",
      highlight: false,
      productId: "monthly-retainer",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div id="packages" className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4 px-4">
          <div className="inline-block bg-accent/10 px-5 py-2 rounded-full">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide">Your Options</p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Choose Your <span className="text-accent">Path</span>
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
                  ? "bg-gradient-to-br from-accent/10 via-secondary/5 to-accent/5 border-accent shadow-xl ring-2 ring-accent/20"
                  : "bg-card border-border hover:border-accent/40"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${offering.highlight ? "bg-accent/20" : "bg-accent/10"} group-hover:scale-110 transition-transform`}
                >
                  <offering.icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                </div>
                {offering.popular && (
                  <span className="bg-accent text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                )}
              </div>

              {/* Title */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">{offering.title}</h3>
                  {offering.whoNeedsThis && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="text-accent hover:text-accent/80 transition-colors">
                            <Info className="w-5 h-5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs p-4">
                          <p className="font-semibold mb-2 text-sm">Who Needs This:</p>
                          <ul className="space-y-1 text-sm">
                            {offering.whoNeedsThis.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-accent mt-1">•</span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                {offering.subtitle && (
                  <p className="text-base sm:text-lg md:text-xl text-accent font-semibold">{offering.subtitle}</p>
                )}
              </div>

              {/* Best For */}
              <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-3">Best For:</p>
                {Array.isArray(offering.bestFor) ? (
                  <ul className="space-y-2">
                    {offering.bestFor.map((question, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-sm sm:text-base leading-relaxed text-foreground">{question}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm sm:text-base leading-relaxed text-foreground">{offering.bestFor}</p>
                )}
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-4">What You Get:</p>
                <ul className="space-y-2 sm:space-y-3">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-1 shrink-0">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      </div>
                      <span className="text-sm md:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact & Outcome */}
              <div className="bg-muted/60 p-4 sm:p-6 rounded-xl sm:rounded-2xl mb-6 sm:mb-8 space-y-4 sm:space-y-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">Outcome:</p>
                  <p className="text-sm md:text-base leading-relaxed font-medium">{offering.outcome}</p>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
                    Lasting Impact:
                  </p>
                  <p className="text-sm md:text-base leading-relaxed font-medium">{offering.impact}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-baseline justify-between mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">{offering.price}</p>
                </div>
                {offering.savings && (
                  <div className="text-right">
                    <p className="text-sm sm:text-base md:text-lg text-secondary font-bold">{offering.savings}</p>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="space-y-2 sm:space-y-3">
                <CheckoutButton
                  productId={offering.productId}
                  buttonText="Book & Pay Now"
                  className="w-full rounded-full py-5 sm:py-6 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                />
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full py-5 sm:py-6 text-sm sm:text-base font-semibold hover:bg-muted bg-transparent"
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
