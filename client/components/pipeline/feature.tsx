import Image from "next/image"
import { PipelineItem } from "./data/pipeline"

export default function PipelineContent({ data }: { data: PipelineItem }) {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto grid max-w-6xl gap-12 items-center md:grid-cols-2">
        {/* Text */}
        <div>
          <p className="mb-3 text-xs tracking-widest uppercase text-yellow-500">
            {data.eyebrow}
          </p>

          <h2 className="text-3xl sm:text-4xl font-light">
            {data.title}{" "}
            {data.highlight && (
              <span className="italic text-yellow-500">
                {data.highlight}
              </span>
            )}
          </h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-600">
            {data.description.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[320px] w-full overflow-hidden rounded-2xl shadow-lg sm:h-[420px]">
          <Image
            src={data.imageSrc}
            alt={data.imageAlt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
