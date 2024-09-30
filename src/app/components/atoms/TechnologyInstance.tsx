import { GoDotFill } from "react-icons/go";

interface TechnologyInstanceProps {
  readonly name: string;
  readonly color: string;
}

export default function TechnologyInstance({
  name,
  color,
}: TechnologyInstanceProps) {
  return (
    <div className="flex items-center space-x-1 mr-2">
      <GoDotFill className="text-xs" style={{ color: color }} />
      <p className="font-spacemono text-accent1">{name}</p>
    </div>
  );
}
