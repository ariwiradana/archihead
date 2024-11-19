import { syne } from "@/lib/fonts";
import { Project } from "@/types/project";
import Image from "next/image";
import React, { FC } from "react";
import { BiSolidMap } from "react-icons/bi";
import ButtonIcon from "../elements/button.icon";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={project.slug}>
      <div className="group relative aspect-[3/2] w-full overflow-hidden rounded-xl">
        <Image
          priority
          sizes="300px"
          alt={`${project.slug}-image`}
          src={project.images[0]}
          fill
          className="rounded-xl object-cover transition-transform delay-100 duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-b from-dark/0 from-[47%] to-dark p-6">
          <div className={`${syne.className} relative z-20`}>
            <h3 className="mb-1 text-xl text-white">{project.title}</h3>
            <div className="bg-primary inline-flex items-center gap-x-1 rounded-full py-1 pl-2 pr-3 text-sm text-white">
              <BiSolidMap />
              <p>{project.location}</p>
            </div>
          </div>
          <div>
            <ButtonIcon icon={<FiArrowRight />} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
