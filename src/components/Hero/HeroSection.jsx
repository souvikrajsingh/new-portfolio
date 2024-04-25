import Image from "next/image";
import React from "react";
import Navbar from "@/components/Header/Navbar";

export default function HeroSection() {
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute top-0 left-0 h-full w-1/6 bg-gradient-to-r from-black via-[rgba(123,31,162,0.9)] 50% to-black" />
      <Navbar />
    </div>
  );
}
