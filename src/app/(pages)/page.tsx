import MainHero from "../components/mainHero";
import Container from "../components/ui/container";
import Head from "next/head";
import TrustedBrands from "../components/trustedBrands";
import IntroSection from "../components/introSection";
import MyExpertise from "../components/myExpertise";
import Marquee from "react-fast-marquee";

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
      <Marquee autoFill speed={15} className="w-full h-full mb-5">
        <div className="flex items-center justify-center text-4xl sm:text-6xl text-center font-semibold leading-tight">
          <h2 className="">Lets work together.</h2>
          <span className="">🚀</span>
        </div>
      </Marquee>
      <Marquee
        autoFill
        speed={15}
        direction="right"
        className="w-full h-full mb-20 lg:mb-40"
      >
        <div className="flex items-center justify-center text-4xl sm:text-6xl text-center font-semibold leading-tight">
          <h2 className="">Lets work together.</h2>
          <span className="">🚀</span>
        </div>
      </Marquee>
    </>
  );
}
