import React from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Albert Johnson",
    role: "Product Manager",
    image: "/assert/clientimage1.jpg",
    text: "The quality and attention to detail were beyond expectations.",
  },
  {
    name: "Sophia Lee",
    role: "UI/UX Designer",
    image: "/assert/clientimage1.jpg",
    text: "A beautifully crafted experience with smooth interactions.",
  },
  {
    name: "Daniel Cruz",
    role: "Startup Founder",
    image: "/assert/clientimage1.jpg",
    text: "Professional execution with a strong design sense.",
  },
  {
    name: "Daniel Cruz",
    role: "Startup Founder",
    image: "/assert/clientimage1.jpg",
    text: "Professional execution with a strong design sense.",
  },
  {
    name: "Daniel Cruz",
    role: "Startup Founder",
    image: "/assert/clientimage1.jpg",
    text: "Professional execution with a strong design sense.",
  },
];

const WeAssureYou = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-black font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        {/* Slider Wrapper */}
        <div className="relative w-full ">
          <div className="flex gap-14 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((item, index) => (
              <TestimonialCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAssureYou;
