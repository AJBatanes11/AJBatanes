import Link from "next/link";
import Button from "./snippets/customButton";

export default function IntroSection() {
  return (
    <>
      <div className="container max-w-screen-2xl mx-auto py-10 sm:py-40 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-y-9 md:gap-20 items-end">
          <div className="md:col-span-3">
            <h2 className="text-4xl sm:text-6xl leading-tight mb-5">
              I help brands build fast, scalable, and conversion-focused
              <br />
              e-commerce stores that stand out and sell.
            </h2>
            <div className="flex flex-col md:flex-row justify-start items-start gap-3">
              <div className="rounded-md py-2 px-3 text-center text-xs sm:text-sm bg-light-glass dark:bg-dark-glass text-black-custom dark:text-white-custom">
                15+ Shopify sites launched
              </div>
              <div className="rounded-md py-2 px-3 text-center text-xs sm:text-sm bg-light-glass dark:bg-dark-glass text-black-custom dark:text-white-custom">
                2+ Years of e-commerce experience
              </div>
              <div className="rounded-md py-2 px-3 text-center text-xs sm:text-sm bg-light-glass dark:bg-dark-glass text-black-custom dark:text-white-custom">
                Worked with global brands and startups
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg md:text-2xl">
              As a developer and e-commerce specialist, I work with growing
              businesses to design, develop, and optimize online stores that not
              only look great—but also deliver real results.
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
    </>
  );
}
