"use client";
import React, { useRef, useState, useMemo, useCallback } from "react";
import ButtonPrimaryIcon from "./ui/ButtonPrimaryIcon";
import { HiArrowLeft, HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { projects } from "@/constants/Projects";
import { NavigationOptions } from "swiper/types";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/navigation";
import type { Swiper as SwiperClass } from "swiper";

const Projects = () => {
  const [slide, setSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // ✅ Memoize slides so React doesn’t rebuild them every render
  const slides = useMemo(
    () =>
      projects.map((project, i) => (
        <SwiperSlide
          key={project.slug || i}
          className="group max-w-[85vw] xl:max-w-[40vw]"
        >
          <div className="relative aspect-square overflow-hidden transition-all duration-500 ease-out xl:aspect-[6/4]">
            <div className="group-hover:bg-dark/20 absolute inset-0 z-10 flex items-center justify-center transition-all duration-500 ease-in-out">
              <Link
                href={`/${project.slug}`}
                aria-label={`Link to ${project.name}`}
                className="bg-dark/80 flex cursor-pointer items-center justify-center rounded-full p-5 opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-100"
              >
                <HiArrowUpRight className="text-3xl text-white" />
              </Link>
            </div>

            <Image
              src={project.images[0]}
              alt={`Slide ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading={i === 0 ? "eager" : "lazy"}
              priority={i === 0}
              sizes="(max-width: 768px) 85vw, 40vw"
            />
          </div>

          <div className="mt-3 flex items-center gap-x-3">
            <p className="text-dark/70 text-base">{project.year}</p>
            <div className="bg-dark/20 h-[1px] w-10"></div>
            <p className="text-dark/70 text-base">{project.location}</p>
          </div>
          <p className="text-dark mt-1 text-[28px] font-medium xl:text-4xl">
            {project.name || `Project ${i + 1}`}
          </p>
        </SwiperSlide>
      )),
    [],
  );

  // ✅ Use callbacks to avoid recreating functions on re-render
  const handleBeforeInit = useCallback((swiper: SwiperClass) => {
    if (prevRef.current && nextRef.current) {
      const navigation = swiper.params.navigation as NavigationOptions;
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;
    }
  }, []);

  const handleSwiper = useCallback((swiper: SwiperClass) => {
    setTotalSlides(swiper.slides.length - 2 + 1); // Adjusted for Swiper clones
  }, []);

  const handleSlideChange = useCallback(
    (swiper: SwiperClass) => setSlide(swiper.realIndex),
    [],
  );

  return (
    <section id="Projects" className="bg-white">
      <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
        <div className="flex items-center justify-between">
          <h2 className="text-dark text-5xl xl:text-7xl">Projects</h2>
          <div className="flex gap-x-3">
            <ButtonPrimaryIcon
              disabled={slide === 0}
              ref={prevRef}
              icon={<HiArrowLeft />}
            />
            <ButtonPrimaryIcon
              disabled={slide === totalSlides - 1}
              ref={nextRef}
              icon={<HiArrowRight />}
            />
          </div>
        </div>

        <div className="mt-9">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={handleBeforeInit}
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            slidesPerView="auto"
            spaceBetween={8}
            centeredSlides={false}
            className="!overflow-visible"
          >
            {slides}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
