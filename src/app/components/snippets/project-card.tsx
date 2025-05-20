"use client";

import Image from "next/image";
import React from "react";
import { useCursorStore } from "../../store/cursorTooltipStore";

interface ProjectCardProps {
    className?: string;
    project: {
        cardBanner?: string;
        cardTitle?: string;
        cardDescription?: string;
        overview?: string;
        industry?: string;
        service?: string;
        technology?: string;
        website?: string;
        imageDesktop1?: string;
        imageMobile1?: string;
        heading1?: string;
        description1?: string;
        imageDesktop2?: string;
        imageMobile2?: string;
        heading2?: string;
        description2?: string;
    };
    onClick?: () => void;
}

const ProjectCard = React.memo(({ project, className = "", onClick }: ProjectCardProps) => {
    const { setCursor, resetCursor } = useCursorStore();

    return (
        <div
            role="button"
            tabIndex={0}
            aria-label={`View details for ${project.cardTitle}`}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick?.();
                }
            }}
            onMouseEnter={() => setCursor("label", "View Project")}
            onMouseLeave={resetCursor}
            className={`cursor-pointer relative rounded-[20px] overflow-hidden bg-neutral-500
        w-[45%] sm:w-[47%] xl:w-[30%]
        h-[250px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[500px]
        float-left mt-6 sm:mt-8 xl:mt-10 mx-[1.5%]
        shadow-[0_0_25px_5px_rgba(0,0,0,0.2)]
        dark:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)]
        transition-transform duration-500 ease-in-out
        ${className}`}
        >
            {project.cardBanner && (
                <Image
                    src={project.cardBanner}
                    alt={project.cardTitle || "Project Banner"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 30vw"
                    style={{ objectFit: "cover", borderRadius: "20px" }}
                    quality={75}
                />
            )}

            <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/60 to-transparent dark:from-black/60 dark:to-transparent" />

            <div className="absolute z-10 bottom-0 leading-tight text-balance pb-3 sm:pb-4 pl-3 sm:pl-5 pr-5 sm:pr-10 text-black dark:text-white">
                {project.cardTitle && <div className="text-base xl:text-4xl">{project.cardTitle}</div>}
                {project.cardDescription && <span className="text-xs">{project.cardDescription}</span>}
            </div>
        </div>
    );
});
ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
