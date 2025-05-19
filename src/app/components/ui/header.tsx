"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./logo";
import Button from "../snippets/custom-button";
import { useCursorStore } from "../../store/cursorTooltipStore";
import headerNavigations from "../../data/header-navigations";

export default function Header() {
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const { setCursor, resetCursor } = useCursorStore();

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
        console.log(mobileNavOpen);
    };

    return (
        <div
            className={`w-full max-w-7xl max-h-screen mx-auto fixed top-0 left-0 right-0 z-40 px-4 py-3 transition-transform duration-300 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
            }`}
            onMouseEnter={() => setCursor('invisible')}
            onMouseLeave={resetCursor}
        >
            <header className="text-black dark:text-white bg-[rgba(170,170,170,0.8)] dark:bg-[rgba(85,85,85,0.8)] backdrop-blur block mx-auto my-0 rounded-3xl transition-all overflow-hidden lg:px-5 lg:py-3 lg:rounded-full lg:overflow-visible">
                <div className="flex items-center justify-between relative px-4 py-3 lg:p-0 lg:grid lg:grid-cols-[200px_auto_200px]">
                    <div className="flex item-center justify-start">
                        <Logo />
                    </div>
                    <nav role="navigation" className="justify-center hidden lg:flex">
                        <ul className="relative p-0 flex gap-4 items-center">
                            {headerNavigations.map(({ href, label}) => (
                                <li key={href}>
                                    <Link href={href} className="text-base text-black dark:text-white transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="item-center justify-end hidden lg:flex">
                        <Link href="/contact">
                            <Button className="btn-white btn-arrow" ariaLabel="Contact support">
                                Get In Touch
                                <svg width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5" stroke="currentColor"></path>
                                </svg>
                            </Button>
                        </Link>
                    </div>
                    {/* Mobile Burger */}
                    <div className="items-center justify-end flex lg:hidden">
                        <button onClick={toggleMobileNav} className="text-black dark:text-white transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Navigation */}
                <nav
                className={`overflow-hidden transition-all duration-300 lg:hidden ${
                    mobileNavOpen ? "max-h-screen translate-y-0" : "max-h-0 -translate-y-4"
                }`}
                >
                    <ul className="flex flex-col items-start justify-center gap-5 p-5 px-4">
                        {headerNavigations.map(({ href, label }) => (
                            <li key={href}>
                                <Link href={href} className="text-3xl transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="px-4 p-5 pb-10 h-auto flex items-start justify-center flex-col gap-2">
                        <p className="text-lg text-black dark:text-white transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300">
                            I would love to hear from you!
                        </p>
                        <Link href="/contact">
                        <Button className="btn-white btn-arrow" ariaLabel="Contact support">
                            Get In Touch
                            <svg width="13" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6h12m0 0L6.5.5M12 6l-5.5 5.5" stroke="currentColor"></path>
                            </svg>
                        </Button>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );
}