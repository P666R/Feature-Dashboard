import { FC, ReactElement } from "react";
import { ProjectCard } from "./ProjectCard";
import { IProject } from "./interfaces";

interface ProjectGridProps {
  projects: IProject[];
}

export const ProjectGrid: FC<ProjectGridProps> = ({
  projects,
}): ReactElement => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project) => (
      <ProjectCard key={project.name} project={project} />
    ))}
  </div>
);
