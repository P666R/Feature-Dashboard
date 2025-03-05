import { FC, ReactElement } from "react";
import { Sidebar } from "flowbite-react";

interface INavItemProps {
  icon: ReactElement;
  label: string;
  active?: boolean;
}

export const NavItem: FC<INavItemProps> = (props): ReactElement => {
  const { icon, label, active = false } = props;
  return (
    <Sidebar.Item
      href="#"
      icon={() => icon}
      className={`${
        active ? "bg-blue-100 text-blue-700" : "text-gray-700"
      } rounded-lg px-4 py-2 capitalize hover:bg-gray-100`}
    >
      {label}
    </Sidebar.Item>
  );
};
