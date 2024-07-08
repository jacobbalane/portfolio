import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="flex justify-center items-center w-full lg:w-2/6 h-10 lg:h-60">
      <button className="w-24 md:w-32 lg:w-48 h-full lg:h-14 text-2xs md:text-xs lg:text-base font-medium bg-primary text-secondary rounded-full shadow-xl">
        {label}
      </button>
    </div>
  );
};

export default Button;
