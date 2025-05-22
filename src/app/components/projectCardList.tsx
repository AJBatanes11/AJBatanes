import ProjectCard from "./snippets/projectCard";
import projects from "../data/projects";

export default function ProjectCardList() {
  return (
    <>
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

        // Add mobile/md -top-[60px] for even indexes
        if (index % 2 === 0) {
          topClass += " top-0";
        } else {
          topClass += " -top-[60px] md:-top-[80px]";
        }

        return (
          <ProjectCard project={project} key={index} className={topClass} />
        );
      })}
    </>
  );
}
