"use client";
import React from "react";

import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

import { GoArrowUpRight, GoCheckCircle } from "react-icons/go";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Page() {
  const [date, setDate] = useState(new Date());
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("souvikrajsingh02@gmail.com");
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000); // Change duration of the message display as needed

      return () => clearTimeout(timer);
    }
  }, [copied]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className=" h-screen bg-hero-pattern bg-cover bg-center ">
      <Navbar />
      <div className="text-3xl xl:text-4xl px-8 xl:px-32 2xl:px-96 pt-14 pb-6 font-bold  font-cabinG ">
        <span className="inline-block md:inline">Contact </span>
        <span className="block md:inline"> Souvik Raj Singh</span>
      </div>
      <div className="text-start px-8 xl:px-32 2xl:px-96  text-base xl:text-2xl pt-8 xl:pt-6 font-cabinG z-10">
        Email me
        <div className="pt-2 text-lg font-sans  xl:text-sm 2xl:text-lg space-y-8">
          <p className="flex relative items-center text-sm xl:text-sm 2xl:text-lg pt-2 text-accent hover:text-primary">
            <span
              className="underline text-light-gray font-sans cursor-pointer hover:underline  xl:text-base"
              onClick={copyToClipboard}
            >
              souvikrajsingh02@gmail.com
              {copied && (
                <span className=" absolute bottom-full mb-2 animate-pulse text-light-gray text-xs ">
                  Copied to clipboard!{" "}
                  <GoCheckCircle className="fill-green-500 stroke-[0.2] " />
                </span>
              )}
            </span>
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
        </div>
        <div className=" py-2 xl:py-6 font-sans ">
          <div suppressHydrationWarning className="text-base pt-8 xl:pt-20">
            {format(date, "MMMM do, yyyy, h:mm:ss a")}
          </div>
          <div className="text-gray text-base">GMT+5:30 - Delhi, India</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
