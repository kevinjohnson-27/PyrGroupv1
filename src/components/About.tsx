"use client";

import AssuranceImage from "@/components/AssuranceImage";

const AboutSection = () => {
    const assuranceImages = [
        "/assert/wsi-5.svg",
        "/assert/wsi-6.svg",
        "/assert/wsi-3.svg",
        "/assert/wsi-7.svg",
    ];

    const rotations = [
        "rotate-[-6deg]",
        "rotate-[6deg]",
        "rotate-[-4deg]",
        "rotate-[5deg]",
    ];

    return (
        <section className="relative w-full py-28 px-4  overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* TITLE */}
                <div className="text-center mb-20">
                    <div className="flex items-center justify-center">
                        {/* LOGO */}


                        {/* TEXT */}
                        <h2 className="text-5xl font-extrabold tracking-wide text-black">
                            ABOUT US
                        </h2>
                        <img
                            src="/assert/stroke1.png"   // 🔁 change to your logo path
                            alt="Company Logo"
                            className="h-50 w-50"
                        />
                    </div>
                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT CONTENT WRAPPER */}
                    <div className="relative overflow-visible">

                        {/* DECORATIVE CIRCLES (BEHIND) */}
                        <span className="absolute -top-16 -left-8 w-32 h-32 bg-[#094BA7] rounded-full -z-10"></span>
                        <span className="absolute -top-18 left-13 w-20 h-20 bg-orange-500 rounded-full -z-10"></span>
                        <span className="absolute -bottom-16 -right-8 w-32 h-32 bg-orange-500 rounded-full -z-10"></span>
                        <span className="absolute -bottom-18 right-13 w-20 h-20 bg-[#094BA7] rounded-full -z-10"></span>

                        {/* CONTENT BOX */}
                        <div className="relative z-10 border-[3px] border-black rounded-3xl p-14">

                            {/* MISSION */}
                            <div className="mb-16">
                                <h3 className="text-4xl font-extrabold mb-4 text-black text-right">
                                    MISSION
                                </h3>
                                <p className="text-black text-lg font-extrabold leading-relaxed max-w-md">
                                    To deliver high-quality academic and technical
                                    solutions with innovation, consistency, and
                                    real-world impact.
                                </p>
                            </div>

                            {/* VISION */}
                            <div>
                                <h3 className="text-4xl font-extrabold mb-4 text-black">
                                    VISION
                                </h3>
                                <p className="text-black text-lg font-extrabold leading-relaxed max-w-md">
                                    To become a trusted digital innovation partner
                                    empowering students and professionals with
                                    future-ready technology.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT IMAGE STACK */}
                    <div className="grid grid-cols-2 gap-12 place-items-center">
                        {assuranceImages.map((image, index) => (
                            <AssuranceImage
                                key={index}
                                image={image}
                                alt={`About image ${index + 1}`}
                                rotate={rotations[index % rotations.length]}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
