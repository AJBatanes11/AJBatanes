"use client";

import { useState, useRef, useEffect } from "react";
import { useCursorStore } from "../store/cursorTooltipStore";

export default function MainHeroPlayer() {
  const [isClicked, setIsClicked] = useState(false);
  const [inView, setInView] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { setCursor, resetCursor } = useCursorStore();

  useEffect(() => {
    if (isClicked && videoRef.current && isReady) {
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .catch((err) => console.warn("Autoplay failed:", err));
    } else if (!isClicked && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isClicked, isReady]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      resetCursor();
    } else {
      if (isClicked && isReady) {
        setCursor("invisible");
      } else {
        setCursor("label", "Watch reel");
      }
    }
  }, [inView, isClicked, isReady, resetCursor, setCursor]);

  const handleClick = () => {
    const willPlay = !isClicked;
    setIsClicked(willPlay);
    setCursor(willPlay ? "invisible" : "label", "Watch reel");
  };

  return (
    <section
      ref={sectionRef}
      className="absolute top-0 left-0 w-full h-full cursor-pointer z-10"
      onClick={handleClick}
      onMouseEnter={() => {
        if (!isClicked && inView) setCursor("label", "Watch reel");
      }}
      onMouseLeave={() => {
        if (!isClicked) resetCursor();
      }}
    >
      {/* Foreground Video with Sound */}
      {isClicked && (
        <video
          ref={videoRef}
          onCanPlayThrough={() => setIsReady(true)}
          onProgress={() => {
            if (videoRef.current) {
              const bufferedEnd = videoRef.current.buffered.length
                ? videoRef.current.buffered.end(0)
                : 0;
              const duration = videoRef.current.duration || 1;
              const percent = Math.min((bufferedEnd / duration) * 100, 100);
              setBuffered(percent);
            }
          }}
          onTimeUpdate={() => {
            if (videoRef.current) {
              const percent =
                (videoRef.current.currentTime / videoRef.current.duration) *
                100;
              setPlaybackProgress(percent);
            }
          }}
          className="w-full h-full object-cover"
          controls={false}
          playsInline
          preload="metadata"
        >
          <source
            src="https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* Loading Overlay */}
      {isClicked && !isReady && (
        <div className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-20">
          <p className="text-white text-lg animate-pulse">Loading video...</p>
          <div className="mt-4 w-1/2 bg-white/20 h-1 rounded-full overflow-hidden">
            <div
              className="bg-white h-full transition-all duration-300 ease-in-out"
              style={{ width: `${buffered}%` }}
            />
          </div>
        </div>
      )}

      {/* Playback Progress Bar */}
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
    </section>
  );
}
