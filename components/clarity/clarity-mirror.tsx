import { FadeIn } from "./fade-in"

export function ClarityMirror() {
  return (
    <section className="bg-[#FAF7F0] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[680px]">
        <FadeIn>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75]">
            Let me say something and you tell me if it lands.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75] mt-7">
            You&apos;ve wanted to build something of your own for a while now. You think about it on your commute. On
            Sunday evenings, when the week ahead feels heavier than it should. You&apos;ve researched it, talked about
            it, maybe even picked a name and bought the domain.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75] mt-7">
            And here you are. Still thinking about it.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75] mt-7">
            Somewhere along the way you stopped bringing it up to people, because they already gave you their advice and
            nothing changed, and now it&apos;s a little embarrassing that you&apos;re in the same spot. So it just lives
            in your head now, going in circles. And honestly? You&apos;re tired of your own thoughts about it.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <blockquote className="mt-14 border-l-2 border-[#B8935F] pl-6 sm:pl-8">
            <p className="font-display text-[#1A2332] text-2xl sm:text-3xl leading-[1.4] text-pretty">
              Here&apos;s the part nobody told you: more thinking was never going to get you out. The thing keeping you
              stuck isn&apos;t in the plan. It&apos;s in you. And you can&apos;t see it from where you&apos;re standing.
            </p>
          </blockquote>
        </FadeIn>
      </div>
    </section>
  )
}
