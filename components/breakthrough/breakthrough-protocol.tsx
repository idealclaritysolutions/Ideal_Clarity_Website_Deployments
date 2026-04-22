import { Card } from "@/components/ui/card"
import { Search, Heart, Zap, ArrowRight, Check } from "lucide-react"

export function BreakthroughProtocol() {
  const evidence = [
    "Every successful business pivoted at least once",
    "Your first niche teaches you what your real niche should be",
    "Choosing wrong and adjusting takes 6 months, not years",
    "Staying stuck \"figuring it out\" already cost you a year",
    "You can change your niche in a single afternoon if needed",
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-accent text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">The Breakthrough Protocol</h2>
          <p className="text-xl text-white/80 mb-12 text-center">How it works:</p>

          {/* Week 1: Identify The Block */}
          <Card className="p-8 sm:p-10 bg-white/5 border border-white/10 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Week 1</span>
                <h3 className="text-2xl font-bold text-white">Identify The Block</h3>
              </div>
            </div>
            
            <p className="text-white/80 mb-4">
              <strong>Session 1 (60 minutes):</strong>
            </p>
            <p className="text-white/70 mb-4">
              Most people think they know what&apos;s blocking them.
            </p>
            <div className="space-y-2 mb-6 ml-4">
              <p className="text-white/60 italic">&quot;I don&apos;t know my niche.&quot;</p>
              <p className="text-white/60 italic">&quot;I need to build my website first.&quot;</p>
              <p className="text-white/60 italic">&quot;I should get certified.&quot;</p>
            </div>
            <p className="text-white/80 mb-6">
              Those aren&apos;t the real blocks. Those are symptoms.
            </p>
            <p className="text-white/80 mb-4">
              In this session, I help you see the pattern you can&apos;t see from inside.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 p-4 bg-white/5 rounded-lg">
              <div>
                <p className="text-sm text-white/50 mb-2">What you think is blocking you:</p>
                <p className="text-white/80 italic">&quot;I don&apos;t know my niche yet.&quot;</p>
              </div>
              <div>
                <p className="text-sm text-white/50 mb-2">What&apos;s actually blocking you:</p>
                <p className="text-primary font-medium italic">&quot;If I choose the wrong niche, I&apos;ll waste years of my life and look stupid.&quot;</p>
              </div>
            </div>
            
            <p className="text-white font-semibold mt-6">We find the real block. We name it.</p>
          </Card>

          {/* Between Week 1-4: Daily Dismantling */}
          <Card className="p-8 sm:p-10 bg-white/5 border border-white/10 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Between Week 1-4</span>
                <h3 className="text-2xl font-bold text-white">Daily Dismantling Work</h3>
              </div>
            </div>
            
            <p className="text-white/80 mb-4">
              You don&apos;t need to &quot;build confidence&quot; or &quot;think positive.&quot;
            </p>
            <p className="text-white font-semibold mb-6">
              You need to systematically dismantle the block.
            </p>
            <p className="text-white/80 mb-4">Here&apos;s how:</p>
            
            {/* Step 1 */}
            <div className="mb-6 p-4 bg-white/5 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                <p className="font-semibold text-white">Step 1: Calm Your Nervous System (5 minutes)</p>
              </div>
              <p className="text-white/70 ml-8">
                Breathwork. Not woo-woo. Proven to regulate your nervous system so you can access beliefs without triggering fight-or-flight.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-primary" />
                <p className="font-semibold text-white">Step 2: Evidence-Based Rewiring (10 minutes)</p>
              </div>
              <p className="text-white/70 ml-8 mb-4">
                I give you 10 pieces of evidence that directly contradict your block. Not affirmations. <strong className="text-white">Evidence.</strong>
              </p>
              
              <div className="ml-8 p-4 bg-white/5 rounded-lg">
                <p className="text-sm text-white/50 mb-2">Example:</p>
                <p className="text-white/70 mb-3">Block: &quot;If I choose the wrong niche, I&apos;ll waste years.&quot;</p>
                <p className="text-sm font-semibold text-primary mb-2">Evidence:</p>
                <ul className="space-y-2">
                  {evidence.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/50 text-sm mt-2">(+ 5 more pieces of evidence)</p>
              </div>
              
              <div className="ml-8 mt-4 space-y-2">
                <p className="text-white/70">You read these daily. While your nervous system is calm.</p>
                <p className="text-white/80">Your brain starts to believe them.</p>
                <p className="text-white font-semibold">By Day 10-14, the block is significantly weakened.</p>
                <p className="text-primary">When you think about choosing your niche, your brain doesn&apos;t panic anymore.</p>
              </div>
            </div>
          </Card>

          {/* Weeks 2-4: Execute */}
          <Card className="p-8 sm:p-10 bg-white/5 border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Weeks 2-4</span>
                <h3 className="text-2xl font-bold text-white">Execute Without The Block</h3>
              </div>
            </div>
            
            <p className="text-white/80 mb-6">Now that it&apos;s not in the way, we build:</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded">Week 2</span>
                <span className="text-white/80">Finalize offer and pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded">Week 3</span>
                <span className="text-white/80">Prepare outreach</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded">Week 4</span>
                <span className="text-white/80">Make 10 offers</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/70">The work is the same whether the block is there or not.</p>
              <p className="text-white font-semibold mt-2">The difference: without the block, you can actually do it.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
