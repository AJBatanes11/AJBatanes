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

      <div className="flex flex-col items-start md:items-end">
        <span className="text-lg md:text-2xl">- John Doe</span>
        <span className="text-sm md:text-lg text-muted-foreground">
          CEO at Acme Inc.
        </span>
      </div>
    </div>
  );
}
