// "use client";
// import { useRouter } from "next/navigation"
// import React from "react";

// const CTA: React.FC = () => {
//   const router = useRouter()
//   return (
//     <section className="relative py-20 md:py-28 px-6 md:px-20 z-10">
//       <div className="md:max-w-5xl mx-auto bg-[#E5F7F9] rounded-[30px] md:rounded-[40px] py-14 md:py-20 px-6 md:px-12 text-center border-neon-cta">
        
//         {/* Heading */}
//         <h2 className="text-[30px] md:text-5xl md:leading-tight mb-10 md:mb-12">
//           Ready to build the future
//           <br className="hidden md:block" />
//           <span className="inline md:hidden"> </span>
//           <span className="font-italic">
//             of the Blue Economy
//           </span>
//         </h2>

//         {/* Buttons */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full">
          
//           {/* Partner Button */}
//           <button
//             className="lg:w-[285.64px] h-[66px] fish w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full text-[12px] font-semibold tracking-widest uppercase hover:bg-slate-300 transition-all"
//             onClick={() => router.push("/partner")}
//           >
//             Partner With Us
//           </button>

//           {/* Consultation Button */}
//           <button
//             className="lg:w-[285.64px] h-[66px] notfish w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full text-[12px] font-semibold tracking-widest uppercase hover:bg-slate-800 transition-all"
//             onClick={() => router.push("/consultation")}
//           >
//             Request a Consultation
//           </button>

//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 40s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default CTA;

"use client";
import { useRouter } from "next/navigation";
import React from "react";

const bubbles = Array.from({ length: 10 });

const CTA: React.FC = () => {
  const router = useRouter();

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-20 z-10">
      <div className="relative md:max-w-5xl mx-auto bg-[#E5F7F9] rounded-[30px] md:rounded-[40px] py-14 md:py-20 px-6 md:px-12 text-center border-neon-cta overflow-hidden">

        {/* Bubbles */}
        <div className="absolute inset-0 pointer-events-none">
          {bubbles.map((_, i) => (
            <span
              key={i}
              className="bubble"
              style={{
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 12}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Heading */}
        <h2 className="relative text-[30px] md:text-5xl md:leading-tight mb-10 md:mb-12">
          Ready to build the future
          <br className="hidden md:block" />
          <span className="inline md:hidden"> </span>
          <span className="font-italic">of the Blue Economy</span>
        </h2>

        {/* Buttons */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 w-full">
          
          <button
            className="lg:w-[285.64px] h-[66px] fish w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full text-[12px] font-semibold tracking-widest uppercase hover:bg-slate-300 transition-all"
            onClick={() => router.push("/partner")}
          >
            Partner With Us
          </button>

          <button
            className="lg:w-[285.64px] h-[66px] notfish w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-full text-[12px] font-semibold tracking-widest uppercase hover:bg-slate-800 transition-all"
            onClick={() => router.push("/consultation")}
          >
            Request a Consultation
          </button>

        </div>
      </div>

      <style jsx>{`
        .bubble {
          position: absolute;
          bottom: -40px;
          width: 10px;
          height: 10px;
          background: rgba(17, 138, 213, 0.6);
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(239, 129, 217, 0.5);
          animation: rise linear infinite;
        }

        .bubble:nth-child(3n) {
          width: 6px;
          height: 6px;
          opacity: 0.6;
        }

        .bubble:nth-child(4n) {
          width: 14px;
          height: 14px;
          opacity: 0.4;
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 0;
          }

          20% {
            opacity: 0.6;
          }

          100% {
            transform: translateY(-500px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;