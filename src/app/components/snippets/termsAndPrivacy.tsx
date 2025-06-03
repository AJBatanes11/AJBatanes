"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TermsAndPrivacy() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center justify-center gap-1 lg:gap-6">
      <li>
        <Link
          href="/"
          className={`link ${pathname === "/" ? "link--visible" : ""} text-sm lg:text-base`}
        >
          Privacy Policy
        </Link>
      </li>
      <li>|</li>
      <li>
        <Link
          href="/"
          className={`link ${pathname === "/" ? "link--visible" : ""} text-sm lg:text-base`}
        >
          Terms
        </Link>
      </li>
    </ul>
  );
}
