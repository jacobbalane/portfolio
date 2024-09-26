import { LiaDownloadSolid } from "react-icons/lia";

export default function SectionButton() {
  return (
    <div className="md:w-40 hidden md:flex justify-end">
      <div className="flex  items-center space-x-2 text-foreground hover:opacity-65 transition duration-300 text-sm cursor-pointer select-none">
        <p className="font-spacemonoBold">Download Resume</p>
        <LiaDownloadSolid className="text-lg" />
      </div>
    </div>
  );
}
