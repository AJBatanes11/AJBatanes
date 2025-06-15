import AllServices from "../../components/allServices";
import Cta from "../../components/cta";
import PageHeading from "../../components/snippets/pageHeading";
import Container from "../../components/ui/container";

export const metadata = {
  title: "Services | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function Services() {
  return (
    <>
      <Container small disableReveal aria-label="Services Introduction Section">
        <div className="p-0 xl:p-10"></div>
        <PageHeading
          heading="Tailored e-commerce solutions that elevate your brand and grow
              your business."
          description="
              From design to development, I offer end-to-end e-commerce services
              that turn your ideas into high-performing, conversion-focused
              websites. Whether you're launching a new brand or scaling an
              existing store, I deliver strategic, user-first experiences
              optimized for speed, aesthetics, and results."
        />
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
