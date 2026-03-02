import React from "react"
import HeroSection from "@/components/home/hero";
import StatsSection from "@/components/home/bio-limits"
import RightGlow from "@/components/home/seam-flow"
import BiologicalBottleneckSection from "@/components/home/bio-bottleneck";
import PartnerMarquee from "@/components/home/partners";
import SpotlightSection from "@/components/home/spotlight";
import CTA from "@/components/home/cta";

const UmamiLanding: React.FC = () => {
  return (
    <div className="relative w-full bg-white text-[#0F172A] overflow-hidden">

      {/* RIGHT DNA GLOW – spans hero + stats */}
      
      <section id="hero">
        <HeroSection />
      </section>
      <RightGlow />

      <section id="stats">
        <StatsSection />
      </section>
      <section id="bottleneck">
        <BiologicalBottleneckSection />
      </section>
      <section id="partners">
        <PartnerMarquee />
      </section>
      <section id="spotlight">
        <SpotlightSection />
      </section>
      <CTA/>

    </div>
  )
}

export default UmamiLanding
