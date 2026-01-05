import React from "react";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#1f1f1f] text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT SECTION */}
                    <div className="-space-y-10">
                        <img
                            src="/assert/pyr-grp-logo.png"
                            alt="PYR Projects Logo"
                            className="h-72 w-72 object-contain"
                        />

                        <p className="text-white text-lg max-w-md font-semibold">
                            “Your submission date is non-negotiable.
                            <br />
                            So is our delivery.”
                        </p>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="space-y-8 text-left">
                        <h2 className="text-5xl font-semibold tracking-wide">
                            GET IN TOUCH WITH US
                        </h2>

                        {/* PHONE + MAIL (SAME LINE) */}
                        {/* CONTACT GRID */}
                        <div className="grid grid-cols-2 gap-x-16 gap-y-6 text-2xl md:justify-end ">

                            {/* PHONE */}
                            <div className="flex items-center gap-6 ">
                                <div className="bg-white text-black rounded-full p-2">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>+1 234-567 8900</span>
                            </div>

                            {/* INSTAGRAM */}
                            <div className="flex items-center gap-3 md:justify-start">
                                <div className="bg-white text-black rounded-full p-2">
                                    <Instagram className="w-4 h-4" />
                                </div>
                                <span>Instagram</span>
                            </div>

                            {/* MAIL */}
                            <div className="flex items-center gap-3">
                                <div className="bg-white text-black rounded-full p-2">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>contact@pyrgroups.com</span>
                            </div>

                            {/* LINKEDIN */}
                            <div className="flex items-center gap-3 md:justify-start">
                                <div className="bg-white text-black rounded-full p-2">
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
