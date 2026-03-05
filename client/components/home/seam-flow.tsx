import React from "react"

const RightGlow: React.FC = () => {
  return (
    <div
      className="
        hidden md:block
        absolute
        top-[9%]
        right-[-30%]
        w-[80%]
        h-[30%]
        bg-[#CCEFF4]
        rounded-full
        blur-[120px]
        pointer-events-none
        z-10
      "
    />
  )
}

export default RightGlow
