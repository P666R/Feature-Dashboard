import { FC, ReactElement } from "react";
import { IInsight } from "./interfaces";

interface InsightItemProps {
  insight: IInsight;
}

export const InsightItem: FC<InsightItemProps> = ({
  insight,
}): ReactElement => {
  const { text, Icon, color } = insight;
  const classNames = `size-5 text-${color}-500 mr-2`;

  return (
    <li className="flex items-start rounded-md bg-gray-100 p-2">
      <Icon className={classNames} />
      <span className="text-sm">{text}</span>
    </li>
  );
};
