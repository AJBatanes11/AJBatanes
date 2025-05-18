"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { useCursorStore } from "../../store/cursorTooltipStore";

interface ProjectCardProps {
    project: {
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
}

export default function ProjectCard({ project } : ProjectCardProps) {
    
    const { setCursor, resetCursor } = useCursorStore()
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <div 
            className="text-white dark:text-black bg-black dark:bg-white p-5 rounded-md" 
            onClick={() => setIsOpen(true)}
            onMouseEnter={() => setCursor('label', 'View Project')}
            onMouseLeave={resetCursor}
            >
                <div className="text-lg">
                    {project.cardTitle}
                </div>
                <span className="text-sm">
                    {project.cardDescription}
                </span>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
                <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
                    <div className="fixed inset-0 bg-white overflow-y-auto rounded-lg m-6 p-6">
                        {/* close button */}
                        <button onClick={() => setIsOpen(false)} className="absolute top-0 right-0 flex justify-center items-center">
                            &times;
                        </button>
                        {/* placeholders */}
                        <p className="mb-2"><strong>Overview:</strong> {project.overview}</p>
                        <p className="mb-2"><strong>Industry:</strong> {project.industry}</p>
                        <p className="mb-2"><strong>Service:</strong> {project.service}</p>
                        <p className="mb-2"><strong>Technology:</strong> {project.technology}</p>
                        <p className="mb-2">
                            <strong>Website:</strong>{" "}
                            <a href={project.website} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                                {project.website}
                            </a>
                        </p>

                        <hr className="my-4" />

                        {/* Section 1 */}
                        <h3 className="font-semibold mb-1">{project.heading1}</h3>
                        <p className="mb-2">{project.description1}</p>
                        {project.imageDesktop1 && (
                        <div className="mb-4">
                            <Image
                            src={project.imageDesktop1}
                            alt="Desktop View 1"
                            width={800}
                            height={500}
                            className="rounded"
                            />
                        </div>
                        )}
                        {project.imageMobile1 && (
                        <div className="mb-4">
                            <Image
                            src={project.imageMobile1}
                            alt="Mobile View 1"
                            width={400}
                            height={800}
                            className="rounded"
                            />
                        </div>
                        )}

                        {/* Section 2 */}
                        <h3 className="font-semibold mb-1">{project.heading2}</h3>
                        <p className="mb-2">{project.description2}</p>
                        {project.imageDesktop2 && (
                        <div className="mb-4">
                            <Image
                            src={project.imageDesktop2}
                            alt="Desktop View 2"
                            width={800}
                            height={500}
                            className="rounded"
                            />
                        </div>
                        )}
                        {project.imageMobile2 && (
                        <div className="mb-4">
                        <Image
                            src={project.imageMobile2}
                            alt="Mobile View 2"
                            width={400}
                            height={800}
                            className="rounded"
                            />
                        </div>
                        )}

                    </div>
                </Dialog>
            </Transition>
        </>
    );
}