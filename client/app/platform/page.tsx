import React from "react"
import CellBackground from "@/components/platform/cells"
import HeroOverlay from "@/components/platform/hero"
import WhyPossibleSection from "@/components/platform/why"
import RightGlow from "@/components/platform/seam-flow"

const platform: React.FC = () => {
  return (
    <div className="relative w-full bg-white text-[#0F172A] overflow-hidden">
    <CellBackground />
    <HeroOverlay />
      <RightGlow />

      <WhyPossibleSection />
      <WhyPossibleSection />
      <WhyPossibleSection />
      <WhyPossibleSection />
      </div>
  )
}

export default platform
