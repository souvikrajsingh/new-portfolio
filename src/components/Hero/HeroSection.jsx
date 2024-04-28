import React from "react";
import { Hero } from "../SVGs/Hero";
import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-center gap-x-20 2xl:px-96 pt-12 z-10">
        <div className=" w-screen  xl:w-7/12 2xl:w-11/12">
          <Hero />
        </div>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96  text-base xl:text-2xl pt-12 font-sans z-10">
        About Me
        <div className="pt-5 text-lg  xl:text-sm 2xl:text-lg space-y-8">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            soluta dicta vitae modi laborum enim est voluptate in vel et, iusto
            iure dolor, provident quas dignissimos ut! Laudantium, dolorem
            veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas ducimus sed adipisci animi facilis nisi odit aut reiciendis
            similique consectetur corporis magni fuga, magnam nemo quae eius rem
            eum quis.
          </p>
        </div>
        <div className="flex flex-row">
          <Link href="/about">
            <p className="flex items-center text-lg xl:text-sm 2xl:text-lg pt-5 text-accent hover:text-primary">
              <span className="underline xl:text-xl">Read More</span>
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
        </div>
      </div>
    </>
  );
}
100;
