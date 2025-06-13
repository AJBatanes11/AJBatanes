"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper/types";
import testimonies from "../../data/testimonials";

export default function TestimoniesSwiper() {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <>
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
          <div
            className="absolute top-4 right-4 w-4 h-4 sm:w-8 sm:h-8 pointer-events-none autoplay-progress z-10 text-base-dark"
            style={{ "--progress": 1 } as React.CSSProperties}
          >
            <svg className="rotate-[-90deg]" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray="125.6"
                style={{
                  strokeDashoffset: "calc(125.6 * var(--progress))",
                  transition: "stroke-dashoffset 0.3s ease-out",
                  willChange: "stroke-dashoffset",
                }}
              />
            </svg>
          </div>
          <Swiper
            modules={[EffectFade, Autoplay]}
            pagination={{ clickable: true }}
            effect="fade"
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onAutoplayTimeLeft={(swiper, time, progress) => {
              const circle = document.querySelector(
                ".autoplay-progress circle"
              ) as SVGCircleElement | null;
              if (circle) {
                circle.style.setProperty("--progress", String(1 - progress));
              }
            }}
            fadeEffect={{ crossFade: true }}
            loop={true}
            spaceBetween={0}
            className="mySwiper w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonies.map((testimony, index) => (
              <SwiperSlide className="px-2 lg:px-3 xl:px-4" key={index}>
                <div className="select-none p-4 text-base-dark mx-auto">
                  <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight italic mb-10 lg:mb-20">
                    &quot;{testimony.message}&quot;
                  </blockquote>
                  <div className="text-left lg:text-right">
                    <cite className="text-lg md:text-2xl font-semibold">
                      - {testimony.name}
                    </cite>
                    <p className="text-sm md:text-lg text-base-dark/70">
                      {testimony.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex lg:hidden items-center justify-center gap-6 mt-2 text-lg md:text-2xl">
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
    </>
  );
}
