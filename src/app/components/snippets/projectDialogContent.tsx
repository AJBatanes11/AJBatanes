"use client";

import { Project } from "../../data/projects";
import Button from "./customButton";
import Link from "next/link";
import Image from "next/image";

interface ProjectDialogContentProps {
  project: Project;
  onClose: () => void;
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function ProjectDialogContent({
  project,
  onClose,
}: ProjectDialogContentProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      aria-describedby="project-dialog-description"
      className="fixed inset-0 bg-static-baseLight text-static-baseDark z-50 overflow-hidden rounded-lg m-8 md:m-10 2xl:m-14"
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 overflow-y-auto">
          {/* Intro Section */}
          <section className="w-full relative grid grid-cols-1 lg:grid-cols-3">
            {/* Close Button */}
            <button
              onClick={() => {
                onClose();
              }}
              aria-label="Close project details"
              className="text-static-baseLight fixed top-0 right-0 z-20 mt-2 mr-2 sm:mr-5 flex justify-center items-center"
            >
              <CloseIcon />
            </button>
            <div className="col-span-2 flex flex-col items-center lg:items-start justify-center text-center lg:text-start p-10">
              <h3 className="text-2xl lg:text-5xl mb-6 font-semibold">
                The Brief
              </h3>
              <p className="text-sm lg:text-base">{project.overview}</p>
            </div>
            <aside className="text-sm lg:text-base bg-static-baseDark text-static-baseLight flex flex-col items-center lg:items-start justify-center text-center lg:text-start p-10">
              <ProjectInfo label="Industry" value={project.industry} />
              <ProjectInfo label="Deliverable" value={project.service} />
              <ProjectInfo label="Technology" value={project.technology} />
              {project.website && (
                <>
                  <strong className="font-semibold">Website</strong>
                  <a
                    href={project.website}
                    className="text-light-glass underline break-all mb-4 sm:mb-8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.website}
                  </a>
                </>
              )}
            </aside>
          </section>

          {/* Visuals + Content Sections */}
          {project.imageDesktop1 && (
            <Image
              src={project.imageDesktop1}
              alt="Project desktop screenshot"
              className="w-full rounded-3xl mb-10 sm:mb-20 hidden sm:block"
              width={3582}
              height={1853}
              sizes="100vw"
            />
          )}
          {project.imageMobile1 && (
            <Image
              src={project.imageMobile1}
              alt="Project mobile screenshot"
              className="w-full rounded-3xl mb-10 sm:mb-20 block sm:hidden"
              width={1853}
              height={1853}
              sizes="100vw"
            />
          )}

          <ContentBlock
            heading={project.heading1}
            description={project.description1}
          />

          {project.imageDesktop2 && (
            <Image
              src={project.imageDesktop2}
              alt="Additional desktop screenshot"
              className="w-full rounded-3xl mb-10 sm:mb-20 hidden sm:block"
              width={3582}
              height={1853}
              sizes="100vw"
            />
          )}
          {project.imageMobile2 && (
            <Image
              src={project.imageMobile2}
              alt="Additional mobile screenshot"
              className="w-full rounded-3xl mb-10 sm:mb-20 block sm:hidden"
              width={1853}
              height={1853}
              sizes="100vw"
            />
          )}

          <ContentBlock
            heading={project.heading2}
            description={project.description2}
          />

          {/* CTA Section */}
          <section className="relative m-5 p-5 lg:m-20 lg:p-20 lg:pr-20 bg-static-baseDark text-static-baseLight rounded-3xl flex flex-col justify-center">
            <div className="mb-5 max-w-96">
              <h2 className="text-xl font-semibold lg:text-5xl mb-3">
                Let&apos;s talk <br />
                e-commerce.
              </h2>
              <p className="text-sm lg:text-base">
                I help brands design, develop, and grow fast, scalable online
                stores that deliver real results. Whether you&apos;re launching
                or expanding, I&apos;m here to help your business succeed.
              </p>
            </div>
            <Link href="/contact">
              <Button
                className="btn-static-baseDark btn-arrow"
                ariaLabel="Contact support"
              >
                Book a Free Consult
                <svg
                  width="13"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5"
                    stroke="currentColor"
                  ></path>
                </svg>
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

function ProjectInfo({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <>
      <strong className="font-semibold">{label}</strong>
      <p className="mb-4 sm:mb-8 text-light-glass">{value}</p>
    </>
  );
}

function ContentBlock({
  heading,
  description,
}: {
  heading?: string;
  description?: string;
}) {
  if (!heading && !description) return null;
  return (
    <section className="w-full lg:w-3/4 m-auto text-center flex flex-col items-center justify-center mb-20 p-10">
      {heading && (
        <h3 className="text-2xl lg:text-5xl mb-6 font-semibold">{heading}</h3>
      )}
      {description && <p className="text-base lg:text-2xl">{description}</p>}
    </section>
  );
}
