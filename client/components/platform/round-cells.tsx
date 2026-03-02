"use client";

import React, { useEffect, useRef } from "react";

// --- Types ---
interface DataItem {
  label: string;
}

const dataTypes: DataItem[] = [
  { label: "Omics" },
  { label: "Metabolism" },
  { label: "Feed Formulations" },
  { label: "Product Summary Data" },
  { label: "Production Process Data" },
  { label: "Product Nutrition" },
  { label: "Environmental Conditions" },
];

const seafoodSolutions: DataItem[] = [
  { label: "Faster Growth" },
  { label: "Lower FCR" },
  { label: "Biomarkers for growth, flavour" },
  { label: "Improved Feed Utilization" },
  { label: "Biomarkers for disease resistance" },
  { label: "Higher Biomass Yield"  },
  { label: "Faster Growth" },
];

const DotIcon: React.FC = () => (
  <div
    style={{
      width: 22,
      height: 22,
      borderRadius: "50%",
      border: "1.5px solid #29b8d4",
      background: "rgba(41,184,212,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <div
      style={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        backgroundColor: "#29b8d4",
      }}
    />
  </div>
);

function CellCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;

    const particles = Array.from({ length: 120 }, () => ({
      bx: (Math.random() - 0.5) * 110,
      by: (Math.random() - 0.5) * 110,
      size: Math.random() * 1.8 + 0.3,
      op: Math.random() * 0.5 + 0.2,
      speed: (Math.random() - 0.5) * 0.008,
      phase: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      [[115, 0.1], [88, 0.16], [68, 0.28]].forEach(([r, op]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(41,184,212,${op})`;
        ctx.stroke();
      });

      particles.forEach((p) => {
        p.phase += p.speed;
        const drift = Math.sin(p.phase) * 15;
        ctx.beginPath();
        ctx.arc(cx + p.bx + drift, cy + p.by + drift * 0.5, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41,190,215,${p.op})`;
        ctx.fill();
      });

      const drawOrbit = (r: number, s: number, sz: number, c: string) => {
        const x = cx + Math.cos(t * s) * r;
        const y = cy + Math.sin(t * s) * r;
        ctx.beginPath();
        ctx.arc(x, y, sz, 0, Math.PI * 2);
        ctx.fillStyle = c;
        ctx.fill();
      };
      drawOrbit(115, 0.4, 5.5, "#64d3f8");
      drawOrbit(88, -0.6, 4.5, "#64f5e1");

      t += 0.01;
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  return <canvas ref={canvasRef} width={260} height={260} />;
}

export default function MarineComputational() {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-24 px-6 overflow-hidden bg-white">
      {/* HEADER */}
      <div className="text-left md:text-center">
        <h2 className="text-[30px] md:text-[44px] leading-tight md:leading-tight">
          A Computational Representation <br />
          <span className="font-italic">of Living Marine Cells</span>
        </h2>
      </div>

      <div className="relative flex justify-center items-center min-h-[600px] -mt-28 md:-mt-20">
        {/* CENTER CELL */}
        <div className="relative z-10 scale-110">
          <CellCanvas />
        </div>

        {/* DESKTOP CURVED LABELS */}
        <div className="hidden md:block absolute inset-0 pointer-events-none">
          
          {/* LEFT SIDE: Text ends at the Dot */}
          {dataTypes.map((item, i) => {
            const angle = 145 + (i * 70) / (dataTypes.length - 1);
            return (
              <div
                key={`left-${i}`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "450px",
                  // Rotate from center, push out by 240px
                  transform: `rotate(${angle}deg) translateX(240px) rotate(-${angle}deg)`,
                  transformOrigin: "0 0",
                  marginTop: "-11px",
                  marginLeft: "-450px", // Pushes the container to the left of the center point
                }}
                className="flex items-center justify-end gap-4"
              >
                <span className="text-[13px] font-medium text-[#4a6070] text-right whitespace-nowrap">
                  {item.label}
                </span>
                <DotIcon />
              </div>
            );
          })}

          {/* RIGHT SIDE: Dot starts at radius, text flows right */}
          {seafoodSolutions.map((item, i) => {
            const angle = 325 + (i * 70) / (dataTypes.length - 1);
  return (
    <div
      key={`left-${i}`}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "450px",
        // Rotate from center, push out by 240px
        transform: `rotate(${angle}deg) translateX(240px) rotate(-${angle}deg)`,
        transformOrigin: "0 0",
        marginTop: "-11px",
        /* FIX: Removed the negative marginLeft. 
           The container now starts at the 240px radius point and flows right.
        */
        marginLeft: "0px", 
      }}
      className="flex items-center justify-start gap-4"
    >
      {/* Icon first, then Text */}
      <DotIcon />
      <span className="text-[13px] font-medium text-[#4a6070] text-left whitespace-nowrap">
        {item.label}
      </span>
    </div>
  );
          })}
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-justify md:text-center -mt-26 md:-mt-20">
        <p className="text-lg md:text-[16px] font-regular !text-[#033E8A] leading-relaxed">
ALKEMYST™ is an AI foundation model designed to understand marine biology at the cellular level. By powering Digital Marine Cells, the platform captures complex biological behavior in silico, enabling prediction, optimization, and extension across species        </p>
      </div>
    </section>
  );
}