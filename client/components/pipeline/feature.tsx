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
          <div className="mx-auto grid max-w-5xl sm:gap-10 items-center md:grid-cols-2 transition-all duration-500 ease-out">
            
            {/* Text */}
            <div className="md:-mt-20">
              <p className="mb-3 text-[10px] md:text-xs uppercase font-semibold !text-[#CD5A99] tracking-[6px] leading-text">
                {data.eyebrow}
              </p>

              <h2 className="sm:text-3xl lg:text-[48px] font-light md:mb-10">
                {data.title}{" "}
                {data.highlight && (
                  <span className="font-italic">{data.highlight}</span>
                )}
              </h2>

              <div className="mt-4 md:mt-6 sm:max-w-md space-y-4 sm:text-[12px] lg:text-[18px] leading-[34px] text-justify !text-[#033E8A]">
                {data.description.map((text, idx) => (
                  <p className="!text-[#033E8A]" key={idx}>{text}</p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[350] sm:h-[320px] md:h-[550px] lg:w-[512px] w-full overflow-hidden rounded-2xl">
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
