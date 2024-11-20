import Layout from "@/components/layouts/layout";
import { ProjectData } from "@/constants/project";
import { Project } from "@/types/project";
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { GetServerSideProps } from "next";
import { Autoplay } from "swiper/modules";
import ButtonSwiperActionDark from "@/components/elements/button.swiper.actions.dark";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { syne } from "@/lib/fonts";
import { BiSolidBuildings, BiSolidMap, BiSolidPaintRoll } from "react-icons/bi";
import Breadcrumbs from "@/components/layouts/breadcrumbs";
import { useTranslations } from "next-intl";
import SEO from "@/components/layouts/seo";

interface ProjectDetailProps {
  slug: string;
  project: Project;
  messages: { [key: string]: string };
}

const ProjectDetail: FC<ProjectDetailProps> = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descriptionRef.current) {
      const maxHeight =
        parseFloat(getComputedStyle(descriptionRef.current).lineHeight) * 6;
      if (descriptionRef.current.scrollHeight > maxHeight) {
        setIsOverflowing(true);
      }
    }
  }, []);

  const t = useTranslations();

  if (project)
    return (
      <Layout page="project-detail">
        <SEO
          url={typeof window !== "undefined" ? window.location.origin : ""}
          image={project.images[0]}
          title={`${project.title} | Archihead`}
          description={project.description}
        />
        <section className="mt-16 select-none bg-[#F9F9F9]">
          <div className="mx-auto max-w-screen-2xl px-6 py-10 md:p-16 lg:p-20">
            <div className="mb-6">
              <Breadcrumbs path={project.title} />
            </div>
            <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-5 lg:gap-10">
              <div className="lg:col-span-3">
                <div className="relative mb-2 aspect-[4/3] w-full lg:aspect-[4/2]">
                  <Image
                    sizes="90vw"
                    priority
                    src={project.images[selectedImageIndex]}
                    fill
                    className="h-full w-full rounded-xl object-cover"
                    alt="main-image"
                  />
                </div>

                <Swiper
                  autoplay
                  speed={2000}
                  modules={[Autoplay]}
                  slidesPerView={4}
                  spaceBetween={8}
                  onActiveIndexChange={(swiper) => {
                    const index = swiper.activeIndex;
                    setActiveIndex(index);
                  }}
                >
                  {project.images.map((img, index) => (
                    <SwiperSlide
                      key={`project-img-${index + 1}`}
                      className="cursor-pointer"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <div
                        className={`relative aspect-square w-full overflow-hidden rounded-xl border-2 lg:aspect-[4/3] ${selectedImageIndex === index ? "border-dark/60" : "border-transparent"}`}
                      >
                        <Image
                          priority
                          sizes="400px"
                          src={img}
                          fill
                          className="rounded-[11px] object-cover p-[1px]"
                          alt="main-image"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  {project.images.length > 4 && (
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <p className={`${syne.className} text-xl text-dark`}>
                          {activeIndex + 1}{" "}
                          <span className="text-dark/30">
                            /{project.images.length - 3}
                          </span>
                        </p>
                        <div className="relative h-[3px] w-[172px] bg-dark/10">
                          <div
                            className="relative h-[3px] bg-dark transition-all duration-500 ease-in-out"
                            style={{
                              width: `${((activeIndex + 1) / (project.images.length - 3)) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <ButtonSwiperActionDark
                          aria-label="button-project-slide-prev"
                          disabled={activeIndex === 0}
                          action="prev"
                          icon={<FiArrowLeft />}
                        />
                        <ButtonSwiperActionDark
                          aria-label="button-project-slide-next"
                          disabled={project.images.length - 4 === activeIndex}
                          action="next"
                          icon={<FiArrowRight />}
                        />
                      </div>
                    </div>
                  )}
                </Swiper>
              </div>
              <div className={`col-span-2 ${syne.className}`}>
                <h2 className="mb-4 text-[42px] font-semibold leading-[40px] text-dark lg:mb-6">
                  {project.title}
                </h2>
                <p
                  ref={descriptionRef}
                  className={`text-dark/70 ${isShowMore ? "line-clamp-none" : "line-clamp-6"}`}
                >
                  {project.description}
                </p>
                {isOverflowing && (
                  <button
                    aria-label="button-read-more-less"
                    onClick={() => setIsShowMore((prevState) => !prevState)}
                    className="mt-1 text-sm font-medium text-dark underline"
                  >
                    {isShowMore
                      ? t("detailProject.readLess")
                      : t("detailProject.readMore")}
                  </button>
                )}
                <div className="mt-8 flex flex-col gap-7 rounded-xl bg-dark p-8">
                  <div className="flex items-center gap-x-[10px] text-white">
                    <BiSolidBuildings className="min-w-[30px] text-3xl" />
                    <div>
                      <p className="leading-4 text-white/60">
                        {t("detailProject.status")}
                      </p>
                      <p className="text-lg">{project.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-[10px] text-white">
                    <BiSolidMap className="min-w-[30px] text-3xl" />
                    <div>
                      <p className="leading-4 text-white/60">
                        {t("detailProject.location")}
                      </p>
                      <p className="text-lg">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-[10px] text-white">
                    <BiSolidPaintRoll className="min-w-[30px] text-3xl" />
                    <div>
                      <p className="leading-4 text-white/60">
                        {t("detailProject.services")}
                      </p>
                      <p className="text-lg">{project.services}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const locale = context.locale || "en";
  const messages = await import(`../locales/${locale}.json`);

  const project: Project | null =
    ProjectData.find((project) => project.slug === slug) || null;

  return {
    props: {
      slug,
      project,
      messages: messages.default,
    },
  };
};

export default ProjectDetail;
