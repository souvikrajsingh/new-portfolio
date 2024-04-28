import React from "react";
import Link from "next/link";
import { LogoSimple } from "../SVGs/LogoSimple";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between gap-x-20 px-14 xl:px-28 2xl:px-96 pt-8 font-semibold font-cabinG z-10">
        <div className="text-left">
          <Link aria-label="Back to Home" href="/">
            <LogoSimple />
          </Link>
        </div>
        <div className="pt-6 2xl:pt-8 text-xs 2xl:text-sm">
          <nav>
            <ul className="flex gap-x-3 2xl:gap-x-5 text-gray">
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
