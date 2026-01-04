import React from "react";

interface AssuranceImageProps {
    image: string;
    alt: string;
    rotate?: string;
}

const AssuranceImage: React.FC<AssuranceImageProps> = ({ image, alt, rotate }) => {
    return (
        <div
            className={`relative inline-block ${rotate} animate-move-lr`}
        >
            {/* PIN */}
            <img
                src="/assert/pin.png"
                alt="Pin"
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 z-20"
            />

            {/* IMAGE */}
            <img
                src={image}
                alt={alt}
                className="block h-auto w-auto max-w-full"
            />
        </div>
    );
};

export default AssuranceImage;
