"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper/types";

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  { img: "/general/landscape_placeholder.jpg", alt: "Placeholder Image 1" },
  { img: "/general/landscape_placeholder2.jpg", alt: "Placeholder Image 2" },
  { img: "/general/landscape_placeholder.jpg", alt: "Placeholder Image 3" },
  { img: "/general/landscape_placeholder2.jpg", alt: "Placeholder Image 4" },
  { img: "/general/landscape_placeholder.jpg", alt: "Placeholder Image 5" },
  { img: "/general/landscape_placeholder2.jpg", alt: "Placeholder Image 6" },
  { img: "/general/landscape_placeholder.jpg", alt: "Placeholder Image 7" },
  { img: "/general/landscape_placeholder2.jpg", alt: "Placeholder Image 8" },
];

export default function AboutHero() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about-slider-wrapper",
          start: "center center",
          end: "bottom+=1000 top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress >= 0.95) {
              swiperRef.current?.autoplay?.stop();
              document.documentElement.classList.add("dark");
            } else {
              swiperRef.current?.autoplay?.start();
              document.documentElement.classList.remove("dark");
            }
          },
        },
      });
      tl.fromTo(
        ".swiper-zoom-wrapper",
        {
          width: "50%", // match initial width
          height: "300px", // must match Tailwind default on mobile
        },
        {
          width: "100%",
          height: "100vh", // or any target height like "80vh"
          ease: "power1.inOut",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about-slider-wrapper"
      className="relative flex justify-center items-center h-screen w-full"
    >
      <div className="swiper-zoom-wrapper m-auto w-1/2 h-[300px] sm:h-[400px] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] max-h-screen">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          autoplay={{
            delay: 200000,
          }}
          className="my-swiper w-full h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <div className="w-full h-full relative`">
                <Image
                  src={image.img}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
