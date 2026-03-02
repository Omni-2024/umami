"use client"

interface HeroVideoProps {
  videoSrc: string
  eyebrow?: string
  title: string
  title2?: string
  highlight: string
  subtitle: string
}

export default function HeroVideo({
  videoSrc,
  eyebrow,
  title,
  title2,
  highlight,
  subtitle,
}: HeroVideoProps) {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden relative py-28 px-20 z-10">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={"/pipeline/hero.mp4"}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 5% blur overlay */}
      <div className="absolute inset-0 bg-[#B1D4D8]/30 " />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl text-white text-center md:-mt-30">
        
          {eyebrow && (
  <div className="flex justify-center mb-2 text-center rounded-full border-2 border-white w-80 mx-auto">
    <p className="text-[8px] tracking-widest uppercase rounded-full opacity-50 bg-[#FFFFFF] px-4 py-0.5 text-center inline-block ">
      {eyebrow}
    </p>
  </div>
)}

          <h2 className="text-[40px] md:text-[64px] py-6 md-py-0 leading-tight">
  {/* Line 1 */}
  {title}{" "}
  <span className="font-italic">
    The Ocean
  </span>

  <br />

  {/* Line 2 */}
  <span className="font-italic">
    Without
  </span>{" "}
  {title2}
</h2>

          <p className="max-w-sm mx-auto text-[16px] !text-[#033E8A] font-medium leading-relaxed">
          We model the ocean’s biology at the cellular level to build a resilient, scalable future for food, health and beauty.
        </p>
        </div>
      </div>
    </section>
  )
}
