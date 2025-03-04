import { FC, ReactElement } from "react";
import { Button } from "flowbite-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

export const NavLinks: FC = (): ReactElement => {
  return (
    <div className="ml-2 flex items-center">
      <Button color="inherit" aria-label="previous">
        <ChevronLeftIcon className="size-5" />
      </Button>
      <Button color="inherit" aria-label="next">
        <ChevronRightIcon className="size-5" />
      </Button>
    </div>
  );
};
