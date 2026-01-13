"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsSlider() {
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 relative group">
                <Typography variant="title" size="mid" className="font-bold text-primary mb-10">
                    Trending News
                </Typography>

                <div className="swiper-button-prev-custom absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition hidden md:block">
                    <ChevronLeft className="w-6 h-6" />
                </div>
                <div className="swiper-button-next-custom absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition hidden md:block">
                    <ChevronRight className="w-6 h-6" />
                </div>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="pb-12"
                >
                    {[1, 2, 3].map((item) => (
                        <SwiperSlide key={item}>
                            <div className="flex flex-col md:flex-row items-center gap-10 py-14 px-10">
                                <div className="md:w-1/2 w-full h-64 md:h-80 relative rounded-lg overflow-hidden">
                                    <Image
                                        src={`/assets/banks/ecobankFrame.png`}
                                        alt="News"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="md:w-1/2 text-left space-y-4">
                                    <Typography variant="title" size="mid" className="font-bold text-primary">
                                        Ecobank to invest heavily in <br /> agriculture come 2026
                                    </Typography>
                                    <Typography variant="paragraph" className="text-gray-600 text-sm leading-relaxed">
                                        In a bold move to bolster the agricultural sector, Ecobank has announced plans to significantly increase its investments in agriculture by 2026. This initiative aims to enhance food security, support local farmers, and stimulate economic growth across various regions. The bank's strategy includes providing financial support, innovative agricultural technologies, and training programs for farmers.
                                    </Typography>
                                    <div>
                                        <Button variant="link" className="p-0 h-auto font-semibold text-primary underline">
                                            Learn more
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
