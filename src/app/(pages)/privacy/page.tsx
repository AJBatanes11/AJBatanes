import Container from "../../components/ui/container";

export const metadata = {
  title: "Privacy | AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function Privacy() {
  return (
    <>
      <Container small disableReveal aria-label="Privacy Policy">
        <div className="container w-11/12 md:w-4/5 max-w-7xl mx-auto min-h-96 pt-14 md:pt-24 lg:pt-0 lg:mt-20 relative flex items-center justify-center">
          <div className="lg:max-w-[35rem] xl:max-w-[42rem] 2xl:max-w-[51rem] text-left lg:text-center">
            <h1 className="text-left lg:text-center text-5xl font-bold leading-tight mb-6">
              Privacy Policy
            </h1>
            <p className="leading-relaxed text-left mb-10 text-base text-muted-foreground">
              This Privacy Policy explains how I, AJ Batanes (&quot;I&quot;,
              &quot;me&quot;, or &quot;my&quot;), collect, use, and protect any
              personal information you provide while using this website
              (www.ajbatanes.com). I am committed to respecting your privacy. If
              you&apos;re asked to provide information that can identify you, it
              will only be used in accordance with this policy.
              <br />
              <br />
              This policy may be updated occasionally. You should check this
              page periodically to ensure you&apos;re aware of any changes.
              Continued use of the site indicates your acceptance of the current
              policy.
              <br />
              <br />
              <strong>Information I May Collect</strong>
              <br />
              - Your name and contact details (e.g., email address)
              <br />
              - Project-related information you voluntarily submit through
              contact forms
              <br />
              - Browser or device data for analytics purposes
              <br />
              <br />
              <strong>How I Use Your Information</strong>
              <br />
              Information is used only to respond to inquiries, deliver
              services, and improve this website. Specifically, I may use it to:
              <br />
              - Respond to project inquiries or messages
              <br />
              - Maintain records of communication
              <br />
              - Improve website performance and user experience via anonymous
              analytics
              <br />
              <br />
              <strong>Security</strong>
              <br />
              I take reasonable steps to protect your information from
              unauthorized access, loss, or misuse. This includes the use of
              secure protocols and access controls where applicable.
              <br />
              <br />
              <strong>Cookies</strong>
              <br />
              Like most websites, I use cookies to analyze site traffic and
              improve functionality. These may track anonymous usage patterns.
              You can choose to accept or decline cookies in your browser
              settings. I currently use Google Analytics to understand traffic
              trends.
              <br />
              <br />
              <strong>Links to Other Websites</strong>
              <br />
              This site may link to other websites for reference. I am not
              responsible for the content or privacy practices of any
              third-party sites.
              <br />
              <br />
              <strong>Controlling Your Personal Information</strong>
              <br />
              You can request to view, update, or delete the personal
              information I may hold about you. I will not sell or share your
              personal data with third parties unless legally required to do so
              or with your explicit permission.
              <br />
              <br />
              <strong>Contact</strong>
              <br />
              If you have any questions about this Privacy Policy or would like
              to request access to your personal data, please contact me at:
              <br />
              <br />
              AJ Batanes
              <br />
              Email: anthonybatanes@gmail.com
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
