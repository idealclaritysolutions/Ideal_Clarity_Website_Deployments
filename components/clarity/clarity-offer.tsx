import { ClarityCTA } from "./clarity-cta"
import { FadeIn } from "./fade-in"

const facts = ["75 minutes", "One-on-one", "Over video", "One-page summary the next day"]

export function ClarityOffer() {
  return (
    <section className="bg-[#1A2332] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[720px]">
        <FadeIn>
          <h2 className="font-display text-[#FAF7F0] text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-center text-balance">
            One Clarity Deep Dive Session. 75 minutes. Just the two of us.
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="font-reading text-[#FAF7F0]/80 text-lg sm:text-xl leading-[1.7] text-center mt-8 max-w-[600px] mx-auto">
            You bring what you&apos;ve been stuck on. I help you see what&apos;s actually in the way. You leave knowing
            your next move — with a one-page summary in your inbox the next day.
          </p>
        </FadeIn>

        {/* Spec list */}
        <FadeIn delay={140}>
          <ul className="mt-12 mx-auto max-w-[420px] flex flex-col gap-4">
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-3 border-b border-[#FAF7F0]/10 pb-4">
                <span className="text-[#B8935F] text-lg leading-none" aria-hidden="true">
                  ◆
                </span>
                <span className="font-sans text-[#FAF7F0]/90 text-base tracking-wide">{f}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Price */}
        <FadeIn delay={160}>
          <div className="mt-14 text-center">
            <span className="font-display text-[#B8935F] text-6xl sm:text-7xl leading-none">$750</span>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="font-reading text-[#FAF7F0]/80 text-lg sm:text-xl leading-[1.7] mt-12">
            That&apos;s real money, and I won&apos;t pretend otherwise. But sit with this for a second: how long have you
            been carrying this idea? A year? Two? What has all that circling already cost you — in time, in energy, in
            the quiet weight of it just sitting there undone?
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#FAF7F0]/80 text-lg sm:text-xl leading-[1.7] mt-6">
            One conversation that finally moves it is one of the most practical things you can buy.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#FAF7F0]/80 text-lg sm:text-xl leading-[1.7] mt-6">
            No program. No subscription. No twelve-week commitment. Just the conversation, done properly.
          </p>
        </FadeIn>

        <FadeIn delay={140}>
          <div className="mt-12 flex justify-center">
            <ClarityCTA variant="cream">Book Your Clarity Deep Dive</ClarityCTA>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
