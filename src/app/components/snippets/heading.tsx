import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  className: string;
};

export default function Heading({ children, className = "" }: HeadingProps) {
  return (
    <h2
      className={`text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-none ${className}`}
    >
      {children}
    </h2>
  );
}
