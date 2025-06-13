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
      <Swiper
        modules={[EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
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
    </>
  );
}
