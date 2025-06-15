"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./loader";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const pathname = usePathname();
  const lastTheme = useRef<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Loader logic
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  // Prevent scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  // Scroll-triggered theme toggle
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

    // Delay to wait for new page content to mount
    const timeout = setTimeout(() => onScroll(), 100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <>
      <AnimatePresence>{isLoading && <Loader key="loader" />}</AnimatePresence>

      <motion.div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: isLoading ? 1.5 : 0,
        }}
        className={isLoading ? "pointer-events-none" : ""}
      >
        {children}
      </motion.div>
    </>
  );
}
