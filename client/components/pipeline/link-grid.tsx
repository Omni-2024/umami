"use client"

import { useEffect, useRef, useState } from "react"

interface SelectorProps {
  items: { key: string; label: string }[]
}

export default function PipelineSelector({ items }: SelectorProps) {
  const [activeKey, setActiveKey] = useState<string>("")
  const [isStuck, setIsStuck] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  // Scroll to section
  const handleScroll = (key: string) => {
    const el = document.getElementById(`pipeline-${key}`)
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Detect sticky state
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const { top } = sectionRef.current.getBoundingClientRect()
      setIsStuck(top <= 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll Spy
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
    <section ref={sectionRef} className="sticky top-0 z-50 -mt-40">
      <div
        className={`relative py-10 px-20 bg-white transition-all duration-500 ease-in-out shadow-[0_-10px_40px_rgba(0,0,0,0.06)] ${
          isStuck ? "rounded-none" : "rounded-t-[120px] md:rounded-t-[180px]"
        }`}
      >
        <div className="mx-auto max-w-8xl px-2">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
            {items.map((item) => {
              const active = item.key === activeKey

              return (
                <button
                  key={item.key}
                  onClick={() => handleScroll(item.key)}
                  className="relative text-[10px] tracking-[0.25em] uppercase font-medium transition-colors w-[calc(33.33%-3.5rem)] text-center"
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
