import React from "react";

interface AssuranceImageProps {
    image: string;
    alt: string;
}

const AssuranceImage: React.FC<AssuranceImageProps> = ({ image, alt }) => {
    return (
        <div
            className="relative w-48 h-56 rounded-2xl overflow-hidden 
            hover:rotate-0 transition-transform duration-300
            animate-move"
        >
            {/* PIN IMAGE */}
            <img
                src="/assert/pin.png"
                alt="Pin"
                className="absolute top-4 left-[60%] -translate-x-1/2 -translate-y-1/2 
                           w-8 h-8 z-20 pointer-events-none"
            />

            {/* IMAGE */}
            <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default AssuranceImage;
