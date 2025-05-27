"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import CursorFollower from "./snippets/cursorFollower";

const MainHeroPlayer = dynamic(
  () => import("@/src/app/components/snippets/mainHeroPlayer"),
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
        >
          <source src="/general/MainBanner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
