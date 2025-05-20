import Link from "next/link";
import MainHero from "../components/main-hero";
import Button from "../components/snippets/custom-button";
import Container from "../components/ui/container";
import Head from "next/head";

export default function Home() {
    return (
        <>
        <Head>
        <link
            rel="preload"
            href="/videos/poster.jpg"
            as="image"
            type="image/jpeg"
        />
        </Head>

        <Container main dark>
            <MainHero />
        </Container>
        <Container small>
            <div className="container mx-auto py-40 px-4">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-20 items-end">
                    <div className="md:col-span-3">
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                        I help brands build<br/>
                        fast, scalable, and conversion-focused<br />
                        Shopify stores<br />
                        that stand out and sell more.
                    </h2>
                    </div>
                    <div className="md:col-span-2">
                    <p className="text-base md:text-lg text-gray-600">
                        As a developer and e-commerce specialist, I work with growing businesses to design, develop, and optimize online stores that not only look great—but also drive results.
                    </p>
                    <Link href="/contact">
                        <Button className="btn-black btn-arrow mt-5" ariaLabel="Contact support">
                            My Services
                            <svg width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5" stroke="currentColor"></path>
                            </svg>
                        </Button>
                    </Link>
                    </div>
                </div>
            </div>
        </Container>
        <Container dark small>
            <div className="container mx-auto py-40 px-4">
                <h2 className="text-center mb-20 text-3xl md:text-5xl font-semibold leading-tight">Trusted by world-class e-commerce businesses.</h2>
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
                <h2 className="text-center mb-20 text-3xl md:text-5xl font-semibold leading-tight">My Services</h2>
            </div>
        </Container>
      </>
    );
}