import React from "react";
import Link from "next/link";
import { LogoSimple } from "../SVGs/LogoSimple";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between gap-x-20 pl-10 2xl:pl-96 pt-8 pr-10 2xl:pr-96 font-semibold font-cabinG z-10">
        <div className="text-left">
          <Link aria-label="Back to Home" href="/">
            <LogoSimple />
          </Link>
        </div>
        <div className="pt-6 2xl:pt-8 text-xs 2xl:text-sm">
          <nav>
            <ul className="flex gap-x-3 2xl:gap-x-5">
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
