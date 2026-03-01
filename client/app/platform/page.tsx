import React from "react"
import CellBackground from "@/components/platform/cells"
import HeroOverlay from "@/components/platform/hero"
import WhyPossibleSection from "@/components/platform/why"
import RightGlow from "@/components/platform/seam-flow"
import IsometricCardStack from "@/components/platform/stack-cards"
import MarineComputationalComponent from "@/components/platform/round-cells"
import MechanisticEngine from "@/components/platform/input-output"
import CTA from "@/components/home/cta"

const platform: React.FC = () => {
  return (
    <div className="relative w-full bg-white text-[#0F172A] overflow-hidden">
    {/* <CellBackground /> */}
    <HeroOverlay />
      <RightGlow />

      <WhyPossibleSection />
      <IsometricCardStack />
      <MarineComputationalComponent />
      <MechanisticEngine />
      <CTA/>
      </div>
  )
}

export default platform
