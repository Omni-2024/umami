import React from "react"

const HeroOverlay: React.FC = () => {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-32 text-left">

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — Text */}
        <div className="text-left w-[700px]">
          {/* Heading */}
      <h1 className="text-[42px] sm:text-[56px]">
        Let’s Build the{" "}
        <span className="font-italic">
          Future of the
        </span>
        <br />
        <span className="font-italic">
          Ocean{""}
        </span>
        Economy Together
      </h1>
      <p className="para-style max-w-2xl pt-6">
            We partner with businesses across food, wellness, 
            and biotech to co-create solutions that are sustainable, 
            ethical, and commercially scalable. 
          </p>
        </div>

        {/* RIGHT — Image */}
        <div className="relative w-full h-[420px] md:h-[500px]">
          <img
            src="/home/fish.png"
            alt="Ocean Economy"
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </div>
  )
}

export default HeroOverlay
