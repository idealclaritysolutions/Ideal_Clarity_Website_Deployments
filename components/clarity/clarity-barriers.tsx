import { FadeIn } from "./fade-in"

const barriers = [
  {
    number: "01",
    label: "Afraid of being seen trying.",
    text: "You're not scared of failing in private — you're scared of failing where people who know you can watch. So you keep it \u201Calmost,\u201D because almost is safe.",
  },
  {
    number: "02",
    label: "Protecting a version of yourself.",
    text: "As long as you don't fully go for it, you get to keep the story that you could. Testing it risks losing it. So you don't test it, and you call it being busy.",
  },
  {
    number: "03",
    label: "A rule you never agreed to.",
    text: "Something you absorbed a long time ago about what people like you are allowed to want. It feels like a fact. It isn't.",
  },
  {
    number: "04",
    label: "Calling it a strategy problem.",
    text: "\u201CI need to figure out my plan\u201D sounds so much better than \u201CI'm scared,\u201D and it keeps you safely busy instead of actually moving.",
  },
]

export function ClarityBarriers() {
  return (
    <section className="bg-[#FAF7F0] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[820px]">
        <FadeIn>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75] max-w-[680px] mx-auto text-center">
            When I say &quot;getting out of your own way,&quot; I don&apos;t mean some vague mindset thing. I mean
            something specific is running underneath your decisions, and you&apos;ve never named it. Usually it&apos;s
            one of these:
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:gap-6 md:grid-cols-2">
          {barriers.map((b, i) => (
            <FadeIn key={b.number} delay={i * 80}>
              <div className="h-full rounded-2xl border border-[#1A2332]/10 bg-white/60 p-7 sm:p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-[#1A2332]/5">
                <span className="font-display text-[#B8935F] text-3xl sm:text-4xl leading-none">{b.number}</span>
                <h3 className="font-display text-[#1A2332] text-xl sm:text-2xl leading-snug mt-4">{b.label}</h3>
                <p className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.7] mt-3">{b.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75] max-w-[680px] mx-auto text-center mt-14">
            You can&apos;t think your way out of any of these, because they&apos;re not in your thinking. They&apos;re
            underneath it. You need someone outside the situation to see them clearly and show you — which is exactly
            what happens in a session.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
