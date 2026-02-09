import React from 'react';

const navItems = [
  { label: "HOME", href: "/" },
  { label: "PLATFORM", href: "/platform" },
  { label: "PIPELINE", href: "/pipeline" },
  { label: "PEOPLE", href: "/people" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-18 py-4 font-sans z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="relative w-10 h-10">
          {/* Simple SVG approximation of the Umami logo icon */}
          
          <div className='w-30 h-30'><img src="/home/Blue.png" alt="" /></div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-18">
        <ul className="flex items-center gap-18 font-bold text-[10px] tracking-[0.15em]">
            {["HOME", "PLATFORM", "PIPLEINE", "PEOPLE"].map((item) => (
                <li
                key={item}
                className="relative cursor-pointer text-white after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.75 after:bg-[#D4AF37] after:rounded after:transition-all after:duration-300 hover:after:w-full"
                >
                {item}
                </li>
  ))}
</ul>


        {/* CTA Button */}
        <button className="notfish px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.1em] transition-colors">
          PARTNER WITH US
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
