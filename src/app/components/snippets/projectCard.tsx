"use client";

import Image, { StaticImageData } from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ProjectDialogContent from "./projectDialogContent";
import CursorClientWrapper from "./cursorTooltipClientWrapper";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  className?: string;
  style?: React.CSSProperties;
  project: Project;
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CursorClientWrapper
        cursorVariant="label"
        cursorLabel="View project"
        className={`
          project-card
          relative rounded-[20px] overflow-hidden
          w-[45%] sm:w-[47%] lg:w-[30%]
          h-[250px] sm:h-[450px] md:h-[500px] lg:h-[350px] xl:h-[550px]
          float-left mt-6 sm:mt-8 lg:mt-10 mx-[1.5%]
          shadow-[0_0_10px_5px_rgba(128,128,128,0.4)]
          transition-transform duration-500 ease-in-out
          text-base-dark bg-base-dark
          cursor-pointer lg:cursor-none
          ${className}
        `}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        {/* Image as background */}
        {project.cardBanner && (
          <Image
            src={getImageSrc(project.cardBanner)!}
            alt={project.cardTitle || "Project banner"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 47vw, 30vw"
            className="object-cover object-center"
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/60 to-transparent dark:from-black/60"></div>

        {/* Content */}
        <div className="absolute z-10 bottom-0 leading-tight text-balance pb-3 sm:pb-4 pl-3 sm:pl-5 pr-5 sm:pr-10">
          {project.cardTitle && (
            <div className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold">
              {project.cardTitle}
            </div>
          )}
          {project.cardDescription && (
            <span className="text-xs">{project.cardDescription}</span>
          )}
        </div>
      </CursorClientWrapper>

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
