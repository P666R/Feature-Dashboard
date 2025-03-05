import { ComponentType, SVGProps } from "react";
import {
  DocumentCheckIcon,
  Squares2X2Icon,
  UsersIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export interface INavItem {
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  active?: boolean;
}

export enum ETeams {
  Development = "Development",
  Design = "Design",
  Marketing = "Marketing",
}

export interface ITeamItem {
  name: ETeams;
  active?: boolean;
}

export const navsList: INavItem[] = [
  {
    label: "Project List",
    Icon: Squares2X2Icon,
    active: true,
  },
  {
    label: "Teams",
    Icon: UsersIcon,
    active: false,
  },
  {
    label: "Tasks",
    Icon: DocumentCheckIcon,
    active: false,
  },
  {
    label: "Reports",
    Icon: DocumentTextIcon,
    active: false,
  },
  {
    label: "Settings",
    Icon: Cog6ToothIcon,
    active: false,
  },
];

export const teamsList: ITeamItem[] = [
  {
    name: ETeams.Development,
    active: false,
  },
  {
    name: ETeams.Design,
    active: false,
  },
  {
    name: ETeams.Marketing,
    active: false,
  },
];
