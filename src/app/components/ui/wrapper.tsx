"use client";

import { ReactNode, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const pathname = usePathname();
  const lastTheme = useRef<boolean | null>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("section[data-theme]")
    ) as HTMLElement[];

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let maxVisibleSection: HTMLElement | null = null;
          let maxVisibleArea = 0;
          const viewportHeight = window.innerHeight;

          for (const section of sections) {
            const rect = section.getBoundingClientRect();
            if (rect.bottom > 0 && rect.top < viewportHeight) {
              const visibleHeight =
                Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
              if (visibleHeight > maxVisibleArea) {
                maxVisibleArea = visibleHeight;
                maxVisibleSection = section;
              }
            }
          }

          if (maxVisibleSection) {
            const isDark = maxVisibleSection.dataset.theme === "true";
            if (lastTheme.current !== isDark) {
              lastTheme.current = isDark;
              document.documentElement.classList.toggle("dark", isDark);
            }
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll(); // initial trigger

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return <>{children}</>;
}
