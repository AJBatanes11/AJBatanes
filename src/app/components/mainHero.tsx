"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainHero() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { width: "50%" },
      {
        width: "100%",
        borderRadius: "0",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=100 top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-start justify-center lg:items-center pt-28 pb-10"
    >
      <h1 className="text-left lg:text-center text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-none px-4 w-11/12">
        Crafting e-commerce experiences that convert, perform, and inspire.
      </h1>
      <div
        ref={imageRef}
        className="relative w-full mt-10 overflow-hidden rounded-3xl
          aspect-[3/4] sm:aspect-[3/4] md:aspect-[3/4] lg:aspect-[16/9] [will-change:width,border-radius]"
      >
        <Image
          src="/general/landscape_placeholder.jpg"
          alt="Main hero banner"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
