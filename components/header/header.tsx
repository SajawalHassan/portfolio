"use client";

import Link from "next/link";
import { HeaderLinks } from "./header-links";
import { HeaderSheet } from "./header-sheet";

export const Header = () => {
  return (
    <header className="px-[27px] pt-[29px] flex items-center justify-between">
      <Link href="#home" scroll={false} className="text-[18px] font-bold text-th-text">
        Sajawal Hassan
      </Link>

      <HeaderLinks />

      <div className="md:hidden">
        <HeaderSheet />
      </div>
    </header>
  );
};
