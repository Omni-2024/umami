interface SelectorProps {
  items: { key: string; label: string }[]
  activeKey: string
  onChange: (key: string) => void
}

export default function PipelineSelector({
  items,
  activeKey,
  onChange,
}: SelectorProps) {
  return (
    <section className="relative pb-4 pt-28 px-20 bg-white z-10">
      <div className="mx-auto max-w-8xl px-2">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
          {items.map((item) => {
            const active = item.key === activeKey

            return (
              <button
                key={item.key}
                onClick={() => onChange(item.key)}
                className="relative text-[10px] tracking-[0.25em] uppercase font-medium transition-colors w-[calc(33.33%-3.5rem)] text-center"
              >
                <span
                  className={active ? "text-gray-900" : "text-gray-400 hover:text-gray-700"}
                >
                  {item.label}
                </span>

                {/* underline matches text width */}
                {active && (
                  <span
                    className="absolute left-1/2 -bottom-2 h-[2px] bg-[#D4AF37] rounded-full transition-all duration-300"
                    style={{ width: '70%', transform: 'translateX(-50%)' }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
