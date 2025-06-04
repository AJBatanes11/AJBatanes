// import MainHero from "../components/mainHero";
import Container from "../components/ui/container";
import TrustedBrands from "../components/trustedBrands";
import IntroSection from "../components/introSection";
import MyExpertise from "../components/myExpertise";
import CTAMarquee from "../components/ctaMarquee";
import TestimonyCardList from "../components/testimonyCardList";
import AboutHero from "../components/aboutHero";

export default function Home() {
  return (
    <>
      <Container main>
        <AboutHero />
        {/* <MainHero /> */}
      </Container>
      <Container small>
        <IntroSection />
      </Container>
      <Container dark small>
        <TrustedBrands />
      </Container>
      <Container small>
        <MyExpertise />
      </Container>
      <Container dark small>
        <CTAMarquee />
        <TestimonyCardList />
      </Container>
    </>
  );
}
