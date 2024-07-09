import React from "react";

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return (
    <div className="flex justify-center items-center w-full lg:w-2/6 lg:h-60">
      <button className="w-24 md:w-40 lg:w-48 xl:w-52 py-3 lg:py-5 text-2xs md:text-lg xl:text-2xl font-medium bg-primary text-secondary rounded-full shadow-md">
        {label}
      </button>
    </div>
  );
};

export default Button;
