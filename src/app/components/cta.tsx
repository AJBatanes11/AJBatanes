import Link from "next/link";

interface CtaProps {
  darkMode?: boolean;
}

export default function Cta({ darkMode = false }: CtaProps) {
  return (
    <div
      className={`relative rounded-xl p-8 md:p-10 lg:p-12 my-10 sm:my-16 w-11/12 mx-auto ${darkMode ? "bg-static-baseDark text-static-baseLight" : "bg-base-dark text-base-light"}`}
    >
      <div className="mb-5 w-11/12 sm:w-3/4 xl:w-1/2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold mb-3">
          Looking for a partner <br />
          to help you grow your e-commerce business?
        </h2>
        <p className="text-sm md:text-base">
          I help brands design, develop, and grow fast, scalable online stores
          that deliver real results. Whether you&apos;re launching or expanding,
          I&apos;m here to help your business succeed.
        </p>
      </div>
      <Link href="/contact">
        <button
          className={`btn btn-arrow ${darkMode ? "btn-static-white" : "btn--invert"}`}
          aria-label="Contact support"
        >
          Contact Now
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
        </button>
      </Link>
    </div>
  );
}
