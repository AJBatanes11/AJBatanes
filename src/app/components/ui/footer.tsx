import Link from "next/link";
import Logo from "./logo";
import Button from "../snippets/customButton";
import Socials from "../snippets/socials";
import GradientBackground from "./gradientBg";
import footerNavigations from "../../data/footerNavigations";
import FooterAccordionGroup from "./footerAccordionGroup";
import CursorClientWrapper from "./cursorTooltipClientWrapper";

export default function Footer() {
  return (
    <footer className="relative lg:fixed overflow-hidden bottom-0 w-full rounded-t-3xl bg-black-custom dark:bg-white-custom text-white-custom dark:text-black-custom lg:-z-10">
      <GradientBackground />
      <CursorClientWrapper cursorVariant="invisible">
        <div className="flex justify-center align-bottom w-full max-w-screen-2xl mx-auto lg:h-[700px] relative pt-16 pb-10 lg:pt-60">
          <div className="w-full flex flex-col justify-between my-0 mx-auto px-6 md:px-8 lg:px-10">
            {/* footer main */}
            <div className="relative grid grid-cols-1 lg:grid-cols-7 gap-0 mb-14 lg:mb-0">
              <div className="flex flex-col col-span-3 mb-10 lg:mb-0 lg:pr-20">
                <h2 className="text-5xl lg:text-6xl mb-5">
                  Let&apos;s talk <br />
                  e-commerce.
                </h2>
                <Link href="/contact">
                  <Button
                    className="btn-white btn-arrow mb-5"
                    ariaLabel="Contact support"
                  >
                    Book a Free Consult
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
                <Socials invertColor />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 lg:col-span-4 gap-0 lg:gap-5">
                <FooterAccordionGroup
                  accordions={footerNavigations.map((n) => ({
                    title: n.category,
                    items: n.links,
                  }))}
                />
              </div>
            </div>
            {/* footer bottom */}
            <div className="flex flex-col justify-between gap-5 lg:gap-0 sm:flex-row">
              <div className="flex items-center justify-between gap-2 lg:gap-5">
                <Logo />
                <p className="text-sm lg:text-base text-center">
                  &copy; {new Date().getFullYear()} AJ Batanes. All rights
                  reserved.
                </p>
              </div>
              <ul className="flex items-center justify-center gap-1 lg:gap-6">
                <li>
                  <Link
                    href="/"
                    className="text-sm lg:text-base hover:text-gray-300 dark:hover:text-gray-700 after:content-['|'] after:ml-1 after:lg:ml-6"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-sm lg:text-base hover:text-gray-300 dark:hover:text-gray-700"
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CursorClientWrapper>
    </footer>
  );
}
