import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Industries from "@/components/Industries/Industries";
import Gallery from "@/components/Gallery/Gallery";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow-1">
        {/* Hero Banner Section */}
        <Hero />

        {/* About Versan Section */}
        <About />

        {/* Services & Capabilities Section */}
        <Services />

        {/* Why Choose Us Dark Grid Section */}
        <WhyChooseUs />

        {/* Industries We Serve Section */}
        <Industries />

        {/* Asymmetrical Project Gallery Section */}
        <Gallery />

        {/* Contact Form & Info Section */}
        <Contact />
      </main>
    </>
  );
}
