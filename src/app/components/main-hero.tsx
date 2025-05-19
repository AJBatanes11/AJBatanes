"use client";

import { useState, useRef, useEffect } from "react";
import { useCursorStore } from "../store/cursorTooltipStore";

export default function MainHero() {
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
            videoRef.current.play().catch((err) => console.warn("Autoplay failed:", err));
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
                {/* Background Autoplay Video (Muted) */}
                {!isClicked && (
                    <video
                        preload="auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/fallback-poster.jpg"
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
                    />
                )}

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
                                const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                                setPlaybackProgress(percent);
                            }
                        }}
                        className="absolute top-0 left-0 w-full h-full object-cover z-10"
                        controls={false}
                        playsInline
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

                <div className={`relative z-30 flex flex-col gap-5 items-center justify-center h-full pointer-events-none duration-700 ${!isClicked ? "opacity-100" : "opacity-0"}`}>
                    <h1 className="text-white text-5xl font-bold text-center px-4">
                        AJ Batanes.
                    </h1>
                    <h2 className="text-white text-3xl font-bold text-center px-4">
                        Your trusted e-commerce and web developer.
                    </h2>
                </div>
            </div>
        </section>
    );
}
