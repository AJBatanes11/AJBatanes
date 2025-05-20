"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useCursorStore } from "../store/cursorTooltipStore";

export default function MainHero() {
  const [isClicked, setIsClicked] = useState(false);
  const [inView, setInView] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const lastProgressUpdate = useRef(0);
  const lastTimeUpdate = useRef(0);

  const { setCursor, resetCursor } = useCursorStore();

  // Play or pause video depending on click and ready state
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

  // Intersection Observer to detect if section is in view (threshold 50%)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Update cursor state based on inView, isClicked, and isReady
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

  const handleClick = useCallback(() => {
    const willPlay = !isClicked;
    setIsClicked(willPlay);
    setCursor(willPlay ? "invisible" : "label", "Watch reel");
  }, [isClicked, setCursor]);

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
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
            poster="/fallback-poster.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/videos/AutoplayPlaceholder.mp4"
          />
        )}

        {/* Foreground video with sound */}
        {isClicked && (
          <video
            preload="auto"
            poster="/fallback-poster.jpg"
            ref={videoRef}
            onCanPlayThrough={() => setIsReady(true)}
            onProgress={handleProgress}
            onTimeUpdate={handleTimeUpdate}
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            controls={false}
            playsInline
          >
            <source
              src="/videos/VideoPlaceholder.mp4"
              type="video/mp4"
            />
          </video>
        )}
        {/* Optimize video rendering: only mount one <video> at a time */}
        {/* Loading overlay */}
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
