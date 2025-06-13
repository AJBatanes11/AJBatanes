"use client";

// import Image from "next/image";
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
      { width: "85%" },
      {
        width: "100%",
        height: "110vh",
        borderRadius: "0",
        ease: "none",
        scrollTrigger: {
          // markers: true,
          trigger: sectionRef.current,
          start: "top 80vh",
          end: "top top",
          scrub: 0.3,
          // onEnter: () => {
          //   document.documentElement.classList.add("dark");
          // },
          // onLeaveBack: () => {
          //   document.documentElement.classList.remove("dark");
          // },
        },
      }
    );
  }, []);

  // // Option 2
  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top top",
  //       end: "+=100vh", // locks for 1 screen
  //       pin: true,
  //       anticipatePin: 1, // avoids jump
  //       scrub: false, // snap-like feel (animation runs once)
  //     },
  //   });

  //   tl.fromTo(
  //     imageRef.current,
  //     { width: "80%", borderRadius: "1.5rem" },
  //     {
  //       width: "100%",
  //       borderRadius: "0rem",
  //       duration: 1,
  //       ease: "power2.out",
  //     }
  //   );
  // }, []);

  return (
    <section className="flex flex-col items-start justify-center lg:items-center pt-28 pb-10 lg:gap-4">
      <h1 className="text-left lg:text-center text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-none px-4 py-4 w-11/12">
        Crafting e-commerce experiences that convert, perform, and inspire.
      </h1>
      <div ref={sectionRef} className="relative w-full mt-10 flex">
        <div
          ref={imageRef}
          className="rounded-3xl aspect-[3/4] sm:aspect-[3/4] md:aspect-[3/4] lg:aspect-[16/9] [will-change:width,border-radius] relative mx-auto overflow-hidden"
        >
          {/* <Image
            src="/general/MainBanner.webp"
            alt="Main hero banner"
            fill
            sizes="(max-width: 768px) 768px, (max-width: 1024px) 1024px, 100vw"
            priority
            className="object-cover"
          /> */}
          <video
            poster="/general/MainBannerPoster.webp"
            aria-label="Looping background video of main banner"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
          >
            {/* <source src="/general/MainBanner.webm" type="video/webm" /> */}
            <source src="/general/MainBanner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
