"use client";
import React from "react";
import { HiArrowUpRight, HiChevronRight } from "react-icons/hi2";
import { projects } from "@/constants/Projects";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimaryIcon from "./ui/ButtonPrimaryIcon";
import ButtonPrimary from "./ui/ButtonPrimary";

const Projects = () => {
  return (
    <>
      <section
        id="Proyek"
        className="bg-white"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 xl:px-10 xl:py-16">
          <div className="flex flex-col gap-x-6 gap-y-3 xl:flex-row">
            <h2 className="text-dark text-4xl font-medium xl:text-6xl">
              Proyek Unggulan
            </h2>
          </div>
          <div className="mt-9 grid grid-cols-1 gap-x-4 gap-y-8 xl:grid-cols-3">
            {projects.map((project, i) => (
              <Link
                aria-label={`Lihat detail proyek ${project.name}`}
                href={`/${project.slug}`}
                key={project.slug || i}
                className="group"
                itemScope
                itemType="https://schema.org/CreativeWork"
                itemProp="itemListElement"
              >
                <meta itemProp="name" content={project.name} />
                <meta
                  itemProp="dateCreated"
                  content={project.year.toString()}
                />
                <meta itemProp="locationCreated" content={project.location} />
                <meta itemProp="image" content={project.images[0]} />

                <div
                  className={`relative aspect-square w-full overflow-hidden`}
                >
                  <div className="group-hover:bg-dark/30 absolute inset-0 z-20 flex items-center justify-center transition-all duration-500 ease-in-out">
                    <button
                      type="button"
                      className="bg-dark/80 flex cursor-pointer items-center justify-center rounded-full p-5 opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-100"
                    >
                      <HiArrowUpRight className="text-3xl text-white" />
                      <span className="sr-only">
                        Lihat detail proyek {project.name}
                      </span>
                    </button>
                  </div>

                  <Image
                    src={project.images[0]}
                    alt={`Foto ${i + 1} proyek ${project.name} di ${project.location}`}
                    fill
                    className="bg-dark/5 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={i === 0 ? "eager" : "lazy"}
                    priority={i === 0}
                    sizes="(max-width: 768px) 85vw, 40vw"
                    itemProp="image"
                  />
                </div>

                <div className="mt-3 flex items-center gap-x-3">
                  <p className="text-dark/70 text-base" itemProp="dateCreated">
                    {project.year}
                  </p>
                  <div className="bg-dark/20 h-[1px] w-10"></div>
                  <p
                    className="text-dark/70 text-base"
                    itemProp="locationCreated"
                  >
                    {project.location}
                  </p>
                </div>
                <h3
                  itemProp="name"
                  className="text-dark mt-1 text-2xl font-medium xl:text-3xl"
                >
                  {project.name || `Project ${i + 1}`}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Proyek Unggulan Archihead",
            itemListElement: projects.map((project, i) => ({
              "@type": "CreativeWork",
              position: i + 1,
              name: project.name,
              image: project.images[0],
              locationCreated: project.location,
              dateCreated: project.year,
              url: `/${project.slug}`,
            })),
          }),
        }}
      />
    </>
  );
};

export default Projects;
