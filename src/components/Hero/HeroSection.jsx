import Image from "next/image";
import React from "react";
import Navbar from "@/components/Header/Navbar";
import { Hero } from "../SVGs/Hero";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-screen bg-hero-pattern bg-cover bg-center">
      <Navbar />
      <div className="flex justify-center gap-x-20 pl-10 2xl:pl-96 pt-12 pr-16 2xl:pr-96 font-cabinG z-10">
        <div className="hidden md:block w-screen md:w-1/2 xl:w-2/3 2xl:w-11/12">
          <Hero />
        </div>
      </div>
      <div className="flex justify-center pl-10 pr-16 xl:pt-16 2xl:pt-36 text-sm 2xl:text-xl  ">
        Hey My name is Souvik! I am a Full Stack Developer. I love to build
      </div>
    </div>
  );
}
