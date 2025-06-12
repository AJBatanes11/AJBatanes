import Cta from "../../components/cta";
import Container from "../../components/ui/container";

export const metadata = {
  title: "Contact | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function Contact() {
  return (
    <>
      <Container disableReveal aria-label="Blogs Introduction Section">
        <div className="container max-w-7xl mx-auto min-h-96 pt-14 md:pt-24 lg:pt-0 lg:mt-20 relative flex items-center justify-center">
          <div className="lg:max-w-[35rem] xl:max-w-[42rem] 2xl:max-w-[51rem] text-left lg:text-center">
            <h1 className="text-left lg:text-center text-5xl font-bold leading-none mb-5">
              Let&apos;s bring your vision to life.
            </h1>
            <p className="leading-relaxed">
              Whether you have a project in mind, a question to ask, or just
              want to say hello—I&apos;d love to hear from you. Fill out the
              form or reach out directly, and I&apos;ll get back to you as soon
              as possible.
            </p>
          </div>
        </div>
      </Container>
      <Container small aria-label="Final Call to Action Section">
        <Cta />
      </Container>
    </>
  );
}
