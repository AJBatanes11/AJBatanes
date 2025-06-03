"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  sections: React.ReactNode[]; // Array of content (usually <div> blocks)
  scrollLength?: number; // How far the scroll should span (default: 1000px * (sections.length - 1))
  className?: string; // Optional outer className for customization
  dark?: boolean;
  disableTheming?: boolean;
}

export default function ScrollSection({
  sections,
  scrollLength,
  className = "",
  disableTheming = false,
  dark = false,
}: ScrollSectionProps) {
  const themeAttr = !disableTheming ? { "data-theme": dark } : {};
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: `-${100 * (sections.length - 1)}vw`,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: `${scrollLength ?? 1000 * (sections.length - 1)}px top`,
            scrub: 0.6,
            pin: true,
          },
        }
      );
    }, triggerRef);

    return () => ctx.revert();
  }, [sections.length, scrollLength]);

  return (
    <section
      {...themeAttr}
      ref={triggerRef}
      className={clsx("relative", className)}
    >
      <div
        ref={sectionRef}
        className="flex h-dvh w-[100vw] overflow-hidden"
        style={{ width: `${sections.length * 100}vw` }}
      >
        {sections.map((content, index) => (
          <div
            key={index}
            className="h-screen w-screen flex items-center justify-center"
          >
            {content}
          </div>
        ))}
      </div>
    </section>
  );
}
