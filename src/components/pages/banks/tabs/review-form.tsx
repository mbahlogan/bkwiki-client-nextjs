"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Image from "next/image";

export default function ReviewForm() {
    const [rating, setRating] = useState(0);

    return (
        <div className="bg-[#C9E0EE] rounded-lg p-6 mb-8">
            <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative">
                        <Image
                            src="/assets/reviewer.png"
                            alt="User"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <Typography variant="title" className="font-bold text-gray-900">
                            Mbah Logan
                        </Typography>
                        <Typography variant="paragraph" size="sm" className="text-gray-500">
                            Description
                        </Typography>
                    </div>
                </div>
                <Typography variant="paragraph" size="sm" className="text-gray-500 font-medium">
                    {new Date().toLocaleDateString("en-GB")}
                </Typography>
            </div>

            <div className="flex items-center gap-2 mb-6">
                <Typography className="text-primary font-medium">
                    How many stars would you give us?
                </Typography>
                <StarRatings
                    rating={rating}
                    starRatedColor="goldenrod"
                    starEmptyColor="rgba(255,255,255,0.4)"
                    // Note: Image shows white stars? Or faint stars? 
                    // Actually image shows faint white stars outline or filled white.
                    // Let's assume white filled for rated, empty for unrated.
                    // Wait, the background is light blue. White stars might be hard to see if unfilled.
                    // Let's stick to standard yellow or maybe white if that's the design intent.
                    // Re-checking image: "How many stars..." text is blue. Stars are white outlines or filled white.
                    // I will use white for now as it looks unique.
                    changeRating={setRating}
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    starHoverColor="goldenrod"
                />
            </div>

            <div className="mb-6">
                <Typography variant="sub-title" className="font-bold underline mb-4 text-gray-900">
                    What do you think about us?
                </Typography>
                <textarea
                    className="w-full h-32 rounded-lg border-none p-4 focus:ring-2 focus:ring-blue-500 resize-none bg-white placeholder-gray-300"
                    placeholder="Type here........."
                ></textarea>
            </div>

            <div className="flex justify-center">
                <Button className="bg-[#2D7398] hover:bg-[#256080] text-white px-10 py-2 rounded font-medium">
                    Submit review
                </Button>
            </div>
        </div>
    );
}
