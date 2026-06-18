import { FadeIn } from "./fade-in"

export function ClarityProof() {
  return (
    <section className="bg-[#FCF0E6] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[820px]">
        <FadeIn>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8935F] font-medium text-center">
            What happens when the block comes off
          </p>
        </FadeIn>

        {/* Big stat graphic */}
        <FadeIn delay={100}>
          <div className="mt-10 text-center">
            <span className="font-display text-[#B8935F] text-6xl sm:text-7xl md:text-8xl leading-none block">
              300x
            </span>
            <p className="font-reading italic text-[#1A2332] text-lg sm:text-xl leading-[1.6] mt-4 max-w-[480px] mx-auto text-pretty">
              revenue growth — after we unlocked the mental blocks holding her back.
            </p>
          </div>
        </FadeIn>

        {/* Featured testimonial */}
        <FadeIn delay={120}>
          <figure className="mt-14 rounded-2xl bg-white/70 border border-[#1A2332]/10 p-8 sm:p-10">
            <blockquote className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.7] text-pretty">
              &quot;I&apos;ve started 3 businesses in the last 3 years, and the hardest part was always aligning on the
              path most authentic to me — not just building another thing someone already built. With Chi-Chi, I found
              my area of genius and unlocked the mental blocks that were holding me back from fully monetizing my
              business in a way that reflects my value. I&apos;ve 300x&apos;d my revenue so far.&quot;
            </blockquote>
            <figcaption className="font-sans text-sm text-[#1A2332] mt-6">
              <span className="font-semibold">Lola</span>
              <span className="text-[#2D2D2D]/60"> — Rapid Reinvent Hair Treatment</span>
            </figcaption>
          </figure>
        </FadeIn>

        {/* Two supporting testimonials */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <FadeIn delay={80}>
            <figure className="h-full rounded-2xl bg-white/70 border border-[#1A2332]/10 p-7 sm:p-8">
              <blockquote className="font-reading text-[#2D2D2D] text-base sm:text-lg leading-[1.7]">
                &quot;Chi-Chi is a consummate professional who truly listens and provides expert advice tailored to your
                level of experience. Her breadth of knowledge and thoughtful guidance make working with her a great
                experience.&quot;
              </blockquote>
              <figcaption className="font-sans text-sm text-[#1A2332] mt-5">
                <span className="font-semibold">James G.</span>
              </figcaption>
            </figure>
          </FadeIn>

          <FadeIn delay={160}>
            <figure className="h-full rounded-2xl bg-white/70 border border-[#1A2332]/10 p-7 sm:p-8">
              <blockquote className="font-reading text-[#2D2D2D] text-base sm:text-lg leading-[1.7]">
                &quot;Chi-Chi helped me identify decision-making tools and exercises to clarify my values as I weighed
                some big decisions. Her guidance reframed and clarified my next steps in a valuable way. If you have a
                business decision or operational problem to solve, Ideal Clarity can help you find your way.&quot;
              </blockquote>
              <figcaption className="font-sans text-sm text-[#1A2332] mt-5">
                <span className="font-semibold">Hannah Bailey</span>
                <span className="text-[#2D2D2D]/60"> — Studio Northwood</span>
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
