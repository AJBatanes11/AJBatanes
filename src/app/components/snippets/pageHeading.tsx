interface PageHeadingProps {
  heading?: string;
  description?: string;
}

export default function PageHeading({
  heading = "Sample heading",
  description = "Sample description",
}: PageHeadingProps) {
  return (
    <div className="container w-11/12 md:w-4/5 max-w-7xl mx-auto lg:min-h-96 pt-24 lg:pt-0 relative flex items-center justify-center">
      <div className="lg:max-w-[35rem] xl:max-w-[42rem] 2xl:max-w-[51rem] text-left lg:text-center">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold leading-none mb-5">
          {heading}
        </h1>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
