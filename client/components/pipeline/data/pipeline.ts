export type PipelineKey = "feed" | "protein" | "genetics" | "functional" | "bioactives" | "disease"

export interface PipelineItem {
  key: PipelineKey
  label: string
  eyebrow: string
  title: string
  highlight?: string
  description: string[]
  imageSrc: string
  imageAlt: string
}

export const PIPELINE_DATA: PipelineItem[] = [
  {
    key: "feed",
    label: "Feed Optimization",
    eyebrow: "Pipeline",
    title: "Feed",
    highlight: "Optimization",
    description: [
      "Feed is the single largest cost in aquaculture, yet formulation decisions are still driven by trial-and-error rather than biological response.",
      "ALKEMYST models how nutrients are metabolized at the cellular level, enabling feed strategies to be optimized in silico for efficiency, growth, and robustness before deployment.",
    ],
    imageSrc: "/pipeline/feed.png",
    imageAlt: "Aquaculture feed in hand",
  },
  {
    key: "protein",
    label: "Alternative Proteins",
    eyebrow: "Pipeline",
    title: "Alternative",
    highlight: "Proteins",
    description: [
      "Scaling alternative marine proteins is constrained by biological variability, inconsistent quality, and high development cost.",
      "ALKEMYST models the cellular pathways that drive growth, composition, and quality, enabling alternative proteins to be designed for predictability and scale from the outset.",
    ],
    imageSrc: "/pipeline/feed.png",
    imageAlt: "Marine protein source",
  },
  {
    key: "genetics",
    label: "Breeding & Genetics",
    eyebrow: "Pipeline",
    title: "Breeding &",
    highlight: "Genetics",
    description: [
      "Breeding cycles are slow, capital-intensive, and often disconnected from the biological mechanisms that actually drive performance.",
      "ALKEMYST links genetic variation to cellular behavior and phenotypic outcomes, enabling faster identification of traits that matter without waiting for multi-year breeding trials.",
    ],
    imageSrc: "/pipeline/feed.png",
    imageAlt: "Genetic research visualization",
  },
  {
    key: "functional",
    label: "Functional Nutrition Optimization",
    eyebrow: "Pipeline",
    title: "Functional Nutrition",
    highlight: "Optimization",
    description: [
      "Most nutrition strategies focus on ingredient composition, not how nutrients are actually absorbed, allocated, and utilized by cells.",
      "ALKEMYST translates nutritional inputs into biological outputs by modeling uptake, metabolism, and functional impact to design nutrition around cellular performance, not formulations.",
    ],
    imageSrc: "/pipeline/feed.png",
    imageAlt: "Genetic research visualization",
  },
  {
    key: "bioactives",
    label: "Marine Bioactives for Skincare & Supplements",
    eyebrow: "Pipeline",
    title: "Marine Bioactives for",
    highlight: "Skincare & Supplements",
    description: [
      "Marine bioactives are in high demand, but traditional sourcing suffers from contamination risk, inconsistency, and limited scalability.",
      "ALKEMYST enables the discovery and development of marine bioactives through controlled cellular systems, delivering consistent, traceable, and biology-driven functional compounds.",
    ],
    imageSrc: "/pipeline/feed.png",
    imageAlt: "Genetic research visualization",
  },
  {
    key: "disease",
    label: "Disease Detection & Resilience",
    eyebrow: "Pipeline",
    title: "Disease Detection",
    highlight: "& Resilience",
    description: [
      "Disease is often detected manually, and often only after performance declines, when intervention is costly and outcomes are uncertain, resulting in billion dollar losses. ",
      "ALKEMYST identifies early biological stress and immune signatures at the cellular level, enabling proactive detection and resilience strategies before disease manifests.",
    ],
    imageSrc: "/pipeline/feed.png",
    imageAlt: "Genetic research visualization",
  },
]
