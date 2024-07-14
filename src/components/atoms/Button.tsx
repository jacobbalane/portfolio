import React from "react";
import arrow from "../../images/icons/right-arrow-light.png";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="flex justify-center items-center w-full lg:w-2/6 lg:h-full">
      <a href="mailto:balanejacob1@gmail.com">
        <button className="w-40 md:w-56 xl:w-72 flex justify-center items-center space-x-3 px-5 md:px-8 lg:px-10 xl:px-12 py-3 lg:py-5 text-2xs md:text-lg xl:text-2xl font-medium bg-primary text-secondary rounded-full shadow-md">
          <p>{label}</p>
          <img src={arrow} alt="" className="h-3 md:h-5 lg:h-6 xl:h-8" />
        </button>
      </a>
    </div>
  );
};

export default Button;
