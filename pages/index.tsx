import Hero from "@/components/partials/hero";
import Layout from "@/components/partials/layout";
import Navbar from "@/components/partials/navbar";
import React from "react";
import "swiper/css";

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <Hero />
    </Layout>
  );
};

export default Home;
