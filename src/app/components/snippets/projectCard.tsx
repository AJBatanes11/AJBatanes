// components/snippets/projectCard.tsx
"use client";

import Image, { StaticImageData } from "next/image";
import CursorClientWrapper from "./cursorTooltipClientWrapper";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  className?: string;
  style?: React.CSSProperties;
  project: Project;
  onClick?: () => void;
}

function getImageSrc(
  image?: string | StaticImageData
): StaticImageData | string | undefined {
  return image;
}

export default function ProjectCard({
  project,
  className = "",
  onClick,
}: ProjectCardProps) {
  return (
    <CursorClientWrapper
      cursorVariant="label"
      cursorLabel="View project"
      className={`
        project-card
        relative rounded-2xl overflow-hidden
        w-[45%] sm:w-[47%] lg:w-[30%]
        h-[250px] sm:h-[450px] md:h-[500px] lg:h-[350px] xl:h-[550px]
        float-left mt-6 sm:mt-8 lg:mt-10 mx-[1.5%]
        transition-all duration-500 ease-in-out
        text-base-dark bg-base-dark
        cursor-pointer lg:cursor-none
        ${className}
      `}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      {project.cardBanner && (
        <Image
          src={getImageSrc(project.cardBanner)!}
          alt={project.cardTitle || "Project banner"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 47vw, 30vw"
          className="object-cover object-center"
        />
      )}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#f4f4f4]/80 dark:from-[#252422]/80 to-transparent " />
      <div className="absolute z-10 bottom-0 leading-tight text-balance pb-3 sm:pb-4 pl-3 sm:pl-5 pr-5 sm:pr-10">
        {project.cardTitle && (
          <div className="text-base sm:text-xl lg:text-2xl font-semibold">
            {project.cardTitle}
          </div>
        )}
        {project.cardDescription && (
          <span className="text-xs">{project.cardDescription}</span>
        )}
      </div>
    </CursorClientWrapper>
  );
}
