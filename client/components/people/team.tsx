"use client"

import React, { useRef, useState } from "react";

const TeamSection = () => {
  const teamMembers = [
    { name: "Mihir Pershad", role: "Founder and CEO" },
    { name: "Lakshmi Mundkur, Ph.D", role: "Research & Development" },
    { name: "Rohan Thakur", role: "Commercial Head" },
    { name: "Ashwath Bendre", role: "Product & Strategy Manager" },
    { name: "Gayathri Mani", role: "Product & Strategy Manager" },
    { name: "Nina Honda/Strasky", role: "Product & Strategy Manager" },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: index * width,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % teamMembers.length;
    scrollToIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + teamMembers.length) % teamMembers.length;
    scrollToIndex(newIndex);
  };

  return (
    <section className="bg-[#f0f7ff] py-20 px-6">
      <div className="max-w-6xl mx-auto md:text-center">

        <span className="uppercase tracking-[6px] lg-text-[12px] text-[8px] font-bold !text-[#CD5A99] block mb-2 leading-tight">
          Human Intelligence
        </span>

        <h2 className="text-[30px] lg:text-[64px] mb-4 lg:mb-6">
          Our <span className="font-italic">Team</span>
        </h2>

        <p className="lg:max-w-[1100px] mx-auto text-[13px] md:text-base md:leading-loose mb-16 md:mb-20 md:text-center text-justify">
          Our team spans biotechnology, AI, marine science, and product development  united by a shared belief that meaningful innovation 
          happens when science can be translated into real-world applications.  We are a small, global team that values thoughtful debate, 
          intellectual honesty, and getting the details right. We move fast when the data supports it, slow down when the science demands it, 
          and never lose sight of why the work matters. 
        </p>

        {/* ================= MOBILE CAROUSEL WITH ARROWS ================= */}
        <div className="sm:hidden relative">
          <div 
            ref={carouselRef}
            className="overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 scrollbar-hide scroll-smooth"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-full flex flex-col items-center"
              >
                <div className="w-48 h-48 rounded-full border border-blue-200 bg-white flex items-center justify-center mb-6 border-neon">
                  <svg
                    className="w-10 h-10 text-blue-900 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-blue-800 font-medium">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-blue-50 transition"
          >
            <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-blue-50 transition"
          >
            <svg className="w-5 h-5 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {teamMembers.map((_, idx) => (
              <span
                key={idx}
                onClick={() => scrollToIndex(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition ${
                  idx === activeIndex ? "bg-blue-800" : "bg-blue-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-48 h-48 rounded-full border-neon bg-white flex items-center justify-center mb-6 transition-all 
              duration-300 group-hover:shadow-xl group-hover:border-blue-400">
                <svg
                  className="w-10 h-10 text-blue-900 opacity-60"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <h3 className="text-[16px] font-bold mb-1">{member.name}</h3>
              <p className="text-[16px] !text-[#033E8A] font-regular">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
