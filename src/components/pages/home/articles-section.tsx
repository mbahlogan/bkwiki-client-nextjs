import React from "react";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function ArticlesSection() {
    const articles = [
        { title: "Ecobank expands its services to other regions", image: "/assets/homepage-reviews.png" },
        { title: "Ecobank expands its services to other regions", image: "/assets/homepage-reviews.png" },
        { title: "Ecobank expands its services to other regions", image: "/assets/homepage-reviews.png" },
        { title: "Ecobank expands its services to other regions", image: "/assets/homepage-reviews.png" },
        { title: "Ecobank expands its services to other regions", image: "/assets/homepage-reviews.png" },
        { title: "Ecobank expands its services to other regions", image: "/assets/homepage-reviews.png" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <Typography size="mid" variant="title" className="text-primary font-bold mb-10">
                    Banking Articles
                </Typography>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <div key={index} className="flex flex-col gap-4 group cursor-pointer">
                            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition duration-300 group-hover:scale-105"
                                />
                            </div>
                            <Typography variant="paragraph" className="font-semibold text-gray-800 text-lg leading-snug">
                                {article.title}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
