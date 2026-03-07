import React from "react"
import Image from "next/image"

const CellBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">

      {/* LEFT CELL */}
      <div className="absolute lg:left-[2%] lg:top-[-0%] lg:w-[1020px] lg:h-[720px]
      left-[-100%] top-[3%] w-[1020px] h-[620px] lg:opacity-100 opacity-50">
        <Image
          src="/platform/cell1.png"
          alt="Marine Cell Left"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* RIGHT CELL */}
      <div className="absolute lg:right-[0%] lg:top-[-7%] lg:w-[1220px] lg:h-[1020px]
      right-[-40%] top-[-5%] w-[620px] h-[820px] lg:opacity-100 opacity-80">
        <Image
          src="/platform/cell2.png"
          alt="Marine Cell Right"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* YELLOW GLOW */}
      </div>
  )
}

export default CellBackground
