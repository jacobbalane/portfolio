import React from "react";
import arrow from "../../images/icons/right-arrow-light.png";

interface SidebarProps {
  toggle: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggle }) => {
  return (
    <div
      className={`md:hidden top-[135px] right-2 z-20 w-32 bg-secondary border border-accent-2 rounded-md sidebar ${
        toggle ? "fixed" : "hidden"
      }`}>
      <div className="h-full flex flex-col items-center w-full text-xs font-semibold font-montserrat space-y-3 px-2 pt-4 pb-2">
        <button>projects</button>
        <button>events</button>
        <a href="mailto:balanejacob1@gmail.com" className="w-full">
          <button className="flex space-x-2 justify-center items-center bg-primary text-secondary w-full py-2 rounded-sm">
            <p>let's talk</p>
            <img src={arrow} alt="" className="h-4" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
