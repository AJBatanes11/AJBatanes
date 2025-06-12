"use client";

import Image from "next/image";
import { Services } from "../../data/services";

export default function ServiceDialogContent({
  service,
}: {
  service: Services;
}) {
  return (
    <div className="p-10">
      <h2 className="text-4xl font-bold mb-4">{service.label}</h2>
      <p className="text-muted-foreground text-lg mb-6">{service.tag}</p>
      <Image
        src={service.banner}
        alt={`${service.label} banner`}
        width={1000}
        height={600}
        className="rounded-2xl object-cover w-full h-auto"
      />
    </div>
  );
}
