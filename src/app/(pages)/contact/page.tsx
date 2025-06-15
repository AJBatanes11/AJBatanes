import Cta from "../../components/cta";
import PageHeading from "../../components/snippets/pageHeading";
import Container from "../../components/ui/container";

export const metadata = {
  title: "Contact | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function Contact() {
  return (
    <>
      <Container disableReveal aria-label="Blogs Introduction Section">
        <PageHeading
          heading="Let's bring your vision to life."
          description="
              Whether you have a project in mind, a question to ask, or just
              want to say hello—I'd love to hear from you. Fill out the
              form or reach out directly, and I'll get back to you as soon
              as possible."
        />
      </Container>
      <Container small aria-label="Final Call to Action Section">
        <Cta />
      </Container>
    </>
  );
}
