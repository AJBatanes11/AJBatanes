"use client";

// import { useState } from "react";
// import dynamic from "next/dynamic";
// import CursorFollower from "./snippets/cursorFollower";

// const MainHeroPlayer = dynamic(
//   () => import("@/src/app/components/snippets/mainHeroPlayer"),
//   { ssr: false }
// );

export default function MainHero() {
  // const [showPlayer, setShowPlayer] = useState(false);

  return (
    <section
      className="relative w-full h-screen sm:h-dvh"
      // onClick={() => setShowPlayer(true)}
    >
      {/* <CursorFollower
        followerSize={120}
        labelInside="Watch reel"
        labelOutside="©AJ Batanes"
      > */}
      {/* Background Autoplay Video (Muted) */}
      <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-base-dark text-4xl sm:text-6xl font-bold z-20">
        Hello there, I'm AJ Batanes
      </h2>
      {/* <video
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/general/MainBanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <div
        className={`absolute inset-0 z-10 transition-opacity duration-500 
          ${showPlayer ? "opacity-100" : "opacity-0"}
          `}
      > */}
      <div className="absolute inset-0 z-10 transition-opacity duration-500">
        {/* <MainHeroPlayer /> */}
      </div>
      {/* </CursorFollower> */}
    </section>
  );
}
