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
    <section className="relative h-[90vh] w-full overflow-hidden">
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
        <div className="max-w-3xl text-white">
          {eyebrow && (
            <p className="mb-4 text-xs tracking-widest uppercase opacity-80">
              {eyebrow}
            </p>
          )}

          <h1 className="text-4xl sm:text-6xl font-light leading-tight">
            {title}{" "}
            <span className="italic text-yellow-300">{highlight}</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base opacity-90">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
