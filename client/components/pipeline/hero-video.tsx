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
    <section className="relative h-[100vh] w-full overflow-hidden relative py-28 px-6 lg:px-20 z-10">
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
      <div className="absolute inset-0 bg-[#B1D4D8]/50 lg:bg-[#B1D4D8]/30 " />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl text-white text-center md:-mt-30">
        
          {eyebrow && (
  <div className="flex justify-center mb-2 text-center rounded-full  bg-[#FFFFFF]/40 border-white/60 border lg:backdrop-blur-[12px] lg:w-[429px] mx-auto">
    <p className="text-[8px] tracking-widest uppercase rounded-full !text-[#03045E]  py-0.5 text-center inline-block lg:tracking-[4px] ">
      {eyebrow}
    </p>
  </div>
)}

          <h2 className="text-[30px] lg:text-[64px] py-6 md-py-0 md:leading-[74px]">
  {/* Line 1 */}
  {title}{" "}
  <span className="font-italic">
    The Ocean,
  </span>

  <br />

  {/* Line 2 */}
  <span className="font-italic">
    Without
  </span>{" "}
  {title2}
</h2>

          <p className="lg:w-[386px] w-auto sm:max-w-sm mx-auto text-[13px] lg:text-[18px] !text-[#033E8A] font-regular md:leading-[28px]">
          We model the ocean’s biology at the cellular level to build a resilient, scalable future for food, health and beauty.
        </p>
        </div>
      </div>
    </section>
  )
}
