import React from "react";

interface AssuranceTextProps {
    description: string;
    author: string;
    highlight: string;
    accent?: "orange" | "blue" | "black";
}

const accentColorMap = {
    orange: "text-orange-500",
    blue: "text-blue-600",
    black: "text-black",
};

const AssuranceText: React.FC<AssuranceTextProps> = ({
    description,
    author,
    highlight,
    accent = "black",
}) => {
    const [firstWord, secondWord] = highlight.split(" ");

    return (
        <div className="max-w-xs">
            {/* Quote text */}
            <p className="text-sm text-gray-700 leading-relaxed italic">
                “{description}”
            </p>

            {/* Author */}
            <p className="mt-1 text-xs text-gray-500">
                {author}
            </p>

            {/* Highlight */}
            <p className="mt-6 text-center font-semibold">
                <span className={accentColorMap[accent]}>
                    {firstWord}
                </span>{" "}
                <span className="text-black">
                    {secondWord}
                </span>
            </p>
        </div>
    );
};

export default AssuranceText;
