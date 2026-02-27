import React from "react"
import CellBackground from "@/components/platform/cells"
import HeroOverlay from "@/components/platform/hero"
import WhyPossibleSection from "@/components/platform/why"
import RightGlow from "@/components/platform/seam-flow"
import IsometricCardStack from "@/components/platform/stack-cards"

const platform: React.FC = () => {
  return (
    <div className="relative w-full bg-white text-[#0F172A] overflow-hidden">
    <CellBackground />
    <HeroOverlay />
      <RightGlow />

      <WhyPossibleSection />
      <IsometricCardStack />
      </div>
  )
}

export default platform
