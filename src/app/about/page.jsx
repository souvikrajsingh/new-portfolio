import React from "react";

import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

import { SiNextdotjs, SiContentful, SiVercel, SiPostman } from "react-icons/si";
import { FaReact, FaGithub, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJavascript,
} from "react-icons/bi";
import { FaDocker } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";

export default function page() {
  return (
    <div className=" bg-hero-pattern bg-cover bg-center ">
      <Navbar />
      <div className="text-3xl xl:text-4xl px-8 xl:px-32 2xl:px-96 pt-14 pb-6 font-bold  font-cabinG ">
        <span className="inline-block md:inline">About </span>
        <span className="block md:inline"> Souvik Raj Singh</span>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96  text-base xl:text-2xl pt-8 xl:pt-6 font-cabinG z-10">
        About Me
        <div className="pt-5 text-lg font-sans  xl:text-sm 2xl:text-lg space-y-8">
          <p className="pb-2 ">
            Hey there, I am
            <span className="text-light-gray font-semibold ml-1">
              Souvik Raj Singh
            </span>
            , an upcoming Backend Developer Intern over at
            <span className="text-light-gray font-semibold"> IbArts </span>!
            Started off smitten with front-end in tech, but soon realized that
            the backend is where the real magic happens.
          </p>
          <p className="pb-2">
            Currently finishing my undergrad in my Computer Science and
            Engineering degree in Kolkata, I have got a soft spot for dark mode
            and minimalism. It is like the cozy corner of the internet, you
            know?
          </p>
          <p>
            On the lookout for cool opportunities to team up with awesome folks
            and tackle some exciting projects. If you have got something
            brewing, I am all ears! Let's chat
          </p>
          <p className="text-2xl font-cabinG">
            This Website is built using: Next js, Redux, TailwindCSS, Contentful
            CMS{" "}
          </p>
        </div>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96 text-base xl:text-2xl pt-12 xl:pt-6 font-cabinG z-10">
        Professional Skillset
        <div className="flex  pt-8 text-lg xl:text-sm 2xl:text-lg">
          <div className="flex space-x-3">
            <SiNextdotjs size={30} />
            <FaReact size={30} />
            <BiLogoTailwindCss size={30} />
          </div>
          <div className="flex pl-4 space-x-3">
            <FaGitAlt size={30} />
            <BiLogoTypescript size={30} />
            <BiLogoJavascript size={30} />
            <FaNodeJs size={30} />
          </div>
        </div>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96 text-base xl:text-2xl pt-8 xl:pt-6 font-cabinG z-10">
        Tools
        <div className="flex items-center pt-8 text-lg xl:text-sm 2xl:text-lg">
          <div className="flex space-x-3">
            <FaDocker size={30} />
            <DiMongodb size={30} />
            <SiContentful size={25} />
          </div>
          <div className="flex pl-4 space-x-4">
            <SiPostman size={27} />
            <TbBrandVscode size={30} />
            <SiVercel size={25} />
            <FaGithub size={25} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
