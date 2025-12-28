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
];

const WeAssureYou = () => {
    return (
        <section className="bg-[#f5f6f7] py-24">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl text-black font-bold text-center mb-16">
                    What Our Clients Say
                </h2>

                <div className="grid gap-14 md:grid-cols-3 place-items-center">
                    {testimonials.map((item, index) => (
                        <TestimonialCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WeAssureYou;
