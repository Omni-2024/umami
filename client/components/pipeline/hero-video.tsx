"use client"

interface HeroVideoProps {
  videoSrc: string
  eyebrow?: string
  title: string
  highlight: string
  subtitle: string
}

export default function HeroVideo({
  videoSrc,
  eyebrow,
  title,
  highlight,
  subtitle,
}: HeroVideoProps) {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden relative py-28 px-20 z-10">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 5% blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl text-white">
          {eyebrow && (
            <p className="mb-4 text-xs tracking-widest uppercase opacity-80">
              {eyebrow}
            </p>
          )}

          <h2 className="text-[44px] md:text-[64px] mb-4">
          From the Ocean
          <br />
          <span className="text-[#D4AF37] font-italic">
            Without the Catch
          </span>
        </h2>

          <p className="mt-10 max-w-sm mx-auto text-[18px] opacity-50 font-medium leading-relaxed">
          We model the ocean’s biology at the cellular level to build a resilient, scalable future for food, health and beauty.
        </p>
        </div>
      </div>
    </section>
  )
}
