"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    const handleFirstScroll = () => {
      AOS.init({
        once: true,
        disable: "phone",
        duration: 700,
        easing: "ease-out-cubic",
      });
      window.removeEventListener("scroll", handleFirstScroll);
    };

    window.addEventListener("scroll", handleFirstScroll);

    return () => window.removeEventListener("scroll", handleFirstScroll);
  }, []);

  return null;
}
// This component initializes AOS (Animate On Scroll) library when the component is mounted.
// It uses the useEffect hook to call AOS.init() with specific options. 