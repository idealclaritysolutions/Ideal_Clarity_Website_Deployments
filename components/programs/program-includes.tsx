import { Card } from "@/components/ui/card"
import { Calendar, Zap, MessageSquare, FileText, Target, Linkedin, Globe, Users } from "lucide-react"

export function ProgramIncludes() {
  const includes = [
    { icon: Calendar, text: "4 weekly 60-minute 1:1 sessions" },
    { icon: Zap, text: "Daily dismantling exercises (breathwork + evidence work you do between sessions)" },
    { icon: MessageSquare, text: "Voxer/email support (M-F, for questions and blocks that come up)" },
    { icon: FileText, text: "Your Offer Blueprint (niche, offer, pricing, positioning)" },
    { icon: Target, text: "Outreach templates customized to your business" },
    { icon: Linkedin, text: "LinkedIn optimization (headline, about, stealth mode strategies)" },
    { icon: Globe, text: "Simple site setup guidance (Carrd/one-page)" },
    { icon: Users, text: "Accountability to execute (I don't let you delay)" },
  ]

  return (
    <section className="py-16 sm:py-24 bg-accent text-white">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">What&apos;s Included</h2>
          
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {includes.map((item, index) => (
              <Card key={index} className="p-5 bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/20 shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-white/90 leading-relaxed">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
