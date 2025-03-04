import { FC, ReactElement } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const SearchBar: FC = (): ReactElement => (
  <div className="relative mx-auto max-w-lg flex-1">
    <input
      type="text"
      placeholder="Search..."
      className="w-full rounded-md bg-[#71369C] p-2 text-gray-300 placeholder:text-gray-300"
    />
    <MagnifyingGlassIcon className="absolute right-3 top-3 size-5 text-gray-500" />
  </div>
);
