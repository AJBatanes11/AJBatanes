"use client";

import { useState } from "react";
import FooterAccordion from "./footerAccordion";

interface FooterAccordionGroupProps {
  accordions: {
    title: string;
    items: { label: string; href: string }[];
  }[];
}

export default function FooterAccordionGroup({
  accordions,
}: FooterAccordionGroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {accordions.map((accordion, index) => (
        <FooterAccordion
          key={index}
          index={index}
          title={accordion.title}
          items={accordion.items}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </>
  );
}
