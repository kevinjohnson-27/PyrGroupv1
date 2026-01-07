"use client";

import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white pb-20">
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex items-center justify-between relative">
        {/* Logo */}
        <Image
          src="/assert/pyr-grp-logo.png"
          alt="PYR"
          width={160}
          height={60}
          className="object-contain"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-bold text-black">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-600">
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-black">
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
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-black"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
