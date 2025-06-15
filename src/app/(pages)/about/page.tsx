// import AboutHero from "../../components/aboutHero";
import AboutHero from "../../components/aboutHero2";
import Cta from "../../components/cta";
import PageHeading from "../../components/snippets/pageHeading";
import Container from "../../components/ui/container";

export const metadata = {
  title: "About | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function About() {
  return (
    <>
      {/* <Container small disableReveal aria-label="About Hero Section"> */}
      <AboutHero />
      {/* </Container> */}
      {/* <Container
        small
        disableReveal
        disableTheming
        aria-label="Services Introduction Section"
      > */}
      <div className="py-4 lg:py-8 bg-black">
        <PageHeading
          heading="Designing with purpose. Developing with performance in mind. your
              business."
          description="
              I'm a web designer and developer specializing in e-commerce
              experiences that look good and work even better. With a strong eye
              for design and a deep understanding of modern development
              practices, I bridge creativity with functionality to build
              websites that not only reflect your brand—but drive results.
              Let's create something meaningful together."
        />
      </div>
      <div className="bg-gradient-to-b from-black to-transparent p-44">
        <h1>asdhasuhfuhsdfuiahsdfihasdiufhasduif</h1>
      </div>
      {/* </Container> */}
      <Container small aria-label="Final Call to Action Section">
        <Cta />
      </Container>
    </>
  );
}
