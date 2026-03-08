"use client"
import React, { useState } from "react"
import Link from "next/link"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "PLATFORM", href: "/platform" },
  { label: "PIPELINE", href: "/pipeline" },
  { label: "PEOPLE", href: "/people" },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed md:absolute top-0 left-0 w-full lg:h-[112px] z-[100] bg-white md:bg-transparent">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-18 py-4 md:py-[30px]">

        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/">
            <img
              src="/logo-b.png"
              alt="Logo"
              className="w-24 sm:w-28 md:w-30 lg:w-[167px] lg:h-[50px]"
            />
          </Link>
        </div>

        {/* Desktop Menu (UNCHANGED) */}
        <div className="hidden md:flex items-center gap-16">
          <ul className="flex items-center gap-20 font-bold text-[10px] tracking-[0.15em]">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative cursor-pointer text-white after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                after:bg-[#CD5A99] after:rounded after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <Link href="/partner">
            <button className="bg-[#03045E] !text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-[0.1em]">
              PARTNER WITH US
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/10 text-[#0F172A] w-full px-6 py-6 flex flex-col gap-6 shadow-xl">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>
              <div
                onClick={() => setIsOpen(false)}
                className="font-bold text-[12px] tracking-[0.15em] cursor-pointer"
              >
                {item.label}
              </div>
            </Link>
          ))}

          <Link href="/partner">
            <button
              onClick={() => setIsOpen(false)}
              className="notfish px-6 py-3 rounded-full text-[10px] font-bold tracking-[0.1em] mt-4"
            >
              PARTNER WITH US
            </button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
