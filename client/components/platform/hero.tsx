import React from "react"

const HeroOverlay: React.FC = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-32 text-center">

      {/* Badge */}
      <div className="mx-auto mt-16 inline-flex items-center gap-2 rounded-full bg-white/30 px-6 py-2 text-[10px] font-bold tracking-[0.25em] uppercase backdrop-blur">
        <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
        The Alkemyst Platform
      </div>

      {/* Heading */}
      <h1 className="text-[42px] sm:text-[56px] leading-tight">
        AI-Native{" "}
        <span className="font-italic">
          Infrastructure
        </span>
        <br />
        <span className="font-italic">
          for{""}
        </span>
        Marine Biology
      </h1>

      {/* CTA */}
      <div className="mt-10">
        <button className="rounded-full notfish px-16 py-4 text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition">
          Explore More
        </button>
      </div>
    </div>
  )
}

export default HeroOverlay
