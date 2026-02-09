import React from "react"

const StatsSection: React.FC = () => {
  return (
    <section className="relative py-28 px-20  z-10">

      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-[44px] md:text-5xl mb-4">
          The Blue Economy Is Hitting
          <br />
          <span className="text-[#D4AF37] font-italic">
            Biological Limits
          </span>
        </h2>

        <p className="mt-10 max-w-5xl mx-auto text-[18px] opacity-50 font-medium leading-relaxed">
          Fish biology is uniquely complex, adaptive, and powerful and produces
          compounds critical to human health. Yet, without deep biological
          understanding, demand and supply remain fundamentally misaligned.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {[
          {
            value: "90%",
            text: "Fish stocks are overfished, and wild fisheries are maxed out. Global stocks are being depleted at rates that prevent natural recovery, threatening marine biodiversity."
          },
          {
            value: "50m",
            text: "Tonne supply gap predicted in the next 10 years despite advancements in aquaculture. Traditional farming methods are failing to keep pace with demand."
          },
          {
            value: "30%",
            text: "Defective supply per batch due to systemic inefficiency. Biological variability and environmental stress drive massive inconsistencies."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="
                w-[320px] h-[320px]
                rounded-[30px]
                p-10    
                flex flex-col items-center justify-center text-center
                bg-[#F9FBF9]/20
                border border-[#0F172A]/10
                backdrop-blur-[12px]
                transform transition-transform duration-300 hover:scale-105
            "
            >
            <h3 className="text-6xl font-semibold mb-4 text-[#0F172A]">
                {item.value}
            </h3>
            <p className="text-[15px] opacity-70 leading-relaxed">
                {item.text}
            </p>
            </div>

        ))}
      </div>

    </section>
  )
}

export default StatsSection
