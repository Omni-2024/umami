'use client';
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const BiologicalBottleneckSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const accordionData = [
    {
      title: "AI-powered research",
      content:
        "Our proprietary ALKEMYST™ platform combines multi-omics, predictive modeling, and digital twins with advanced marine cell cultivation.",
    },
    {
      title: "Marine cell platforms",
      content:
        "Advanced marine cell platforms enable scalable production of high-quality compounds from sustainable sources.",
    },
    {
      title: "Versatility",
      content:
        "Flexible solutions for food, health, and nutrition sectors, integrating marine biology insights with AI-driven approaches.",
    },
  ];

  const handleAccordionClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative py-28 px-20 bg-white z-10">
      <div className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* LEFT IMAGE */}
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src="/home/fish.PNG"
            alt="Marine network illustration"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-8">
          <h2 className="text-[44px] md:text-[44px] leading-tight">
            Understanding the{" "}
            <span className="text-[#D4AF37] font-italic">
              Biological Bottleneck
            </span>
          </h2>

          <p className="text-[16px] opacity-50 font-medium leading-relaxed">
            Our proprietary ALKEMYST™ platform combines multi-omics, predictive
            modeling, and digital twins with advanced marine cell cultivation.
          </p>

          {/* ACCORDION */}
          <div className="flex flex-col gap-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#FFFFFF] border border-[#9898A8]"
                    : "bg-[#F0F0F0] border-none backdrop-blur-0"
                }`}
              >
                <button
                  className="w-full px-4 py-3 text-left flex justify-between items-center text-[18px] hover:bg-white/70 transition"
                  onClick={() => handleAccordionClick(index)}
                >
                  {/* Only text gets ghost class */}
                  <span className="ghost">{item.title}</span>
                  <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
                </button>

                {/* Smooth animated content */}
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-4 text-[14px] text-gray-700 overflow-hidden"
                    >
                      <div className="py-3">{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <button className="mt-6 notfish px-8 py-4 rounded-full text-[13px] font-bold tracking-wide hover:bg-[#1a2e4d] transition-colors">
            EXPLORE THE ALKEMYST™ PLATFORM
          </button>
        </div>
      </div>
    </section>
  );
};

export default BiologicalBottleneckSection;
