import React from "react";
import arrow from "../../images/icons/right-arrow-light.png";

interface SectionButtonProps {
  label: string;
  link: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({ label, link }) => {
  return (
    <div className="flex justify-center items-center w-full lg:h-full p-8 md:mt-14 md:mb-20 xl:mb-40">
      <a
        className="w-full"
        href={link}
        target="_blank"
        rel="noopener noreferrer">
        <button className="w-full md:w-56 lg:w-72 xl:w-96 flex justify-center items-center space-x-3 px-5 md:px-8 lg:px-10 xl:px-12 py-3 lg:py-5 md:text-lg xl:text-2xl font-medium bg-primary text-secondary rounded-full shadow-md transition duration-300 hover:bg-neutral-800">
          <p>{label}</p>
          <img src={arrow} alt="" className="h-3 md:h-5 lg:h-6 xl:h-8" />
        </button>
      </a>
    </div>
  );
};

export default SectionButton;
