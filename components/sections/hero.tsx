import Image from "next/image";
import React, { FC, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { syne } from "@/lib/fonts";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import ButtonSwiperAction from "../elements/button.swiper.actions";
import { ProjectData } from "@/constants/project";
import ButtonPrimary from "../elements/button.primary";

const Hero: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative select-none" id="hero">
      <Swiper
        className="relative"
        autoplay
        speed={2000}
        modules={[Autoplay]}
        onActiveIndexChange={(swiper) => {
          const index = swiper.activeIndex;
          setActiveIndex(index);
        }}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark/30 via-dark/0 to-dark px-6 md:px-16 lg:px-20">
          <div className="mx-auto flex h-svh w-full max-w-screen-2xl flex-col items-end justify-end gap-[60px] py-10 md:py-20 lg:flex-row lg:justify-between lg:py-[100px]">
            <div className="self-start lg:self-auto">
              <h1
                className={`${syne.className} mb-9 text-5xl font-semibold text-white lg:text-6xl`}
              >
                Building Dreams,
                <br />
                Shaping the Future
              </h1>
              <ButtonPrimary icon={<FiArrowUpRight />} title="Explore Now" />
            </div>
            <div className="relative z-20 flex flex-col items-end">
              <div className="mb-3 flex items-center gap-x-4">
                <p
                  className={`${syne.className} text-lg font-medium text-white`}
                >
                  {ProjectData[activeIndex].title}
                </p>
                <div className="h-[1px] w-[60px] bg-white"></div>
              </div>
              <p
                className={`${syne.className} mb-6 line-clamp-2 max-w-[365px] text-end text-base text-white/80`}
              >
                {ProjectData[activeIndex].description}
              </p>
              <div className="flex gap-x-4">
                <ButtonSwiperAction
                  disabled={activeIndex === 0}
                  action="prev"
                  icon={<FiArrowLeft />}
                />
                <ButtonSwiperAction
                  disabled={activeIndex === ProjectData.length - 1}
                  action="next"
                  icon={<FiArrowRight />}
                />
              </div>
            </div>
          </div>
        </div>
        {ProjectData.map((project) => (
          <SwiperSlide key={project.slug} className="relative h-full w-full">
            <div className="relative h-lvh w-full">
              <Image
                sizes="100vw"
                priority
                src={project.images[0]}
                fill
                className="object-cover"
                alt={project.slug}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
