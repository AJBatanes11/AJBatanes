"use client";

import Image from "next/image";
import { Services } from "../../data/services";
import Marquee from "react-fast-marquee";

export default function ServiceDialogContent({
  service,
}: {
  service: Services;
}) {
  return (
    <>
      <Marquee
        autoFill
        speed={25}
        direction="right"
        className="select-none w-full mb-4 h-28 sm:h-48"
      >
        <div className="ml-10 text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-none text-center">
          <strong aria-label="Development">{service.label}</strong>
        </div>
      </Marquee>
      <div className="px-10">
        <p className="text-muted-foreground text-lg mb-6">{service.tag}</p>
      </div>
    </>
  );
}
