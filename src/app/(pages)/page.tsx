// import MainHero from "../components/mainHero";
import Container from "../components/ui/container";
import Head from "next/head";
import TrustedBrands from "../components/trustedBrands";
import IntroSection from "../components/introSection";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
          as="video"
          type="video/mp4"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
          as="video"
          type="video/mp4"
          crossOrigin="anonymous"
        />
      </Head>

      <Container main dark>
        {/* <MainHero /> */}
        <h1>Main hero</h1>
      </Container>
      <Container small>
        <IntroSection />
      </Container>
      <Container dark small>
        <TrustedBrands />
      </Container>
      <Container small>
        <div className="container mx-auto py-10 sm:py-40 px-4">
          <h2 className="text-center mb-20 text-3xl md:text-5xl font-semibold leading-tight">
            My Services
          </h2>
          <p className="text-center mb-40 text-lg md:text-2xl font-semibold leading-tight">
            Stay tuned...
          </p>
        </div>
      </Container>
    </>
  );
}
