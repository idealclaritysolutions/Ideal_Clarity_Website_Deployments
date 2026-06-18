import { ClarityCTA } from "./clarity-cta"
import { FadeIn } from "./fade-in"

export function ClarityHero() {
  return (
    <section className="bg-[#FAF7F0] px-6 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="mx-auto max-w-[760px]">
        <FadeIn>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8935F] font-medium text-center leading-relaxed">
            For the corporate professional with a business idea that won&apos;t go away
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="font-display text-[#1A2332] text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight text-center text-balance mt-8">
            Starting your business was never a <em className="italic text-[#B8935F]">strategy problem.</em>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="font-reading italic text-[#2D2D2D]/85 text-lg sm:text-xl leading-[1.7] text-center text-pretty mt-8 max-w-[640px] mx-auto">
            You&apos;ve had the idea for months. Maybe years. You&apos;ve done the research, saved the posts,
            half-built the plan. And you&apos;re still exactly where you started. There&apos;s a reason — and it&apos;s
            not the one you&apos;ve been telling yourself.
          </p>
        </FadeIn>

        {/* VSL VIDEO EMBED — Vimeo */}
        <FadeIn delay={300}>
          <div className="mt-12 md:mt-14">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl shadow-[#1A2332]/15 aspect-video bg-[#1A2332]">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B8935F]/90">
                  <svg
                    width="22"
                    height="26"
                    viewBox="0 0 22 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M21 13L0.75 25.124L0.75 0.876L21 13Z" fill="#FAF7F0" />
                  </svg>
                </div>
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[#FAF7F0]/70">
                  Watch the message
                </span>
              </div>
            </div>
            <p className="font-reading text-[#2D2D2D]/70 text-base text-center mt-4 italic">
              If you&apos;ve been &quot;about to start&quot; for longer than you&apos;d like to admit — watch this.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <ClarityCTA>Book Your Clarity Deep Dive</ClarityCTA>
            <p className="font-sans text-sm text-[#2D2D2D]/60 tracking-wide text-center">
              75 minutes · one conversation · you leave knowing your next move
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
