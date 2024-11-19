import Layout from "@/components/layouts/layout";
import AboutUs from "@/components/sections/about.us";
import Hero from "@/components/sections/hero";
import Project from "@/components/sections/projects";
import React from "react";
import "swiper/css";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <Project />
    </Layout>
  );
};

export default Home;
