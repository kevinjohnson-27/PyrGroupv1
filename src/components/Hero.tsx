"use client";
import { useState } from "react";

import Image from "next/image";
interface CircleBadgeProps {
  text: string;
}

const CircleBadge: React.FC<CircleBadgeProps> = ({ text }) => {
  return (
    <div className="absolute top-20 right-40 w-75 h-75 z-20 flex items-center justify-center">

      {/* White Base */}
      <div className="absolute w-full h-full bg-white rounded-full border-3 border-black"></div>

      {/* Logo Image */}
      <div className="absolute -top-27 -right-27 w-130 h-130">
        <Image
          src="/assert/stroke1.png"
          alt="circle logo"
          fill
          className="object-contain"
        />
      </div>
      {/* Center Text */}
      <span className="absolute text-black font-bold text-lg">
        {text}
      </span>
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
    <section className="relative flex justify-center px-6 bg-white">

      {/* BACKGROUND FLOATING CIRCLES */}
      <div className="absolute -top-10 left-17 w-60 h-60 bg-orange-500 rounded-full opacity-100 z-0"></div>
      <div className="absolute -top-17 left-35 w-32 h-32 bg-blue-700 rounded-full opacity-100 z-0"></div>
      <div className="absolute bottom-0 right-17 w-60 h-60 bg-blue-700 rounded-full opacity-100 z-0"></div>
      <div className="absolute -bottom-12 right-30 w-32 h-32 bg-orange-500 rounded-full opacity-100 z-0"></div>

      {/* MAIN GRADIENT BOX */}
      <div
        className="relative z-10 w-full max-w-6xl rounded-3xl
        bg-gradient-to-br from-orange-500/70 via-purple-500/70 to-indigo-600/70
        p-40"
      >
        {/* Circle Badge */}
        <CircleBadge text={texts[index]} />

        {/* MAIN TEXT */}
        <h1 className="text-5xl font-extrabold text-black max-w-3xl leading-tight">
          Delivered on{" "}
          <span className="border-4 border-white px-3">time</span>
          <br /> or you don’t pay.
        </h1>

        {/* LEFT ARROW */}
        <button
          onClick={prevText}
          className="absolute right-110 top-1/2 -translate-y-1/2 
          bg-black text-white rounded-full w-10 h-10 z-20"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextText}
          className="absolute right-35 top-1/2 -translate-y-1/2 
          bg-black text-white rounded-full w-10 h-10 z-20"
        >
          ›
        </button>
      </div>
    </section>
  );
}
