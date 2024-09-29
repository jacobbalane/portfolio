import React from "react";
import arrow from "../../images/icons/right-arrow-light.png";

interface SidebarProps {
  toggle: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggle }) => {
  return (
    <div
      className={`md:hidden z-20 top-32 w-full bg-secondary border border-accent-2 sidebar ${
        toggle ? "fixed" : "hidden"
      }`}>
      <div className="h-full flex flex-col items-center w-full font-semibold font-montserrat space-y-5 px-2 pt-6 pb-2">
        <button>projects</button>
        <button>events</button>
        <a href="mailto:balanejacob1@gmail.com" className="w-full">
          <button className="flex space-x-3 justify-center items-center bg-primary text-secondary w-full py-3 rounded-lg">
            <p>Send me an email</p>
            <img src={arrow} alt="" className="h-5" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
