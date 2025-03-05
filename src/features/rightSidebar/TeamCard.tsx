import { FC, ReactElement } from "react";
import { ITeamAvailability } from "./interfaces";

interface TeamCardProps {
  team: ITeamAvailability;
}

export const TeamCard: FC<TeamCardProps> = ({ team }): ReactElement => {
  const { teamName, available, total } = team;

  return (
    <li className="flex items-center justify-between">
      <span>{teamName}</span>
      <span>
        {available}/{total} Available
      </span>
    </li>
  );
};
