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
          end: "+=1000", // adjust until it feels right
          scrub: true,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            document.documentElement.classList.toggle(
              "dark",
              self.progress >= 0.95
            );
          },
        },
      });

      tl.fromTo(
        ".zoom-box",
        {
          width: "50%",
          height: "300px",
        },
        {
          width: "100%",
          height: "100vh",
          ease: "power1.inOut",
        }
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
      </div>
    </section>
  );
}
