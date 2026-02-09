"use client";
import React from "react";

const PartnerMarquee: React.FC = () => {
  const partners = [
    { name: "LatchBio", src: "/home/partners/image1.png" },
    { name: "AWS", src: "/home/partners/image2.png" },
    { name: "Databricks", src: "/home/partners/image3.png" },
    { name: "NORD University", src: "/home/partners/image4.png" },
  ];

  return (
    <section className="relative py-28 bg-white z-10">
      {/* Heading */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-[44px] md:text-5xl">
          Our Trusted <br />
          <span className="font-italic">Partners</span>
        </h2>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative overflow-hidden">
        {/* Track */}
        <div className="flex w-max animate-marquee gap-32 items-center">
          {/* First set */}
          {partners.map((partner, index) => (
            <img
              key={`first-${index}`}
              src={partner.src}
              alt={partner.name}
              className="h-10 md:h-30 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}

          {/* Second set (duplicate) */}
          {partners.map((partner, index) => (
            <img
              key={`second-${index}`}
              src={partner.src}
              alt={partner.name}
              className="h-10 md:h-30 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
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
          animation: marquee 35s linear infinite;
        }

        /* Pause on hover */
        .relative:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnerMarquee;
