import Layout from "@/components/layouts/layout";
import SEO from "@/components/layouts/seo";
import AboutUs from "@/components/sections/about.us";
import Hero from "@/components/sections/hero";
import Project from "@/components/sections/projects";
import { GetServerSideProps } from "next";
import React from "react";
import "swiper/css";

interface HomeProps {
  messages: { [key: string]: string };
}

const Home = () => {
  return (
    <Layout>
      <SEO
        url={typeof window !== "undefined" ? window.location.origin : ""}
        image="/logo-primary.png"
        title="Architecture Studio in Bali | Archihead"
        description="Archihead is a leading architecture studio in Bali, specializing in luxury villas, modern architecture, and sustainable design. Explore our stunning portfolio of projects and innovative designs."
      />
      <Hero />
      <AboutUs />
      <Project />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  locale,
}) => {
  const messages = await import(`../locales/${locale}.json`);

  return {
    props: {
      messages: messages.default,
    },
  };
};

export default Home;
