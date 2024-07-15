import React, { useState } from "react";
import arrow from "../../images/icons/right-arrow.png";
import arrowLight from "../../images/icons/right-arrow-light.png";
import Hamburger from "../atoms/Hamburger";

interface HeaderProps {
  main: string;
  sub: string;
  handleToggle: (bool: boolean) => void;
  offset: number;
}

const Header: React.FC<HeaderProps> = ({ main, sub, handleToggle, offset }) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleHover(bool: boolean) {
    setIsHovered(bool);
    console.log(isHovered);
  }

  return (
    <div
      className={`sticky top-0 bg-secondary z-10 overflow-hidden flex justify-between items-center h-32 px-8 md:px-16 ${
        offset > 0 ? "border-b border-accent-2" : ""
      }`}>
      <div className="flex font-montserrat font-bold md:text-xl">
        <p className="text-primary">{main}</p>
        <p className="text-accent-2">{sub}</p>
      </div>
      <div className="hidden md:flex space-x-6 font-montserrat font-semibold text-xs lg:text-base text-primary">
        <button>projects</button>
        <button>events</button>
        <a href="mailto:balanejacob1@gmail.com">
          <button
            className="flex space-x-3 items-center px-6 py-2 border-2 border-primary rounded-full transition duration-300 hover:bg-primary"
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}>
            <p className={isHovered ? "text-secondary" : ""}>let's talk</p>
            <img
              src={!isHovered ? arrow : arrowLight}
              alt=""
              className="h-5 lg:h-6 xl:h-8 arrow-icon"
            />
          </button>
        </a>
      </div>
      <Hamburger handleToggle={handleToggle} />
    </div>
  );
};

export default Header;
