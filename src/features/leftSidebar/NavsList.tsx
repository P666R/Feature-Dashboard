import { FC, ReactElement } from "react";
import { NavItem } from "./NavItem";
import { INavItem } from "./interfaces";

export const NavsList: FC<{ navsList: INavItem[] }> = ({
  navsList,
}): ReactElement => {
  return (
    <div>
      {navsList.map((nav) => {
        const Icon = nav.Icon;
        return (
          <NavItem
            key={nav.label}
            icon={<Icon className="size-5 text-gray-700" />}
            label={nav.label}
            active={nav.active}
          />
        );
      })}
    </div>
  );
};
