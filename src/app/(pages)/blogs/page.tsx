import Cta from "../../components/cta";
import PageHeading from "../../components/snippets/pageHeading";
import Container from "../../components/ui/container";

export const metadata = {
  title: "Blogs | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function Blogs() {
  return (
    <>
      <Container disableReveal aria-label="Blogs Introduction Section">
        <PageHeading
          heading="Ideas, insights, and everything in between."
          description="Explore thoughts, tips, and behind-the-scenes learnings from my
              journey as a web designer and developer. Whether it's design
              thinking, development hacks, or lessons from real projects—this
              blog is where I share what I've learned and continue to
              discover."
        />
      </Container>
      <Container small aria-label="Final Call to Action Section">
        <Cta />
      </Container>
    </>
  );
}
