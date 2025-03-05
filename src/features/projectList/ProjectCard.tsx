import { FC, ReactElement } from "react";
import { Avatar, Button, Card, Progress } from "flowbite-react";
import { StatusIndicator } from "./StatusIndicator";
import { IProject, statusIndicators } from "./interfaces";
import { IoCalendarClearOutline } from "react-icons/io5";

interface ProjectCardProps {
  project: IProject;
}

export const ProjectCard: FC<ProjectCardProps> = ({
  project,
}): ReactElement => {
  const { name, module, timeline, status, progress, team, insights } = project;
  const statusIndicator = statusIndicators[insights];

  return (
    <Card className="shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-500">{module}</p>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <IoCalendarClearOutline />
          <span className="rounded-md p-1 text-sm">{timeline}</span>
        </div>
        <Button className="bg-[#E9D5FF] text-[#9334E9]">{status}</Button>
      </div>
      <Progress
        progress={progress}
        color={statusIndicator.color}
        size="sm"
        className="mt-2"
      />
      <div className="mt-2 flex items-center">
        <Avatar.Group>
          {team.slice(0, 2).map((avatar, index) => (
            <Avatar key={index + 1} img={avatar} rounded stacked />
          ))}
          {team.length > 2 && <Avatar.Counter total={team.length - 2} />}
        </Avatar.Group>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <StatusIndicator insights={insights} />
        <button className="text-sm font-semibold text-[#9334E9]">
          AI Insights
        </button>
      </div>
    </Card>
  );
};
