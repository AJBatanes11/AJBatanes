import ProjectCard from "../../components/snippets/project-card";
import Container from "../../components/ui/container";
import projects from "../../data/projects";

export default function Work() {

    return (
        <>
        <Container>
            <h1 className="text-4xl">My Work Page*</h1>
        </Container>
        <Container>
            <div className="grid grid-cols-4 gap-10 px-10">
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </Container>
      </>
    );
}