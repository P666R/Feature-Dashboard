import { FC, ReactElement } from "react";
import { AIAssistant } from "./AIAssistant";
import { AIInsights } from "./AIInsights";
import { TeamAvailability } from "./TeamAvailability";

export const RightSidebar: FC = (): ReactElement => (
  <div className="h-[calc(100vh-80px)] w-64 rounded-lg bg-white p-4 shadow-sm">
    <AIAssistant />
    <AIInsights />
    <TeamAvailability />
  </div>
);
