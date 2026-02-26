import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-6">
      {/* Main Container with Gradient and Rounded Corners */}
      <div className="bg-gradient-to-r from-[#CCEFF4] to-[#0095C8] rounded-[40px] p-12 text-[#111F33] font-sans">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Logo & Newsletter Section */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12">
                <svg viewBox="0 0 100 100" className="fill-[#111F33]">
                  <path d="M50 0C50 27.6 27.6 50 0 50C27.6 50 50 72.4 50 100C50 72.4 72.4 50 100 50C72.4 50 50 27.6 50 0Z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-bold tracking-tighter">UMAMI</span>
                <span className="text-base font-semibold tracking-[0.2em]">BIOWORKS</span>
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="relative w-full max-w-xs border-neon rounded-full">
              <input 
                type="email" 
                placeholder="ENTER EMAIL" 
                className="w-full py-4 px-6 rounded-full bg-white/50 border border-white/20 text-[10px] tracking-widest placeholder:text-[#111F33]/60 focus:outline-none shadow-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 px-6 bg-[#111F33] text-white rounded-full text-[10px] font-bold tracking-widest hover:bg-red-400 transition-colors border-neon-cta">
                SUBMIT
              </button>
            </div>

            <p className="text-[12px] font-bold tracking-[0.15em] uppercase">
              Marine Biotechnology Solutions
            </p>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-5 grid grid-cols-3 gap-4">
            <div>
              <h4 className="font-black text-sm mb-6">Home</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="cursor-pointer hover:opacity-60">Section 1</li>
                <li className="cursor-pointer hover:opacity-60">Section 2</li>
                <li className="cursor-pointer hover:opacity-60">Section 3</li>
                <li className="cursor-pointer hover:opacity-60">Section 4</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm mb-6">Pages</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="cursor-pointer hover:opacity-60">Page 1</li>
                <li className="cursor-pointer hover:opacity-60">Page 2</li>
                <li className="cursor-pointer hover:opacity-60">Page 3</li>
                <li className="cursor-pointer hover:opacity-60">Page 4</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-sm mb-6">About</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li className="cursor-pointer hover:opacity-60">Page 1</li>
                <li className="cursor-pointer hover:opacity-60">Page 2</li>
                <li className="cursor-pointer hover:opacity-60">Page 3</li>
                <li className="cursor-pointer hover:opacity-60">Page 4</li>
              </ul>
            </div>
          </div>

          {/* Address & Socials Section */}
          <div className="md:col-span-3 flex flex-col gap-6">
            <div>
              <h4 className="font-black text-sm mb-4">Address</h4>
              <p className="text-sm font-medium leading-relaxed">
                89 Science Park Dr,<br />
                #04-22, Singapore<br />
                11826
              </p>
            </div>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <div key={idx} className="w-10 h-10 rounded-full bg-[#111F33]/10 flex items-center justify-center cursor-pointer hover:bg-[#111F33]/20 transition-colors">
                  <Icon size={18} strokeWidth={2.5} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-[#03045E]/50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest uppercase opacity-70">
          <span>Site by Maven Creative</span>
          <span>Copyright ©2026 Umami All Rights Reserved</span>
          <span className="cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;