import { ClarityCTA } from "./clarity-cta"
import { FadeIn } from "./fade-in"

export function ClarityClose() {
  return (
    <section className="bg-[#FAF7F0] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[640px] text-center">
        <FadeIn>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75]">
            If you&apos;ve read this far, something here was about you.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75] mt-7">
            You already know what you want to build. You&apos;ve known for a while. The question was never{" "}
            <em>what</em>. It&apos;s why you keep stopping right before you start.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75] mt-7">
            That&apos;s what we&apos;ll figure out. In one conversation.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <blockquote className="my-14">
            <p className="font-display italic text-[#1A2332] text-2xl sm:text-3xl leading-[1.4] text-balance">
              &quot;Wow. I never thought about it that way. I finally know what to do.&quot;
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#2D2D2D] text-lg sm:text-xl leading-[1.75]">
            That&apos;s what I want for you.
          </p>
        </FadeIn>

        <FadeIn delay={140}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <ClarityCTA>Book Your Clarity Deep Dive</ClarityCTA>
            <p className="font-sans text-sm text-[#2D2D2D]/60">
              Questions first?{" "}
              <a href="mailto:chi-chi@idealclarity.com" className="text-[#B8935F] hover:underline">
                chi-chi@idealclarity.com
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
