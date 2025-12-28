import { FileText, Code, CheckCircle, BookOpen } from "lucide-react";

const services = [
    {
        title: "Review Papers",
        description: "Expert review of research papers with clarity and accuracy.",
        icon: FileText,
    },
    {
        title: "Codes",
        description: "Well-structured, optimized, and scalable code solutions.",
        icon: Code,
    },
    {
        title: "Verified",
        description: "Content verified by professionals and subject experts.",
        icon: CheckCircle,
    },
    {
        title: "Documents",
        description: "Clean, formatted, and ready-to-submit documentation.",
        icon: BookOpen,
    },
];

export default function Services() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 text-black">Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                className="rounded-2xl p-6 bg-white
             shadow-lg hover:shadow-2xl
             transition-all duration-300
             hover:-translate-y-2
             relative overflow-hidden"
                            >
                                <div className="absolute inset-0 
                  bg-gradient-to-br 
                  from-orange-500/10 via-purple-500/10 to-indigo-600/10" />

                                <div className="relative z-10">
                                    <Icon className="w-10 h-10 text-indigo-600 mb-4" />
                                    <h3 className="text-xl font-semibold mb-2 text-black">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
