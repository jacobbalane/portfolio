import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="sticky top-0  h-24 flex items-center justify-center px-16 border-b bg-white border-neutral-400 z-10">
      <div className="flex w-full items-center h-8">
        <a className="grow" href="#">
          <div className="font-montserrat text-xl md:text-2xl font-bold h-full flex items-center select-none">
            {title}
          </div>
        </a>
        <a href="#projects">
          <button className="w-16 text-sm md:text-base font-semibold rounded hidden md:block">
            projects
          </button>
        </a>
        <a href="#events">
          <button className="w-16 ml-3 mr-5 text-sm md:text-base font-semibold rounded hidden md:block">
            events
          </button>
        </a>
        <a href="#connect">
          <button className="bg-yellow-500 w-24 md:w-28 px-5 py-1 text-sm md:text-base font-semibold rounded">
            let's talk
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
