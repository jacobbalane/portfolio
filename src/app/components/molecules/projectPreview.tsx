import { HiMiniSignal } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import Button from "../atoms/button";

interface ProjectPreviewProps {
  readonly name: string;
  readonly description: string;
}

export default function ProjectInstance({
  name,
  description,
}: ProjectPreviewProps) {
  return (
    <div className="min-h-60 bg-accent1  border border-accent2 rounded-lg p-8 space-y-8">
      <div className="space-y-3">
        <p className="opacity-87 font-semibold text-lg">{name}</p>
        <p className="opacity-65">{description}</p>
      </div>
      <div className="space-y-2">
        <Button text="See it Live" Icon={HiMiniSignal} />
        <Button text="View Repository" Icon={FaGithub} accent={true} />
      </div>
    </div>
  );
}
