import React from 'react';

const ScienceImpactGrid = () => {
  return (
    <section className="w-full bg-white">
      {/* Removed min-h-screen to let content define height naturally.
         The grid stays 2 columns on desktop and 1 on mobile.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Top Left: Text Content */}
        {/* aspect-square ensures this box is a perfect square on desktop */}
        <div className="flex items-center justify-center p-10 md:p-16 lg:p-24 bg-white aspect-square">
          <div className="max-w-md">
            <h2 className="text-[42px] sm:text-[48px] mb-6">
              Science to <span className="font-italic">Impact</span>
            </h2>
            
            <div className="space-y-8 leading-relaxed text-[18px]text-justify">
              <p>
                Our team spans biotechnology, AI, marine science, and
                product development united by a shared belief that
                meaningful innovation happens when science can be
                translated into real-world applications.
              </p>
              <p>
                We are a small, global team that values thoughtful debate,
                intellectual honesty, and getting the details right. We move
                fast when the data supports it, slow down when the
                science demands it, and never lose sight of why the work
                matters.
              </p>
            </div>
          </div>
        </div>

        {/* Top Right: Lab Video Call Image */}
        <div className="relative aspect-square overflow-hidden">
          <img 
            src="/people/impact1.jpg" 
            alt="Scientists in lab having a video call"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Bottom Left: Microscope Image */}
        {/* md:order-none keeps it bottom-left on desktop, 
            order-last pushes it to the bottom of the stack on mobile */}
        <div className="relative aspect-square overflow-hidden order-last md:order-none">
          <img 
            src="/people/impact2.jpg" 
            alt="Scientist looking through microscope"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Bottom Right: Office Meeting Image */}
        <div className="relative aspect-square overflow-hidden">
          <img 
            src="/people/impact3.jpg" 
            alt="Team meeting in a green office"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
};

export default ScienceImpactGrid;