import Image from "next/image";
import Link from "next/link";
import services from "../data/services";
import Heading from "./snippets/heading";

export default function MyExpertise() {
  return (
    <div className="w-full mx-auto py-10 sm:py-14 lg:py-24 xl:py-32 px-4 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-2 md:gap-y-9 md:gap-20 items-end mb-8 md:mb-14">
        <div className="md:col-span-3">
          <Heading className="mb-5 w-4/5 lg:w-full">
            How I Design and Build Digital Experiences That Sell.
          </Heading>
        </div>
        <div className="md:col-span-2">
          <p className="text-lg md:text-2xl">
            I am a web developer with expertise, and on a mission to help you
            take the next step in your business.
          </p>
          <Link href="/services">
            <span className="link link--visible text-lg md:text-2xl mt-5">
              Explore my services
            </span>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-between">
        <div className="h-auto py-14 flex w-full order-2 lg:order-1 lg:w-2/12">
          <div className="w-full sticky bottom-10 self-end left-0">
            <div className="text-xs sm:text-sm text-base-dark">
              25+ successful launches <br /> across 3 industries.
            </div>
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
                  transition-opacity duration-500
                  lg:group-hover:opacity-50 lg:hover:!opacity-100
                "
              >
                <Link
                  href={service.href}
                  className="flex items-center relative w-full py-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  <div
                    className="
                      h-20 sm:h-24 md:h-32
                      w-24 sm:w-32 md:w-36
                      flex-none flex-shrink-0 mr-4 rounded-lg overflow-hidden
                      lg:mr-0 lg:w-0 lg:opacity-0 lg:-translate-x-4
                      lg:transition-all lg:duration-500
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
