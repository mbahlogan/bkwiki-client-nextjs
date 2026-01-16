"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

const TESTIMONIALS_DATA = [
    {
        id: 1,
        name: "Steve Yannick",
        role: "Teacher, Tech enthusiast",
        title: "My go to source for banking information",
        content: "Whenever I need reliable banking information, this is my top choice. They provide clear insights and updates that help me stay informed about the latest trends and changes in the banking world.",
        avatar: "/assets/reviewer.png",
    },
    {
        id: 2,
        name: "Steve Yannick",
        role: "Teacher, Tech enthusiast",
        title: "My go to source for banking information",
        content: "Whenever I need reliable banking information, this is my top choice. They provide clear insights and updates that help me stay informed about the latest trends and changes in the banking world.",
        avatar: "/assets/reviewer.png",
    },
    {
        id: 3,
        name: "Steve Yannick",
        role: "Teacher, Tech enthusiast",
        title: "My go to source for banking information",
        content: "Whenever I need reliable banking information, this is my top choice. They provide clear insights and updates that help me stay informed about the latest trends and changes in the banking world.",
        avatar: "/assets/reviewer.png",
    },
    {
        id: 4,
        name: "Steve Yannick",
        role: "Teacher, Tech enthusiast",
        title: "My go to source for banking information",
        content: "Whenever I need reliable banking information, this is my top choice. They provide clear insights and updates that help me stay informed about the latest trends and changes in the banking world.",
        avatar: "/assets/reviewer.png",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 px-4 md:px-20 lg:px-[200px] bg-white overflow-hidden relative">
            <div className="mx-auto px-6">
                <Typography variant="title" size="mid" className="font-bold text-sky-700 mb-10 pl-2">
                    Testimonials
                </Typography>

                <div className="absolute left-0 top-0 h-full w-10 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-10 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        className="pb-16 !overflow-visible"
                    >
                        {TESTIMONIALS_DATA.map((item) => (
                            <SwiperSlide key={item.id} className="h-auto">
                                <div className="bg-[#357ba6] text-white rounded-3xl p-8 h-full flex flex-col md:flex-row gap-6 relative overflow-hidden shadow-lg transition-transform hover:-translate-y-1 duration-300">
                                    {/* Optional background decoration for the card if needed, staying simple for now */}

                                    <div className="flex-shrink-0 flex flex-col items-start min-w-[120px]">
                                        <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-white/20 mb-3">
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h4 className="font-bold text-base text-left">{item.name}</h4>
                                        <p className="text-xs text-white/80 text-left">{item.role}</p>
                                    </div>

                                    <div className="flex-1 text-left">
                                        <h3 className="text-xl font-bold mb-3 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-blue-50 leading-relaxed opacity-90">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
