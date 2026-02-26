import React from "react"
import HeroSection from "@/components/people/hero";
import StatsSection from "@/components/home/bio-limits"
import RightGlow from "@/components/home/seam-flow"
import BiologicalBottleneckSection from "@/components/home/bio-bottleneck";
import PartnerMarquee from "@/components/home/partners";
import SpotlightSection from "@/components/home/spotlight";
import CTA from "@/components/home/cta";
import ScienceImpactGrid from "@/components/people/science-impact";
import TeamSection from "@/components/people/team";

const UmamiLanding: React.FC = () => {
  return (
    <div className="relative w-full bg-white text-[#0F172A] overflow-hidden">

      {/* RIGHT DNA GLOW – spans hero + stats */}
      
      <HeroSection />
      <RightGlow />

      <ScienceImpactGrid />
      <TeamSection/>
      <CTA/>

    </div>
  )
}

export default UmamiLanding
