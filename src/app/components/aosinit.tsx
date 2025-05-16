"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return null;
}
// This component initializes AOS (Animate On Scroll) library when the component is mounted.
// It uses the useEffect hook to call AOS.init() with specific options. 