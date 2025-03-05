import { ComponentType, SVGProps } from "react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

export type TInsightStatus = "On-Track" | "At-Risk" | "Blocked";

export interface IProject {
  name: string;
  module: string;
  timeline: string;
  status: string;
  progress: number;
  team: string[];
  insights: TInsightStatus;
}

export interface IStatusIndicator {
  insights: TInsightStatus;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

export const statusIndicators: Record<TInsightStatus, IStatusIndicator> = {
  "On-Track": {
    insights: "On-Track",
    Icon: CheckCircleIcon,
    color: "green",
  },
  "At-Risk": {
    insights: "At-Risk",
    Icon: ExclamationTriangleIcon,
    color: "yellow",
  },
  Blocked: {
    insights: "Blocked",
    Icon: XCircleIcon,
    color: "red",
  },
};

export const projects: IProject[] = [
  {
    name: "AI-Powered Search",
    module: "E-Commerce Platform",
    timeline: "Oct 1 - Dec 15",
    status: "Open",
    progress: 75,
    team: [
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
    ],
    insights: "On-Track",
  },
  {
    name: "User Authentication",
    module: "Security System",
    timeline: "Sep 15 - Nov 30",
    status: "Open",
    progress: 50,
    team: [
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
    ],
    insights: "At-Risk",
  },
  {
    name: "Payment Gateway",
    module: "Financial Module",
    timeline: "Aug 1 - Oct 30",
    status: "Open",
    progress: 20,
    team: [
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
    ],
    insights: "Blocked",
  },
  {
    name: "Analytics Dashboard",
    module: "Data Visualization",
    timeline: "Oct 15 - Dec 30",
    status: "Open",
    progress: 60,
    team: [
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
    ],
    insights: "On-Track",
  },
  {
    name: "Mobile App Redesign",
    module: "UX Refresh",
    timeline: "Nov 1 - Jan 15",
    status: "Open",
    progress: 40,
    team: [
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
    ],
    insights: "At-Risk",
  },
  {
    name: "API Integration",
    module: "Third-party Services",
    timeline: "Sep 1 - Nov 15",
    status: "Open",
    progress: 80,
    team: [
      "https://avatar.iran.liara.run/public",
      "https://avatar.iran.liara.run/public",
    ],
    insights: "On-Track",
  },
];
