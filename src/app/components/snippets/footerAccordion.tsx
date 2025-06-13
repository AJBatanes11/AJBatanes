"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface FooterAccordionProps {
  title: string;
  items: { label: string; href: string }[];
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

export default function FooterAccordion({
  title,
  items,
  index,
  isOpen,
  onToggle,
}: FooterAccordionProps) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  function handleToggle() {
    if (isMobile) {
      onToggle(index);
    }
  }

  return (
    <nav
      className={`
        flex flex-col gap-0 py-3 lg:py-0
        border-t-[1px] lg:border-none
        last:border-b-[1px]
      `}
    >
      <div className="text-xl lg:font-bold">
        <button
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls={`footer-accordion-content-${index}`}
          className="w-full text-left flex justify-between items-center lg:cursor-default"
          aria-label={`Toggle ${title} section`}
        >
          {title}
          <span className="lg:hidden" aria-hidden="true">
            {isOpen ? "-" : "+"}
          </span>
        </button>
      </div>
      {/* Desktop - Non-accordion */}
      <div className="hidden lg:block mt-4">
        <ul className="flex flex-col gap-4 mb-2">
          {items.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className={`link ${
                  pathname === item.href ? "link--visible" : ""
                } text-sm lg:text-base`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile - Accordion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`footer-accordion-content-${index}`}
            key={`footer-accordion-content-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="mt-4 lg:hidden"
          >
            <ul className="flex flex-col gap-4 mb-2">
              {items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    onClick={() => onToggle(index)}
                    className={`link ${pathname === item.href ? "link--visible" : ""} text-sm lg:text-base`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
