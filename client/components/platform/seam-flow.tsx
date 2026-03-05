import React from "react"

const RightGlow: React.FC = () => {
  return (
    <div className="hidden md:block">
        <div className="absolute opacity-20 top-[7%] right-[-15%] w-[60%] h-[15%] bg-[#01ADC6] rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute opacity-20 bottom-[84%] left-[-35%] w-[80%] h-[80%] bg-[#01ADC6] rounded-full blur-[120px] pointer-events-none z-0" />
    </div>
  )
}

export default RightGlow
