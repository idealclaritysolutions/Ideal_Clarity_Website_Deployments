import { Check, X } from "lucide-react"
import { FadeIn } from "./fade-in"

const forYou = [
  "There's a specific thing you've been wanting to build, and you've been at it long enough to know more research isn't the answer.",
  "You're sharp and self-aware, you've done some inner work, and you don't need a cheerleader — you need someone who can actually see what you can't.",
  "Once you see clearly, you move. You don't need someone holding your hand through every step. You need the sight.",
]

const notForYou = [
  "You want weekly accountability or someone to build your funnels with you. That's a different thing, and there are good people for it. This is the conversation that gets you unstuck — the doing is yours.",
]

export function ClarityIsThisYou() {
  return (
    <section className="bg-[#FAF7F0] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[820px]">
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl border border-[#B8935F]/30 bg-white/60 p-8">
              <h3 className="font-display text-[#1A2332] text-2xl sm:text-3xl leading-snug">This is for you if:</h3>
              <ul className="mt-6 flex flex-col gap-5">
                {forYou.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="h-5 w-5 text-[#B8935F] shrink-0 mt-1" aria-hidden="true" />
                    <span className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="h-full rounded-2xl border border-[#1A2332]/10 bg-[#1A2332]/[0.03] p-8">
              <h3 className="font-display text-[#1A2332] text-2xl sm:text-3xl leading-snug">
                It&apos;s probably not for you if:
              </h3>
              <ul className="mt-6 flex flex-col gap-5">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <X className="h-5 w-5 text-[#C05A3A] shrink-0 mt-1" aria-hidden="true" />
                    <span className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
