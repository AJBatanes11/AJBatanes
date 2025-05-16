"use client";

import { useState } from "react";
import Link from "next/link";

interface FooterAccordionProps {
  title: string;
  items: { label: string; href: string }[];
}

export default function FooterAccordion({ title, items }: FooterAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`
        flex flex-col gap-0 lg:gap-5 py-3 lg:py-0
        border-t-[1px] lg:border-none
        last:border-b-[1px]
      `}
    >
      <button
        className="flex flex-row justify-between items-center lg:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-xl lg:font-bold">{title}</h4>
        <span className="lg:hidden">{isOpen ? '-' : '+'}</span>
      </button>

      <div
        className={`
          transition-all duration-300 overflow-hidden
          ${isOpen ? "max-h-[300px] mt-4" : "max-h-0"}
          lg:max-h-full
        `}
      >
        <ul className="flex flex-col gap-4 mb-2">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-sm lg:text-base hover:text-gray-300 dark:hover:text-gray-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
