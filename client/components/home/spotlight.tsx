import React from 'react';

const SpotlightSection: React.FC = () => {
  const articles = [
    {
      title: "Future of Cellular Agriculture",
      description:
        "Exploring the frontier of lab-grown marine proteins and their impact on global food security.",
      image: "/home/spotlight.png"
    },
    {
      title: "AI-Driven Multi-Omics Platform",
      description:
        "How ALKEMYST™ is decoding the complex biology of the ocean to unlock new therapeutic compounds.",
      image: "/home/spotlight.png"
    },
    {
      title: "Strategic Industrial Scaling",
      description:
        "Partnering with global industry leaders to transition the blue economy to a biological future.",
      image: "/home/spotlight.png"
    }
  ];

  return (
    <section className="relative py-16 md:py-28 px-6 md:px-20 z-10 bg-[#E3F2FD]">
      <div className="md:max-w-5xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-0 mb-12 md:mb-16 text-left">
          <div>
            <p className="text-[8px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-2 md:mb-4 leading-tight">
              Knowledge Center
            </p>

            <h2 className="text-[30px] md:text-5xl leading-tight">
              Umami <span className="font-italic">Spotlight</span>
            </h2>
          </div>

          {/* Icon accents (unchanged desktop) */}
          <div className="hidden md:flex gap-4 opacity-30">
            <div className="w-6 h-6 border border-[#0F172A] rounded-full flex items-center justify-center text-[10px]">🌐</div>
            <div className="w-6 h-6 border border-[#0F172A] rounded-full flex items-center justify-center text-[10px]">🧬</div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.map((item, index) => (
            <div key={index} className="group cursor-pointer text-left">

              {/* Image */}
              <div className="relative aspect-video mb-5 md:mb-6 overflow-hidden rounded-[28px] md:rounded-[40px] bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Text */}
              <h3 className="text-[18px] md:text-[20px] font-medium mb-2 md:mb-3 leading-tight">
                {item.title}
              </h3>

              <p className="text-[13px] md:text-[12px] leading-relaxed opacity-70 max-w-full md:max-w-[90%] mx-auto md:mx-0 text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;