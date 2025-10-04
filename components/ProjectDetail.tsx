"use client";
import React, { useRef } from "react";
import Image from "next/image";
import ButtonPrimaryIcon from "./ui/ButtonPrimaryIcon";
import { HiArrowLeft, HiArrowRight, HiChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Project } from "@/types/Project";
import Link from "next/link";
import type { Swiper as SwiperClass } from "swiper";
import { NavigationOptions } from "swiper/types";

interface Props {
  project: Project;
}

const ProjectDetail = ({ project }: Props) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const swiperRef = useRef<SwiperClass>(null);

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
        <div className="mb-3 flex items-center gap-x-3 xl:mb-4">
          <Link href="/" className="text-dark/40 text-sm md:text-base">
            Home
          </Link>
          <HiChevronRight className="text-dark/40 text-sm md:text-base" />
          <p className="text-dark/70 text-sm md:text-base">{project.name}</p>
        </div>
        <h1 className="text-dark text-5xl leading-12 uppercase md:text-6xl xl:text-7xl xl:leading-16">
          {project.name}
        </h1>
        <div className="mt-6 md:mt-8 xl:mt-10">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-dark/10 relative col-span-2 aspect-[6/4] md:col-span-1">
              <Image
                fill
                className="object-cover"
                src={project.images[0]}
                alt={`Project ${project.name} Thumbnail`}
              />
            </div>
            <Swiper
              autoplay
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onBeforeInit={(swiper) => {
                if (prevRef.current && nextRef.current) {
                  const navigation = swiper.params
                    .navigation as NavigationOptions;

                  navigation.prevEl = prevRef.current;
                  navigation.nextEl = nextRef.current;
                }
              }}
              navigation={{
                nextEl: nextRef.current,
                prevEl: prevRef.current,
              }}
              modules={[Navigation, Autoplay]}
              spaceBetween={8}
              slidesPerView={3}
              className="relative col-span-2 w-full md:col-span-1"
            >
              {project.images.slice(1).map((img, idx) => (
                <SwiperSlide key={idx} className="w-full">
                  <div className="bg-dark/10 relative aspect-square h-full md:aspect-auto">
                    <Image
                      fill
                      className="object-cover"
                      src={img}
                      alt={`Project ${project.name} Image`}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="absolute right-0 bottom-0 z-10 mt-6 hidden w-1/3 justify-end gap-x-3 bg-white pt-6 md:flex">
                <ButtonPrimaryIcon ref={prevRef} icon={<HiArrowLeft />} />
                <ButtonPrimaryIcon ref={nextRef} icon={<HiArrowRight />} />
              </div>
            </Swiper>
          </div>
          <div className="flex gap-x-2 pt-6 md:hidden">
            <ButtonPrimaryIcon
              onClick={() => swiperRef.current?.slidePrev()}
              icon={<HiArrowLeft />}
            />
            <ButtonPrimaryIcon
              onClick={() => swiperRef.current?.slideNext()}
              icon={<HiArrowRight />}
            />
          </div>

          <div className="mt-6 flex flex-col items-start gap-x-16 gap-y-4 md:flex-row">
            <p className="text-dark/70 max-w-md text-sm font-light md:text-base">
              {project.description}
            </p>
            <p className="text-dark md:textlg">{project.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
