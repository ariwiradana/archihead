"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
};

export default Home;
