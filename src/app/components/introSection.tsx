import Link from "next/link";
import Heading from "./snippets/heading";

export default function IntroSection() {
  return (
    <>
      <div className="w-full mx-auto py-10 sm:py-14 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-9 md:gap-10 items-end">
          <div className="md:col-span-3">
            <Heading className="mb-10">
              I help brands build fast, scalable, and conversion-focused
              e-commerce stores that stand out and sell.
            </Heading>
            <div className="flex flex-col md:flex-row justify-start items-start gap-3">
              <p className="rounded-md py-2 px-3 text-center text-xs sm:text-sm bg-glass-light">
                15+ sites launched
              </p>
              <p className="rounded-md py-2 px-3 text-center text-xs sm:text-sm bg-glass-light">
                2+ Years of e-commerce experience
              </p>
              <p className="rounded-md py-2 px-3 text-center text-xs sm:text-sm bg-glass-light">
                Worked with global brands and startups
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg md:text-2xl">
              As a developer and e-commerce specialist, I work with growing
              businesses to design, develop, and optimize online stores that not
              only look great—but also deliver real results.
            </p>
            <Link href="/about">
              <span className="link link--visible text-lg md:text-2xl mt-5">
                Know me better
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
