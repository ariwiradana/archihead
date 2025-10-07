"use client";
import React, { useMemo } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "@/constants/Projects";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="Proyek" className="bg-white">
      <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
        <div className="flex flex-col gap-x-6 gap-y-3 xl:flex-row">
          <h2 className="text-dark text-4xl font-medium xl:text-6xl">
            Proyek Unggulan
          </h2>
        </div>
        <div className="mt-9 grid grid-cols-1 gap-4 space-y-6 xl:grid-cols-3">
          {projects.map((project, i) => (
            <div key={project.slug || i} className="group">
              <div className={`relative aspect-square w-full overflow-hidden`}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
