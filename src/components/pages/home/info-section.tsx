import React from "react";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";

export default function InfoSection() {
    return (
        <section className="bg-[#265D7E] py-16 text-white min-h-[462px] flex items-center">
            <div className="mx-auto w-[80%] flex flex-col md:flex-row items-center justify-center gap-10">
                <div>
                    <Typography size="lg" variant="title" className="text-white font-bold leading-tight md:text-5xl">
                        Everything you need to <br />
                        know about banking in <br />
                        <span className="text-green-500">Cameroon</span>
                    </Typography>
                </div>
                <div className="relative w-90 h-80 rounded-lg overflow-hidden">
                    <Image
                        src="/assets/card.png"
                        alt="Banking in Cameroon"
                        width={600}
                        height={600}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
