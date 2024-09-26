import EdgeIcon from "../atoms/EdgeIcon";
import Button from "../atoms/Button";

import { MdArrowOutward } from "react-icons/md";

export default function WorkInstance() {
  return (
    <div className="md:w-1/2 lg:w-1/3 bg-background relative py-6 px-8 hover:bg-accent3 cursor-default transition duration-300">
      <EdgeIcon />
      <div className="space-y-4 transition duration-300">
        <p className="font-spacemonoBold text-lg">TaskMaster Pro</p>
        <p className="font-spacemono text-accent2">
          An all-in-one dashboard for managing tasks and team collaboration.
          Offers real-time updates and insightful analytics to streamline
          project workflows.
        </p>
        <div className="flex justify-end md:justify-start">
          <Button text="Visit Repo" Icon={MdArrowOutward} />
        </div>
      </div>
    </div>
  );
}
