import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Footer() {
  const links = [
    { href: "https://twitter.com/souviktwts", text: "X: @souviktwts" },
    { href: "https://twitter.com/souviktwts", text: "X: @souviktwts" },
    { href: "https://twitter.com/souviktwts", text: "X: @souviktwts" },
  ];
  return (
    <footer>
      <div className="text-start  mpx-14 xl:px-32 2xl:px-96 xl:text-2xl pt-12 font-cabinG z-10">
        Find Me
        <div className="pt-5 text-lg font-sans xl:text-sm 2xl:text-lg space-y-">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <p className="flex items-center text-lg xl:text-sm 2xl:text-lg pt-2 text-accent hover:text-primary">
                <span className="underline xl:text-xl">{link.text}</span>
                <span className="group relative overflow-hidden h-fit w-fit ml-2">
                  <GoArrowUpRight
                    size={22}
                    className="group-hover:-translate-y-5 group-hover:translate-x-5 duration-500 transition-transform ease-in-out-circ fill-light-gray stroke-[0.2]"
                  />
                  <GoArrowUpRight
                    size={22}
                    className="absolute top-0 group-hover:translate-x-0 duration-500 group-hover:translate-y-0 transition-all ease-in-out-circ translate-y-5 -translate-x-5 fill-light-gray stroke-[0.2]"
                  />
                </span>
              </p>
            </Link>
          ))}{" "}
        </div>
      </div>

      <p className="font-cabinG text-xs ">
        Copyright &copy; 2024 <span className="font-bold">souvikrajsingh</span>{" "}
        All Rights Reserved
      </p>
    </footer>
  );
}
