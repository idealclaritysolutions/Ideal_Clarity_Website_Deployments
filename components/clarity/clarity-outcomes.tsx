import { FadeIn } from "./fade-in"

const outcomes = [
  {
    label: "Relief.",
    text: "The thing you've been carrying finally has a name, and named things stop running you from the dark.",
  },
  {
    label: "Clarity.",
    text: "Not certain about how it all turns out — clear about the next right move. That's the part that actually gets you going.",
  },
  {
    label: "Surprised at yourself.",
    text: "You realize you knew more than you were giving yourself credit for. You didn't need more information. You needed to see what was in the way.",
  },
]

export function ClarityOutcomes() {
  return (
    <section className="bg-[#FCF0E6] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[820px]">
        <FadeIn>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75] text-center max-w-[600px] mx-auto">
            People usually leave a session feeling a few specific things.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {outcomes.map((o, i) => (
            <FadeIn key={o.label} delay={i * 90}>
              <div className="h-full rounded-2xl bg-white/70 border border-[#1A2332]/10 p-7 sm:p-8">
                <h3 className="font-display text-[#B8935F] text-2xl sm:text-3xl leading-snug">{o.label}</h3>
                <p className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.7] mt-4">{o.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
