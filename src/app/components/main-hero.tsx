"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useCursorStore } from "../store/cursorTooltipStore";

export default function MainHero() {
  const [isClicked, setIsClicked] = useState(false);
  const [inView, setInView] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  const lastProgressUpdate = useRef(0);
  const lastTimeUpdate = useRef(0);

  const { setCursor, resetCursor } = useCursorStore();

  // Play or pause video depending on click and readiness
  useEffect(() => {
    if (!videoRef.current) return;

    if (isClicked && isReady) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => console.warn("Autoplay failed:", err));
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsReady(false);
      setBuffered(0);
      setPlaybackProgress(0);
    }
  }, [isClicked, isReady]);

  // Intersection Observer: detect if section is at least 50% visible
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Update cursor depending on inView, click, and video readiness
  useEffect(() => {
    if (!inView) {
      resetCursor();
      return;
    }

    if (isClicked && isReady) {
      setCursor("invisible");
    } else {
      setCursor("label", "Watch reel");
    }
  }, [inView, isClicked, isReady, resetCursor, setCursor]);

  // Handle clicking the video banner (toggle play)
  const handleClick = useCallback(() => {
    const willPlay = !isClicked;
    setIsClicked(willPlay);
    setCursor(willPlay ? "invisible" : "label", "Watch reel");
  }, [isClicked, setCursor]);

  // Throttled video buffering progress update
  const handleProgress = useCallback(() => {
    if (!videoRef.current) return;

    const now = Date.now();
    if (now - lastProgressUpdate.current < 300) return;

    const bufferedEnd = videoRef.current.buffered.length
      ? videoRef.current.buffered.end(0)
      : 0;
    const duration = videoRef.current.duration || 1;

    setBuffered(Math.min((bufferedEnd / duration) * 100, 100));
    lastProgressUpdate.current = now;
  }, []);

  // Throttled playback progress update
  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current) return;

    const now = Date.now();
    if (now - lastTimeUpdate.current < 300) return;

    setPlaybackProgress(
      (videoRef.current.currentTime / videoRef.current.duration) * 100
    );
    lastTimeUpdate.current = now;
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Video banner showcasing AJ Batanes"
      className="relative w-full h-auto cursor-pointer"
      onClick={handleClick}
      onMouseEnter={() => {
        if (!isClicked && inView) setCursor("label", "Watch reel");
      }}
      onMouseLeave={() => {
        if (!isClicked) resetCursor();
      }}
    >
      <div className="relative h-dvh w-full cursor-pointer">
        {/* Background muted autoplay video */}
        {!isClicked && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/poster.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="/videos/AutoplayPlaceholder.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Foreground video with sound */}
        {isClicked && (
          <video
            preload="none"
            poster="/videos/poster.jpg"
            ref={videoRef}
            onCanPlayThrough={() => setIsReady(true)}
            onProgress={handleProgress}
            onTimeUpdate={handleTimeUpdate}
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            controls={false}
            playsInline
          >
            <source src="/videos/VideoPlaceholder.mp4" type="video/mp4" />
          </video>
        )}

        {/* Loading overlay while video loads */}
        {isClicked && !isReady && (
          <div className="absolute inset-0 bg-black flex flex-col items-center justify-center z-20">
            <p className="text-white text-lg animate-pulse">Loading video...</p>
            <div className="mt-4 w-1/2 bg-white/20 h-1 rounded-full overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-300 ease-in-out"
                style={{ width: `${buffered}%` }}
              />
            </div>
          </div>
        )}

        {/* Playback progress bar */}
        {isClicked && isReady && (
          <div className="absolute bottom-0 left-0 w-full z-30">
            <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
              <div
                className="bg-white h-full transition-all duration-200 ease-linear"
                style={{ width: `${playbackProgress}%` }}
              />
            </div>
          </div>
        )}

        {/* Text overlay */}
        <div
          className={`relative z-30 flex flex-col gap-5 items-center justify-center h-full pointer-events-none duration-700 ${
            !isClicked ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-white text-5xl font-bold text-center px-4">
            AJ Batanes.
          </h1>
          <h2 className="text-white text-3xl font-bold text-center px-4">
            Your trusted e-commerce web developer.
          </h2>
        </div>
      </div>
    </section>
  );
}
