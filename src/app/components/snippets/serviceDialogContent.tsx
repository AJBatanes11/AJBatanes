"use client";

import { Services } from "../../data/services";
import Marquee from "react-fast-marquee";

export default function ServiceDialogContent({
  service,
  onNext,
  onPrev,
}: {
  service: Services;
  onNext: () => void;
  onPrev: () => void;
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
          <strong aria-label={service.label}>{service.label}•</strong>
        </div>
      </Marquee>

      <div className="px-10">
        <p className="text-muted-foreground text-lg mb-6">{service.tag}</p>

        <div className="mt-12 flex justify-between">
          <button onClick={onPrev} className="link link--visible">
            ← Previous Service
          </button>
          <button onClick={onNext} className="link link--visible">
            See Next Service →
          </button>
        </div>
      </div>
    </>
  );
}
