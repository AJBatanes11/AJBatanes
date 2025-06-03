export default function CardTestimony() {
  return (
    <div className="relative">
      <h3 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-none mb-10">
        Testimonial Title
      </h3>
      <p className="text-lg md:text-2xl mb-4">
        This is a sample testimonial text that describes the experience of a
        client or user.
      </p>
      <div className="flex items-center">
        <img
          src="/expertise-banners/placeholder.webp"
          alt="User Avatar"
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="text-lg md:text-2xl">- John Doe</span>
      </div>
    </div>
  );
}
