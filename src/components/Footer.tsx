import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#1f1f1f] text-white py-14">
            <div className="max-w-7xl mx-auto px-6">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT: LOGO + BRAND */}
                    <div>
                        <div className="flex items-center gap-3">
                            {/* Logo Placeholder */}
                            <div className="w-14 h-14 rounded-full border-4 border-orange-500 flex items-center justify-center">
                                <span className="text-blue-500 font-extrabold text-xl">P</span>
                            </div>

                            <h2 className="text-3xl font-extrabold tracking-wide">
                                <span className="text-blue-500">PYR</span>{" "}
                                <span className="text-orange-500">PROJECTS</span>
                            </h2>
                        </div>

                        <p className="mt-6 text-sm text-gray-300 max-w-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor
                        </p>
                    </div>

                    {/* RIGHT: FORM */}
                    <div>
                        {/* Quote */}
                        <p className="italic text-sm text-gray-300 mb-6 text-right">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor”
                        </p>

                        {/* Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                            <input
                                type="text"
                                placeholder="NAME"
                                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                            />

                            <input
                                type="text"
                                placeholder="COLLEGE"
                                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                            />

                            <div className="flex md:col-span-1 gap-2">
                                <input
                                    type="email"
                                    placeholder="MAIL ID"
                                    className="flex-1 bg-transparent border border-gray-500 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                                />
                                <button className="text-sm px-4 border border-gray-500 rounded-md hover:border-orange-500">
                                    send
                                </button>
                            </div>

                            <button className="md:col-span-1 bg-orange-500 hover:bg-orange-600 transition-colors text-black font-semibold rounded-md px-6 py-2">
                                Reach out to us
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="flex justify-between items-center mt-12 text-sm text-white">
                    <span className="hover:text-white cursor-pointer">Instagram</span>
                    <span className="hover:text-white cursor-pointer">LinkedIn</span>
                </div>

            </div>
        </footer>
    );
}
