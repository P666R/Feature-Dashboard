import { FC, ReactElement } from "react";
import { statusIndicators, TInsightStatus } from "./interfaces";

interface StatusIndicatorProps {
  insights: TInsightStatus;
}

export const StatusIndicator: FC<StatusIndicatorProps> = ({
  insights,
}): ReactElement => {
  const { Icon, color } = statusIndicators[insights];
  const classNames1 = `text-${color}-500 size-5`;
  const classNames2 = `text-sm font-bold text-${color}-500`;

  return (
    <div className="flex items-center space-x-1">
      <Icon className={classNames1} />
      <span className={classNames2}>{insights}</span>
    </div>
  );
};
