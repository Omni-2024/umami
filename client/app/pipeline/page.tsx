"use client"

import { useState } from "react"
import HeroVideo from "@/components/pipeline/hero-video"
import PipelineSelector from "@/components/pipeline/link-grid"
import PipelineContent from "@/components/pipeline/feature"
import { PIPELINE_DATA, PipelineKey } from "@/components/pipeline/data/pipeline"
import CTA from "@/components/home/cta"

export default function HomePage() {
  const [activeKey, setActiveKey] = useState<PipelineKey>("Feed Optimization")

  // ✅ Use LABEL instead of TITLE
  const items = PIPELINE_DATA.map((item) => ({
    key: item.key,
    label: item.label,
  }))

  return (
    <>
      <HeroVideo
        videoSrc="/videos/ocean.mp4"
        eyebrow="Powered by ALKEMYST™, ensuring consistency, scalability, and traceability."
        title="From"
        highlight="the Ocean, Without"
        title2="the Catch"
        subtitle="We model the ocean’s biology at the cellular level to build a resilient, scalable future for food, health and beauty."
      />

      {/* Pipeline Selector */}
      <PipelineSelector items={items} />

      {/* Pipeline Content */}
      <PipelineContent />

      <CTA />
    </>
  )
}
