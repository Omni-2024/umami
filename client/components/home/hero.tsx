import React from "react"

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden
                        pt-24 pb-16 md:pt-0 md:pb-0">

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          -top-[30%] -left-[40%]
          w-[140%] h-[90%]
          md:-top-[20%] md:-left-[20%]
          md:w-[70%] md:h-[90%]
          bg-[#CCEFF4] rounded-full blur-[120px] md:blur-[160px] z-0
        "
      />

      {/* DESKTOP VIDEO (UNCHANGED) */}
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
          relative z-10 w-full
          md:max-w-7xl mx-auto
          px-6 md:px-10
          grid grid-cols-1 md:grid-cols-2
          mt-0 md:mt-20 md:mr-20
        "
      >
        <div className="flex flex-col gap-5 md:gap-6 md:max-w-4xl text-justify md:text-left">

          {/* Desktop badge untouched */}
          <div className="hidden md:flex bg-[#E0F5F8] w-120 !text-[#394353] rounded-full md:text-center md:items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase border-white border-2">
            <span className="w-2 h-3 text-center rounded-full" />
            AI-Driven Discovery | Marine Biotechnology Solutions
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
              leading-tight
              md:text-[54px]
            "
          >
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

          {/* Paragraph */}
          <p
            className="
              para-style
              text-[15px]
              leading-relaxed
              md:text-inherit
            "
          >
            Umami Bioworks is an AI-driven biotechnology company modeling marine biology at the cellular level to power next-generation solutions across food, health, and nutrition. Our platform connects Digital Cell Models to real-world outcomes that are faster, more predictable, and sustainably scalable.
          </p>

          {/* Buttons */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-3 sm:gap-4
              mt-3 md:mt-12
              w-full
            "
          >
            <button className="fish w-full sm:w-auto px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase">
              + Explore the Alkemyst™ Platform
            </button>

            <button className="notfish w-full sm:w-[250px] px-8 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase">
              + Partner with Us
            </button>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HeroSection