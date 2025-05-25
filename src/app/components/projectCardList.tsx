"use client";

import dynamic from "next/dynamic";
import projects from "../data/projects";

const ProjectCard = dynamic(() => import("./snippets/projectCard"), {
  ssr: false,
  loading: () => (
    <div
      className="
          relative rounded-[20px] overflow-hidden
          w-[45%] sm:w-[47%] xl:w-[30%]
          h-[250px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[500px]
          float-left mt-6 sm:mt-8 xl:mt-10 mx-[1.5%]
          shadow-[0_0_10px_5px_rgba(170,170,170,0.4)]
          dark:shadow-[0_0_10px_5px_rgba(85,85,85,0.4)]
          transition-transform duration-500 ease-in-out
          text-black-custom dark:text-white-custom
          bg-dark-glass dark:bg-light-glass
          opacity-5"
    >
      <div className="absolute z-10 bottom-0 leading-tight text-balance pb-3 sm:pb-4 pl-3 sm:pl-5 pr-5 sm:pr-10">
        <div className="text-base xl:text-4xl">Loading...</div>
        <span className="text-xs">loading...</span>
      </div>
    </div>
  ),
});

export default function ProjectCardList() {
  return (
    <>
      {projects.map((project, index) => {
        return (
          <ProjectCard
            project={project}
            key={index}
            className="opacity-0 translate-y-6 animate-fadeInUp"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: "forwards",
            }}
          />
        );
      })}
    </>
  );
}
