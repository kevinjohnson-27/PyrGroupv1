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
      className="absolute top-14 right-40 w-75 h-75 z-20
      flex flex-col items-center justify-center
      rounded-full border-2 border-blue-600 border-dashed"
    >
      {/* IMAGE (DO NOT USE 100% HEIGHT) */}
      <div className="relative w-[85%] h-[65%] -right-10 flex items-center justify-center">
        <Image
          src="/assert/insta-carousel.png"
          alt="circle badge"
          fill
          className="object-contain"
        />
      </div>

      {/* INLINE ARROW - TEXT - ARROW (NO GAP) */}
      <div className="flex items-center gap-3 mt-0">
        <button
          onClick={prevText}
          className="bg-black text-white rounded-full w-8 h-8
          flex items-center justify-center"
        >
          ‹
        </button>

        <span className="font-semibold text-black text-sm whitespace-nowrap">
          {text}
        </span>

        <button
          onClick={nextText}
          className="bg-black text-white rounded-full w-8 h-8
          flex items-center justify-center"
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
    <section className="relative flex justify-center px-6 bg-white overflow-visible">

      {/* BACKGROUND FLOATING CIRCLES */}
      <div className="absolute -top-10 left-17 w-60 h-60 bg-orange-500 rounded-full z-0"></div>
      <div className="absolute -top-17 left-35 w-32 h-32 bg-[#094BA7] rounded-full z-0"></div>
      <div className="absolute bottom-0 right-17 w-60 h-60 bg-[#094BA7] rounded-full z-0"></div>
      <div className="absolute -bottom-12 right-30 w-32 h-32 bg-orange-500 rounded-full z-0"></div>

      {/* MAIN GRADIENT BOX */}
      <div
        className="relative z-10 w-full max-w-6xl rounded-3xl
        bg-gradient-to-br from-orange-500/70 via-purple-500/70 to-indigo-600/70
        p-40"
      >
        {/* CIRCLE BADGE */}
        <CircleBadge
          text={texts[index]}
          nextText={nextText}
          prevText={prevText}
        />

        {/* MAIN TEXT */}
        <h1 className="text-5xl font-extrabold text-black max-w-3xl leading-tight">
          Delivered on{" "}
          <span className="border-4 border-white px-3">time</span>
          <br /> or you don’t pay.
        </h1>
      </div>
    </section>
  );
}
