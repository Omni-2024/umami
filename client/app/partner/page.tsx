import React from "react"
import CellBackground from "@/components/platform/cells"
import HeroOverlay from "@/components/partner/hero"
import WhyPossibleSection from "@/components/platform/why"
import RightGlow from "@/components/platform/seam-flow"

const platform: React.FC = () => {
  return (
    <div className="relative w-full bg-white text-[#0F172A] overflow-hidden">
    <HeroOverlay />
      <RightGlow />
      </div>
  )
}

export default platform
