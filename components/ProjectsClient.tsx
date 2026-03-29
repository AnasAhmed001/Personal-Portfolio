"use client";

import ProjectCard, { Project } from "./ProjectCard";

interface ProjectsClientProps {
  projects: Project[];
}

const ProjectsClient = ({ projects }: ProjectsClientProps) => {

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsClient;
