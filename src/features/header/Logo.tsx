import { FC, ReactElement } from "react";
import { Navbar } from "flowbite-react";

export const Logo: FC = (): ReactElement => (
  <Navbar.Brand as="a" href="/">
    <div className="rounded bg-[#D3C0E0] px-2 font-medium text-black">
      Feature <br /> Flow
    </div>
  </Navbar.Brand>
);
