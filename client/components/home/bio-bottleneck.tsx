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
    <section className="relative py-10 md:py-18 px-6 md:px-20 bg-white z-20">
      <div className="md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT IMAGE (Fish comes FIRST on mobile automatically) */}
        <div className="order-1 md:order-none w-full flex justify-center md:justify-start">
          <Image
            src="/home/fish.PNG"
            alt="Marine network illustration"
            width={600}
            height={600}
            className="object-contain w-[85%] sm:w-[70%] md:w-auto"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-2 md:order-none flex flex-col gap-6 md:gap-8 text-left">

          <h2 className="text-[30px] md:text-[44px] leading-[54px]">
            Understanding the{" "}
            <span className="text-[#D4AF37] font-italic">
              Biological Bottleneck
            </span>
          </h2>

          <p className="text-[15px] md:text-[16px] !text-[#033E8A] font-medium leading-[24.2px] text-justify">
            Our proprietary ALKEMYST™ platform combines multi-omics, predictive
            modeling, and digital twins with advanced marine cell cultivation.
          </p>

          {/* ACCORDION */}
          <div className="flex flex-col gap-3 md:gap-4">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-[#FFFFFF] border-neon !rounded-3xl"
                    : "bg-[#E4FBFF] border-none backdrop-blur-0"
                }`}
              >
                <button
                  className="w-full px-4 py-3 text-left flex justify-between items-center text-[16px] md:text-[18px] hover:bg-white/70 transition"
                  onClick={() => handleAccordionClick(index)}
                >
                  <span className="ghost -mb-2">{item.title}</span>
                  <span className="text-xl">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-4 text-[14px] overflow-hidden"
                    >
                      <div className="pb-3 !text-[#033E8A] text-justify">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <button className="lg:h-[66px] mt-4 fish px-8 py-4 rounded-full text-[13px] font-bold tracking-wide hover:bg-[#1a2e4d] transition-colors">
            EXPLORE THE ALKEMYST™ PLATFORM
          </button>
        </div>
      </div>
    </section>
  );
};

export default BiologicalBottleneckSection;