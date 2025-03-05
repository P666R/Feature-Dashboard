import { ComponentType, SVGProps } from "react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export interface IInsight {
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

export const insights: IInsight[] = [
  {
    text: "Potential delay detected in UI Development phase",
    Icon: ExclamationTriangleIcon,
    color: "yellow",
  },
  {
    text: "Backend integration completed ahead of schedule",
    Icon: CheckCircleIcon,
    color: "green",
  },
  {
    text: "New team velocity metrics available",
    Icon: InformationCircleIcon,
    color: "blue",
  },
];

export interface ITeamAvailability {
  teamName: string;
  available: number;
  total: number;
}

export const teamAvailability: ITeamAvailability[] = [
  {
    teamName: "Development Team",
    available: 3,
    total: 5,
  },
  {
    teamName: "Design Team",
    available: 2,
    total: 3,
  },
  {
    teamName: "QA Team",
    available: 4,
    total: 4,
  },
];
