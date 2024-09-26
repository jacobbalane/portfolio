import { GoDotFill } from "react-icons/go";

interface TechnologyInstanceProps {
  readonly color: string;
  readonly string: string;
}

export default function TechnologyInstance({
  color,
  string,
}: TechnologyInstanceProps) {
  return (
    <div className="flex items-center space-x-1 mr-2">
      <GoDotFill className="text-xs" style={{ color: color }} />
      <p className="font-spacemono text-accent1">{string}</p>
    </div>
  );
}
