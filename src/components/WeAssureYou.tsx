import React from "react";
import AssuranceImage from "@/components/AssuranceImage";

const assuranceImages: string[] = [
    "/assert/wsi-1.svg",
    "/assert/wsi-2.svg",
    "/assert/wsi-3.svg",
    "/assert/wsi-4.svg",
];

const rotations = ["-rotate-6", "rotate-3", "-rotate-3", "rotate-6"];

const WeAssureYou: React.FC = () => {
    return (
        <section className="w-full bg-[#ffff] py-20">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-black text-3xl font-bold mb-12 text-center">
                    WE ASSURE YOU
                </h2>

                <div className="rounded-xl py-12 px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {assuranceImages.map((image, index) => (
                            <div key={index} className="flex justify-center">
                                <AssuranceImage
                                    image={image}
                                    alt={`Assurance ${index + 1}`}
                                    rotate={rotations[index % rotations.length]}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WeAssureYou;
