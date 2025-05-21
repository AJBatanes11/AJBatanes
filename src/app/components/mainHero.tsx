"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const MainHeroPlayer = dynamic(
  () => import("@/src/app/components/mainHeroPlayer"),
  { ssr: false }
);

export default function MainHero() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <section
      className="relative w-full h-screen sm:h-dvh cursor-pointer"
      onClick={() => setShowPlayer(true)}
    >
      {/* Background Autoplay Video (Muted) */}
      <video
        preload="metadata"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
      />

      {/* Foreground Player - Already Mounted */}
      <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 ${
          showPlayer
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <MainHeroPlayer />
      </div>
    </section>
  );
}
