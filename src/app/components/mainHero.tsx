"use client";

import dynamic from "next/dynamic";

// Dynamically import the player with no SSR
const MainHeroPlayer = dynamic(
  () => import("@/src/app/components/mainHeroPlayer"),
  { ssr: false }
);

export default function MainHero() {
  return (
    <section className="relative w-full h-dvh cursor-pointer">
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

      {/* Text Overlay */}
      {/* <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full pointer-events-none">
        <h1 className="text-white text-5xl font-bold text-center px-4">AJ Batanes.</h1>
        <h2 className="text-white text-3xl font-bold text-center px-4">
          Your trusted e-commerce and web developer.
        </h2>
      </div> */}

      {/* Interactive foreground video and logic */}
      <MainHeroPlayer />
    </section>
  );
}
