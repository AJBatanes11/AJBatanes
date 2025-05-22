export const metadata = {
  title: "404 | Lost in code | AJ Batanes",
  description: "Looks like you took a wrong turn.",
};

import Link from "next/link";
import Button from "./components/snippets/customButton";
import Container from "./components/ui/container";

export default function NotFound() {
  return (
    <Container dark>
      <div className="text-center mx-2">
        <p className="text-lg font-semibold">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-black-custom dark:text-white-custom sm:text-7xl">
          Lost in code.
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-dark-glass dark:text-light-glass sm:text-xl/8">
          Looks like this route doesn&apos;t exist.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/">
            <Button className="btn-black btn-arrow" ariaLabel="Go back home">
              Take Me Home
              <svg
                width="10"
                height="10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M.89 9.243L9.373.757m0 0H1.596m7.778 0v7.779"
                  stroke="currentColor"
                ></path>
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
