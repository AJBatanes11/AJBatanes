import Image from "next/image";
import React from "react";

const logos = [
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/forme.svg", alt: "ForMe logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Placeholder logo" },
];

// Type for props
type LogoItemProps = {
  src: string;
  alt: string;
};

// Memoized LogoItem component (named export)
export const LogoItem: React.FC<LogoItemProps> = React.memo(({ src, alt }) => (
  <div className="flex justify-center items-center p-2 text-center text-base-dark fill-base-dark">
    <Image src={src} alt={alt} width={150} height={150} loading="lazy" />
  </div>
));
LogoItem.displayName = "LogoItem";

// Default export for main component
export default function TrustedBrands() {
  return (
    <div className="container max-w-screen-2xl mx-auto py-10 sm:py-40 px-4 md:px-8 lg:px-12 relative">
      <div className="clients__bg-one"></div>
      <div className="clients__bg-two"></div>
      <h2 className="text-3xl sm:text-4xl text-center leading-tight mb-10 lg:mb-14">
        Trusted by world-class e-commerce businesses.
      </h2>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-12 lg:gap-x-24 justify-center items-center">
        {logos.map((logo, i) => (
          <LogoItem key={i} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}
