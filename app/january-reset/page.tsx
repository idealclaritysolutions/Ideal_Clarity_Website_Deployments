import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  XCircle,
  Clock,
  Calendar,
  Zap,
  Target,
  TrendingUp,
  MessageSquare,
  Award,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "2026 Strategy Reset Intensive | Ideal Clarity Solutions",
  description:
    "Get unstuck and start 2026 with momentum. 3-week intensive + 4 weeks accountability. Limited to 5 spots. Workshop exclusive pricing ends Dec 31.",
  robots: "noindex, nofollow", // Hide from search engines
}

export default function JanuaryResetPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Urgency & Pain Point */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30 text-sm font-medium animate-pulse">
              <Clock className="w-4 h-4" />
              <span>Workshop Exclusive - Expires December 31st</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              You've Been Stuck
              <br />
              Long Enough
            </h1>

            <div className="text-xl sm:text-2xl text-white/90 space-y-4 max-w-3xl mx-auto">
              <p>It's December 19th. You have less than two weeks left in 2025.</p>
              <p className="font-semibold">And if we're being honest?</p>
              <p>You're probably in the same place you were on January 1st, 2025.</p>
            </div>

            <div className="pt-6 space-y-3 text-lg text-white/80">
              <p>Still stuck at the same career crossroads.</p>
              <p>Still making pro/con lists that don't help.</p>
              <p>Still telling yourself you'll "figure it out soon."</p>
            </div>

            <div className="pt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-bounce-slow"
              >
                <a href="#pricing">I'm Ready To Get Unstuck</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Truth Bomb */}
      <section className="py-12 bg-primary/10 border-y-2 border-primary/20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl sm:text-3xl font-bold text-accent">
              Another year is coming whether you're ready or not.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              And if you don't do something different in the next few days,
              <br />
              December 20, 2026 will look exactly like today.
            </p>
            <p className="mt-6 text-xl font-semibold text-foreground">
              Still stuck. Still overthinking. Still watching time pass.
            </p>
            <p className="mt-4 text-lg text-primary font-bold">Unless you make a different choice.</p>
          </div>
        </div>
      </section>

      {/* Program Intro */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-block bg-secondary/10 px-5 py-2 rounded-full border border-secondary/20">
              <span className="text-secondary font-semibold">Introducing</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-accent">The January Reset Intensive</h2>

            <p className="text-xl sm:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
              A <span className="font-bold text-primary">3-week intensive program</span> (+ 4 weeks accountability)
              designed to get you <span className="font-bold text-secondary">UNSTUCK</span> and{" "}
              <span className="font-bold text-secondary">MOVING</span> by the end of January.
            </p>

            <div className="pt-6 space-y-2">
              <p className="text-lg text-muted-foreground line-through">Not "thinking about it."</p>
              <p className="text-lg text-muted-foreground line-through">Not "planning to."</p>
              <p className="text-2xl font-bold text-primary">Actually MOVING.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Week 3 & Week 7 */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* By Week 3 */}
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold text-accent">BY JANUARY 25TH (3 WEEKS), YOU WILL HAVE:</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Made the decision (corporate, entrepreneurship, or hybrid - documented and final)",
                  "Complete professional positioning (website OR resume + LinkedIn - ready to use)",
                  "All your materials built (offer + pricing OR interview stories + application strategy)",
                  "Taken real action (first outreach sent OR first applications submitted)",
                  "90-day roadmap (you know exactly what to do in Feb, March, April)",
                  "Momentum (you're not stuck anymore - you're BUILDING)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* By Week 7 */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/30 rounded-2xl p-8 sm:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-secondary" />
                <h3 className="text-3xl font-bold text-accent">BY FEBRUARY 23RD (7 WEEKS TOTAL), YOU WILL HAVE:</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-foreground">
                    First client conversations scheduled (if entrepreneurship path)
                  </span>
                </div>
                <div className="text-center text-muted-foreground font-semibold">OR</div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-foreground">
                    Interviews booked or offers in hand (if corporate path)
                  </span>
                </div>
              </div>
              <div className="mt-8 p-6 bg-accent/5 border border-accent/20 rounded-xl">
                <p className="text-lg font-semibold text-accent text-center">
                  This is not a "maybe someday" program.
                  <br />
                  This is a "by the end of February you've made real progress" program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 3 Phases */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-accent mb-12">Here's How It Works</h2>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Phase 1 */}
            <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                <Target className="w-6 h-6" />
                PHASE 1: PRE-INTENSIVE (January 1-4)
              </h3>
              <h4 className="text-xl font-semibold text-accent mb-3">THE DECISION DAY RITUAL (you do this alone)</h4>
              <ul className="space-y-2 text-foreground">
                <li>• 2 hours on or before January 1st</li>
                <li>• Work through the 5-step framework</li>
                <li>• Document your decision</li>
                <li>• Bring it to Session 1</li>
              </ul>
              <p className="mt-4 text-sm text-muted-foreground italic">
                This is your prep work. You start the intensive with your decision MADE.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-r from-secondary/10 to-transparent border-l-4 border-secondary rounded-lg p-8">
              <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                PHASE 2: THE INTENSIVE (January 5-25 | 3 Weeks)
              </h3>
              <div className="space-y-6">
                <p className="text-lg font-semibold text-accent">
                  6 intensive sessions (60 minutes each) + Daily Call/Text support (Mon-Fri)
                </p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-foreground mb-2">WEEK 1: FOUNDATION & POSITIONING</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Session 1 (Jan 5): Validate your decision, clarify your target</li>
                      <li>Session 2 (Jan 7): Build your positioning</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-2">WEEK 2: MATERIALS & INFRASTRUCTURE</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Session 3 (Jan 10): Create your offer & pricing OR resume & LinkedIn optimization</li>
                      <li>Session 4 (Jan 12): Build infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-2">WEEK 3: STRATEGY & EXECUTION</h5>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                      <li>Session 5 (Jan 17): Visibility & outreach strategy</li>
                      <li>Session 6 (Jan 19): 30-day roadmap + frameworks</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h5 className="font-bold text-accent mb-3 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    PLUS: DAILY CALL/TEXT SUPPORT (Mon-Fri for 3 weeks)
                  </h5>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Questions about your website copy? I review it.</li>
                    <li>• Stuck on pricing? We talk it through.</li>
                    <li>• Nervous to send that first outreach/application? I hype you up.</li>
                    <li>• Need feedback on anything? You have me in your pocket.</li>
                  </ul>
                  <p className="mt-4 text-primary font-bold">You're not doing this alone.</p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-gradient-to-r from-accent/10 to-transparent border-l-4 border-accent rounded-lg p-8">
              <h3 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                <Award className="w-6 h-6" />
                PHASE 3: ACCOUNTABILITY (January 26 - February 23 | 4 Weeks)
              </h3>
              <p className="text-lg font-semibold text-foreground mb-4">4 check-in calls (30 minutes each)</p>
              <ul className="space-y-2 text-foreground">
                <li>Week 4 (Jan 26): Outreach/application check-in, troubleshooting</li>
                <li>Week 5 (Feb 2): Momentum review, strategy adjustment if needed</li>
                <li>Week 6 (Feb 9): Discovery call prep OR interview prep (as you get them scheduled)</li>
                <li>Week 7 (Feb 16): Client acquisition OR offer negotiation support</li>
              </ul>
              <p className="mt-4 text-sm font-semibold text-secondary">
                BONUS: Emergency support if you land interviews/discovery calls between calls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-accent mb-4">Choose Your Path</h2>
            <p className="text-xl text-muted-foreground">Customized to YOUR specific career crossroads</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Entrepreneurship Path */}
            <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">ENTREPRENEURSHIP PATH</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Build your business from scratch with complete infrastructure
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-accent">By January 25th, you'll have:</h4>
                {[
                  "Business clarity (what you're offering, who you're serving)",
                  "Professional website LIVE",
                  "Efficient infrastructure (email, booking, payments)",
                  "Offer & pricing finalized",
                  "Visibility strategy (content plan, outreach)",
                  "30-day business plan",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-6 italic">
                Then: 4 weeks of accountability to execute - outreach, visibility, first client conversations
              </p>

              <div className="border-t border-border pt-6 space-y-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-accent">$2,997</span>
                    <span className="text-muted-foreground line-through">$5,000</span>
                  </div>
                  <p className="text-sm text-primary font-semibold">Save $2,003 - Workshop Exclusive</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-full shadow-lg">
                    Pay in Full - $2,997
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary/10 py-6 text-lg rounded-full bg-transparent"
                  >
                    Payment Plan - $1,500 Today
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Payment plan: $1,500 today + $1,500 by Jan 10 ($3,000 total)
                  </p>
                </div>
              </div>
            </div>

            {/* Corporate Path */}
            <div className="bg-card border-2 border-secondary/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-secondary" />
                <h3 className="text-2xl font-bold text-secondary">CORPORATE PATH</h3>
              </div>

              <p className="text-muted-foreground mb-6">Land your ideal role with complete interview preparation</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-accent">By January 25th, you'll have:</h4>
                {[
                  "Career clarity (target roles, 30-40 companies researched)",
                  "Professional positioning (career narrative clear)",
                  "Complete materials (resume, LinkedIn optimized)",
                  "Robust interview strategy (STAR method mastered)",
                  "Application strategy (tracking system, networking plan)",
                  "30-day job search plan",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-6 italic">
                Then: 4 weeks of accountability to execute - applications, interviews, offer negotiation
              </p>

              <div className="border-t border-border pt-6 space-y-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-accent">$2,997</span>
                    <span className="text-muted-foreground line-through">$5,000</span>
                  </div>
                  <p className="text-sm text-primary font-semibold">Save $2,003 - Workshop Exclusive</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg rounded-full shadow-lg">
                    Pay in Full - $2,997
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-secondary text-secondary hover:bg-secondary/10 py-6 text-lg rounded-full bg-transparent"
                  >
                    Payment Plan - $1,500 Today
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Payment plan: $1,500 today + $1,500 by Jan 10 ($3,000 total)
                  </p>
                </div>
              </div>
            </div>

            {/* Hybrid Path */}
            <div className="bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                BEST VALUE
              </div>

              <div className="flex items-center gap-2 mb-4 mt-2">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-accent">HYBRID PATH</h3>
              </div>

              <p className="text-muted-foreground mb-6">Get BOTH sets of deliverables - build while employed</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-accent">You get EVERYTHING:</h4>
                {[
                  "Resume + interview prep (for corporate stability)",
                  "Website + business positioning (for side hustle)",
                  "Time management strategy (build while employed)",
                  "Transition roadmap (when/how to go full-time)",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-accent font-semibold">
                  This is the "don't choose" option - you get career stability AND business freedom
                </p>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-accent">$5,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">One-time payment (No payment plan)</p>
                  <p className="text-sm text-primary font-semibold mt-1">
                    Workshop Exclusive - $5,000 off regular price
                  </p>
                </div>

                <Button className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg rounded-full shadow-lg">
                  Enroll Now - $5,000
                </Button>
              </div>
            </div>
          </div>

          {/* Urgency Banner */}
          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border-2 border-primary/30 rounded-xl p-8 text-center">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl sm:text-3xl font-bold text-accent mb-3">
              This Offer Expires December 31st at Midnight
            </h3>
            <ul className="space-y-2 text-left max-w-md mx-auto text-foreground">
              <li>• The $2,997 price disappears</li>
              <li>• The workshop exclusive is gone</li>
              <li>• The 5 spots may be filled</li>
            </ul>
            <p className="mt-6 text-lg font-semibold text-primary">If you want this, you need to decide NOW.</p>
          </div>
        </div>
      </section>

      {/* Limited Spots */}
      <section className="py-12 bg-primary/10 border-y-2 border-primary/20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-3xl font-bold text-accent">Only 5 Spots Available</h3>
            <p className="text-lg text-foreground">
              Why? Because this is intensive, hands-on work. I can't serve 20 people at this level and give you the
              support you need.
            </p>
            <p className="text-xl font-bold text-primary">5 spots. First come, first served.</p>
            <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full border-2 border-primary shadow-lg mt-4">
              <span className="text-muted-foreground">Spots remaining:</span>
              <span className="text-3xl font-bold text-primary">5</span>
            </div>
          </div>
        </div>
      </section>

      {/* This Is For You / Not For You */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* For You */}
            <div className="bg-secondary/10 border-2 border-secondary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-7 h-7" />
                This Is For You If:
              </h3>
              <ul className="space-y-4">
                {[
                  "You're tired of wondering when your big break will be",
                  "You want 2026 to be the year you finally started living your best life",
                  'You\'re ready to make the decision today (not "someday")',
                  "You want done-WITH-you support (not just advice)",
                  "You're willing to do the work (homework between sessions)",
                  "You're tired of overthinking and ready to BUILD",
                  "You want to start 2026 with momentum, not confusion",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For You */}
            <div className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-destructive mb-6 flex items-center gap-2">
                <XCircle className="w-7 h-7" />
                This Is NOT For You If:
              </h3>
              <ul className="space-y-4">
                {[
                  "You just want advice (this is hands-on execution)",
                  "You're not ready to commit to the work",
                  "You want someone to decide for you",
                  "You're \"just browsing\" (if you're not serious, save your money)",
                  'You need more than 7 weeks to see if this is "worth it"',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-accent mb-12">What Past Clients Are Saying</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <p className="text-foreground mb-4 italic">
                "Chi-Chi at Ideal Clarity helped me identify some decision-making tools and exercises to clarify values
                as I'm weighing some big decisions. Her guidance helped reframe and clarify next steps in a valuable
                way."
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <p className="text-foreground mb-4 italic">
                "Chi-Chi is just too good. The way she helped me redesign my resume and realign my relationship to
                interviews has helped me gain more confidence to tackle any job application going forward."
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              <p className="text-foreground mb-4 italic">
                "With Chi-Chi, I was able to find my area of genius and also unlock the mental blocks that were holding
                me back from fully monetizing my business in a way that truly reflects my value. I've 300x my revenue so
                far."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold">Two Paths. You Choose.</h2>

            <div className="space-y-6 text-lg">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="font-semibold mb-2">Path 1:</p>
                <p className="text-white/90">
                  Don't enroll. January comes. You're still stuck. Another 3 months pass. By April, you're having the
                  same conversation with yourself: "I really need to figure this out."
                </p>
              </div>

              <div className="bg-primary/30 backdrop-blur-sm rounded-xl p-6 border-2 border-primary">
                <p className="font-semibold mb-2">Path 2:</p>
                <p className="text-white">
                  Enroll today. January 5th, we start. By January 25th, you have everything you need. By late February,
                  you're landing clients or interviews. By March, you're not stuck anymore.
                </p>
              </div>
            </div>

            <p className="text-2xl font-bold">Which path do you want?</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              >
                <a href="#pricing">Enroll Now - Secure Your Spot</a>
              </Button>
            </div>

            <p className="text-sm text-white/70 pt-4">Questions? Email: idealclaritysolutions@gmail.com</p>
          </div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <div>
              <p className="font-bold text-lg text-accent mb-2">P.S. Still on the fence?</p>
              <p className="text-foreground mb-4">Ask yourself this:</p>
              <p className="text-xl font-semibold text-accent">
                One year from today - December 19th, 2026 - where do you want to be?
              </p>
              <p className="text-muted-foreground mt-2">
                Still stuck at the same crossroads? Or building something that actually excites you?
              </p>
              <p className="text-primary font-bold mt-4 text-lg">You decide.</p>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-xl p-6">
              <p className="font-bold text-accent mb-2">P.P.S. Remember:</p>
              <p className="text-foreground">
                This price ($2,997) and these 5 spots are only available until December 31st.
              </p>
              <p className="text-muted-foreground mt-2">After that, this offer is GONE.</p>
              <p className="text-primary font-semibold mt-4">
                Don't let "I'll think about it" turn into another year stuck.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg"
            >
              <a href="#pricing">Enroll Before It's Too Late</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
