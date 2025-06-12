"use client";

import { useState } from "react";
import Image from "next/image";
import services from "../data/services";
import DrawerModal from "./snippets/drawerModal";
import ServiceDialogContent from "./snippets/serviceDialogContent";

export default function AllServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeService =
    typeof activeIndex === "number" ? services[activeIndex] : null;

  const handleNextService = () => {
    if (activeIndex === null) return;
    const nextIndex = (activeIndex + 1) % services.length;
    setActiveIndex(nextIndex);
  };

  return (
    <div className="w-11/12 m-auto group">
      {services.map((service, index) => (
        <div
          key={index}
          role="button"
          tabIndex={index}
          onClick={() => setActiveIndex(index)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setActiveIndex(index);
          }}
          className={`w-full ${
            index === 0 ? "border-y" : "border-b"
          } border-glass-dark overflow-hidden cursor-pointer group/item transition-opacity duration-300 lg:group-hover:opacity-50 lg:hover:!opacity-100`}
        >
          <div className="flex flex-col lg:flex-row flex-nowrap gap-4 my-5 mx-2">
            <div className="relative min-w-[200px] max-w-sm">
              <Image
                src={service.banner}
                alt={`${service.label} banner`}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className="">
                <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
                  {service.label}
                </p>
                <p className="text-base text-muted-foreground mt-2">
                  {service.tag}
                </p>
              </div>
              <span className="link link--visible text-lg md:text-2xl mt-5 w-fit">
                View more details
              </span>
            </div>
          </div>
        </div>
      ))}

      {/* Modal Drawer */}
      <DrawerModal
        isOpen={activeService !== null}
        onClose={() => setActiveIndex(null)}
        maxWidth="90vw"
      >
        {activeService && (
          <ServiceDialogContent
            service={activeService}
            onNext={handleNextService}
          />
        )}
      </DrawerModal>
    </div>
  );
}
