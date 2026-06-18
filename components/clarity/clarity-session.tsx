import { FadeIn } from "./fade-in"

const steps = [
  {
    number: "01",
    label: "Before we meet",
    text: "I send you three short questions, so I come in already understanding your situation. Five minutes of your time.",
  },
  {
    number: "02",
    label: "The 75 minutes",
    text: "We get on a video call. You tell me what's been going on. I listen — really listen, to what's underneath what you're saying, the thing you might not have words for yet. And then I show it to you. The actual barrier. The thing that's been running the show. That's usually the moment people go quiet, and then say some version of: \u201CWow. I never thought about it that way.\u201D We sit with it until it lands, then we figure out one thing for you to do this week — not a twelve-step plan, just the next real move.",
  },
  {
    number: "03",
    label: "The day after",
    text: "I send you a one-page summary of everything we found, so you can come back to it when the old thinking tries to creep in.",
  },
]

export function ClaritySession() {
  return (
    <section className="bg-[#FAF7F0] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[720px]">
        <FadeIn>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8935F] font-medium text-center">
            What a session is
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-10">
          {steps.map((s, i) => (
            <FadeIn key={s.number} delay={i * 80}>
              <div className="flex gap-5 sm:gap-7">
                <span className="font-display text-[#B8935F] text-3xl sm:text-4xl leading-none shrink-0 w-12">
                  {s.number}
                </span>
                <div>
                  <h3 className="font-display text-[#1A2332] text-xl sm:text-2xl leading-snug">{s.label}</h3>
                  <p className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.7] mt-3">{s.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <blockquote className="mt-14 border-l-2 border-[#B8935F] pl-6 sm:pl-8">
            <p className="font-display text-[#1A2332] text-2xl sm:text-3xl leading-[1.4] text-pretty">
              One conversation. You start carrying something you&apos;ve held for months. You leave lighter, clearer,
              and actually moving.
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}
