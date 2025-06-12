import Cta from "../../components/cta";
import Container from "../../components/ui/container";

export const metadata = {
  title: "Blogs | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function Blogs() {
  return (
    <>
      <Container disableReveal aria-label="Blogs Introduction Section">
        <div className="container max-w-7xl mx-auto min-h-96 pt-14 md:pt-24 lg:pt-0 lg:mt-20 relative flex items-center justify-center">
          <div className="lg:max-w-[35rem] xl:max-w-[42rem] 2xl:max-w-[51rem] text-left lg:text-center">
            <h1 className="text-left lg:text-center text-5xl font-bold leading-none mb-5">
              Ideas, insights, and everything in between.
            </h1>
            <p className="leading-relaxed">
              Explore thoughts, tips, and behind-the-scenes learnings from my
              journey as a web designer and developer. Whether it&apos;s design
              thinking, development hacks, or lessons from real projects—this
              blog is where I share what I&apos;ve learned and continue to
              discover.
            </p>
          </div>
        </div>
      </Container>
      <Container small aria-label="Final Call to Action Section">
        <Cta />
      </Container>
    </>
  );
}
