"use client";

import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white pb-20 ">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/assert/pyr-grp-logo.png"
            alt="PYR"
            width={160}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-bold text-black">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-black">
          <Search className="w-5 h-5 cursor-pointer" />

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu Icon */}
          <Menu className="w-6 h-6 cursor-pointer hidden md:block" />
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-50">
            <a href="#" className="font-semibold text-black">Home</a>
            <a href="#" className="font-semibold text-black">About</a>
            <a href="#" className="font-semibold text-black">Contact</a>
          </div>
        )}

      </div>
    </nav>
  );
}
