import { GoDotFill } from "react-icons/go";

export default function Availability() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <GoDotFill className="text-green-500 text-lg md:text-xl" />
      <p className="font-spacemono dark:opacity-30 text-sm md:text-base">
        Available for work
      </p>
    </div>
  );
}
