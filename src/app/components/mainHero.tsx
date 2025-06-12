import Image from "next/image";

export default function MainHero() {
  return (
    <section className="min-h-dvh h-dvh flex flex-col items-center justify-center px-4 pt-28 pb-10">
      <h1 className="text-left lg:text-center text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-none max-w-5xl">
        Crafting e-commerce experiences that convert, perform, and inspire.
      </h1>

      <div
        className="relative w-full mt-10 overflow-hidden rounded-3xl
          aspect-[3/4] sm:aspect-[3/4] md:aspect-[3/4] lg:aspect-[16/9] max-w-6xl"
      >
        <Image
          src="/general/landscape_placeholder.jpg"
          alt="Main hero banner"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}
