import Layout from "@/components/layouts/layout";
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
