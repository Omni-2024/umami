import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    { name: "Mihir Pershad", role: "Founder and CEO" },
    { name: "Lakshmi Mundkur, Ph.D", role: "Research & Development" },
    { name: "Rohan Thakur", role: "Commercial Head" },
    { name: "Ashwath Bendre", role: "Product & Strategy Manager" },
    { name: "Gayathri Mani", role: "Product & Strategy Manager" },
    { name: "Nina Honda/Strasky", role: "Product & Strategy Manager" },
  ];

  return (
    
      <section className="bg-[#f0f7ff] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#CD5A99] block mb-4">
            Human Intelligence
          </span>
          <h2 className="text-[42px] sm:text-[64px] mb-6">
            Our <span className="font-italic">Team</span>
          </h2>
          
          <p className="max-w-4xl mx-auto text-sm md:text-base leading-loose mb-20 opacity-80">
            Our team spans biotechnology, AI, marine science, and product development united by a shared belief 
            that meaningful innovation happens when science can be translated into real-world applications. 
            We are a small, global team that values thoughtful debate, intellectual honesty, and getting the details right.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                {/* Circle Placeholder */}
                <div className="w-48 h-48 rounded-full border border-blue-200 bg-white flex items-center justify-center mb-6 transition-all duration-300 group-hover:shadow-xl group-hover:border-blue-400">
                  <svg 
                    className="w-10 h-10 text-blue-900 opacity-60" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-blue-800 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default TeamSection;