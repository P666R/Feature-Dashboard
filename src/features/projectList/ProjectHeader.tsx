import { FC, ReactElement } from "react";
import { Button } from "flowbite-react";
import { GoDependabot, GoPlus } from "react-icons/go";
import { PiStarFourLight } from "react-icons/pi";

export const ProjectHeader: FC = (): ReactElement => (
  <div className="mb-6 mt-2 flex flex-col">
    <div className="flex w-full items-center justify-between">
      <h1 className="text-2xl font-bold">Project List</h1>
      <div className="flex items-center gap-2">
        <Button className="w-full bg-[#9334E9] md:w-auto">
          <GoPlus className="mr-2 size-5" />
          New Project
        </Button>
        <Button className="w-full bg-[#9334E9] md:w-auto">
          <PiStarFourLight className="mr-2 size-5" />
          AI Project
        </Button>
        <Button className="w-full bg-[#9334E9] md:w-auto">
          Finalize Specs
        </Button>
        <Button color="light" className="w-full border md:w-auto">
          <GoDependabot className="mr-2 size-5" />
          AI Summary
        </Button>
      </div>
    </div>
    <div className="mt-6 flex gap-4 bg-gray-100 px-8 py-4">
      <Button color="light" className="w-full md:w-auto">
        All Status
      </Button>
      <Button color="light" className="w-full md:w-auto">
        All Priority
      </Button>
      <Button color="light" className="w-full md:w-auto">
        This Week
      </Button>
    </div>
  </div>
);
