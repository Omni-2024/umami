import React from "react"
import Image from "next/image"

const CellBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">

      {/* LEFT CELL */}
      <div className="absolute left-[2%] top-[-0%] w-[1020px] h-[720px]">
        <Image
          src="/platform/cell1.png"
          alt="Marine Cell Left"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* RIGHT CELL */}
      <div className="absolute right-[0%] top-[-7%] w-[1220px] h-[1020px]">
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
