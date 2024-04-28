import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";

export default function Home() {
  return (
    <div className=" bg-hero-pattern bg-cover bg-center ">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
