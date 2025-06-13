import AllServices from "../../components/allServices";
import Cta from "../../components/cta";
import Container from "../../components/ui/container";

export const metadata = {
  title: "Services | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function Services() {
  return (
    <>
      <Container small disableReveal aria-label="Services Introduction Section">
        <div className="container w-11/12 md:w-4/5 max-w-7xl mx-auto min-h-96 pt-14 md:pt-24 lg:pt-0 lg:mt-20 relative flex items-center justify-center">
          <div className="lg:max-w-[35rem] xl:max-w-[42rem] 2xl:max-w-[51rem] text-left lg:text-center">
            <h1 className="text-left lg:text-center text-5xl font-bold leading-none mb-5">
              Tailored e-commerce solutions that elevate your brand and grow
              your business.
            </h1>
            <p className="leading-relaxed">
              From design to development, I offer end-to-end e-commerce services
              that turn your ideas into high-performing, conversion-focused
              websites. Whether you&apos;re launching a new brand or scaling an
              existing store, I deliver strategic, user-first experiences
              optimized for speed, aesthetics, and results.
            </p>
          </div>
        </div>
      </Container>
      <Container dark aria-label="All Services Section">
        <AllServices />
      </Container>
      <Container small aria-label="Call to action">
        <Cta />
      </Container>
    </>
  );
}
