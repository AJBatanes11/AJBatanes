import Image from "next/image";
import Link from "next/link";

const services = [
  {
    label: "Development",
    href: "/services#development",
    banner: "/expertise-banners/placeholder.webp",
  },
  {
    label: "UI/UX Design",
    href: "/services#design",
    banner: "/expertise-banners/placeholder.webp",
  },
  {
    label: "Optimization",
    href: "/services#optimization",
    banner: "/expertise-banners/placeholder.webp",
  },
  {
    label: "Consultation",
    href: "/services#contultation",
    banner: "/expertise-banners/placeholder.webp",
  },
];

export default function MyExpertise() {
  return (
    <div className="w-full mx-auto py-10 sm:py-32 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-2 md:gap-y-9 md:gap-20 items-end mb-8 md:mb-14">
        <div className="md:col-span-3">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-none mb-5">
            How I take your business to the next level
          </h2>
        </div>
        <div className="md:col-span-2">
          <p className="text-lg md:text-2xl">
            I am a web developer with expertise, and on a mission to help you
            take the next step in your business.
          </p>
          <Link href="/contact">
            {/* <button
              className="btn btn-black btn-arrow mt-5"
              aria-label="Contact support"
            >
              See all services
              <svg
                width="13"
                height="12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5"
                  stroke="currentColor"
                />
              </svg>
            </button> */}

            <span className="link link--visible text-lg md:text-2xl mt-5">
              Explore my services
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-between">
        <div className="h-auto py-14 flex w-full order-2 lg:order-1 lg:w-2/12">
          <div className="w-full sticky bottom-10 self-end left-0">
            <Link href="/contact">
              <button
                className="btn btn-black btn-arrow mt-5"
                aria-label="Contact support"
              >
                See all services
                <svg
                  width="13"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5"
                    stroke="currentColor"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full order-1 lg:order-2 lg:w-10/12">
          <div className="px-2 w-full order-1 lg:order-2 group">
            {services.map((service, index) => (
              <div
                key={index}
                className="
        w-full border-b border-glass-light cursor-pointer
        group/item overflow-hidden
        transition-opacity duration-300
        lg:group-hover:opacity-50 lg:hover:!opacity-100
      "
              >
                <Link
                  href={service.href}
                  className="flex items-center relative w-full py-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight"
                >
                  <div
                    className="
            h-20 sm:h-24 md:h-36
            w-20 sm:w-32 md:w-36
            flex-none flex-shrink-0 mr-4 rounded-xl overflow-hidden
            lg:mr-0 lg:w-0 lg:opacity-0 lg:-translate-x-4
            lg:transition-all lg:duration-300
            lg:group-hover/item:w-36 lg:group-hover/item:mr-6
            lg:group-hover/item:opacity-100 lg:group-hover/item:translate-x-0
          "
                  >
                    <Image
                      src={service.banner}
                      alt={`${service.label} banner`}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span>{service.label}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
