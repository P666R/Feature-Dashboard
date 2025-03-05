import { FC, ReactElement } from "react";
import { ETeams, ITeamItem } from "./interfaces";

export const TeamItem: FC<ITeamItem> = ({
  name,
  active = false,
}): ReactElement => {
  const getTeamColor = (name: ETeams) => {
    switch (name) {
      case ETeams.Development:
        return "bg-purple-500";
      case ETeams.Design:
        return "bg-red-700";
      case ETeams.Marketing:
        return "bg-orange-400";
      default:
        return "bg-black";
    }
  };

  return (
    <div
      className={`flex items-center px-4 py-0.5 ${
        active ? "bg-blue-100" : "hover:bg-gray-100"
      } cursor-pointer rounded-lg`}
    >
      <span className={`mr-2 size-2 rounded-full ${getTeamColor(name)}`} />
      <span className={`flex-1 ${active ? "text-blue-700" : "text-gray-700"}`}>
        {name}
      </span>
    </div>
  );
};
