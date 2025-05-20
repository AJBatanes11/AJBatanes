"use client";

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ProjectCard from "../../components/snippets/project-card";
import ProjectDialogContent from "../../components/snippets/project-dialog-content";
import Container from "../../components/ui/container";
import projects from "../../data/projects";

export default function Work() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  return (
    <>
      <Container>
        <h1 className="text-4xl">My Work Page*</h1>
      </Container>
      <Container dark>
        <div className="flex flex-wrap justify-center md:px-5 my-10 sm:my-20 w-11/12 md:w-4/5 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            let topClass = "";

            // XL layout logic
            switch (index % 3) {
              case 1:
                topClass = "xl:-top-[120px]";
                break;
              case 2:
                topClass = "xl:-top-[400px]";
                break;
              default:
                topClass = "xl:top-[20px]";
            }

            if (index % 2 === 0) {
              topClass += " top-0";
            } else {
              topClass += " -top-[60px] md:-top-[80px]";
            }

            return (
              <ProjectCard
                key={index}
                project={project}
                className={topClass}
                onClick={() => setActiveProject(project)}
              />
            );
          })}
        </div>
      </Container>

      {/* Shared dialog */}
      <Transition appear show={!!activeProject} as={Fragment}>
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          aria-hidden="true"
        />
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setActiveProject(null)}
        >
          {activeProject && (
            <ProjectDialogContent
              project={activeProject}
              onClose={() => setActiveProject(null)}
            />
          )}
        </Dialog>
      </Transition>
    </>
  );
}
