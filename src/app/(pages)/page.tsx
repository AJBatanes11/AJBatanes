import MainHero from "../components/mainHero";
import Container from "../components/ui/container";
import Head from "next/head";
import TrustedBrands from "../components/trustedBrands";
import IntroSection from "../components/introSection";
import MyExpertise from "../components/myExpertise";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/general/MainBanner.mp4"
          as="video"
          type="video/mp4"
          crossOrigin="anonymous"
        />
        {/* <link
          rel="preload"
          href="/general/ForegroundVideo.mp4"
          as="video"
          type="video/mp4"
          crossOrigin="anonymous"
        /> */}
      </Head>

      <Container main dark>
        <MainHero />
        {/* <h1>Main hero</h1> */}
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
    </>
  );
}
