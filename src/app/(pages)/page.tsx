import MainHero from "../components/mainHero";
import Container from "../components/ui/container";
// import Head from "next/head";
import TrustedBrands from "../components/trustedBrands";
import IntroSection from "../components/introSection";
import MyExpertise from "../components/myExpertise";
import Marquee from "react-fast-marquee";
import ScrollSection from "../components/scrollSection";

export default function Home() {
  return (
    <>
      {/* <Head>
        <link
          rel="preload"
          href="/general/MainBanner.mp4"
          as="video"
          type="video/mp4"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/general/ForegroundVideo.mp4"
          as="video"
          type="video/mp4"
          crossOrigin="anonymous"
        />
      </Head> */}

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
      <ScrollSection
        dark
        scrollLength={3000}
        sections={[
          <h3 className="text-red-500 text-3xl">Section 1</h3>,
          <h3 className="text-white text-3xl">Section 2</h3>,
          <h3 className="text-white text-3xl">Section 3</h3>,
        ]}
      />
      <Container small disableTheming>
        <Marquee autoFill speed={50} className="w-full h-28 sm:h-48">
          <div className="flex items-center justify-center gap-2 ml-2 lg:gap-4 text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-none text-center">
            <h2>Lets work together.</h2>
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              role="img"
              aria-hidden="true"
            >
              <title>AJ CB Logo</title>
              <polygon
                points="25,5 75,5 95,25 95,75 75,95 25,95 5,75 5,25"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              />
              <text
                x="50%"
                y="40%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="32"
                fontWeight="bold"
                fill="currentColor"
              >
                AJ
              </text>
              <text
                x="50%"
                y="65%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="32"
                fontWeight="bold"
                fill="currentColor"
              >
                CB
              </text>
            </svg>
          </div>
        </Marquee>
        <Marquee
          autoFill
          speed={50}
          direction="right"
          className="w-full mb-28 lg:mb-40 h-28 sm:h-48"
        >
          <div className="flex items-center justify-center gap-2 ml-2 lg:gap-4 text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-none text-center">
            <h2>Lets work together.</h2>
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              role="img"
              aria-hidden="true"
            >
              <title>AJ CB Logo</title>
              <polygon
                points="25,5 75,5 95,25 95,75 75,95 25,95 5,75 5,25"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              />
              <text
                x="50%"
                y="40%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="32"
                fontWeight="bold"
                fill="currentColor"
              >
                AJ
              </text>
              <text
                x="50%"
                y="65%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontFamily="Arial, sans-serif"
                fontSize="32"
                fontWeight="bold"
                fill="currentColor"
              >
                CB
              </text>
            </svg>
          </div>
        </Marquee>
      </Container>
    </>
  );
}
