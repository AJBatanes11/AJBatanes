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
      <Container main>
        <MainHero />
      </Container>
      <AboutHero />
      <Container main dark>
        <MainHero />
      </Container>
      <Container main>
        <MainHero />
      </Container>
    </>
  );
}
