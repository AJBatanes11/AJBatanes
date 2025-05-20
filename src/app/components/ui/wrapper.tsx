"use client";

import { ReactNode, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const darkModeRef = useRef<boolean | null>(null); // to avoid redundant setState

  useEffect(() => {
    // Cache sections on pathname change
    sectionsRef.current = Array.from(
      document.querySelectorAll("section[data-theme]")
    ) as HTMLElement[];
  }, [pathname]);

  useEffect(() => {
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = sectionsRef.current;
          let maxVisibleSection: HTMLElement | null = null;
          let maxVisibleArea = 0;
          const viewportHeight = window.innerHeight;

          for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < viewportHeight) {
              const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
              if (visibleHeight > maxVisibleArea) {
                maxVisibleArea = visibleHeight;
                maxVisibleSection = section;
              }
            }
          }

          const isDark = maxVisibleSection && maxVisibleSection.dataset.theme === "true";

          // Update state only if changed
          if (darkModeRef.current !== isDark) {
            darkModeRef.current = isDark;
            setDarkMode(isDark);
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll(); // initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (darkMode === null) return;

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return <>{children}</>;
}
