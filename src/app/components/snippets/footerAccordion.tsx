"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  // Helper: Only toggle on mobile, prevent toggling on lg+
  function handleToggle() {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      onToggle(index);
    }
  }

  return (
    <div
      className={`
        flex flex-col gap-0 py-3 lg:py-0
        border-t-[1px] lg:border-none
        last:border-b-[1px]
      `}
    >
      <button
        className="flex flex-row justify-between items-center lg:cursor-default"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`footer-accordion-content-${index}`}
      >
        <h4 className="text-xl lg:font-bold">{title}</h4>
        <span className="lg:hidden" aria-hidden="true">
          {isOpen ? "-" : "+"}
        </span>
      </button>

      {/* Desktop: always show content, no animation */}
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

      {/* Mobile: animated accordion content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`footer-accordion-content-${index}`}
            key="content"
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
                    className={`link ${
                      pathname === item.href ? "link--visible" : ""
                    } text-sm lg:text-base`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
