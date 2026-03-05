import React from "react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-visible
                        pt-24 pb-16 md:pt-0 md:pb-0 ">

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          -top-[30%] -left-[40%]
          w-[140%] h-[90%]
          md:-top-[30%] md:-left-[30%]
          md:w-[75%] md:h-[150%]
          bg-[#01ADC6] rounded-full blur-[140px] md:blur-[140px] z-50 md:opacity-[30%]
        "
      />

      {/* DESKTOP VIDEO (UNCHANGED) */}
      <div
        className="hidden md:block absolute right-[-10%] -top-20 w-[50%] h-[130%] z-0"
        style={{ transform: "rotate(20deg)", transformOrigin: "center" }}
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

      {/* MOBILE VIDEO */}
      <div
        className="
          md:hidden
          absolute
          right-[-25%]
          top-[8%]
          w-[100%]
          h-[75%]
          opacity-10
          z-0
          pointer-events-none
        "
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
      <div
        className="
          relative z-50 w-full
          md:max-w-7xl mx-auto
          px-6 md:px-10
          grid grid-cols-1 md:grid-cols-2
          mt-0 lg:mt-54 md:mr-20
        "
      >
        <div className="flex flex-col gap-5 md:gap-6 md:max-w-4xl text-justify md:text-left">

          {/* Desktop badge untouched */}
          <div className="hidden md:flex items-center px-4 bg-[#FFFFFF]/40 lg:h-[33px] lg:w-fit !text-[#394353] rounded-full 
          gap-3 text-[10px] font-bold tracking-[4px] uppercase border-white/60 border lg:backdrop-blur-[12px]">
  {/* The Yellow Dot from the UI */}
  <span className="w-2.5 h-2.5 rounded-full bg-[#EAB308] border border-white/50 " />
  
  <span className="whitespace-nowrap !text-[#0F172A]/80">
    AI-Driven Discovery | Marine Biotechnology Solutions
  </span>
</div>

          {/* Mobile badge (clean version) */}
          <div className="md:hidden my-auto bg-[#E0F5F8] text-[#394353]
                          px-2 py-1 rounded-full text-[8px]
                          font-bold tracking-[0.2em] uppercase w-54">
            AI-Driven Marine Biotechnology
          </div>

          {/* Heading */}
          <h1
            className="
              text-[30px]
              leading-[54px]
              md:text-[54px]
              lg:mt-8
            "
          >
            Decoding{" "}
            <span className="font-italic">
              Marine Biology
            
            <br/>
            for a{" "}
            </span>
            <span className="font-italic">
              New Era
            </span>{" "}
            of the Blue
            <br />
            Economy
          </h1>

          {/* Paragraph */}
          <p
            className="
              para-style
              md:text-[16px]
              leading-relaxed
              md:text-inherit
              !text-[#03045E]
              text-justify
            "
          >
            Umami Bioworks is an AI-driven biotechnology company modeling marine biology at the cellular level to power next-generation solutions across food, health, and nutrition. Our platform connects Digital Cell Models to real-world outcomes that are faster, more predictable, and sustainably scalable.
          </p>

          {/* Buttons */}
<div
  className="
    flex flex-col sm:flex-row
    gap-3 sm:gap-4
    mt-3 lg:mt-6
    w-[900px] md:w-[1100px]
    relative
  "
>
  <button className="fish lg:w-[461.2px] lg:h-[66px] px-8 py-4 rounded-full text-[12px] font-semibold tracking-widest uppercase">
    + Explore the Alkemyst™ Platform
  </button>

  <button className="notfish w-[285.64px] px-8 py-4 rounded-full text-[12px] font-semibold tracking-widest uppercase">
    + Partner with Us
  </button>
</div>


        </div>
      </div>

    </section>
  )
}

export default HeroSection