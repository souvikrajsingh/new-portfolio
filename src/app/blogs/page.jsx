import React from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

export default function page() {
  return (
    <div className="h-screen bg-hero-pattern bg-cover bg-center">
      <Navbar />
      <Footer />
    </div>
  );
}
