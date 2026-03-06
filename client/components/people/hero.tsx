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
      className="
        relative flex justify-center items-center 
        min-h-[85vh] md:min-h-screen 
        overflow-hidden
        md:bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f0f9ff_100%)]
      "
    >

      {/* 1. Background Image */}
      <div
        className="
          hidden md:block
          absolute inset-y-0 
          left-0 md:left-20 
          w-full
          z-0 
          pointer-events-none 
          opacity-40 md:opacity-60
          flex items-center justify-center md:justify-start
        "
      >
        <img
          src="/people/hero.png"
          alt="Scientific Background"
          className="
            h-[100%] md:h-[100%] 
            w-auto 
            object-contain 
            md:transform lg:translate-x-20
          "
        />
      </div>

      {/* 2. Particles Layer */}
      <div className="absolute inset-0 z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="w-full h-full"
          options={{
  fullScreen: { enable: false },
  fpsLimit: 120,
  particles: {
    number: {
      value: 60, // desktop default
      density: { enable: true, area: 1000 },
    },
    color: { value: ["#0ea5e9", "#7dd3fc", "#d65a8a"] },
    shape: { type: "circle" },
    opacity: {
      value: { min: 0.1, max: 0.4 },
      animation: { enable: true, speed: 1, sync: false },
    },
    size: {
      value: { min: 1, max: 3 }, // desktop default
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

  responsive: [
    {
      maxWidth: 768,
      options: {
        particles: {
          number: {
            value: 110, // 🔥 more particles on mobile
          },
          size: {
            value: { min: 2, max: 6 }, // 🔥 bigger particles
          },
          move: {
            speed: 0.8, // slightly faster for energy
          },
          links: {
            distance: 150,
            opacity: 0.15,
          },
        },
      },
    },
  ],

  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" },
    },
    modes: {
      bubble: {
        distance: 200,
        size: 8, // slightly larger bubble on mobile
        duration: 2,
        opacity: 0.6,
        color: "#0284c7",
      },
    },
  },

  detectRetina: true,
}}

        />
      </div>

      {/* 3. Content Layer */}
      <div
        className="
          relative z-20 
          text-center 
          max-w-5xl 
          px-6 
          md:px-6
        "
      >
        <h1
          className="
            text-[30px] sm:text-[48px] lg:text-[64px]
            leading-snug lg:leading-[64px]
          "
        >
          Blending Scientific <span className="font-italic">Rigor</span>
          <br />
          <span className="font-italic">with </span>
          <span>Commercial Foresight</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroOverlay;
