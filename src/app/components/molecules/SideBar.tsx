import NavigationButton from "../atoms/NavigationButton";
import EmailButton from "../atoms/EmailButton";

import { LiaDownloadSolid } from "react-icons/lia";

interface SideBarProps {
  readonly toggled: boolean;
}

export default function SideBar({ toggled }: SideBarProps) {
  return (
    <div
      className={`fixed md:hidden top-20 z-20 ease-in-out w-full px-8 bg-background transition-all duration-300 overflow-y-hidden ${
        toggled ? "h-fit py-8" : "h-0 py-0"
      } "`}>
      <div
        className={`flex flex-col items-center h-full space-y-4 transition-all ${
          toggled ? "delay-100 block" : "hidden"
        }`}>
        <NavigationButton text="Home" />
        <NavigationButton text="Works" />
        <div className="h-6 w-0.5 bg-accent1"></div>
        <div className="flex flex-col items-center space-y-4 justify-end w-full grow">
          <a
            href="/jacob-balane-resume.pdf"
            download="jacob-balane-resume.pdf"
            className="flex items-center space-x-2  text-accent1">
            <p className="font-spacemono">Download Resume</p>
            <LiaDownloadSolid className="text-lg" />
          </a>
          <EmailButton />
        </div>
      </div>
    </div>
  );
}
