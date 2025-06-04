import AboutHero from "../../components/aboutHero";
import MainHero from "../../components/mainHero";
import Container from "../../components/ui/container";

export const metadata = {
  title: "About | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Container small dark>
        <MainHero />
      </Container>
    </>
  );
}
