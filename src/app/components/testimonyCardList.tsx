"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper/types";

const testimonials = [
  {
    name: "Jane Doe",
    title: "Founder at BrightCo",
    message:
      "Working with AJ was a game-changer. He didn’t just meet expectations—he redefined them. His clarity, creativity, and execution were outstanding from start to finish.",
  },
  {
    name: "John Smith",
    title: "CTO at DevSolutions",
    message:
      "AJ made the process seamless and refreshingly collaborative. I felt heard, supported, and challenged in the best way possible. The final result exceeded every expectation.",
  },
  {
    name: "Emily Johnson",
    title: "Creative Director at PixelPush",
    message:
      "I’ve worked with other designers before, but this was on another level. AJ brought strategic insight, clean design, and exceptional attention to detail. Highly recommended.",
  },
  {
    name: "Michael Brown",
    title: "Head of Product at AppCore",
    message:
      "What stood out most was AJ’s ability to turn complex ideas into clear, compelling visuals. He’s incredibly thoughtful, fast, and easy to work with.",
  },
  {
    name: "Sarah Davis",
    title: "Marketing Manager at Brandly",
    message:
      "From kickoff to final delivery, AJ worked with a level of craftsmanship and care that’s rare. Every decision felt intentional, and the results speak for themselves.",
  },
  {
    name: "Chris Wilson",
    title: "Startup Founder",
    message:
      "I came in with a vague vision—AJ brought it to life better than I could’ve imagined. Bold, clean, and completely aligned with what I needed.",
  },
  {
    name: "Laura Martin",
    title: "UX Lead at FlowLogic",
    message:
      "AJ took the time to really understand my goals and pushed the concept further than I expected. The outcome was not just beautiful, but effective.",
  },
  {
    name: "Daniel Lee",
    title: "Operations Manager at Nextgen Studio",
    message:
      "AJ communicated clearly, stayed on schedule, and delivered work that elevated my brand. I always knew where things stood and appreciated the transparency.",
  },
  {
    name: "Sophia Kim",
    title: "Founder at Luna Ventures",
    message:
      "Every part of the experience felt personal and well thought out. AJ handled everything—from concept to launch—with precision and professionalism.",
  },
  {
    name: "David Garcia",
    title: "Brand Consultant",
    message:
      "AJ didn’t just deliver great work—he delivered trust. The process was easy, the outcome was powerful, and I’m already planning the next project with him.",
  },
];

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
          <Swiper
            modules={[EffectFade]}
            pagination={{ clickable: true }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            loop={true}
            spaceBetween={0}
            className="mySwiper w-full"
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                className="px-2 rounded-lg lg:px-3 xl:px-4 flex h-auto"
                key={index}
              >
                <div className="select-none p-4 text-base-dark mx-auto">
                  <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight italic mb-20">
                    &quot;{testimonial.message}&quot;
                  </h4>
                  <div className="text-right">
                    <p className="text-lg md:text-2xl font-semibold">
                      - {testimonial.name}
                    </p>
                    <p className="text-sm md:text-lg text-base-dark/70">
                      {testimonial.title}
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
    </div>
  );
}
