"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[data-theme]")) as HTMLElement[];
    let ticking = false;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let maxVisibleSection: HTMLElement | null = null;
          let maxVisibleArea = 0;

          const viewportHeight = window.innerHeight;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            if (rect.bottom > 0 && rect.top < viewportHeight) {
              const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
              if (visibleHeight > maxVisibleArea) {
                maxVisibleArea = visibleHeight;
                maxVisibleSection = section;
              }
            }
          });

          if (maxVisibleSection && (maxVisibleSection as HTMLElement).dataset) {
            const isDark = (maxVisibleSection as HTMLElement).dataset.theme === "true";
            setDarkMode(isDark);
          } else {
            setDarkMode(false);
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
  }, [pathname]);

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
