import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const links = [
    { href: "https://twitter.com/souviktwts", text: "Twitter/X: @souviktwts" },
    {
      href: "https://github.com/souvikrajsingh/",
      text: "Gitub: @souvikrajsingh",
    },
    {
      href: "https://www.linkedin.com/in/souvik-raj-singh-9650bb187/",
      text: "LinkedIn: @souvikrajsingh",
    },
  ];
  return (
    <footer>
      <div className="text-start pb-3 px-8 xl:px-32 2xl:px-96 text-base xl:text-2xl pt-12 font-cabinG z-10">
        Find Me
        <div className="pt-5 text-sm font-sans xl:text-sm 2xl:text-lg space-y-5">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <p className="flex items-center text-sm xl:text-sm 2xl:text-lg pt-2 text-accent hover:text-primary">
                <span className="underline xl:text-base">{link.text}</span>
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

      <div className="flex py-6 font-cabinG text-lg justify-between px-8 xl:px-32 2xl:px-96">
        <div className="flex flex-col md:flex-row justify-start text-base gap-6">
          <Link href="/projects" className="hover:text-gradient">
            {" "}
            Projects
          </Link>
          <Link href="/about" className="hover:text-gradient">
            {" "}
            About
          </Link>
          <Link href="/contact" className="hover:text-gradient">
            {" "}
            Contact
          </Link>
        </div>
        <div className="flex flex-row justify-end gap-6">
          <FaGithub size={25} />
          <FaXTwitter size={25} />
          <FaLinkedin size={25} />
        </div>
      </div>

      <p className="font-cabinG flex py-6 justify-center text-xs ">
        &copy; 2024 <span className="font-bold mx-2 "> souvikrajsingh --</span>{" "}
        All Rights Reserved
      </p>
    </footer>
  );
}
