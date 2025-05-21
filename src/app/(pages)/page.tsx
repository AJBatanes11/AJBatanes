import Link from "next/link";
import MainHero from "../components/mainHero";
import Button from "../components/snippets/customButton";
import Container from "../components/ui/container";
import Head from "next/head";

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
        <MainHero />
        {/* <h1>Main hero</h1> */}
      </Container>
      <Container small>
        <div className="container max-w-screen-2xl mx-auto py-40 px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-20 items-end">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-6xl leading-tight mb-5">
                I help brands build fast, scalable, and conversion-focused
                e-commerce stores that stand out and sell more.
              </h2>
              <div className="flex justify-start items-center gap-3">
                <div className="rounded-md py-1 px-2 text-sm bg-light-glass dark:bg-dark-glass text-black-custom dark:text-white-custom">
                  15+ Shopify sites launched
                </div>
                <div className="rounded-md py-1 px-2 text-sm bg-light-glass dark:bg-dark-glass text-black-custom dark:text-white-custom">
                  2+ Years of e-commerce experience
                </div>
                <div className="rounded-md py-1 px-2 text-sm bg-light-glass dark:bg-dark-glass text-black-custom dark:text-white-custom">
                  15+ Shopify sites launched
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <p className="text-base md:text-xl">
                As a developer and e-commerce specialist, I work with growing
                businesses to design, develop, and optimize online stores that
                not only look great—but also drive results.
              </p>
              <Link href="/contact">
                <Button
                  className="btn-black btn-arrow mt-5"
                  ariaLabel="Contact support"
                >
                  My Services
                  <svg
                    width="13"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container dark small>
        <div className="container mx-auto py-40 px-4">
          <h2 className="text-center mb-20 text-3xl md:text-5xl font-semibold leading-tight">
            Trusted by world-class e-commerce businesses.
          </h2>
          <div className="grid grid-cols-4 justify-center items-center gap-10">
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
            <div className="text-center">*Brand Logo</div>
          </div>
        </div>
      </Container>
      <Container small>
        <div className="container mx-auto py-40 px-4">
          <h2 className="text-center mb-20 text-3xl md:text-5xl font-semibold leading-tight">
            My Services
          </h2>
        </div>
      </Container>
    </>
  );
}
