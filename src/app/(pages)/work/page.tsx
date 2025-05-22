import ProjectCardList from "../../components/projectCardList";
import Container from "../../components/ui/container";

export default function Work() {
  return (
    <>
      <Container small>
        <div className="container w-11/12 md:w-4/5 max-w-7xl mx-auto min-h-96 pt-20 sm:pt-0 relative flex items-end">
          <div className="xl:absolute xl:-bottom-10 left-0 xl:max-w-[41rem] 2xl:max-w-[45rem]">
            <h2 className="text-4xl mb-5">
              I&apos;ve worked with leading brands and ambitious start-ups to
              deliver e-commerce websites that are built to perform.
            </h2>
            <p>
              As an e-commerce web designer and developer, I combine my
              technical and creative skills to create websites that engage your
              customers and keep them coming back. Don&apos;t just take our word
              for it.
            </p>
          </div>
        </div>
      </Container>
      <Container dark>
        <div className="flex flex-wrap justify-center md:px-5 my-10 sm:my-20 w-11/12 md:w-4/5 max-w-7xl mx-auto">
          <ProjectCardList />
        </div>
      </Container>
    </>
  );
}
