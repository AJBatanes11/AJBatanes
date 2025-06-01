"use client";

import React, { useEffect, useRef, useState } from "react";

type ContainerProps = {
  children: React.ReactNode;
  main?: boolean;
  dark?: boolean;
  small?: boolean;
  disableTheming?: boolean;
  revealOnce?: boolean;
  disableReveal?: boolean; // <- new prop
  ariaLabel?: string;
};

export default function Container({
  children,
  main = false,
  dark = false,
  small = false,
  disableTheming = false,
  revealOnce = false,
  disableReveal = false, // <- new prop
  ariaLabel = "Container",
}: ContainerProps) {
  const themeAttr = !disableTheming ? { "data-theme": dark } : {};
  const containerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(disableReveal); // <- default to true if reveal disabled

  useEffect(() => {
    if (disableReveal) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (revealOnce) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        } else {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [revealOnce, disableReveal]);

  return (
    <section
      ref={containerRef}
      {...themeAttr}
      aria-label={ariaLabel}
      className={`
        ${small ? "" : "min-h-screen"} 
        flex items-center justify-center 
        ${main ? "" : "py-10"}
        ${isVisible ? "visible" : "invisible"}
      `}
    >
      {children}
    </section>
  );
}
