import { GoDotFill } from "react-icons/go";

export default function Availability() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <GoDotFill className="text-green-500 text-lg" />
      <p className="font-spacemono opacity-30 text-sm">Available for work</p>
    </div>
  );
}
