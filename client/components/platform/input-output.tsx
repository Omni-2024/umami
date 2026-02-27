"use client";

import React from "react";

// ── Icons (Simplified for brevity, maintain originals in your codebase) ──────────────────
const DnaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#1a3a6a" strokeWidth="1.4" strokeLinecap="round">
    <path d="M12 4 C12 4 24 10 24 18 C24 26 12 32 12 32" />
    <path d="M24 4 C24 4 12 10 12 18 C12 26 24 32 24 32" />
    <line x1="13.5" y1="9" x2="22.5" y2="9" />
    <line x1="11" y1="14" x2="25" y2="14" />
    <line x1="11" y1="22" x2="25" y2="22" />
    <line x1="13.5" y1="27" x2="22.5" y2="27" />
  </svg>
);

const FlaskIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#1a3a6a" strokeWidth="1.4" strokeLinecap="round">
    <path d="M13 4 L13 16 L5 28 Q4 31 7 31 L29 31 Q32 31 31 28 L23 16 L23 4" />
    <line x1="10" y1="4" x2="26" y2="4" />
    <circle cx="13" cy="26" r="1.5" fill="#1a3a6a" fillOpacity="0.4" stroke="none" />
  </svg>
);

const OmicsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#1a3a6a" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="18" cy="18" r="10" />
    <ellipse cx="18" cy="18" rx="10" ry="4" />
    <ellipse cx="18" cy="18" rx="4" ry="10" />
  </svg>
);

const FishIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#1a3a6a" strokeWidth="1.4" strokeLinecap="round">
    <path d="M6 18 Q10 10 20 10 Q28 10 30 18 Q28 26 20 26 Q10 26 6 18Z" />
    <circle cx="24" cy="15" r="1.5" fill="#1a3a6a" />
  </svg>
);

const MediaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#1a3a6a" strokeWidth="1.4" strokeLinecap="round">
    <rect x="6" y="8" width="14" height="20" rx="2" />
    <rect x="10" y="6" width="14" height="20" rx="2" />
  </svg>
);

const StressIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#1a3a6a" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="18" cy="18" r="11" />
    <path d="M18 10 L18 18 L24 22" />
  </svg>
);

const YieldIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#1a3a6a" strokeWidth="1.4" strokeLinecap="round">
    <path d="M6 28 L6 20 L12 20 L12 14 L18 14 L18 8 L24 8 L24 16 L30 16 L30 28 Z" />
  </svg>
);

const RationalIcon = () => (
  <svg width="32" height="32" viewBox="0 0 36 36" fill="none" stroke="#1a3a6a" strokeWidth="1.4" strokeLinecap="round">
    <circle cx="18" cy="18" r="11" />
    <circle cx="18" cy="18" r="6" />
    <line x1="18" y1="4" x2="18" y2="7" />
  </svg>
);

// ── Pill strip ──────────────────
interface PillItem {
  icon: React.ReactNode;
  text: string;
}

const PillStrip = ({ items, delay = 0 }: { items: PillItem[]; delay?: number }) => (
  <div
    className="flex items-center justify-center gap-1 rounded-full bg-[#CCEFF4] px-2 py-4 backdrop-blur-md border border-white/40 shadow-sm"
    style={{ animation: `fadeSlideUp 0.7s ease ${delay}ms both` }}
  >
    {items.map((item, i) => (
      <div
        key={i}
        className="flex flex-col items-center gap-1.5 px-3"
        style={{ borderRight: i < items.length - 1 ? "1px solid rgba(26,58,106,0.1)" : "none" }}
      >
        <div className="scale-90 opacity-80">{item.icon}</div>
        <p className="text-[9px] font-bold text-center text-[#2a4a7a] leading-tight max-w-[85px] uppercase tracking-tight">
          {item.text}
        </p>
      </div>
    ))}
  </div>
);

