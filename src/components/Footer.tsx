import React from "react";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#1f1f1f] text-white py-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION */}
          <div className="flex flex-col items-center md:items-start -space-y-6 md:-space-y-10">
            <img
              src="/assert/pyr-grp-logo.png"
              alt="PYR Projects Logo"
              className="h-48 w-48 md:h-72 md:w-72 object-contain"
            />

            <p className="text-white text-base md:text-lg max-w-md font-semibold text-center md:text-left">
              “Your submission date is non-negotiable.
              <br />
              So is our delivery.”
            </p>
          </div>

          {/* RIGHT SECTION */}
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wide">
              GET IN TOUCH WITH US
            </h2>

            {/* CONTACT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-16 gap-y-6 text-lg sm:text-xl lg:text-2xl">
              {/* PHONE */}
              <div className="flex items-center gap-4 md:gap-6 justify-center md:justify-start">
                <div className="bg-white text-black rounded-full p-2 flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="whitespace-nowrap">+1 234-567 8900</span>
              </div>

              {/* INSTAGRAM */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="bg-white text-black rounded-full p-2 flex-shrink-0">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram</span>
              </div>

              {/* MAIL */}
              <div className="flex items-center gap-3 justify-center md:justify-start order-3 sm:order-none">
                <div className="bg-white text-black rounded-full p-2 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="break-all sm:break-normal">
                  contact@pyrgroups.com
                </span>
              </div>

              {/* LINKEDIN */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="bg-white text-black rounded-full p-2 flex-shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
