import { Check, X, Clock, Calendar, Briefcase } from "lucide-react"
import Image from "next/image"

export function AboutWhoIHelp() {
  const iHelp = [
    "Have been planning to start a business for 6+ months",
    "Know WHAT to do but can't make themselves DO it",
    'Keep finding new "logical reasons" to delay',
    "Want to build while employed (not quit and hope)",
    "Are tired of the planning loop and ready to execute",
  ]

  const dontHelp = [
    "People who genuinely don't know what they want to build (you need exploration, not execution)",
    "People looking for Instagram tactics or marketing funnels (I'm not a marketing coach)",
    "People who aren't ready to make offers within 4 weeks (this program forces action)",
  ]

  const schedule = [
    { time: "6:47 AM", activity: "Corporate leadership meeting" },
    { time: "12:15 PM", activity: "Client strategy call" },
    { time: "6:30 PM", activity: "Back to corporate work" },
    { time: "9:00 PM", activity: "Building Ideal Clarity" },
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* What I Do Now */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What I Do Now</h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              I help corporate professionals who&apos;ve been stuck in planning mode for 6+ months do the same thing.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mt-4">
              I don&apos;t teach you how to start a business. <span className="font-semibold text-accent">You already know how.</span>
            </p>
            <p className="text-xl font-bold text-primary mt-4">
              I identify the block keeping you from doing what you already know how to do, then help you remove it.
            </p>
            <p className="text-lg text-foreground/80 mt-2">Then you execute.</p>
          </div>

          {/* Currently Building */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
                <p className="text-sm font-semibold text-primary">Currently</p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                I&apos;m building Ideal Clarity while working full-time in corporate.
              </p>
              <p className="text-lg font-semibold text-accent mb-6">
                I&apos;m not teaching what I did 5 years ago. I&apos;m teaching what I&apos;m doing right now.
              </p>
              
              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <p className="text-sm font-bold text-accent mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Every Tuesday:
                </p>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="text-sm font-mono text-primary w-20">{item.time}</span>
                      <span className="text-foreground/70">{item.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
                This is what building while employed actually looks like. <span className="font-semibold">Fragmented. Exhausting. Strategic.</span>
              </p>
              <p className="text-lg font-bold text-primary mt-2">
                But it&apos;s working. Because I removed the blocks first.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/breakthrough-action.jpg"
                  alt="Taking action on your business"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Who I Help / Don't Help */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-secondary/5 border-2 border-secondary/20">
              <h3 className="text-2xl font-bold mb-6 text-accent">Who I Help</h3>
              <p className="text-foreground/70 mb-4">I work with corporate professionals who:</p>
              <ul className="space-y-3">
                {iHelp.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-secondary/20 shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground/80">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-muted/50 border-2 border-border">
              <h3 className="text-2xl font-bold mb-6 text-accent">Who I DON&apos;T Help</h3>
              <ul className="space-y-3">
                {dontHelp.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-destructive/10 shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <p className="text-foreground/70">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
