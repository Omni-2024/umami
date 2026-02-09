import React from "react"
import HeroSection from "@/components/home/hero";
import StatsSection from "@/components/home/bio-limits"
import RightGlow from "@/components/home/seam-flow"
import BiologicalBottleneckSection from "@/components/home/bio-bottleneck";

const UmamiLanding: React.FC = () => {
  return (
    <div className="relative w-full bg-white text-[#0F172A] overflow-hidden">

      {/* RIGHT DNA GLOW – spans hero + stats */}
      
      <HeroSection />
      <RightGlow />

      <StatsSection />
      <BiologicalBottleneckSection/>

    </div>
  )
}

export default UmamiLanding
