"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

// Dynamically import video (no SSR needed for video)
const MainHeroVideo = dynamic(() => import("./snippets/mainVideoHero"), {
  ssr: false,
});

export default function MainHero() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { width: "85%" },
      {
        width: "100%",
        height: "110vh",
        borderRadius: "0",
        ease: "none",
        scrollTrigger: {
          // markers: true,
          trigger: sectionRef.current,
          start: "top center-=100",
          end: "top top",
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section className="flex flex-col items-start justify-center lg:items-center pt-28 pb-10 gap-4 lg:gap-16">
      <h1 className="text-center px-4 py-4 m-auto w-11/12 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-none">
        Crafting e-commerce experiences that convert, perform, and inspire.
      </h1>
      <div ref={sectionRef} className="relative w-full flex">
        <div
          ref={imageRef}
          className="rounded-3xl aspect-[3/4] sm:aspect-[3/4] md:aspect-[3/4] lg:aspect-[16/9] [will-change:width,border-radius] relative mx-auto overflow-hidden"
        >
          <MainHeroVideo />
        </div>
      </div>
    </section>
  );
}
