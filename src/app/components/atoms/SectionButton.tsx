import { IoSunny } from "react-icons/io5";

export default function SectionButton() {
  return (
    <div className="md:w-40 hidden md:flex justify-end">
      <div className="flex  items-center space-x-2 text-foreground hover:opacity-65 transition duration-300 text-sm cursor-pointer select-none">
        <p className="font-spacemonoBold">Light Mode</p>
        <IoSunny />
      </div>
    </div>
  );
}
