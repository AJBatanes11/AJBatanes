import ProjectCard from "../../components/snippets/project-card";
import Container from "../../components/ui/container";
import projects from "../../data/projects";

export default function Work() {

    return (
        <>
        <Container>
            <h1 className="text-4xl">My Work Page*</h1>
        </Container>
        <Container dark>
            <div className="flex flex-wrap justify-center md:px-5 my-10 sm:my-20
            w-11/12 md:w-4/5
            max-w-7xl
            mx-auto
            ">
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
                        <ProjectCard
                            project={project}
                            key={index}
                            className={topClass}
                        />
                    );
                })}
            </div>
        </Container>
      </>
    );
}