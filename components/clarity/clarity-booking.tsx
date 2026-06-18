import Script from "next/script"
import { FadeIn } from "./fade-in"

export function ClarityBooking() {
  return (
    <section id="book" className="bg-[#FCF0E6] px-6 py-20 md:py-28 scroll-mt-4">
      <div className="mx-auto max-w-[820px]">
        <FadeIn>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8935F] font-medium text-center">
            Your Clarity Deep Dive
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="font-display text-[#1A2332] text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-center text-balance mt-6">
            Pick a time. Answer a few questions. I&apos;ll see you there.
          </h2>
        </FadeIn>

        <FadeIn delay={160}>
          <p className="font-reading italic text-[#2D2D2D]/85 text-lg sm:text-xl leading-[1.6] text-center mt-6 max-w-[560px] mx-auto">
            75 minutes, one-on-one, $750. You&apos;ll choose your time and complete your booking right here.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12 rounded-2xl border border-[#1A2332]/10 bg-[#FAF7F0] p-3 sm:p-5 shadow-lg shadow-[#1A2332]/5">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/idealclaritysolutions/clarity-deep-dive"
              style={{ minWidth: "320px", height: "720px" }}
            />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
