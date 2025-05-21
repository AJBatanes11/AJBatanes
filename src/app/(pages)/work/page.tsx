import ProjectCardList from "../../components/projectCardList";
import Container from "../../components/ui/container";

export default function Work() {
    return (
        <>
            <Container>
                <h1 className="text-4xl">My Work Page*</h1>
            </Container>
            <Container dark>
                <div className="flex flex-wrap justify-center md:px-5 my-10 sm:my-20 w-11/12 md:w-4/5 max-w-7xl mx-auto">
                    <ProjectCardList />
                </div>
            </Container>
        </>
    );
}
