import Image from "next/image"
import { FadeIn } from "./fade-in"

export function ClarityAbout() {
  return (
    <section className="bg-[#FAF7F0] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[980px]">
        <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-14 items-center">
          <FadeIn>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl shadow-[#1A2332]/10">
              <Image
                src="/images/chi-chi-portrait.png"
                alt="Chi-Chi Jones, founder of Ideal Clarity Solutions"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div>
              <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-[#B8935F] font-medium">
                About me
              </p>
              <h2 className="font-display text-[#1A2332] text-3xl sm:text-4xl leading-tight mt-4">
                I&apos;m Chi-Chi Jones.
              </h2>

              <p className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.7] mt-6">
                I&apos;ve spent over fifteen years in corporate, including nearly a decade at one of the largest
                companies in the world. I&apos;ve built things on the side of that career. And I&apos;ve had my own long
                stretches of knowing exactly what I wanted and not being able to make myself move.
              </p>

              <p className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.7] mt-5">
                I know what it&apos;s like to be the person everyone else comes to when they need to think something
                through — and then go home and circle your own thing for months.
              </p>

              <p className="font-reading text-[#2D2D2D]/85 text-base sm:text-lg leading-[1.7] mt-5">
                At some point I realized the thing I do without trying — helping someone see their situation from an
                angle they couldn&apos;t reach on their own, the thing where I ask the one question nobody else thought
                to ask and the whole thing cracks open — that&apos;s not small. That&apos;s the work. So now I do it on
                purpose, for people who are done going in circles.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
