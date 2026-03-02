"use client"

import Image from "next/image"
import { PIPELINE_DATA } from "./data/pipeline"

export default function PipelineContent() {
  return (
    <>
      {PIPELINE_DATA.map((data) => (
        <section
          key={data.key}
          id={`pipeline-${data.key}`}
          className="relative py-6 md:py-10 px-4 md:px-20 bg-white z-10 scroll-mt-32"
        >
          <div className="mx-auto grid max-w-5xl gap-10 md:gap-12 items-center md:grid-cols-2 transition-all duration-500 ease-out">
            
            {/* Text */}
            <div className="md:-mt-20">
              <p className="mb-3 text-[10px] md:text-xs tracking-widest uppercase font-semibold text-yellow-500 leading-text">
                {data.eyebrow}
              </p>

              <h2 className="text-xl sm:text-3xl md:text-4xl md:mb-10">
                {data.title}{" "}
                {data.highlight && (
                  <span className="font-italic">{data.highlight}</span>
                )}
              </h2>

              <div className="mt-4 md:mt-6 max-w-md space-y-4 text-[12px] md:text-[18px] leading-relaxed text-justify text-gray-600">
                {data.description.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[350] sm:h-[320px] md:h-[550px] w-full overflow-hidden rounded-2xl">
              <Image
                src={data.imageSrc}
                alt={data.imageAlt}
                fill
                className="object-cover transition-all duration-700 ease-out"
              />
            </div>

          </div>
        </section>
      ))}
    </>
  )
}
