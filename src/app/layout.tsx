import "./css/style.css";

import { Inter } from "next/font/google";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";
import CursorTooltip from "./components/ui/cursorTooltip";
import Wrapper from "./components/ui/wrapper";

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
        className={`${inter.variable} tracking-tight antialiased lg:mb-[600px] will-change-auto overflow-auto`}
      >
        <div className="noise_bg"></div>
        <CursorTooltip />
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip lg:rounded-b-3xl bg-white-custom dark:bg-black-custom text-black-custom dark:text-white-custom transition-colors duration-300">
          <Header />
          <Wrapper>{children}</Wrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
