"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const HeroOverlay: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section 
      className="relative py-48 px-20 z-10 flex justify-center items-center min-h-screen overflow-hidden 
      /* Clean Science Gradient: White to very faint Blue-Grey */
      bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f0f9ff_100%)]"
    >
      
      {/* Particles Layer */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            particles: {
              number: { value: 70, density: { enable: true, area: 1000 } },
              // High-tech blue tones that pop against white
              color: { value: ["#0ea5e9", "#7dd3fc", "#53f4d7"] },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.2, max: 0.5 },
                animation: { enable: true, speed: 1, sync: false },
              },
              size: {
                value: { min: 1, max: 4 },
                animation: { enable: true, speed: 2, sync: false },
              },
              links: {
                enable: true,
                distance: 180,
                color: "#0ea5e9",
                opacity: 0.15, // Keep it light and airy
                width: 1,
                triangles: {
                  enable: true,
                  opacity: 0.04, // "Molecular lattice" look
                },
              },
              move: {
                enable: true,
                speed: 0.6, // Very gentle, clinical movement
                direction: "none",
                outModes: { default: "out" },
                attract: { enable: true, rotateX: 600, rotateY: 1200 },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "bubble" },
              },
              modes: {
                bubble: {
                  distance: 250,
                  size: 8,
                  duration: 2,
                  opacity: 0.6,
                  color: "#0284c7" // Darker blue on hover for "focus"
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Centered Text - Adjusted for light background visibility */}
      <div className="relative z-10 text-center max-w-5xl">
        <h1 className="text-[42px] sm:text-[64px]">
          Let’s Build the <span className="font-italic">Future of the</span>
          <br />
          <span className="font-italic">Ocean</span> Economy Together
        </h1>

        <p className="mt-10 max-w-2xl mx-auto text-[18px] opacity-50 font-medium leading-relaxed">
          We partner with businesses across food, wellness,
          and biotech to co-create solutions that are sustainable, ethical, and commercially scalable.
        </p>
        
        {/* Subtle Sci-Fi Accent: A clean scanning line */}
        <div className="mt-12 h-[2px] w-40 bg-gradient-to-r from-transparent via-sky-400 to-transparent mx-auto opacity-40" />
      </div>

    </section>
  );
};

export default HeroOverlay;