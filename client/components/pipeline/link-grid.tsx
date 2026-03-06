"use client"

import { useEffect, useRef, useState } from "react"

interface SelectorProps {
  items: { key: string; label: string }[]
}

export default function PipelineSelector({ items }: SelectorProps) {
  const [activeKey, setActiveKey] = useState<string>("")
  const [isStuck, setIsStuck] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  const handleScroll = (key: string) => {
    const el = document.getElementById(`pipeline-${key}`)
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const { top } = sectionRef.current.getBoundingClientRect()
      setIsStuck(top <= 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = items.map((item) =>
      document.getElementById(`pipeline-${item.key}`)
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("pipeline-", "")
            setActiveKey(id)
          }
        })
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [items])

  return (
    <section ref={sectionRef} className="sticky top-0 z-50 md:-mt-40">
      <div
  className={`relative py-6 lg:py-20 px-4 md:px-20 bg-white transition-all duration-500 ease-in-out shadow-[0_-10px_40px_rgba(0,0,0,0.06)] ${
    isStuck 
      ? "rounded-none" 
      : "md:rounded-t-[50%_120px]" // Use percentage for width and pixels for height for an elliptical curve
  }`}
>
        <div className="mx-auto max-w-8xl">
          
          {/* ✅ Mobile: 2 columns | Desktop unchanged */}
          <div className="grid grid-cols-2 gap-y-6 gap-x-6 md:flex md:flex-wrap md:justify-center">

            {items.map((item) => {
              const active = item.key === activeKey

              return (
                <button
                  key={item.key}
                  onClick={() => handleScroll(item.key)}
                  className="relative text-[8px] lg:text-[10px] tracking-[0.25em] uppercase font-bold transition-colors text-center md:w-[calc(33.33%-3.5rem)]"
                >
                  <span
                    className={
                      active
                        ? "text-gray-900"
                        : "text-gray-400 hover:text-gray-700"
                    }
                  >
                    {item.label}
                  </span>

                  {active && (
                    <span
                      className="absolute left-1/2 -bottom-2 h-[2px] border-neon rounded-full transition-all duration-300"
                      style={{
                        width: "90%",
                        transform: "translateX(-50%)",
                      }}
                    />
                  )}
                </button>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}
