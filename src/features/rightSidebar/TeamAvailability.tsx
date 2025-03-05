import { FC, ReactElement } from "react";
import { TeamCard } from "./TeamCard";
import { teamAvailability } from "./interfaces";

export const TeamAvailability: FC = (): ReactElement => (
  <div>
    <h3 className="mb-2 text-lg font-bold">Team Availability</h3>
    <ul className="space-y-2 text-sm">
      {teamAvailability.map((team) => (
        <TeamCard key={team.teamName} team={team} />
      ))}
    </ul>
  </div>
);
