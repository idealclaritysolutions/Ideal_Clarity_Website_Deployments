const stats = [
  {
    number: "6+",
    label: "Months Average \"Stuck Time\"",
  },
  {
    number: "4",
    label: "Weeks To First Offers",
  },
  {
    number: "$3.5K",
    label: "Investment That Changes Everything",
  },
]

export function VSLSocialProof() {
  return (
    <section className="py-16 sm:py-20 bg-[#1a2332]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Real Results From Real People
          </h2>
          <div className="w-16 h-1 bg-[#d4a574] mx-auto" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/10"
            >
              <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#d4a574] mb-3">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
