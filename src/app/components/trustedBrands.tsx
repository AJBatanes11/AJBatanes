import Image from "next/image";
import React from "react";

const logos = [
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
  { src: "/brand-logos/penshoppe.png", alt: "Penshoppe logo" },
  { src: "/brand-logos/oxgn.png", alt: "OXGN logo" },
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
    <div className="w-full mx-auto py-10 sm:py-32 px-4 md:px-8 lg:px-12 relative">
      <h2 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-none text-center mb-20">
        Trusted by world-class <br />
        e-commerce businesses.
      </h2>
      <div className="w-full grid grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-12 lg:gap-x-24 justify-center items-center">
        {logos.map((logo, i) => (
          <LogoItem key={i} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}
