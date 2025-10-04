"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { projects } from "@/constants/Projects";
import "swiper/css";

const Hero = () => {
  const slides = useMemo(
    () =>
      projects.map((project, index) => (
        <SwiperSlide key={project.name}>
          <div className="relative h-full w-full">
            <Image
              src={project.images[0]}
              alt={`Project ${index + 1} - ${project.name}`}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              className="object-cove bg-dark/5"
            />
          </div>
        </SwiperSlide>
      )),
    [],
  );

  return (
    <section className="bg-dark/5 relative h-[50vh] w-full overflow-hidden xl:h-[40vh]">
      <Swiper
        allowTouchMove={false}
        simulateTouch={false}
        modules={[Autoplay]}
        loop
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full w-full"
      >
        {slides}
      </Swiper>
    </section>
  );
};

export default Hero;
