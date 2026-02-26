"use client"
import React, { useState } from "react"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "PLATFORM", href: "/platform" },
  { label: "PIPELINE", href: "/pipeline" },
  { label: "PEOPLE", href: "/people" },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-18 py-4">

        {/* Logo */}
        <div className="cursor-pointer">
          <img src="/home/Blue.png" alt="Logo" className="w-24 md:w-30" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-16">
          <ul className="flex items-center gap-12 font-bold text-[10px] tracking-[0.15em]">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative cursor-pointer text-white after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#D4AF37] after:rounded after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </li>
            ))}
          </ul>

          <button className="notfish px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.1em]">
            PARTNER WITH US
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-[#0F172A] w-full px-6 py-6 flex flex-col gap-6 shadow-xl">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="font-bold text-[12px] tracking-[0.15em] cursor-pointer"
            >
              {item.label}
            </div>
          ))}

          <button className="notfish px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.1em] mt-4">
            PARTNER WITH US
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
