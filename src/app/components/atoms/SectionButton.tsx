import { IoSunny } from "react-icons/io5";

export default function SectionButton() {
  return (
    <div className="hidden md:flex items-center space-x-2 text-foreground hover:opacity-65 transition duration-300 text-sm lg:text-lg cursor-pointer select-none">
      <p className="font-spacemonoBold">Light Mode</p>
      <IoSunny />
    </div>
  );
}
