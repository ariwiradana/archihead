"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ButtonPrimaryIcon from "./ui/ButtonPrimaryIcon";
import { HiArrowLeft, HiArrowRight, HiChevronLeft } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import type { NavigationOptions } from "swiper/types";
import Link from "next/link";
import { Project } from "@/types/Project";
import FsLightbox from "fslightbox-react";

interface Props {
  project: Project;
}

const ProjectDetail = ({ project }: Props) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  const [slide, setSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  const handleLightbox = (image: string) => {
    const slide = project.images.findIndex((img) => image === img);
    setLightboxController((state) => ({
      ...state,
      toggler: !state.toggler,
      slide: slide + 1,
    }));
  };

  return (
    <>
      <FsLightbox
        slide={lightboxController.slide}
        sources={project.images}
        toggler={lightboxController.toggler}
      />
      <section className="bg-white pt-16">
        <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
          {/* Back navigation */}
          <Link
            href="/"
            aria-label="Kembali ke Beranda"
            className="mb-3 flex items-center gap-x-2 xl:mb-4"
          >
            <div className="text-dark/70 text-lg">
              <HiChevronLeft />
            </div>
            <p className="text-dark/70 text-sm md:text-base">Kembali</p>
          </Link>

          {/* Title */}
          <h2 className="text-dark text-4xl font-medium xl:text-7xl">
            {project.name}
          </h2>

          <div className="mt-6 md:mt-8 xl:mt-10">
            <div className="grid grid-cols-2 gap-2">
              {/* Main image */}
              <div
                role="button"
                aria-label={`Buka Lightbox untuk ${project.name}`}
                onClick={() => handleLightbox(project.images[0])}
                className="bg-dark/10 relative col-span-2 h-[35vh] overflow-hidden md:col-span-1 xl:h-[50vh]"
              >
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  fill
                  priority
                  src={project.images[0]}
                  alt={`Project ${project.name} Image 1`}
                  className="object-cover transition-all duration-500 ease-in-out hover:scale-105"
                />
              </div>

              {/* Slider */}
              <Swiper
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                spaceBetween={8}
                slidesPerView={2}
                className="relative col-span-2 w-full md:col-span-1"
                onBeforeInit={(swiper) => {
                  if (prevRef.current && nextRef.current) {
                    const nav = swiper.params.navigation as NavigationOptions;
                    nav.prevEl = prevRef.current;
                    nav.nextEl = nextRef.current;
                  }
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setTotalSlides(swiper.slides.length);
                }}
                onSlideChange={(swiper) => setSlide(swiper.realIndex)}
              >
                {project.images.slice(1).map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      onClick={() => handleLightbox(img)}
                      className="bg-dark/10 relative aspect-square h-full cursor-pointer overflow-hidden md:aspect-auto"
                    >
                      <Image
                        loading="lazy"
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 70vw, 60vw"
                        fill
                        src={img}
                        alt={`Project ${project.name} Image ${idx + 1}`}
                        className="object-cover transition-all duration-500 ease-in-out hover:scale-105"
                      />
                    </div>
                  </SwiperSlide>
                ))}

                {/* Desktop Controls */}
                <div className="absolute right-0 bottom-0 z-10 mt-6 hidden w-1/2 justify-end gap-x-3 bg-white pt-3 pl-4 md:flex">
                  <ButtonPrimaryIcon ref={prevRef} icon={<HiArrowLeft />} />
                  <ButtonPrimaryIcon ref={nextRef} icon={<HiArrowRight />} />
                </div>
              </Swiper>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between gap-x-4 pt-6 md:hidden">
              <p className="text-dark/70 text-sm">
                {slide + 1} / {totalSlides - 1}
              </p>
              <div className="flex gap-x-2">
                <ButtonPrimaryIcon
                  onClick={handlePrev}
                  icon={<HiArrowLeft />}
                />
                <ButtonPrimaryIcon
                  onClick={handleNext}
                  icon={<HiArrowRight />}
                />
              </div>
            </div>

            {/* Description + Location */}
            <div className="mt-6 flex flex-col items-start gap-x-16 gap-y-4 md:flex-row">
              <p className="text-dark/70 max-w-xl text-sm font-light select-none md:text-base">
                {project.description}
              </p>
              <div className="flex items-center gap-x-6">
                <div className="bg-dark/20 h-[1px] w-12 md:w-20 xl:w-32"></div>
                <p className="text-dark md:textlg">{project.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.name,
            description: project.description,
            image: project.images,
            locationCreated: project.location,
            dateCreated: project.year.toString(), // cukup year
          }),
        }}
      />
    </>
  );
};

export default ProjectDetail;
