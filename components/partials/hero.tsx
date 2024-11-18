import Image from "next/image";
import React, { FC, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { syne } from "@/lib/fonts";
import ButtonLight from "../elements/button.light";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import ButtonSwiperAction from "../elements/button.swiper.actions";
import { projects } from "@/constants/project";

const Hero: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  console.log(activeIndex);

  return (
    <section className="relative select-none">
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
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/0 via-[60%] to-dark z-10 px-6 md:px-16 lg:px-20">
          <div className="max-w-screen-2xl mx-auto w-full py-10 md:py-20 lg:py-[100px] flex flex-col lg:flex-row justify-end lg:justify-between items-end gap-[60px] h-svh">
            <div className="self-start lg:self-auto">
              <h1
                className={`${syne.className} text-4xl lg:text-5xl font-semibold text-white mb-9`}
              >
                Building Dreams,
                <br />
                Shaping the Future
              </h1>
              <ButtonLight icon={<FiArrowUpRight />} title="Explore Now" />
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-x-4 mb-3">
                <p
                  className={`${syne.className} text-lg font-medium text-white`}
                >
                  {projects[activeIndex].title}
                </p>
                <div className="h-[1px] bg-white w-[60px]"></div>
              </div>
              <p
                className={`${syne.className} text-base text-white/80 max-w-[365px] text-end mb-6`}
              >
                {projects[activeIndex].description}
              </p>
              <div className="flex gap-x-4">
                <ButtonSwiperAction
                  disabled={activeIndex === 0}
                  action="prev"
                  icon={<FiArrowLeft />}
                />
                <ButtonSwiperAction
                  disabled={activeIndex === projects.length - 1}
                  action="next"
                  icon={<FiArrowRight />}
                />
              </div>
            </div>
          </div>
        </div>
        {projects.map((project) => (
          <SwiperSlide key={project.slug} className="relative h-full w-full">
            <div className="relative h-lvh w-full">
              <Image
                sizes="100vw"
                priority
                src={project.image}
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
