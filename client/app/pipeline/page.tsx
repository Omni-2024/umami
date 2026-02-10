"use client"

import { useState } from "react"
import HeroVideo from "@/components/pipeline/hero-video"
import PipelineSelector from "@/components/pipeline/link-grid"
import PipelineContent from "@/components/pipeline/feature"
import { PIPELINE_DATA, PipelineKey } from "@/components/pipeline/data/pipeline"

export default function HomePage() {
  const [activeKey, setActiveKey] = useState<PipelineKey>("feed")

  const activeData = PIPELINE_DATA.find(
    (item) => item.key === activeKey
  )!

  return (
    <>
      <HeroVideo
        videoSrc="/videos/ocean.mp4"
        eyebrow="Powered by Alkemyst"
        title="From the Ocean,"
        highlight="Without the Catch"
        subtitle="We model the ocean’s biology at the cellular level to build a resilient, scalable future for food, health and beauty."
      />

      <PipelineSelector
        items={PIPELINE_DATA.map(({ key, label }) => ({ key, label }))}
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key as PipelineKey)}
      />

      <PipelineContent data={activeData} />
    </>
  )
}
