"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper/types";
import dynamic from "next/dynamic";

const TestimoniesSwiper = dynamic(
  () => import("./snippets/testimoniesSwiper"),
  {
    ssr: false,
  }
);

export default function TestimonyCardList() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="w-full mx-auto py-10 sm:py-32 px-4 md:px-8 lg:px-12">
      <div className="w-full flex flex-wrap">
        <div className="px-2 lg:px-3 xl:px-4 lg:pt-10 lg:pb-28 inline-flex flex-row justify-between items-end w-full md:pr-6 lg:pr-0 lg:mb-0 lg:w-1/4 lg:flex-col lg:justify-between lg:items-start">
          <div className="w-full lg:sticky lg:top-0 text-left lg:text-center">
            {/* <h2 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-none text-center"> */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-none mb-10">
              Words from my clients
            </h2>
            {/* Buttons: visible only on desktop */}
            <div className="hidden lg:flex items-center justify-evenly gap-2 text-lg md:text-2xl">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="link link--visible"
              >
                Previous
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="link link--visible"
              >
                Forward
              </button>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-3/4">
          <TestimoniesSwiper />
          <div className="flex lg:hidden items-center justify-center gap-6 mt-2 text-lg md:text-2xl">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="link link--visible py-2 px-4"
            >
              Previous
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="link link--visible py-2 px-4"
            >
              Forward
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
