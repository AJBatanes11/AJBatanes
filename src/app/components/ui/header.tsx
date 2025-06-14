"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../snippets/logo";
import headerNavigations from "../../data/headerNavigations";
import { usePathname } from "next/navigation";
import Overlay from "../snippets/overlay";

export default function Header() {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
        setMobileNavOpen(false);
      } else {
        setShowHeader(true);
        setMobileNavOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      <Overlay
        isHeader
        isActive={mobileNavOpen}
        onClick={() => setMobileNavOpen(false)}
      />
      <div
        className={`w-full max-w-7xl max-h-screen mx-auto fixed top-0 left-0 right-0 z-40 px-4 py-3 transition-all duration-500 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <header className="text-base-dark bg-[rgba(244,240,235,0.85)] dark:bg-[rgba(37,36,34,0.85)] backdrop-blur-md block mx-auto my-0 rounded-3xl overflow-hidden lg:px-5 lg:py-3 lg:rounded-full lg:overflow-visible">
          <div className="flex items-center justify-between relative px-4 py-3 lg:p-0 lg:grid lg:grid-cols-[200px_auto_200px]">
            <div className="flex item-center justify-start">
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="AJ Batanes Portfolio Logo"
              >
                <Logo />
              </Link>
            </div>
            <nav role="navigation" className="justify-center hidden lg:flex">
              <ul className="relative p-0 flex gap-4 items-center">
                {headerNavigations.map(({ href, label }) => (
                  <li key={href} className="group">
                    <Link
                      href={href}
                      className={`link ${pathname === href ? "link--visible" : ""} relative text-base font-semibold text-base-dark`}
                      aria-current={pathname === href ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="item-center justify-end hidden lg:flex">
              <Link href="/contact" prefetch>
                <button
                  type="button"
                  className="btn btn-arrow"
                  aria-label="Contact support"
                >
                  Get In Touch
                  <svg
                    width="13"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
            {/* Mobile Burger */}
            <div className="items-center justify-end flex lg:hidden">
              <button
                onClick={toggleMobileNav}
                type="button"
                aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
                className="text-base-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile Navigation */}
          <nav
            className={`overflow-hidden lg:hidden transition-all ${
              mobileNavOpen
                ? "max-h-screen translate-y-0"
                : "max-h-0 -translate-y-4"
            }`}
          >
            <ul className="flex flex-col items-start justify-center gap-5 py-2 px-4">
              {headerNavigations.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={toggleMobileNav}
                    className="text-4xl font-semibold"
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-4 p-5 pb-10 h-auto flex items-start justify-center flex-col gap-2">
              <p className="text-lg text-base-dark">
                I would love to hear from you!
              </p>
              <Link href="/contact" prefetch>
                <button
                  type="button"
                  className="btn btn-arrow"
                  aria-label="Contact support"
                >
                  Get In Touch
                  <svg
                    width="13"
                    height="12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </button>
              </Link>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
