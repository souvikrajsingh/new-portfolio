"use client";
import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { PinContainer } from "../../components/ui/3d-pin";

import Stacksaway from "../../components/SVGs/Stacksaway";

export default function page() {
  return (
    <div className="min-h-screen bg-hero-pattern bg-cover bg-center">
      <Navbar />
      <div className="text-start px-8 xl:px-32 2xl:px-96  text-base xl:text-2xl pt-12 font-sans z-10">
        Latest Project
        <div className="pt-5 text-lg  xl:text-sm 2xl:text-lg space-y-">
          <p className="pb-2 ">
            Currently working on a Full stack Blog post Website like {""}
            <span className="text-light-gray font-semibold ">Medium </span>
            using<span className="text-light-gray font-semibold ">
              {" "}
              Next
            </span>{" "}
            for front End,{" "}
            <span className="text-light-gray font-semibold ">
              {" "}
              Cloudfare Workers
            </span>{" "}
            for Backend ,
            <span className="text-light-gray font-semibold "> Zod</span> as
            validation library,
            <span className="text-light-gray font-semibold ">
              {" "}
              TypeScript
            </span>{" "}
            as langauge,
            <span className="text-light-gray font-semibold "> Postgres</span> as
            Database ,
            <span className="text-light-gray font-semibold "> jwt</span> for
            authentication and
            <span className="text-light-gray font-semibold "> Prisma </span> as
            ORM
          </p>
          <p>
            Meanwhile check out these two proeject, latest being{" "}
            <span className="text-light-gray font-semibold "> StacksAway</span>.
          </p>
        </div>
      </div>

      <div className="flex justify-center mr-96 flex-col font-cabinG md:flex-row ">
        <div className="h-[30rem] w-full flex items-center justify-center mr-[30rem]  ml-[12rem] md:mx-[10rem] lg:ml-[50rem]">
          <PinContainer
            title="weather-app-bbit.vercel.app"
            href="https://weather-app-bbit.vercel.app/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Weather App
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Basic Weather App using OpenWeatherMap API and React js
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
            </div>
          </PinContainer>
        </div>
        <div className="h-[30rem] w-full flex items-center justify-center mr-[10rem]  ml-[12rem] md:mt-[10rem] md:mx-[10rem] lg:mr-[50rem] lg:ml-[-10rem]">
          <PinContainer
            title="stacksaway.tech"
            href="https://www.stacksaway.tech/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                StacksAway
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Curated list of programs for Students in Tech
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
            </div>
          </PinContainer>
        </div>

        <div className="h-[30rem] w-full flex items-center justify-center mr-[10rem] ml-[12rem] md:mx-[10rem] lg:ml-[-50rem] lg:mr-[40rem] xl:mr-[25rem]">
          <PinContainer
            title="souvikrajsingh.me"
            href="https://www.souvikrajsingh.me/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Portfolio Website
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Portfolio-The Website you are currently on :{")"}
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"></div>
            </div>
          </PinContainer>
        </div>
      </div>

      <Footer />
    </div>
  );
}
