import React from "react"
import { Scale, Brain, Cpu } from "lucide-react"

const items = [
  {
    icon: Scale,
    text: "High-resolution genomics, transcriptomics, and phenotypic data are now accessible at scale.",
  },
  {
    icon: Brain,
    text: "Modern machine learning is much more advanced and can capture dynamic, non-linear biological systems.",
  },
  {
    icon: Cpu,
    text: "Cloud and GPU infrastructure enable large-scale biological simulation and continuous learning.",
  },
]

const WhyPossibleSection: React.FC = () => {
  return (
    <section className="relative py-28 px-20 z-10">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-[44px] font-medium">
          Why This is Possible{" "}
          <span className="font-italic">Today?</span>
        </h2>

        <p className="mt-2 text-[18px] opacity-50 font-medium leading-relaxed max-w-4xl mx-auto">
          “ALKEMYST computationally models the dynamic biological state of marine
          cells. Marine biology is dynamic in nature and needs special insight
          to increase foundational understanding. By integrating molecular,
          metabolic, and environmental signals, our platform moves beyond static
          genetics to predict how biology behaves across species and
          applications.”
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="relative rounded-3xl bg-[#F2F8FF] px-8 pt-14 pb-10 text-center shadow-sm"
              >
                {/* ICON BADGE */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E6F0FF] border border-[#D6E6FF]">
                    <Icon className="h-6 w-6 text-[#0F172A]" />
                  </div>
                </div>

                {/* TEXT */}
                <p className="text-sm leading-7 text-[#334155]">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>



      </div>
    </section>
  )
}

export default WhyPossibleSection
