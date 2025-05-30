import "./css/style.css";

import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import Wrapper from "./components/ui/wrapper";
import ScrollToTop from "./components/snippets/scrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "AJ Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body
        className={`${inter.variable} tracking-tight antialiased lg:mb-[600px] will-change-auto overflow-x-hidden`}
      >
        <div className="noise_bg"></div>
        <main className="min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip lg:rounded-b-3xl bg-base-light text-base-dark transition-colors duration-300">
          <Header />
          <Wrapper>
            {children}
            <SpeedInsights />
          </Wrapper>
          <ScrollToTop />
          <Footer />
        </main>
      </body>
    </html>
  );
}
