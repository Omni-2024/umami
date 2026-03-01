// import React from "react"

// const HeroOverlay: React.FC = () => {
//   return (
//     <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-32 text-center">

//       {/* Badge */}
//       <div className="mx-auto mt-16 inline-flex items-center gap-2 rounded-full bg-white/30 px-6 py-2 text-[10px] font-bold tracking-[0.25em] uppercase backdrop-blur">
//         <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
//         The Alkemyst Platform
//       </div>

//       {/* Heading */}
//       <h1 className="text-[42px] sm:text-[56px] leading-tight">
//         AI-Native{" "}
//         <span className="font-italic">
//           Infrastructure
//         </span>
//         <br />
//         <span className="font-italic">
//           for{""}
//         </span>
//         Marine Biology
//       </h1>

//       {/* CTA */}
//       <div className="mt-10">
//         <button className="rounded-full notfish px-16 py-4 text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition">
//           Explore More
//         </button>
//       </div>
//     </div>
//   )
// }

// export default HeroOverlay


"use client"

import React from "react"

interface CellProps {
  size: number
  style?: React.CSSProperties
  animationClass: string
}

const Cell: React.FC<CellProps> = ({ size, style, animationClass }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: "absolute",
        ...style,
      }}
      className={animationClass}
    >
      <svg
        viewBox="0 0 100 100"
        style={{
          width: "100%",
          height: "100%",
          filter: "drop-shadow(0 0 30px rgba(120,200,210,0.3))",
        }}
      >
        <defs>
          <radialGradient id={`cellGrad-${animationClass}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="rgba(200,235,240,0.95)" />
            <stop offset="40%" stopColor="rgba(140,210,220,0.75)" />
            <stop offset="100%" stopColor="rgba(90,170,185,0.4)" />
          </radialGradient>
          <radialGradient id={`nucleusGrad-${animationClass}`} cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="rgba(100,190,210,0.9)" />
            <stop offset="100%" stopColor="rgba(60,140,170,0.7)" />
          </radialGradient>
        </defs>

        <ellipse cx="50" cy="50" rx="46" ry="44" fill={`url(#cellGrad-${animationClass})`} stroke="rgba(140,210,220,0.5)" strokeWidth="1" />
        <ellipse cx="50" cy="50" rx="38" ry="36" fill="none" stroke="rgba(200,240,245,0.3)" strokeWidth="2" />
        <ellipse cx="48" cy="47" rx="14" ry="13" fill={`url(#nucleusGrad-${animationClass})`} opacity="0.85" />
        <ellipse cx="46" cy="45" rx="6" ry="5" fill="rgba(80,160,185,0.5)" />
        <ellipse cx="65" cy="38" rx="5" ry="3.5" fill="#e8a96a" opacity="0.7" />
        <ellipse cx="72" cy="55" rx="6" ry="4" fill="#a0d4d8" opacity="0.65" />
        <ellipse cx="58" cy="68" rx="4" ry="3" fill="#e8a96a" opacity="0.6" />
        <ellipse cx="34" cy="62" rx="5" ry="3.5" fill="#a0d4d8" opacity="0.55" />
        <ellipse cx="30" cy="42" rx="3.5" ry="2.5" fill="#e8a96a" opacity="0.6" />
        <ellipse cx="68" cy="70" rx="3" ry="2" fill="#e8a96a" opacity="0.5" />
        <ellipse cx="36" cy="32" rx="8" ry="5" fill="rgba(255,255,255,0.35)" transform="rotate(-20 36 32)" />
      </svg>
    </div>
  )
}

const HeroOverlay: React.FC = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>

      <style>{`
        @keyframes floatA {
          0%,100% { transform: translate(0,0) rotate(0deg) scale(1); }
          25% { transform: translate(12px,-18px) rotate(5deg) scale(1.03); }
          50% { transform: translate(-8px,-30px) rotate(-3deg) scale(0.97); }
          75% { transform: translate(-14px,-12px) rotate(6deg) scale(1.02); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0) rotate(0deg) scale(1); }
          25% { transform: translate(-10px,15px) rotate(-4deg) scale(1.04); }
          50% { transform: translate(16px,22px) rotate(3deg) scale(0.96); }
          75% { transform: translate(10px,8px) rotate(-5deg) scale(1.01); }
        }
        @keyframes floatC {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(8px,-14px) scale(1.05); }
        }
        .cell-a { animation: floatA 22s ease-in-out infinite; }
        .cell-b { animation: floatB 18s ease-in-out 2s infinite; }
        .cell-c { animation: floatC 14s ease-in-out 1s infinite; }
        .cell-d { animation: floatC 16s ease-in-out 5s infinite; }
      `}</style>

      {/* Background Cells */}
      <Cell size={520} style={{ left: "150px", top: "100px", zIndex: 1, opacity: 0.92 }} animationClass="cell-a" />
      <Cell size={700} style={{ right: "50px", top: "-320px", zIndex: 1, opacity: 0.85 }} animationClass="cell-b" />
      <Cell size={200} style={{ right: "60px", bottom: "10px", zIndex: 1, opacity: 0.45 }} animationClass="cell-c" />
      <Cell size={120} style={{ left: "280px", bottom: "30px", zIndex: 1, opacity: 0.35 }} animationClass="cell-d" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-32 text-center">

        <div className="mx-auto mt-16 inline-flex items-center gap-2 rounded-full bg-white/30 px-6 py-2 text-[10px] font-bold tracking-[0.25em] uppercase backdrop-blur">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
          The Alkemyst Platform
        </div>

        <h1 className="text-[42px] sm:text-[56px] leading-tight">
          AI-Native{" "}
          <span className="font-italic">Infrastructure</span>
          <br />
          <span className="font-italic">for </span>
          Marine Biology
        </h1>

        <div className="mt-10">
          <button className="rounded-full notfish px-16 py-4 text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition">
            Explore More
          </button>
        </div>

      </div>
    </div>
  )
}

export default HeroOverlay