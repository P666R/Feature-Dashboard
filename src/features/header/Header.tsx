import { FC, ReactElement } from "react";
import { Navbar } from "flowbite-react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { UserActions } from "./UserActions";
import { NavLinks } from "./NavLinks";

export const Header: FC = (): ReactElement => {
  return (
    <Navbar fluid className="bg-[#4B0082] text-white">
      <Logo />
      <NavLinks />
      <SearchBar />
      <UserActions />
    </Navbar>
  );
};
