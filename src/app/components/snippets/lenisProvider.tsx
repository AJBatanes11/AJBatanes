"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export let lenis: Lenis | null = null;

export default function LenisProvider() {
  useEffect(() => {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 🧩 Sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Optional: refresh triggers on resize or route change
    ScrollTrigger.defaults({ scroller: window });

    return () => {
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return null;
}
