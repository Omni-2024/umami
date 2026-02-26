import React from "react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* LEFT YELLOW GLOW */}
      <div className="absolute -top-[20%] -left-[20%] w-[70%] h-[90%] bg-[#CCEFF4] rounded-full blur-[160px] z-0" />

      {/* DNA VIDEO - hidden on mobile, visible on md+ */}
      <div
        className="hidden md:block absolute right-[-8%] -top-24 w-[50%] h-[170%] z-0"
        style={{ transform: "rotate(22deg)", transformOrigin: "center" }}
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

      {/* DNA VIDEO - mobile only, positioned behind text, low opacity */}
      <div
        className="md:hidden absolute right-[-10%] top-[5%] w-[65%] h-[60%] z-0 opacity-20"
        style={{ transform: "rotate(22deg)", transformOrigin: "center" }}
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
      <div className="relative z-10 w-full md:max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="flex flex-col gap-6 md:max-w-4xl">

          <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase opacity-70">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            AI-Driven Discovery | Marine Biotechnology Solutions
          </div>

          <h1 className="text-[40px] md:text-[54px] leading-tight">
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

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 md:mt-12">
            <button className="fish px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase">
              + Explore the Alkemyst™ Platform
            </button>
            <button className="notfish px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase sm:w-[250px]">
              + Partner with Us
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HeroSection
