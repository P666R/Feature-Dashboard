import { FC, ReactElement } from "react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { NavsList } from "./NavsList";
import { TeamsList } from "./TeamsList";
import { navsList, teamsList } from "./interfaces";

export const LeftSidebar: FC = (): ReactElement => {
  return (
    <FlowbiteSidebar
      className="h-[calc(100vh-80px)] w-64 rounded-lg bg-white shadow-sm"
      aria-label="Main Navigation"
    >
      <FlowbiteSidebar.Items>
        <FlowbiteSidebar.ItemGroup>
          <NavsList navsList={navsList} />
        </FlowbiteSidebar.ItemGroup>
        <FlowbiteSidebar.ItemGroup>
          <span className="px-4 text-xs font-semibold uppercase text-gray-500">
            TEAMS
          </span>
          <TeamsList teamsList={teamsList} />
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};
