"use client";

import { useState, useRef, useEffect } from "react";

export default function MainHeroPlayer() {
  const [isClicked, setIsClicked] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [playbackProgress, setPlaybackProgress] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isClicked && videoRef.current && isReady) {
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .catch((err) => console.warn("Autoplay failed:", err));
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  }, [isClicked, isReady]);

  // Close player on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isClicked) {
        setIsClicked(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isClicked]);

  const handleClick = () => {
    const willPlay = !isClicked;
    setIsClicked(willPlay);
  };

  return (
    <section
      ref={sectionRef}
      className="absolute top-0 left-0 w-full h-full cursor-pointer z-10"
      onClick={handleClick}
    >
      {/* Foreground Video with Sound - always mounted */}
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
              (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setPlaybackProgress(percent);
          }
        }}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isClicked ? "opacity-100" : "opacity-0"
        }`}
        controls={false}
        playsInline
        preload="metadata"
        muted={!isClicked}
        autoPlay={isClicked}
      >
        <source
          src="https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
          type="video/mp4"
        />
      </video>

      {/* Loading Overlay */}
      {isClicked && !isReady && (
        <div className="absolute top-0 left-0 bg-white-custom dark:bg-black-custom w-full h-full flex flex-col items-center justify-center z-20">
          <p className="text-black-custom dark:text-white-custom text-lg animate-pulse">
            Loading video...
          </p>
          <div className="mt-4 w-1/2 bg-light-glass h-1 rounded-full overflow-hidden">
            <div
              className="bg-white-custom h-full transition-all duration-300 ease-in-out"
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
              className="bg-white h-full transition-all duration-100 ease-linear"
              style={{ width: `${playbackProgress}%` }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
