"use client";

import { Dialog, Transition } from "@headlessui/react";
import { StaticImageData } from "next/image";
import { Fragment, useState } from "react";
import { useCursorStore } from "../../store/cursorTooltipStore";
import ProjectDialogContent from "./project-dialog-content";

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

export default function ProjectCard({ project, className = "" } : ProjectCardProps) {
    
    const { setCursor, resetCursor } = useCursorStore();
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <div
            style={{
                backgroundImage: `url(${(project.cardBanner as StaticImageData).src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }}
            className={`
            text-black dark:text-white
            relative rounded-[20px] overflow-hidden bg-neutral-500
            w-[45%] sm:w-[47%] xl:w-[30%]
            h-[250px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[500px]
            float-left mt-6 sm:mt-8 xl:mt-10 mx-[1.5%]
            shadow-[0_0_25px_5px_rgba(0,0,0,0.2)]
            dark:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)]
            transition-transform duration-500 ease-in-out
            ${className}
            `}
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setCursor("label", "View Project")}
            onMouseLeave={resetCursor}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-white/60 to-transparent dark:from-black/60 dark:to-transparent"></div>
                {/* {project.cardBanner && (
                <Image 
                    src={project.cardBanner} 
                    alt={project.cardTitle ?? "Project banner"} 
                    width={750} 
                    height={500}
                    layout="responsive"
                    className="rounded-xl"
                />
                )} */}
                <div className="absolute z-10 bottom-0 leading-tight text-balance pb-3 sm:pb-4 pl-3 sm:pl-5 pr-5 sm:pr-10">
                    {project.cardTitle && (
                        <div className="text-base xl:text-4xl">
                            {project.cardTitle}
                        </div>
                    )}
                    {project.cardDescription && (
                        <span className="text-xs">
                            {project.cardDescription}
                        </span>
                    )}
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" aria-hidden="true" />
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    <ProjectDialogContent project={project} onClose={() => setIsOpen(false)} />
                </Dialog>
            </Transition>

        </>
    );
}