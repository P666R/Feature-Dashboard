import { FC, ReactElement } from "react";
import { Button } from "flowbite-react";

export const AIAssistant: FC = (): ReactElement => (
  <div className="mb-8">
    <h3 className="mb-2 text-lg font-bold">AI Assistant</h3>
    <div className="space-y-4">
      <Button color="light">Generate Progress Report</Button>
      <Button color="light">Analyze Risks</Button>
      <Button color="light">Schedule Assistant</Button>
    </div>
  </div>
);
