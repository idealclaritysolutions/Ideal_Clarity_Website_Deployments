import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            I&apos;ve Been Where You Are
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
            Stuck knowing what to do but unable to make myself do it.
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent" />
      </div>
    </section>
  )
}
