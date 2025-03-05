import { FC, ReactElement } from "react";
import { InsightItem } from "./InsightItem";
import { insights } from "./interfaces";

export const AIInsights: FC = (): ReactElement => (
  <div className="mb-8">
    <h3 className="mb-2 text-lg font-bold">Recent AI Insights</h3>
    <ul className="space-y-2">
      {insights.map((insight) => (
        <InsightItem key={insight.text} insight={insight} />
      ))}
    </ul>
  </div>
);
