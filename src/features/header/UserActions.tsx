import { FC, ReactElement } from "react";
import { Button } from "flowbite-react";
import { Cog6ToothIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export const UserActions: FC = (): ReactElement => (
  <div className="flex items-center">
    <Button color="inherit" aria-label="Notifications">
      <BellIcon className="size-5" />
    </Button>
    <Button color="inherit" aria-label="Calendar">
      <CalendarIcon className="size-5" />
    </Button>
    <Button color="inherit" className="text-[#2C1E4D]" aria-label="Settings">
      <Cog6ToothIcon className="size-5" />
    </Button>
    <Button className="bg-[#71369C]">New</Button>
    <Button color="inherit" aria-label="User Profile">
      <UserCircleIcon className="size-5" />
    </Button>
  </div>
);
