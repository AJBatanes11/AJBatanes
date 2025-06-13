"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import projects from "../data/projects";
import DrawerModal from "./snippets/drawerModal";
import ProjectDialogContent from "./snippets/projectDialogContent";

const ProjectCard = dynamic(() => import("./snippets/projectCard"), {
  ssr: false,
  loading: () => (
    <div className="w-[45%] sm:w-[47%] lg:w-[30%] h-[250px] sm:h-[450px] md:h-[500px] lg:h-[550px] float-left mt-6 sm:mt-8 lg:mt-10 mx-[1.5%] bg-base-dark opacity-10 rounded-[20px]" />
  ),
});

export default function ProjectCardList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeProject =
    typeof activeIndex === "number" ? projects[activeIndex] : null;

  const handleProject = (direction: "next" | "prev") => {
    if (activeIndex === null) return;

    const total = projects.length;

    const nextIndex =
      direction === "next"
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;

    setActiveIndex(nextIndex);
  };

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          className="opacity-0 translate-y-6 animate-fadeInUp"
          style={{
            animationDelay: `${index * 150}ms`,
            animationFillMode: "forwards",
          }}
          onClick={() => setActiveIndex(index)}
        />
      ))}

      <DrawerModal
        isOpen={activeProject !== null}
        onClose={() => setActiveIndex(null)}
        maxWidth="85vw"
      >
        {activeProject && (
          <ProjectDialogContent
            project={activeProject}
            onClose={() => setActiveIndex(null)}
            onNext={() => handleProject("next")}
            onPrev={() => handleProject("prev")}
          />
        )}
      </DrawerModal>
    </>
  );
}
