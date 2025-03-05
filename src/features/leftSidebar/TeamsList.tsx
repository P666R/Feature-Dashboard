import { FC, ReactElement } from "react";
import { TeamItem } from "./TeamItem";
import { ITeamItem } from "./interfaces";

export const TeamsList: FC<{ teamsList: ITeamItem[] }> = ({
  teamsList,
}): ReactElement => {
  return (
    <div>
      {teamsList.map((team) => (
        <TeamItem key={team.name} name={team.name} active={team.active} />
      ))}
    </div>
  );
};
