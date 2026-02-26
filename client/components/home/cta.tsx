"use client";
import React from "react";

const CTA: React.FC = () => {
  return (
    <section className="relative py-28 px-20 bg-white z-10">
      <div className="md:max-w-5xl mx-auto bg-[#EBF5FF] rounded-[40px] py-20 px-12 text-center">
        <h2 className="text-[44px] md:text-5xl leading-tight mb-12">
          Ready to build the future
          <br />
          <span className="font-italic">
            of the Blue Economy
          </span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="grayfish px-10 py-5 rounded-full text-[11px] font-black tracking-widest uppercase hover:bg-slate-300 transition-all">
            Partner With Us
          </button>
          <button className="notfish px-10 py-5 rounded-full text-[11px] font-black tracking-widest uppercase hover:bg-slate-800 transition-all">
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
