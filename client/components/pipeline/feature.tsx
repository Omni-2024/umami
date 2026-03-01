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
          className="relative py-10 px-20 bg-white z-10 scroll-mt-32"

        >
          <div className="mx-auto grid max-w-5xl gap-12 items-center md:grid-cols-2 transition-all duration-500 ease-out">
            
            {/* Text */}
            <div className="-mt-20">
              <p className="mb-3 text-xs tracking-widest uppercase font-semibold text-yellow-500">
                {data.eyebrow}
              </p>

              <h2 className="text-3xl sm:text-4xl mb-10">
                {data.title}{" "}
                {data.highlight && (
                  <span className="italic">{data.highlight}</span>
                )}
              </h2>

              <div className="mt-6 max-w-md space-y-4 text-[18px] leading-relaxed text-gray-600">
                {data.description.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl sm:h-[550px]">
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
