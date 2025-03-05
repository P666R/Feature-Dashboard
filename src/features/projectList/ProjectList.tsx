import { FC, ReactElement } from "react";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectGrid } from "./ProjectGrid";
import { projects } from "./interfaces";

export const ProjectList: FC = (): ReactElement => (
  <div className="flex-1 p-4">
    <ProjectHeader />
    <ProjectGrid projects={projects} />
  </div>
);
