import MainHero from "../components/main-hero";
import Container from "../components/ui/container";

export default function Home() {
    return (
        <>
        <Container main dark>
            <MainHero />
        </Container>
        <Container>
            <h1 className="text-4xl">Light Section</h1>
        </Container>
      </>
    );
}