// ── Main component ──────────────────
export default function MechanisticEngine() {
  const topItems: PillItem[] = [
    { icon: <DnaIcon />, text: "80% Gene Coverage" },
    { icon: <FlaskIcon />, text: "12K+ Reactions" },
    { icon: <OmicsIcon />, text: "Multi-Omics Data" },
    { icon: <FishIcon />, text: "Multi-Species" },
  ];

  const bottomItems: PillItem[] = [
    { icon: <MediaIcon />, text: "Media Feed Opt" },
    { icon: <StressIcon />, text: "Stress Insights" },
    { icon: <YieldIcon />, text: "Quality Preds" },
    { icon: <RationalIcon />, text: "Process Design" },
  ];

  return (
    <>
      {/* ── Keyframes (Define slow spinning here or in tailwind.config.js) ── */}
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeSlideIn { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes subtleFloat { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes chevronDrop { 0%, 100% { opacity: 0.2; transform: translateY(0px); } 50% { opacity: 0.8; transform: translateY(5px); } }
        
        /* Smooth, slow rotation */
        @keyframes slow-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .chevron { animation: chevronDrop 1.8s ease-in-out infinite; }
        
        /* Apply the custom animation */
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
      `}</style>

      <section className="min-h-screen w-full flex items-center justify-center bg-[#f0f9ff] px-10 py-20 overflow-hidden font-sans">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* ── LEFT: The Diagram ── */}
          <div className="flex flex-col items-center flex-shrink-0 w-full max-w-[480px]">
            <div className="border-neon rounded-full p-1">
            <PillStrip items={topItems} delay={100} />
            </div>
            {/* Arrows Down */}
            <div className="flex gap-10 my-2">
              {[0, 0.2, 0.4].map((d, i) => (
                <div key={i} className="chevron" style={{ animationDelay: `${d}s` }}>
                  <svg width="40" height="24" viewBox="0 0 44 28" fill="none">
                    <path d="M6 4 L22 22 L38 4" stroke="#d2648c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity={0.6 - i * 0.15}/>
                  </svg>
                </div>
              ))}
            </div>

            {/* Cell Container: Floating */}
            <div className="relative flex items-center justify-center animate-[subtleFloat_5s_ease-in-out_infinite] w-[380px] h-[350px] rounded-[60px] bg-white/40 backdrop-blur-xl shadow-2xl border border-white/60 overflow-hidden">
              
              {/* ── Rotating Background Image ── */}
              <div className="absolute inset-0 flex items-center justify-center animate-slow-spin">
                <img 
                  src="/platform/rotate-cell.png" 
                  alt="Rotating data visualization"
                  className="w-[280px] h-[280px] object-contain opacity-40" // Adjust size/opacity to balance
                />
              </div>
            </div>

            {/* Arrows Down */}
            <div className="flex gap-10 my-2">
              {[0, 0.2, 0.4].map((d, i) => (
                <div key={i} className="chevron" style={{ animationDelay: `${d}s` }}>
                  <svg width="40" height="24" viewBox="0 0 44 28" fill="none">
                    <path d="M6 4 L22 22 L38 4" stroke="#d2648c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity={0.6 - i * 0.15}/>
                  </svg>
                </div>
              ))}
            </div>
            <div className="border-neon rounded-full p-1"> 
                <PillStrip items={bottomItems} delay={300} />
            </div> 
          </div>

          {/* ── RIGHT: Text Content (Balanced) ── */}
          <div className="flex flex-col gap-6 w-full max-w-[420px] text-center md:text-left animate-[fadeSlideIn_0.8s_ease_both] delay-500">
            <h2 className="text-[44px] md:text-[44px] leading-tight">
              A Mechanistic Engine <br />
              <span className="font-italic">for Marine Biology</span>
            </h2>

            <p className="text-[16px] font-medium leading-relaxed !text-[#033E8A] text-justify">
              ALKEMYST's Digital Cell ingests molecular, metabolic, and environmental inputs to construct a mechanistic representation of cellular behavior. These inputs are translated into predictive outputs spanning growth, efficiency, and phenotypic performance, enabling in silico optimization ahead of real-world trials.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}