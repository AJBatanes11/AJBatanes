export const metadata = {
  title: "404 - Not Found",
  description: "Page not found",
};

import Link from "next/link";
import Button from "./components/snippets/customButton";

export default function NotFound() {
  return (
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/">
          <Button className="btn-black btn-arrow" ariaLabel="Go back home">
            Go back Home
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
        <Link href="/contact">
          <Button className="btn-white btn-arrow" ariaLabel="Contact support">
            Contact support
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
  );
}
