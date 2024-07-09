import React from "react";
import arrow from "../../images/icons/link-arrow.png";

interface LinkButtonProps {
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ label }) => {
  return (
    <div className="flex flex-col w-fit">
      <button className="flex items-center text-2xs md:text-lg xl:text-2xl font-medium">
        <p>{label}</p>
        <img src={arrow} alt="" className="h-3 md:h-5 lg:h-6 xl:h-8" />
      </button>
    </div>
  );
};

export default LinkButton;
