import React from "react";
import arrow from "../../images/icons/right-arrow-light.png";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="flex justify-center items-center w-full lg:w-2/6 lg:h-60">
      <button className="flex justify-center items-center space-x-3 w-24 md:w-40 lg:w-48 xl:w-52 py-3 lg:py-5 text-2xs md:text-lg xl:text-2xl font-medium bg-primary text-secondary rounded-full shadow-md">
        <p>{label}</p>
        <img src={arrow} alt="" className="h-3 md:h-5 lg:h-6 xl:h-8" />
      </button>
    </div>
  );
};

export default Button;
