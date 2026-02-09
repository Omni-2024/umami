import React from "react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* LEFT YELLOW GLOW */}
      <div className="absolute -top-[20%] -left-[20%] w-[70%] h-[90%] bg-[#FFF3B0] rounded-full blur-[160px] z-0" />

      {/* DNA VIDEO */}
<div
  className="absolute right-[-8%] -top-24 w-[50%] h-[170%] z-0"
  style={{ transform: "rotate(22deg)", transformOrigin: "center" }} // Rotate the video
>
  <video
    className="w-full h-full object-contain"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/home/hero.mp4" type="video/mp4" />
  </video>
</div>


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-20 grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex flex-col gap-6 max-w-xl">

          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase opacity-70">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            AI-Driven Discovery | Marine Biotechnology Solutions
          </div>

          <h1 className="text-[54px] md:text-5xl">
            Decoding{" "}
            <span className="font-italic">
              Marine Biology
            </span>
            <br />
            for a{" "}
            <span className="font-italic">
              New Era
            </span>{" "}
            of the Blue
            <br />
            Economy
          </h1>

          <p className="para-style">
            Umami Bioworks is an AI-driven biotechnology company modeling marine
            biology at the cellular level to power next-generation solutions
            across food, health, and nutrition.
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <button className="fish px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase">
              + Explore the Alkemyst™ Platform
            </button>
            <button className="notfish px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase w-[250px]">
              + Partner with Us 
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
