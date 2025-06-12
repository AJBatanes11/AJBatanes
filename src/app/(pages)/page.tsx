// import MainHero from "../components/mainHero";
import Container from "../components/ui/container";
import TrustedBrands from "../components/trustedBrands";
import IntroSection from "../components/introSection";
import MyExpertise from "../components/myExpertise";
import CTAMarquee from "../components/ctaMarquee";
import TestimonyCardList from "../components/testimonyCardList";
import MainHero from "../components/mainHero";

export default function Home() {
  return (
    <>
      <>
        <Container main disableReveal aria-label="Main Hero Section">
          <MainHero />
        </Container>
        <Container small aria-label="Introduction Section">
          <IntroSection />
        </Container>
        <Container dark small aria-label="Trusted Brands Section">
          <TrustedBrands />
        </Container>
        <Container small aria-label="Expertise Section">
          <MyExpertise />
        </Container>
        <Container
          dark
          small
          aria-label="Call to Action and Testimonials Section"
        >
          <CTAMarquee />
          <TestimonyCardList />
        </Container>
      </>
    </>
  );
}
