import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/constants/Projects";
import React from "react";

const ProjectSlug = ({ params }: { params: { slug: string } }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>❌ Project Not Found</div>;
  }

  return (
    <main>
      <ProjectDetail project={project} />
    </main>
  );
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "This project does not exist",
    };
  }

  return {
    title: project.name,
    description: `Explore details about ${project.name}`,
  };
}

export default ProjectSlug;
