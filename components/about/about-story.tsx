import Image from "next/image"
import { Card } from "@/components/ui/card"

export function AboutStory() {
  const excuses = [
    '"I should get certified first."',
    '"I need to build the perfect website."',
    '"I should save more money before I launch."',
    '"I need to figure out my exact niche."',
  ]

  const fears = [
    "Being visible",
    "Being judged",
    "Failing publicly",
    "Finding out I wasn't actually good enough",
  ]

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
            {/* Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/portrait.jpg"
                  alt="Chidinma 'Chi-Chi' Jones"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-accent">My Story</h2>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                I spent over a decade knowing I was called to help people get unstuck.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                I had the experience. 15+ years in corporate, nearly 10 of those at a Fortune 1 company. I&apos;d built systems, led teams, solved complex problems.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                I knew I could help people. I knew what I wanted to build.
              </p>
              
              <p className="text-xl font-bold text-primary">
                But I couldn&apos;t make myself start.
              </p>
            </div>
          </div>

          {/* The Excuses */}
          <Card className="p-8 sm:p-10 bg-muted/30 border-2 border-border mb-12">
            <div className="grid sm:grid-cols-2 gap-4">
              {excuses.map((excuse, index) => (
                <p key={index} className="text-lg text-foreground/70 italic">
                  {excuse}
                </p>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                The reasons sounded logical. They felt responsible.
              </p>
              <p className="text-lg font-semibold text-accent leading-relaxed">
                But they were covering up what I was actually afraid of:
              </p>
              
              <div className="mt-4 flex flex-wrap gap-3">
                {fears.map((fear, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary font-medium rounded-full text-sm"
                  >
                    {fear}
                  </span>
                ))}
              </div>
              
              <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
                And as long as I stayed in &quot;preparation mode,&quot; I was safe from those fears.
              </p>
              <p className="text-xl font-bold text-accent mt-4">
                But I was also stuck.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
