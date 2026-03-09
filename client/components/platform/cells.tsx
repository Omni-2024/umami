import React from "react"
import Image from "next/image"

const CellBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* 1. BIOLOGICAL ANIMATION DEFINITIONS */}
      <style>{`
        @keyframes cellPulse {
          0%, 100% { 
            transform: scale(1) translate(0, 0) rotate(0deg);
            opacity: 0.7;
          }
          33% { 
            transform: scale(1.03) translate(15px, -10px) rotate(1deg);
            opacity: 0.9;
          }
          66% { 
            transform: scale(0.98) translate(-5px, 15px) rotate(-1deg);
            opacity: 0.8;
          }
        }

        @keyframes cellDrift {
          0%, 100% { 
            transform: scale(1) translate(0, 0) rotate(0deg);
            opacity: 0.8;
          }
          50% { 
            transform: scale(1.05) translate(-20px, 20px) rotate(-2deg);
            opacity: 1;
          }
        }

        .biological-cell-left {
          animation: cellPulse 18s ease-in-out infinite;
        }

        .biological-cell-right {
          animation: cellDrift 25s ease-in-out infinite;
        }
      `}</style>

      {/* LEFT CELL - High frequency "breathing" effect */}
      <div className="absolute lg:left-[2%] lg:top-[-0%] lg:w-[1020px] lg:h-[720px]
        left-[-100%] top-[3%] w-[1020px] h-[620px] biological-cell-left">
        <Image
          src="/platform/cell1.png"
          alt="Marine Cell Left"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* RIGHT CELL - Heavy, slow drifting effect */}
      <div className="absolute lg:right-[0%] lg:top-[-7%] lg:w-[1220px] lg:h-[1020px]
        right-[-40%] top-[-5%] w-[620px] h-[820px] biological-cell-right">
        <Image
          src="/platform/cell2.png"
          alt="Marine Cell Right"
          fill
          className="object-contain"
          priority
        />
      </div>

    </div>
  )
}

export default CellBackground