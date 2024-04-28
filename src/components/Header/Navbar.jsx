import React from "react";
import Link from "next/link";
import { LogoSimple } from "../SVGs/LogoSimple";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between gap-x-20 px-5 xl:px-28 2xl:px-96 pt-8 font-semibold font-cabinG z-10">
        <div className="text-left">
          <Link aria-label="Back to Home" href="/">
            <LogoSimple />
          </Link>
        </div>
        <div className=" hidden md:flex font-cabinG pt-6 2xl:pt-8 text-xs 2xl:text-sm">
          <nav>
            <ul className="flex gap-x-3 2xl:gap-x-5 text-white">
              <li>
                <a href="/projects" className=" hover:text-gradient ">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className=" hover:text-gradient ">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className=" hover:text-gradient ">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blogs" className=" hover:text-gradient ">
                  Blogs
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
