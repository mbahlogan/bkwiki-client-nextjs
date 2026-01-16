import { MapPin } from 'lucide-react';
import Rating from "@/components/rating";
import { BankType } from "@/types";
import Link from "next/link";
import React from "react";

export default function Bank(props: BankType) {
  return (
    <Link href={`/banks/${props._id}`} key={props._id}>
      <div className="relative block overflow-hidden rounded-xl border border-gray-100 p-6 shadow-lg hover:shadow-md transition-shadow bg-white">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-2xl font-bold text-gray-900">
            {props?.name}
          </h3>
          <div className="shrink-0">
            <img
              alt={props.name}
              src={props?.logo?.url}
              className="h-8 object-contain"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500">
          <div className="flex gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-600">
              Bank
            </span>
            {/* {props.type && (
              <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-600">
                {props.type}
              </span>
            )} */}
          </div>

          <div className="flex items-center gap-1 text-blue-400">
            <MapPin className="h-4 w-4" />
            <span>{props.headquarter}</span>
          </div>

          <div className="flex items-center gap-1">
            <Rating value={4} />
            <span className="text-gray-400 font-normal">(200)</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
            {props?.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
