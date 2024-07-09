import React from "react";
import arrow from "../../images/icons/right-arrow.png";
import hamburger from "../../images/icons/hamburger.png";

interface HeaderProps {
  main: string;
  sub: string;
}

const Header: React.FC<HeaderProps> = ({ main, sub }) => {
  return (
    <div className="sticky top-0 bg-white z-10 overflow-hidden flex justify-between items-center h-32 px-8 md:px-16">
      <div className="flex font-montserrat font-bold md:text-xl">
        <p className="text-primary">{main}</p>
        <p className="text-accent-2">{sub}</p>
      </div>
      <div className="hidden md:flex space-x-6 font-montserrat font-semibold text-xs lg:text-base text-primary">
        <button>projects</button>
        <button>events</button>
        <button className="flex space-x-3 items-center px-6 py-2 border-2 border-primary rounded-full">
          <p>let's talk</p>
          <img src={arrow} alt="" className="h-5 lg:h-6 xl:h-8" />
        </button>
      </div>
      <img src={hamburger} alt="" className="md:hidden h-8" />
    </div>
  );
};

export default Header;
