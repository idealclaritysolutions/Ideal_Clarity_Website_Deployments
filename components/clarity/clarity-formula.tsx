import { ClarityCTA } from "./clarity-cta"
import { FadeIn } from "./fade-in"

export function ClarityFormula() {
  return (
    <section className="bg-[#1A2332] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[760px]">
        <FadeIn>
          <p className="font-reading text-[#FAF7F0]/80 text-lg sm:text-xl leading-[1.75] text-center max-w-[640px] mx-auto">
            After watching person after person sit in this exact spot, here&apos;s what I know to be true:
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <h2 className="font-display text-[#FAF7F0] text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-center text-balance mt-10">
            Starting a business while you&apos;re still employed is{" "}
            <span className="text-[#B8935F]">10%</span> strategy and <span className="text-[#B8935F]">90%</span>{" "}
            getting out of your own way.
          </h2>
        </FadeIn>

        {/* Big visual stat graphic — 10 / 90 split */}
        <FadeIn delay={200}>
          <div className="mt-14 md:mt-16">
            <div className="flex w-full overflow-hidden rounded-xl border border-[#B8935F]/30">
              <div className="flex flex-col items-center justify-center bg-[#B8935F]/15 py-8 px-4 w-[10%] min-w-[80px]">
                <span className="font-display text-[#B8935F] text-3xl sm:text-4xl leading-none">10%</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#B8935F] py-8 px-4 w-[90%]">
                <span className="font-display text-[#1A2332] text-4xl sm:text-5xl leading-none">90%</span>
              </div>
            </div>
            <div className="flex w-full mt-3">
              <div className="w-[10%] min-w-[80px] text-center">
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#FAF7F0]/60">
                  Strategy
                </span>
              </div>
              <div className="w-[90%] text-center">
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.15em] text-[#FAF7F0]/80">
                  Getting out of your own way
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="font-reading text-[#FAF7F0]/80 text-lg sm:text-xl leading-[1.75] mt-14">
            Everyone pours their time into the 10%. More research. Another course. A better plan. And they wonder why
            they&apos;re still stuck.
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <p className="font-reading text-[#FAF7F0]/80 text-lg sm:text-xl leading-[1.75] mt-7">
            The 90% is the part no one helps you with. The fear that quietly dresses itself up as logic. The belief that
            it&apos;s not the right time. The version of you that feels safer as someone <em>with potential</em> than as
            someone who actually tried and found out.
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <blockquote className="mt-12 text-center">
            <p className="font-display text-[#B8935F] text-2xl sm:text-3xl leading-[1.4] text-balance">
              That 90% is the whole game. That&apos;s the part I do.
            </p>
          </blockquote>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="mt-12 flex justify-center">
            <ClarityCTA variant="cream">Show Me What&apos;s In My Way</ClarityCTA>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
