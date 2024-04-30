"use client";
import React, { use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoSimple } from "../SVGs/LogoSimple";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  // { href: "/blogs", label: "Blogs" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between gap-x-20 px-5 xl:px-28 2xl:px-96 pt-8 font-semibold font-cabinG z-10">
      <div className="text-left">
        <Link href="/" aria-label="Back to Home">
          <LogoSimple />
        </Link>
      </div>
      <div className="hidden md:flex font-cabinG font-semibold pt-6 2xl:pt-8 text-xs 2xl:text-sm">
        <nav>
          <ul className="flex  gap-x-3 2xl:gap-x-5 text-light-gray">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>
                  <div className="flex flex-col items-center">
                    {link.label}
                    {pathname === link.href && (
                      <span className="inline-block h-1 w-1 mt-2 rounded-full bg-yellow-500"></span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
