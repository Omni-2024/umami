import React from "react"

const RightGlow: React.FC = () => {
  return (
    <div className="hidden md:block">
        <div className="absolute top-[7%] right-[-15%] w-[60%] h-[20%] bg-[#CCEFF4] rounded-full blur-[140px] pointer-events-none z-0 opacity-80" />
        <div className="absolute opacity-80 bottom-[78%] left-[-15%] w-[60%] h-[80%] bg-[#CCEFF4] rounded-full blur-[140px] pointer-events-none z-0" />
    </div>
  )
}

export default RightGlow
