import Container from "../../components/ui/container";

export const metadata = {
  title: "Terms of Service | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function Terms() {
  return (
    <>
      <Container small disableReveal aria-label="Terms of Service">
        <div className="container w-11/12 md:w-4/5 max-w-7xl mx-auto min-h-96 pt-14 md:pt-24 lg:pt-0 lg:mt-20 relative flex items-center justify-center">
          <div className="lg:max-w-[35rem] xl:max-w-[42rem] 2xl:max-w-[51rem] text-left lg:text-center">
            <h1 className="text-left lg:text-center text-5xl font-bold leading-tight mb-6">
              Terms of Service
            </h1>
            <p className="leading-relaxed text-left mb-10 text-base text-muted-foreground">
              Welcome to www.ajbatanes.vercel.app. By browsing or using this
              website, you agree to comply with and be bound by the following
              terms of service, which, together with the privacy policy, govern
              my relationship with you in relation to this website. If you do
              not agree with any part of these terms, please do not use the
              site.
              <br />
              <br />
              The terms “AJ Batanes,” “I,” or “me” refer to the owner and
              operator of this website. The term “you” refers to the user or
              viewer of the website.
              <br />
              <br />
              This website is intended to provide general information about my
              web development and design services. Content may change without
              notice. Cookies may be used to monitor browsing behavior; if you
              accept cookies, certain anonymous data such as traffic analytics
              may be collected via third-party tools like Google Analytics.
              <br />
              <br />
              I do not guarantee the accuracy, completeness, or relevance of the
              information provided on this website. While I aim to keep
              everything up to date, there may be occasional errors or outdated
              content. I am not liable for any losses or damages arising from
              reliance on the website content.
              <br />
              <br />
              Any work engagement is governed by a separate written agreement or
              proposal, which outlines the scope, timelines, deliverables, and
              payment terms. You are responsible for ensuring that any service
              or solution meets your specific needs before proceeding with a
              project.
              <br />
              <br />
              All material on this website—including text, design, layout, code
              snippets, and visual assets—is owned by or licensed to me. You may
              not reproduce or reuse any part of this site without explicit
              written permission. Unauthorized use of this website may lead to
              legal action.
              <br />
              <br />
              This website may include links to third-party websites for
              convenience or reference. These links do not signify any
              endorsement, and I am not responsible for the content or practices
              of any external sites.
              <br />
              <br />
              These terms are subject to change at any time without prior
              notice. Continued use of this site implies acceptance of the most
              current version. Any disputes arising from the use of this website
              are subject to the applicable laws of the Philippines.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
