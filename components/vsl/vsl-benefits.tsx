import { Eye, Layers, Zap } from "lucide-react"

const benefits = [
  {
    number: "01",
    title: "The Real Reason You're Stuck",
    description:
      "It's not lack of information, time, or confidence. It's a block you can't see from the inside—and I'll show you exactly what it is.",
    icon: Eye,
  },
  {
    number: "02",
    title: "The 3 Types of Blocks",
    description:
      "The Validation Block, the Visibility Block, and the Commitment Block—and which one is keeping YOU in planning mode.",
    icon: Layers,
  },
  {
    number: "03",
    title: "The Breakthrough Protocol",
    description:
      "My proprietary 4-week process that identifies your block, removes it systematically, then gets you making 10 offers to real people.",
    icon: Zap,
  },
]

export function VSLBenefits() {
  return (
    <section className="py-20 sm:py-28 bg-[#f5f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4">
            What You&apos;ll Discover In This Video
          </h2>
          <div className="w-20 h-1 bg-[#d4a574] mx-auto" />
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="relative bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-gray-100 hover:shadow-xl transition-shadow group"
            >
              {/* Number badge */}
              <div className="absolute -top-4 left-8 bg-[#1a2332] text-[#d4a574] text-sm font-bold px-4 py-1.5 rounded-full">
                {benefit.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#1a2332] flex items-center justify-center mb-6 group-hover:bg-[#d4a574] transition-colors">
                <benefit.icon className="w-7 h-7 text-[#d4a574] group-hover:text-[#1a2332] transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1a2332] mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
