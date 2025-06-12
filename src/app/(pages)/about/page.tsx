// import AboutHero from "../../components/aboutHero";
import AboutHero from "../../components/aboutHero2";
import Cta from "../../components/cta";
import Container from "../../components/ui/container";

export const metadata = {
  title: "About | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function About() {
  return (
    <>
      <Container small disableReveal aria-label="About Me Introduction Section">
        <div className="container w-11/12 md:w-4/5 max-w-7xl mx-auto min-h-96 pt-14 md:pt-24 lg:pt-0 lg:mt-20 relative flex items-center justify-center">
          <div className="lg:max-w-[35rem] xl:max-w-[42rem] 2xl:max-w-[51rem] text-left lg:text-center">
            <h1 className="text-left lg:text-center text-5xl font-bold leading-none mb-5">
              Designing with purpose. Developing with performance in mind.
            </h1>
            <p className="leading-relaxed">
              I&apos;m a web designer and developer specializing in e-commerce
              experiences that look good and work even better. With a strong eye
              for design and a deep understanding of modern development
              practices, I bridge creativity with functionality to build
              websites that not only reflect your brand—but drive results.
              Let&apos;s create something meaningful together.
            </p>
          </div>
        </div>
      </Container>
      <Container small dark disableReveal aria-label="About Hero Section">
        <AboutHero />
      </Container>
      <Container small aria-label="Final Call to Action Section">
        <Cta />
      </Container>
    </>
  );
}
