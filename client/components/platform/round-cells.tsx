"use client";

import React, { useEffect, useRef, RefObject } from "react";

// Types for the data items
interface DataItem {
  label: string;
  indent: number;
}

const dataTypes: DataItem[] = [
  { label: "Omics", indent: 60 },
  { label: "Metabolism", indent: 40 },
  { label: "Feed Formulations", indent: 24 },
  { label: "Product Summary Data", indent: 14 },
  { label: "Production Process Data", indent: 18 },
  { label: "Product Nutrition", indent: 34 },
  { label: "Environmental Conditions", indent: 56 },
];

const seafoodSolutions: DataItem[] = [
  { label: "Faster Growth", indent: 60 },
  { label: "Lower FCR", indent: 38 },
  { label: "Higher Biomass Yield", indent: 20 },
  { label: "Improved Feed Utilization", indent: 10 },
  { label: "Biomarkers for growth, flavour, disease resistance", indent: 22 },
  { label: "Biomarkers for growth, flavour, disease resistance", indent: 46 },
];

const DotIcon: React.FC = () => (
  <div style={{
    width: 22, height: 22, borderRadius: "50%",
    border: "1.5px solid #29b8d4",
    background: "rgba(41,184,212,0.07)",
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  }}>
    <div style={{
      width: 7, height: 7, borderRadius: "50%",
      border: "1.2px solid #29b8d4",
    }}/>
  </div>
);

function CellCanvas() {
  // Correctly typing the refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;

    const particles = Array.from({ length: 130 }, () => {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 58;
      return {
        bx: Math.cos(a) * r, by: Math.sin(a) * r,
        size: Math.random() * 1.8 + 0.3,
        op: Math.random() * 0.55 + 0.2,
        speed: (Math.random() - 0.5) * 0.009,
        phase: Math.random() * Math.PI * 2,
      };
    });

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Rings
      ([[115, 0.1], [88, 0.16], [68, 0.28]] as const).forEach(([r, op]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(41,184,212,${op})`;
        ctx.lineWidth = r === 68 ? 1.5 : 1;
        ctx.stroke();
      });

      // Glow
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 66);
      g.addColorStop(0, "rgba(41,200,220,0.09)");
      g.addColorStop(1, "rgba(41,184,212,0)");
      ctx.beginPath(); ctx.arc(cx, cy, 66, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();

      // Particles
      particles.forEach(p => {
        p.phase += p.speed;
        const w = Math.sin(p.phase) * 20;
        ctx.beginPath();
        ctx.arc(cx + p.bx + w, cy + p.by + w * 0.5, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(41,190,215,${p.op})`; ctx.fill();
      });

      // Orbiting dot 1 — outer ring (115)
      const a1 = t * 0.38;
      const o1x = cx + Math.cos(a1) * 115, o1y = cy + Math.sin(a1) * 115;
      for (let i = 8; i >= 0; i--) {
        const ta = a1 - i * 0.07;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(ta)*115, cy + Math.sin(ta)*115, 3.2 - i*0.3, 0, Math.PI*2);
        ctx.fillStyle = `rgba(30,160,210,${0.25-i*0.025})`; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(o1x, o1y, 5.5, 0, Math.PI*2);
      const g1 = ctx.createRadialGradient(o1x,o1y,0,o1x,o1y,5.5);
      g1.addColorStop(0,"rgb(100, 211, 248)"); g1.addColorStop(1,"rgba(20,140,200,0.85)");
      ctx.fillStyle = g1; ctx.shadowBlur=14; ctx.shadowColor="rgba(41,184,212,1)";
      ctx.fill(); ctx.shadowBlur=0;

      // Orbiting dot 2 — middle ring (88)
      const a2 = -t * 0.55 + Math.PI * 0.7;
      const o2x = cx + Math.cos(a2)*88, o2y = cy + Math.sin(a2)*88;
      for (let i = 6; i >= 0; i--) {
        const ta = a2 - i*0.09;
        ctx.beginPath();
        ctx.arc(cx+Math.cos(ta)*88, cy+Math.sin(ta)*88, 2.6-i*0.35, 0, Math.PI*2);
        ctx.fillStyle=`rgba(30,200,185,${0.2-i*0.026})`; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(o2x,o2y,4.5,0,Math.PI*2);
      const g2=ctx.createRadialGradient(o2x,o2y,0,o2x,o2y,4.5);
      g2.addColorStop(0,"rgba(100,245,225,1)"); g2.addColorStop(1,"rgba(20,180,175,0.85)");
      ctx.fillStyle=g2; ctx.shadowBlur=12; ctx.shadowColor="rgba(41,212,200,1)";
      ctx.fill(); ctx.shadowBlur=0;

      t += 0.012;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animRef.current !== null) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} width={260} height={260} style={{ display:"block" }} />;
}

export default function MarineComputational() {
  return (
    <section className="z-10 max-w-5xl mx-auto py-20 px-6 text-center">
      <h2 className="text-[32px] md:text-5xl leading-tight mb-10">
        A Computational Representation <br />
        <span className="font-italic">of Living Marine Cells{""}</span> 
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 280px 1fr", gap: "50px", alignItems: "center" }}>

        {/* LEFT column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="text-[32px] font-medium md:text-2xl leading-tight mb-6">
            Data Types
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            {dataTypes.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", justifyContent: "flex-end",
                gap: "10px",
                paddingRight: `${item.indent}px`,
              }}>
                <span style={{
                  color: "#4a6070", fontSize: "11.5px",
                  textAlign: "right", lineHeight: 1.3,
                  whiteSpace: "nowrap",
                }}>
                  {item.label}
                </span>
                <DotIcon />
              </div>
            ))}
          </div>
        </div>

        {/* CENTER */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CellCanvas />
        </div>

        {/* RIGHT column */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3 className="text-[32px] font-medium md:text-2xl leading-tight mb-6 -mt-2">
            Seafood Solutions
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {seafoodSolutions.map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center",
                gap: "10px",
                paddingLeft: `${item.indent}px`,
              }}>
                <DotIcon />
                <span style={{
                  color: "#4a6070", fontSize: "11.5px",
                  lineHeight: 1.3,
                }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-[16px] font-medium leading-relaxed !text-[#033E8A] text-center py-16 px-28">
        ALKEMYST™ is an AI foundation model designed to understand marine biology at the cellular
        level. By powering Digital Marine Cells, the platform captures complex biological behavior
        in silico, enabling prediction, optimization, and extension across species
      </p>
    </section>
  );
}