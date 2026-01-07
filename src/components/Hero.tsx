"use client";
import { useState } from "react";
import Image from "next/image";

interface CircleBadgeProps {
  text: string;
  nextText: () => void;
  prevText: () => void;
}

const CircleBadge: React.FC<CircleBadgeProps> = ({
  text,
  nextText,
  prevText,
}) => {
  return (
    <div
      className="
        /* Mobile: Centered in flow */
        w-full h-auto z-20
        flex flex-col items-center justify-center
        static mt-10
        /* Laptop: Your exact design */
        lg:w-75 lg:h-75
        lg:absolute lg:top-15 lg:right-40 lg:mt-0
      "
    >
      {/* IMAGE */}
      <div className="relative w-[200px] h-[200px] lg:w-[800%] lg:h-[850%] -right-2 flex items-center justify-center">
        <Image
          src="/assert/heroImg.png"
          alt="circle badge"
          fill
          className="object-contain scale-165"
        />
      </div>

      {/* ARROWS + TEXT */}
      <div className="flex items-center gap-3 -translate-y-10 -translate-x-4">
        <button
          onClick={prevText}
          className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ‹
        </button>

        <span className="font-semibold text-black text-sm whitespace-nowrap">
          {text}
        </span>

        <button
          onClick={nextText}
          className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default function Hero() {
  const texts = ["Review Papers", "Codes", "PPTs", "Documents"];
  const [index, setIndex] = useState(0);

  const nextText = () => {
    setIndex((prev) => (prev + 1) % texts.length);
  };

  const prevText = () => {
    setIndex((prev) => (prev - 1 + texts.length) % texts.length);
  };

  return (
    <section
      id="home"
      className="relative flex justify-center px-6 bg-white  lg:overflow-visible"
    >
      {/* BACKGROUND FLOATING CIRCLES - Adjusted for mobile visibility */}
      {/* BACKGROUND FLOATING CIRCLES */}
      <div
        className="
  absolute z-0 rounded-full bg-orange-500
  -top-6 left-10 w-16 h-16         /* Mobile */
  sm:left-30 sm:w-20 sm:h-20       /* Tablet */
  lg:-top-10 lg:left-63 lg:w-22 lg:h-22 /* Your original Laptop design */
"
      ></div>

      <div
        className="
  absolute z-0 rounded-full bg-[#094BA7]
  -top-8 left-4 w-20 h-20          /* Mobile (Overlaps orange) */
  sm:left-10 sm:w-28 sm:h-28       /* Tablet */
  lg:-top-12 lg:left-35 lg:w-36 lg:h-36 /* Your original Laptop design */
"
      ></div>

      <div
        className="
  absolute z-0 rounded-full bg-[#094BA7]
  -bottom-6 right-10 w-16 h-16     /* Mobile */
  sm:right-20 sm:w-20 sm:h-20      /* Tablet */
  lg:-bottom-10 lg:right-58 lg:w-22 lg:h-22 /* Your original Laptop design */
"
      ></div>

      <div
        className="
  absolute z-0 rounded-full bg-orange-500
  -bottom-8 right-4 w-20 h-20       /* Mobile (Overlaps blue) */
  sm:right-30 sm:w-28 sm:h-28        /* Tablet */
  lg:-bottom-12 lg:right-30 lg:w-36 lg:h-36 /* Your original Laptop design */
"
      ></div>
      {/* MAIN GRADIENT BOX */}
      <div
        className="
          relative z-10 w-full max-w-6xl rounded-3xl
          bg-gradient-to-br from-orange-500/70 via-purple-500/70 to-indigo-600/70
          p-10 sm:p-16 lg:p-40
          /* Mobile: Stacks vertically | Laptop: Original layout */
          flex flex-col lg:block      "
      >
        {/* MAIN TEXT */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black max-w-3xl leading-tight text-center lg:text-left">
          Delivered on{" "}
          <span className="border-4 border-white px-3 inline-block lg:inline">
            time
          </span>
          <br /> or you don’t pay.
        </h1>

        {/* CIRCLE BADGE */}
        <CircleBadge
          text={texts[index]}
          nextText={nextText}
          prevText={prevText}
        />
      </div>
    </section>
  );
}
