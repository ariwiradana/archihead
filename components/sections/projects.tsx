import { syne } from "@/lib/fonts";
import React, { FC } from "react";
import ProjectCard from "../layouts/project.card";
import { ProjectData } from "@/constants/project";

const Project: FC = () => {
  return (
    <section
      className="mx-auto max-w-screen-2xl p-6 md:px-16 md:pb-16 lg:px-20 lg:pb-20"
      id="project"
    >
      <div
        className={`mb-6 flex w-full flex-col items-start gap-4 md:mb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 ${syne.className}`}
      >
        <h2 className="whitespace-nowrap text-4xl font-semibold text-dark md:text-5xl">
          Our Projects
        </h2>
        <div className="h-[1px] w-[10%] bg-dark lg:w-full"></div>
        <p className="text-base text-dark/70 lg:text-end">
          We transform visions into reality, crafting innovative, sustainable
          spaces that inspire and shape the future.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {ProjectData.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
