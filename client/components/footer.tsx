"use client";

import React, { useState } from "react";
import { Instagram, Facebook, Linkedin, ChevronDown } from "lucide-react";

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    { title: "Home", items: ["Section 1", "Section 2", "Section 3", "Section 4"] },
    { title: "Pages", items: ["Page 1", "Page 2", "Page 3", "Page 4"] },
    { title: "About", items: ["Page 1", "Page 2", "Page 3", "Page 4"] },
  ];

  return (
    <footer className="w-full px-4 sm:px-6 my-10">
      <div className="bg-gradient-to-r from-[#CCEFF4] to-[#0095C8] rounded-[28px] md:rounded-[40px] px-6 py-8 sm:px-10 sm:py-10 md:p-12 text-[#111F33] font-sans">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          
          {/* Logo & Newsletter */}
          <div className="md:col-span-4 flex flex-col gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/logo-b.png"
                alt="Umami Bioworks Logo"
                className="w-100 h-16 md:w-auto md:h-24 object-contain"
              />
            </div>

            <div className="relative w-full max-w-full sm:max-w-xs">
              <input
                type="email"
                placeholder="ENTER EMAIL"
                className="w-full py-4 md:py-4 px-5 md:px-6 rounded-full bg-white/50 border-neon text-[10px] tracking-widest placeholder:text-[#111F33]/60 focus:outline-none shadow-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 px-4 md:px-6 bg-[#111F33] text-white rounded-full text-[10px] font-bold tracking-widest hover:bg-red-400 transition-colors fish">
                SUBMIT
              </button>
            </div>

            <p className="text-[10px] md:text-[12px] font-bold tracking-[0.15em] uppercase">
              Marine Biotechnology Solutions
            </p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-5">

            {/* Mobile Accordion */}
            <div className="md:hidden space-y-4">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-[#111F33]/20 pb-3">
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex justify-between items-center text-sm font-bold uppercase"
                  >
                    {section.title}
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openSection === index ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openSection === index ? "max-h-40 mt-3" : "max-h-0"
                    }`}
                  >
                    <ul className="space-y-2 text-sm font-medium">
                      {section.items.map((item, i) => (
                        <li key={i} className="cursor-pointer hover:opacity-60">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Links (UNCHANGED) */}
            <div className="hidden md:grid grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-black text-sm mb-6">
                    {section.title}
                  </h4>
                  <ul className="space-y-3 text-sm font-medium">
                    {section.items.map((item, i) => (
                      <li key={i} className="cursor-pointer hover:opacity-60">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* Address & Socials */}
          <div className="md:col-span-3 flex flex-col gap-2 md:gap-6">
            <div>
              <h4 className="font-black text-xs md:text-sm mb-2 md:mb-4">
                Address
              </h4>
              <>
                {/* Mobile – Single Line */}
                <p className="text-xs font-medium md:hidden">
                  89 Science Park Dr, #04-22, Singapore 11826
                </p>

                {/* Desktop – Original Multi Line */}
                <p className="hidden md:block text-sm font-medium leading-relaxed">
                  89 Science Park Dr,<br />
                  #04-22, Singapore<br />
                  11826
                </p>
              </>
            </div>

            <div className="flex md:mt-0 mt-2 gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center cursor-pointer hover:bg-[#111F33]/20 transition-colors"
                >
                  <Icon size={16} strokeWidth={2.5} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-16 pt-4 md:pt-6 border-t border-[#03045E]/50 flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center text-[9px] md:text-[10px] font-bold tracking-widest uppercase opacity-70 text-center md:text-left">
          <span>Site by Maven Creative</span>
          <span>Copyright ©2026 Umami All Rights Reserved</span>
          <span className="cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
