import Layout from "@/components/layouts/layout";
import Navbar from "@/components/layouts/navbar";
import AboutUs from "@/components/sections/about.us";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Project from "@/components/sections/projects";
import React from "react";
import "swiper/css";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <AboutUs />
      <Project />
      <Contact />
    </Layout>
  );
};

export default Home;
