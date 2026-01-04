import React from "react";

interface Props {
    name: string;
    role: string;
    image: string;
    text: string;
}

const rotations = ["-3deg", "2deg", "-1deg"];
const durations = ["6s", "7.5s", "8.5s"];

const TestimonialCard: React.FC<Props> = ({
    name,
    role,
    image,
    text,
}) => {
    const rotate = rotations[Math.floor(Math.random() * rotations.length)];
    const duration = durations[Math.floor(Math.random() * durations.length)];

    return (
        <div
            style={{
                "--rotate": rotate,
                "--duration": duration,
            } as React.CSSProperties}
            className="relative  bg-gradient-to-b from-[#FFF1E9] to-[#BAC6D8] w-72 p-6 rounded-xl shadow-xl float-soft"
        >
            {/* Pin */}
            <img
                src="/assert/pin.png"
                alt="pin"
                className="absolute -top-4 left-1/5 -translate-x-1/2 w-8 z-20"
            />

            {/* Avatar */}
            <div className="flex justify-center -mt-4 mb-4">
                <img
                    src={image}
                    alt={name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm leading-relaxed text-center mb-4">
                “{text}”
            </p>

            <div className="text-center">
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-xs text-gray-500">{role}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;
