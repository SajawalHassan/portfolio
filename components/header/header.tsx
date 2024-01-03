"use client";

import Link from "next/link";
import { HeaderLinks } from "./header-links";
import { HeaderSheet } from "./header-sheet";

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between">
        <Link href="#hero" scroll={false} className="text-[18px] font-bold text-th-text">
          Sajawal Hassan
        </Link>

        <HeaderLinks />

        <div className="md:hidden">
          <HeaderSheet />
        </div>
      </nav>
    </header>
  );
};
