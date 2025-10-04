import React from "react";
import Image from "next/image";
import { projects } from "@/constants/Projects";
import ButtonPrimary from "./ui/ButtonPrimary";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="Projects" className="bg-white">
      <div className="container mx-auto px-4 pb-10 md:px-8 md:pb-12 xl:px-10 xl:pb-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-dark/70 mb-2">Our Projects</p>
            <h2 className="text-dark max-w-lg text-4xl font-medium md:text-5xl">
              A Showcase of Selected Works
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <p className="text-dark/70 max-w-md text-sm leading-5 font-light md:text-right">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam reiciendis sint est nisi, maxime eveniet quia!
              Repudiandae, omnis debitis. Optio!
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={`Archihead Project ${project.name}`}
              className="border-dark/5 group flex flex-col border p-2 xl:flex-row"
            >
              <div className="relative aspect-[5/3] overflow-hidden xl:aspect-square xl:min-w-xs">
                <Image
                  fill
                  className="bg-dark/5 w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
                  src={project.images[0]}
                  alt={`Archihead ${project.name} Image`}
                />
              </div>
              <div className="flex flex-col justify-between gap-x-4 gap-y-12 px-4 py-6 md:p-6 xl:py-4">
                <div>
                  <h5 className="text-dark text-3xl font-medium uppercase md:text-3xl">
                    {project.name}
                  </h5>
                  <p className="text-dark/70 mt-1">{project.location}</p>
                </div>
                <div>
                  <p className="text-dark/70 mb-6 line-clamp-2 text-sm leading-5">
                    {project.description}
                  </p>
                  <Link
                    href={`/${project.slug}`}
                    aria-label={`Link to ${project.name}`}
                  >
                    <ButtonPrimary
                      title="Explore"
                      aria-label={`Button Detail ${project.name}`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
