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
      className="relative flex justify-center items-center min-h-screen overflow-hidden 
      /* Clean Science Gradient */
      bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f0f9ff_100%)]"
    >
      
      {/* 1. Background Image (The Tubes/Flasks) 
          Positioned absolute-left so it stays "behind" but visible on the side
      */}
      <div className="absolute inset-y-0 left-20 w-full z-0 pointer-events-none opacity-60 flex items-center">
        <img 
          src="/people/hero.png" 
          alt="Scientific Background"
          className="h-[100%] w-auto object-contain transform -translate-x-10"
        />
      </div>

      {/* 2. Particles Layer (Middle Layer) */}
      <div className="absolute inset-0 z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="w-full h-full"
          options={{
            fullScreen: { enable: false },
            fpsLimit: 120,
            particles: {
              number: { value: 60, density: { enable: true, area: 1000 } },
              color: { value: ["#0ea5e9", "#7dd3fc", "#d65a8a"] },
              shape: { type: "circle" },
              opacity: {
                value: { min: 0.1, max: 0.4 },
                animation: { enable: true, speed: 1, sync: false },
              },
              size: {
                value: { min: 1, max: 3 },
                animation: { enable: true, speed: 2, sync: false },
              },
              links: {
                enable: true,
                distance: 180,
                color: "#0ea5e9",
                opacity: 0.1,
                width: 1,
                triangles: {
                  enable: true,
                  opacity: 0.03,
                },
              },
              move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                outModes: { default: "out" },
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "bubble" },
              },
              modes: {
                bubble: {
                  distance: 250,
                  size: 6,
                  duration: 2,
                  opacity: 0.5,
                  color: "#0284c7"
                },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* 3. Content Layer (Top Layer) */}
      <div className="relative z-20 text-center max-w-5xl px-6">
        <h1 className="text-[42px] sm:text-[64px] leading-tight">
          Blending Scientific <span className="font-italic">Rigor</span>
          <br />
          <span className="font-italic">with{""}</span> 
          <span>Commercial Foresight</span>
        </h1>
        
              </div>

    </section>
  );
};

export default HeroOverlay;