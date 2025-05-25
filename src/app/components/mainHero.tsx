"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import CursorFollower from "./snippets/cursorFollower";

const MainHeroPlayer = dynamic(
  () => import("@/src/app/components/mainHeroPlayer"),
  { ssr: false }
);

export default function MainHero() {
  const [showPlayer, setShowPlayer] = useState(false);
  const [originalPos, setOriginalPos] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    setOriginalPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  }, []);

  if (!originalPos) {
    // Render nothing or a loader until client size is known
    return null;
  }

  return (
    <section
      className="relative w-full h-screen sm:h-dvh cursor-none lg:cursor-none"
      onClick={() => setShowPlayer(true)}
    >
      <CursorFollower
        followerSize={120}
        labelInside="Watch reel"
        labelOutside="©AJ Batanes"
      >
        {/* Background Autoplay Video (Muted) */}
        <video
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
        />

        {/* Foreground Player */}
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-500 ${
            showPlayer ? "opacity-100" : "opacity-0"
          }`}
        >
          <MainHeroPlayer />
        </div>
      </CursorFollower>
    </section>
  );
}
