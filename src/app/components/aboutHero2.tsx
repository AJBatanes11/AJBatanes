"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const aboutHero = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutHero.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Zoom animation
      tl.fromTo(
        ".zoom-box",
        { width: "50%", height: "300px" },
        { width: "100%", height: "100vh", ease: "power1.inOut" }
      );

      // Fade in text slightly after zoom starts
      tl.fromTo(
        ".zoom-text",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, ease: "power1.out", duration: 1 },
        "-=0.5" // overlap a bit with zoom
      );
    },
    { scope: aboutHero }
  );

  return (
    <section
      ref={aboutHero}
      className="relative flex justify-center items-center w-full min-h-screen overflow-hidden"
    >
      <div className="zoom-box relative overflow-hidden">
        <Image
          src="/general/landscape_placeholder.jpg"
          alt="Hero Zoom"
          fill
          className="object-cover w-full h-full"
          priority
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="zoom-text text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center px-4">
            Welcome to My World
          </h1>
        </div>
      </div>
    </section>
  );
}
