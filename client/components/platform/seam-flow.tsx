import React from "react"

const RightGlow: React.FC = () => {
  return (
    <div>
    <div className="absolute top-[15%] right-[-15%] w-[60%] h-[30%] bg-[#C7E7FF] rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute opacity-30 bottom-[78%] left-[-15%] w-[60%] h-[80%] bg-[#D4AF37] rounded-full blur-[140px] pointer-events-none z-0" />
    </div>
  )
}

export default RightGlow
