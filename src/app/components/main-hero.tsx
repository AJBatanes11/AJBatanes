"use client";

import { useState, useRef, useEffect } from "react";
import { useCursorStore } from "../store/cursorTooltipStore";

export default function MainHero() {
  const [isClicked, setIsClicked] = useState(false);
  const [inView, setInView] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { setCursor, resetCursor } = useCursorStore();

  // Handle play/pause on click
  useEffect(() => {
    if (isClicked && videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => console.warn("Autoplay failed:", err));
    } else if (!isClicked && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isClicked]);

  // Observe if MainHero is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Adjust cursor based on visibility and video state
  useEffect(() => {
    if (!inView) {
      resetCursor();
    } else {
      if (isClicked) {
        setCursor("invisible");
      } else {
        setCursor("label", "Watch reel");
      }
    }
  }, [inView, isClicked]);

  const handleClick = () => {
    const willPlay = !isClicked;
    setIsClicked(willPlay);
    setCursor(willPlay ? "invisible" : "label", "Watch reel");
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-dvh cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => {
        if (!isClicked && inView) setCursor("label", "Watch reel");
      }}
      onMouseLeave={() => {
        if (!isClicked) resetCursor();
      }}
    >
      <div className="relative h-dvh w-full cursor-pointer">
        {/* Background Autoplay Video (Muted) */}
        {!isClicked && (
          <video
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
          />
        )}

        {/* Foreground Video with Sound - plays when clicked */}
        {isClicked && (
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            controls={false}
          >
            <source
              src="https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
              type="video/mp4"
            />
          </video>
        )}

        {/* Overlay Text */}
        <div className="relative z-20 flex items-center justify-center h-full pointer-events-none">
          <h1 className="text-white text-5xl font-bold text-center px-4">
            Trusted e-commerce and web developer.
          </h1>
        </div>
      </div>
    </section>
  );
}
