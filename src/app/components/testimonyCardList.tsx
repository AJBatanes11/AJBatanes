"use client";

import "swiper/css";
import "swiper/css/effect-fade";
import dynamic from "next/dynamic";

const TestimoniesSwiper = dynamic(
  () => import("./snippets/testimoniesSwiper"),
  {
    ssr: false,
  }
);

export default function TestimonyCardList() {
  return (
    <div className="w-full mx-auto py-10 sm:py-32 px-4 md:px-8 lg:px-12">
      <TestimoniesSwiper />
    </div>
  );
}
