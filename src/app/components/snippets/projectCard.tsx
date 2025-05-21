"use client";

import Image, { StaticImageData } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import { useCursorStore } from "../../store/cursorTooltipStore";

const ProjectDialogContent = dynamic(() => import("./projectDialogContent"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-white">
      Loading...
    </div>
  ),
});

interface ProjectCardProps {
  className?: string;
  project: {
    cardBanner?: string | StaticImageData;
    cardTitle?: string;
    cardDescription?: string;
    overview?: string;
    industry?: string;
    service?: string;
    technology?: string;
    website?: string;
    imageDesktop1?: string | StaticImageData;
    imageMobile1?: string | StaticImageData;
    heading1?: string;
    description1?: string;
    imageDesktop2?: string | StaticImageData;
    imageMobile2?: string | StaticImageData;
    heading2?: string;
    description2?: string;
  };
}

function getImageSrc(
  image?: string | StaticImageData
): StaticImageData | string | undefined {
  if (!image) return undefined;
  return image;
}

export default function ProjectCard({
  project,
  className = "",
}: ProjectCardProps) {
  const { setCursor, resetCursor } = useCursorStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`
          relative rounded-[20px] overflow-hidden
          w-[45%] sm:w-[47%] xl:w-[30%]
          h-[250px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[500px]
          float-left mt-6 sm:mt-8 xl:mt-10 mx-[1.5%]
          shadow-[0_0_25px_5px_rgba(0,0,0,0.2)]
          dark:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)]
          transition-transform duration-500 ease-in-out
          text-black dark:text-white
          bg-neutral-500
          ${className}
        `}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setCursor("label", "View Project")}
        onMouseLeave={resetCursor}
      >
        {/* Image as background */}
        {project.cardBanner && (
          <Image
            src={getImageSrc(project.cardBanner)!}
            alt={project.cardTitle || "Project banner"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 47vw, 30vw"
            className="object-cover object-center"
            priority={false} // lazy loads by default
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/60 to-transparent dark:from-black/60 dark:to-transparent"></div>

        {/* Content */}
        <div className="absolute z-10 bottom-0 leading-tight text-balance pb-3 sm:pb-4 pl-3 sm:pl-5 pr-5 sm:pr-10">
          {project.cardTitle && (
            <div className="text-base xl:text-4xl">{project.cardTitle}</div>
          )}
          {project.cardDescription && (
            <span className="text-xs">{project.cardDescription}</span>
          )}
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          aria-hidden="true"
        />
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpen(false)}
        >
          <ProjectDialogContent
            project={project}
            onClose={() => setIsOpen(false)}
          />
        </Dialog>
      </Transition>
    </>
  );
}
