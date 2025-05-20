import "./css/style.css";

import { Inter } from "next/font/google";
import AOSInit from "./components/aosinit";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import Wrapper from "./components/ui/wrapper";
import CursorTooltip from "./components/ui/cursor-tooltip";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Anthony Batanes",
  description: "Web developer, Designer, and Creator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter tracking-tight antialiased lg:mb-[600px]`}
      >
        <AOSInit />
        <CursorTooltip />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip lg:rounded-b-3xl bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
          <Header />
          <Wrapper>
            {children}
            <SpeedInsights />
          </Wrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
