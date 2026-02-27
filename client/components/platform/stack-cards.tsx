"use client";

import { useState } from "react";

const layers = [
  { label: "OMICS | GENOMICS", size: "250GB", color: "rgba(142, 240, 248, 0.8)", shadow: "rgba(100, 200, 220, 0.4)" },
  { label: "OMICS | TRANSCRIPTOMICS", size: "2500GB", color: "rgba(68, 221, 212, 0.75)", shadow: "rgba(60, 180, 170, 0.4)" },
  { label: "OMICS | PROSCIPTOMICS", size: "2500GB", color: "rgba(46, 200, 184, 0.7)", shadow: "rgba(40, 160, 150, 0.4)" },
  { label: "OMICS | PROTEOMICS", size: "500GB", color: "rgba(32, 184, 152, 0.65)", shadow: "rgba(30, 140, 120, 0.4)" },
  { label: "DAK | PHENOMICS", size: "600GB", color: "rgba(56, 136, 216, 0.6)", shadow: "rgba(50, 110, 180, 0.4)" },
  { label: "OMICS | REAL WORLD FARM DATA", size: "1000+GB", color: "rgba(68, 85, 221, 0.55)", shadow: "rgba(60, 70, 180, 0.4)" },
  { label: "OMICS | PHTEOMICS", size: "250GB", color: "rgba(40, 56, 187, 0.5)", shadow: "rgba(30, 40, 140, 0.4)" },
  { label: "OMICS | TEENOMICS", size: "250GB", color: "rgba(24, 28, 58, 0.9)", shadow: "rgba(10, 10, 30, 0.5)" },
];

const FlaskIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M9 3h6M10 9h4M10 3v10.37a4 4 0 1 0 4 0V3M8.5 17.5h7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function IsometricCardStack() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative relative z-10 max-w-5xl mx-auto px-6 -mt-10 pt-0 pb-32 flex items-center justify-center p-8 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* --- LEFT SIDE: 3D STACKED CARDS --- */}
        <div 
          className="relative flex-1 flex items-center justify-center mt-70"
          style={{ 
            perspective: "3600px", 
            height: "600px",
            width: "100%" 
          }}
        >
          {/* Main 3D Container */}
          <div 
            style={{ 
              transformStyle: "preserve-3d",
              transform: "rotateX(55deg) rotateZ(-40deg) rotateY(0deg)",
              position: "relative"
            }}
          >
            {layers.map((layer, i) => {
              const isHov = hovered === i;
              const indexFromTop = i;
              const gapPerLayer = 65; // Adjust this to fix the gap distance

              return (
                <div
  key={i}
  onMouseEnter={() => setHovered(i)}
  onMouseLeave={() => setHovered(null)}
  className="absolute transition-all duration-500 ease-out cursor-pointer"
  style={{
    width: "350px",
    height: "200px",
    left: "-175px",
    top: "-90px",
    transform: `translateZ(${(layers.length - 1 - indexFromTop) * gapPerLayer}px) ${isHov ? 'translateZ(25px)' : ''}`,
    backgroundColor: layer.color,
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.4)",
    backdropFilter: "blur(6px)",
    boxShadow: `0 10px 30px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.3) inset`,
    display: "flex",
    alignItems: "flex-end",        // push content to bottom
    justifyContent: "center",      // center horizontally
    padding: "24px",
    zIndex: layers.length - i,
    textAlign: "center",
    position: "absolute"
  }}
>
  <div className="flex flex-col items-center">
    <h3 className="text-[11px] font-black tracking-widest text-white uppercase leading-tight drop-shadow-sm">
      {layer.label}
    </h3>
    <p className="text-[10px] font-bold text-white/70 mt-1">
      {layer.size}
    </p>
  </div>

  {/* Keep icon floating top-right */}
  <div className="absolute top-4 right-4">
    <FlaskIcon color="white" />
  </div>

  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
</div>
              );
            })}
          </div>
        </div>

        {/* --- RIGHT SIDE: TEXT CONTENT --- */}
        <div className="flex-1 max-w-xl text-left space-y-6 -mt-20">
          <h2 className="text-[44px] md:text-[44px] leading-tight">
            A Computational{" "}
            <span className="text-[#D4AF37] font-italic">
               Representation of Living
            </span>
            {" "}Marine Cells
          </h2>
          <p className="text-[16px] font-medium leading-relaxed !text-[#033E8A] text-justify">
            We combine deep expertise in marine cell biology with large-scale computation to 
            build the world’s first seafood foundation model. By mapping biological traits to underlying 
            metabolic pathways and screening millions of scenarios in silico, ALKEMYST identifies optimal 
            parameters for real-world performance before physical trials begin. 
          </p>
        </div>

      </div>
    </div>
  );
}