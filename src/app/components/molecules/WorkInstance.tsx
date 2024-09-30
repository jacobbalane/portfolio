import EdgeIcon from "../atoms/EdgeIcon";
import Button from "../atoms/Button";

import { MdArrowOutward } from "react-icons/md";
import TechnologyStack from "./TechnologyStack";

interface WorkInstanceProps {
  readonly details: {
    key: number;
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
  };
}
export default function WorkInstance({ details }: WorkInstanceProps) {
  return (
    <div className="md:w-1/2 lg:w-1/3 bg-background relative p-10 hover:bg-accent3 cursor-default transition duration-300">
      <EdgeIcon />
      <div className="flex flex-col h-full space-y-4 transition duration-300">
        <p className="font-spacemonoBold text-lg">{details.name}</p>
        <p className="font-spacemono text-accent2">{details.description}</p>
        <TechnologyStack list={details.technologies} />
        <div className="flex items-end justify-end md:justify-start grow">
          <Button
            text="Visit Repo"
            Icon={MdArrowOutward}
            link={details.githubLink}
          />
        </div>
      </div>
    </div>
  );
}
