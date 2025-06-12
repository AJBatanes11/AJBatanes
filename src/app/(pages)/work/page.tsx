import ProjectCardList from "../../components/projectCardList";
import Container from "../../components/ui/container";
import CursorTooltip from "../../components/snippets/cursorTooltip";
import Cta from "../../components/cta";

export const metadata = {
  title: "Work | AJ Batanes",
  description: "Showcasing brands I have worked with.",
};

export default function Work() {
  return (
    <>
      <CursorTooltip />
      <main>
        <Container small disableReveal aria-label="Work Introduction Section">
          <div className="container w-11/12 md:w-4/5 max-w-7xl mx-auto min-h-96 pt-14 md:pt-24 lg:pt-0 relative flex items-end">
            <div className="lg:absolute lg:-bottom-10 left-0 lg:max-w-[35rem] xl:max-w-[42rem] 2xl:max-w-[51rem]">
              <h1 className="text-left lg:text-center text-5xl font-bold leading-none mb-5">
                I&apos;ve worked with leading brands and ambitious start-ups to
                deliver e-commerce websites that are built to perform.
              </h1>
              <p className="leading-relaxed">
                As an e-commerce web designer and developer, I combine my
                technical and creative skills to create websites that engage
                your customers and keep them coming back. Don&apos;t just take
                our word for it.
              </p>
            </div>
          </div>
        </Container>
        <Container
          dark
          small
          disableReveal
          aria-label="Projects Showcase Section"
        >
          <div className="flex flex-wrap justify-center md:px-5 my-10 sm:my-20 w-11/12 lg:w-11/12 xl:w-4/5 max-w-7xl mx-auto">
            <ProjectCardList />
          </div>
        </Container>
        <Container small aria-label="Final Call to Action Section">
          <Cta />
        </Container>
      </main>
    </>
  );
}
