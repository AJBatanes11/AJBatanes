"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

type WrapperProps = {
  children: ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section[data-theme]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            const isDark = section.dataset.theme === "true";
            document.body.classList.toggle("dark", isDark);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    const visibleSection = Array.from(sections).find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
    });

    if (visibleSection) {
      const isDark = (visibleSection as HTMLElement).dataset.theme === "true";
      document.body.classList.toggle("dark", isDark);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
