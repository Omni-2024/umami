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
      "ALKEMYST models nutrient metabolism at the cellular level, enabling feed strategies to be optimized in silico for efficiency, growth, and robustness.",
    ],
    imageSrc: "/images/feed.jpg",
    imageAlt: "Aquaculture feed in hand",
  },
  {
    key: "protein",
    label: "Alternative Proteins",
    eyebrow: "Pipeline",
    title: "Alternative",
    highlight: "Proteins",
    description: [
      "Marine bioactives provide a powerful foundation for next-generation protein sources.",
      "We simulate biological pathways to design scalable, sustainable protein solutions for food and supplements.",
    ],
    imageSrc: "/images/protein.jpg",
    imageAlt: "Marine protein source",
  },
  {
    key: "genetics",
    label: "Breeding & Genetics",
    eyebrow: "Pipeline",
    title: "Breeding &",
    highlight: "Genetics",
    description: [
      "Disease detection and resilience depend on understanding biology at scale.",
      "Our models enable data-driven breeding strategies for healthier, more resilient organisms.",
    ],
    imageSrc: "/images/genetics.jpg",
    imageAlt: "Genetic research visualization",
  },
  {
    key: "functional",
    label: "Functional Nutrition Optimization",
    eyebrow: "Pipeline",
    title: "Breeding &",
    highlight: "Genetics",
    description: [
      "Disease detection and resilience depend on understanding biology at scale.",
      "Our models enable data-driven breeding strategies for healthier, more resilient organisms.",
    ],
    imageSrc: "/images/genetics.jpg",
    imageAlt: "Genetic research visualization",
  },
  {
    key: "bioactives",
    label: "Marine Bioactives for  Skincare & Supplements",
    eyebrow: "Pipeline",
    title: "Breeding &",
    highlight: "Genetics",
    description: [
      "Disease detection and resilience depend on understanding biology at scale.",
      "Our models enable data-driven breeding strategies for healthier, more resilient organisms.",
    ],
    imageSrc: "/images/genetics.jpg",
    imageAlt: "Genetic research visualization",
  },
  {
    key: "disease",
    label: "Disease Detection  & Resilience",
    eyebrow: "Pipeline",
    title: "Breeding &",
    highlight: "Genetics",
    description: [
      "Disease detection and resilience depend on understanding biology at scale.",
      "Our models enable data-driven breeding strategies for healthier, more resilient organisms.",
    ],
    imageSrc: "/images/genetics.jpg",
    imageAlt: "Genetic research visualization",
  },
]
