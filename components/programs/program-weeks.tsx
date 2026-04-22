import { Card } from "@/components/ui/card"
import { Search, Zap, Package, MessageSquare, Rocket, Check } from "lucide-react"

export function ProgramWeeks() {
  const weeks = [
    {
      icon: Search,
      week: "Week 1",
      title: "Identify The Block",
      session: "Session 1 (60 minutes):",
      description: "We dig into your pattern. What you've been planning for months. What keeps stopping you. What your \"logical reasons\" for waiting actually are.",
      outcome: "By the end of this session, you'll see the real block for the first time.",
      between: {
        title: "Between Week 1-2:",
        tasks: [
          "Daily dismantling work (10-15 minutes/day)",
          "Breathwork to calm your nervous system",
          "Evidence-based exercises to rewire the belief",
          "Voxer check-ins when you get stuck",
        ],
      },
    },
    {
      icon: Package,
      week: "Week 2",
      title: "Build Your Offer",
      session: "Session 2 (60 minutes):",
      description: "Now that the block isn't stopping you, we build:",
      tasks: [
        "Finalize your niche (quick decisions, no spiraling)",
        "Create your first offer (simple, sellable)",
        "Set your pricing (with rationale, no undercharging)",
        "Craft your positioning (how you talk about what you do)",
      ],
      between: {
        title: "Between Week 2-3:",
        tasks: [
          "Optimize your LinkedIn profile (stealth mode strategies included)",
          "Create simple one-page site (or outline if not technical)",
          "Continue daily dismantling work",
        ],
      },
    },
    {
      icon: MessageSquare,
      week: "Week 3",
      title: "Prepare Your Outreach",
      session: "Session 3 (60 minutes):",
      tasks: [
        "Identify 20 people who might need what you offer",
        "Craft customized outreach messages (not templates, actual messages)",
        "Learn how to move from conversation to offer",
        "Handle objections before they come up",
      ],
      between: {
        title: "Between Week 3-4:",
        tasks: [
          "Send first 5 outreach messages (practice before Week 4 push)",
          "Schedule conversations with anyone who responds",
          "Continue daily work",
        ],
      },
    },
    {
      icon: Rocket,
      week: "Week 4",
      title: "Make The Offers",
      session: "Session 4 (60 minutes):",
      description: "This is it. No more delays.",
      tasks: [
        "Make 10 offers to real people",
        "Live support as you do it (or troubleshooting if you're stuck)",
        "Handle \"no's\" without spiraling",
        "Track responses and identify patterns",
      ],
      outcome: "By end of Week 4: You've made 10 offers to real people. Some will say yes. Some will say no. Some will say \"let me think about it.\" All of it is data. All of it is progress. You're no longer stuck in planning mode.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 px-5 py-2 rounded-full border border-primary/20 mb-6">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">The Program</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              &quot;From Idea to First Offer&quot;
            </h2>
            <p className="text-xl text-accent font-semibold">
              4 Weeks &middot; $3,500 &middot; 10 Offers Made
            </p>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center">What Happens</h3>

          <div className="space-y-8">
            {weeks.map((week, index) => (
              <Card key={index} className="overflow-hidden bg-white border-2 border-border">
                {/* Week Header */}
                <div className="bg-accent/5 p-6 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <week.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                        {week.week}
                      </span>
                      <h4 className="text-xl font-bold text-accent">{week.title}</h4>
                    </div>
                  </div>
                </div>

                {/* Week Content */}
                <div className="p-6 space-y-4">
                  <p className="font-semibold text-accent">{week.session}</p>
                  
                  {week.description && (
                    <p className="text-foreground/80">{week.description}</p>
                  )}
                  
                  {week.tasks && (
                    <ul className="space-y-2 ml-4">
                      {week.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-secondary shrink-0 mt-1" />
                          <span className="text-foreground/80">{task}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {week.outcome && (
                    <p className="text-foreground/90 font-medium mt-4 p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                      {week.outcome}
                    </p>
                  )}

                  {week.between && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="font-semibold text-accent mb-3">{week.between.title}</p>
                      <ul className="space-y-2 ml-4">
                        {week.between.tasks.map((task, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span className="text-foreground/70 text-sm">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
