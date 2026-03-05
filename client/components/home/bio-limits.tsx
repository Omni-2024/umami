import React from "react"

const StatsSection: React.FC = () => {
  return (
    <section className="relative py-10 md:pt-36 lg:mb-20 px-6 md:px-20 z-20">

      {/* CONTENT LAYER */}
      <div className="relative z-20">

        {/* Heading */}
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-6">
          <h2 className="text-[30px] md:text-5xl leading-[54px] text-left md:text-center">
            The Blue Economy Is Hitting
            <br className="hidden md:block" />
            <span className="text-[#D4AF37] font-italic">
              {" "}Biological Limits
            </span>
          </h2>

          <p className="text-justify md:text-center my-4 lg:my-10 lg:mt-6 max-w-4xl mx-auto text-[16px] md:text-[18px] 
          opacity-80 !text-[#033E8A] font-medium leading-[24px]">
            Fish biology is uniquely complex, adaptive, and powerful and produces
            compounds critical to human health. Yet, without deep biological
            understanding, demand and supply remain fundamentally misaligned.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
          {[{
            value: "90%",
            text: "Fish stocks are overfished, and wild fisheries are maxed out. Global stocks are being depleted at all the rates that prevent natural recovery, threatening marine biodiversity."
          },{
            value: "50m",
            text: "Tonne supply gap predicted in the next 10 years advancements in aquaculture. Diminishing returns in traditional farming methods are failing to keep pace with soaring global consumption."
          },{
            value: "30%",
            text: "Defective supply per batch due to systemic inefficiency. Biological variability, disease, and environmental stress drive massive inconsistencies in existing supply."
          }].map((item, index) => (
            <div
              key={index}
              className={`
                relative z-20
                lg:w-[320px] max-w-[320px]
                min-h-[100px] md:h-[320px]
                rounded-[30px]
                p-4 md:p-10
                flex flex-col items-center justify-center text-center
                bg-[#F9FBF9]/20
                border border-[#0F172A]/10
                backdrop-blur-[12px]
                transition-transform duration-300 hover:scale-105
                border-neon
                ${index === 2 ? "col-span-2 justify-self-center md:col-span-1" : ""}
              `}
            >
              <h3 className="text-3xl lg:text-[75px] font-semibold mb-4">
                {item.value}
              </h3>

              <p className="text-[11px] lg:text-[15px] !text-[#033E8A] leading-[19px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default StatsSection
