import { syne } from "@/lib/fonts";
import React, { FC } from "react";
import ProjectCard from "../layouts/project.card";
import { ProjectData } from "@/constants/project";
import { useTranslations } from "next-intl";

const Project: FC = () => {
  const t = useTranslations()
  return (
    <section
      className="mx-auto max-w-screen-2xl bg-[#F9F9F9] px-6 py-10 md:p-16 lg:p-20"
      id="Projects"
    >
      <div
        className={`mb-6 flex w-full flex-col items-start gap-6 md:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 ${syne.className}`}
      >
        <h2 className="whitespace-nowrap text-4xl font-medium text-dark md:text-5xl">
          {t("project.title")}
        </h2>
        <div className="h-[1px] w-[10%] bg-dark lg:w-full"></div>
        <p className="text-base text-dark/70 lg:text-end">
          {t("project.desc")}
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {ProjectData.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
