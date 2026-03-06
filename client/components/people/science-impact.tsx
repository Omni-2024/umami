import React from "react";

const ScienceImpactGrid = () => {
  return (
    <section className="w-full bg-white z-20">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Top Left: Text Content */}
        <div className="flex items-center justify-center 
                        p-8 sm:p-10 lg:p-16 lg:p-24 
                        bg-white 
                        md:aspect-square">
          <div className="lg:ml-24 lg:w-[476px] max-w-md">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[48px] mb-10 leading-tight">
              Science to <span className="font-italic">Impact</span>
            </h2>

            <div className="space-y-6 md:space-y-8 
                            leading-[33px] 
                            text-[14px] sm:text-[17px] lg:text-[18px] 
                            text-justify                            ">
              <p className="!text-[#033E8A]">
                Our team spans biotechnology, AI, marine science, and
                product development united by a shared belief that
                meaningful innovation happens when science can be
                translated into real-world applications.
              </p>

              <p className="!text-[#033E8A]">
                We are a small, global team that values thoughtful debate,
                intellectual honesty, and getting the details right. We move
                fast when the data supports it, slow down when the
                science demands it, and never lose sight of why the work
                matters.
              </p>
            </div>
          </div>
        </div>

        {/* Top Right Image */}
        <div className="relative h-[320px] sm:h-[420px] md:h-auto md:aspect-square overflow-hidden z-20">
          <img
            src="/people/impact1.jpg"
            alt="Scientists in lab having a video call"
            className="absolute inset-0 w-full h-full object-cover 
                       transition-transform duration-700 
                       hover:scale-105"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="relative h-[320px] sm:h-[420px] md:h-auto md:aspect-square 
                        overflow-hidden 
                        order-last md:order-none">
          <img
            src="/people/impact2.jpg"
            alt="Scientist looking through microscope"
            className="absolute inset-0 w-full h-full object-cover 
                       transition-transform duration-700 
                       hover:scale-105"
          />
        </div>

        {/* Bottom Right Image */}
        <div className="relative h-[320px] sm:h-[420px] md:h-auto md:aspect-square overflow-hidden">
          <img
            src="/people/impact3.jpg"
            alt="Team meeting in a green office"
            className="absolute inset-0 w-full h-full object-cover 
                       transition-transform duration-700 
                       hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default ScienceImpactGrid;
