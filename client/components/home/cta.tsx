"use client";
import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="relative py-16 md:py-28 px-6 md:px-20 z-10">
      <div className="md:max-w-5xl mx-auto bg-[#E5F7F9] rounded-[30px] md:rounded-[40px] py-14 md:py-20 px-6 md:px-12 text-center border-neon-cta">
        
        {/* Heading */}
        <h2 className="text-[30px] md:text-5xl leading-tight mb-10 md:mb-12">
          Ready to build the future
          <br className="hidden md:block" />
          <span className="inline md:hidden"> </span>
          <span className="font-italic">
            of the Blue Economy
          </span>
        </h2>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full">
          <button className="fish w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full text-[11px] font-black tracking-widest uppercase hover:bg-slate-300 transition-all">
            Partner With Us
          </button>

          <button className="notfish w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full text-[11px] font-black tracking-widest uppercase hover:bg-slate-800 transition-all">
            Request a Consultation
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CTA;