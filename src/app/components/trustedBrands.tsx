import Image from "next/image";
import React from "react";
import brands from "../data/brands";
import Heading from "./snippets/heading";

export const BrandItem = React.memo(({ src, alt }: (typeof brands)[number]) => (
  <div
    className="flex justify-center items-center p-2 text-center text-base-dark fill-base-dark"
    aria-hidden="true"
  >
    <Image src={src} alt={alt} width={150} height={150} loading="lazy" />
  </div>
));
BrandItem.displayName = "BrandItem";

export default function TrustedBrands() {
  return (
    <div className="w-full mx-auto py-10 sm:py-14 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12 relative">
      <Heading className="mb-9 lg:mb-20 text-left lg:text-center">
        Trusted by world-class <br />
        e-commerce businesses.
      </Heading>
      <ul className="w-full grid grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-12 lg:gap-x-24 justify-center items-center">
        {brands.map((brand, i) => (
          <li key={i}>
            <BrandItem {...brand} />
          </li>
        ))}
      </ul>
    </div>
  );
}
