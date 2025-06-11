import Image from "next/image";

export default function MainHero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-10">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl">
        Design & Build
        <br />
        what others only imagine
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
