"use client";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/constants/Projects";
import { use } from "react";

const ProjectSlug = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  const project = slug ? projects.find((p) => p.slug === slug) : undefined;

  if (!project) {
    return <div>❌ Project Not Found</div>;
  }

  return (
    <main id="Proyek">
      <ProjectDetail project={project} />
    </main>
  );
};

export default ProjectSlug;
