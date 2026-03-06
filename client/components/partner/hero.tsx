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
      relative 
      py-28 sm:py-36 md:py-48
      px-6 sm:px-10 md:px-16 lg:px-20
      z-10 
      flex justify-center items-center 
      min-h-screen 
      overflow-hidden
      bg-[radial-gradient(circle_at_center,_#ffffff_0%,_#f0f9ff_100%)]
      "
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
                opacity: 0.15,
                width: 1,
                triangles: {
                  enable: true,
                  opacity: 0.04,
                },
              },
              move: {
                enable: true,
                speed: 0.6,
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
                  distance: 200,
                  size: 8,
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

      {/* Centered Text */}
      <div className="relative z-10 text-center max-w-5xl">
        
        <h1
          className="
          sm:text-3xl md:text-5xl lg:text-[64px] 
          leading-[70px]
          font-light
          text-[#0A192F]
          "
        >
          Let’s Build the <span className="font-italic">Future of the</span>
          <br className="hidden sm:block" />
          <span className="font-italic"> Ocean</span> Economy Together
        </h1>

        <p
          className="
          mt-6 sm:mt-8 md:mt-10
          max-w-md sm:max-w-2xl
          mx-auto
 [         text-sm sm:text-base lg:text-[18px]
          leading-[28px]
          md:px-0 px-8
          "
        >
          We partner with businesses across food, wellness,
          and biotech to co-create solutions that are sustainable,
          ethical, and commercially scalable.
        </p>

      </div>
    </section>
  );
};

export default HeroOverlay;
