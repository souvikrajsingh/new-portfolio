import React from "react";
import HeroSection from "@/components/Hero/HeroSection";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className=" bg-hero-pattern bg-cover bg-center ">
      <HeroSection />
      <Footer />
    </div>
  );
}
