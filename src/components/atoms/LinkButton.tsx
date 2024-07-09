import React from "react";

interface LinkButtonProps {
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ label }) => {
  return (
    <div className="flex flex-col w-fit">
      <button className="text-2xs md:text-lg xl:text-2xl font-medium">
        {label}
      </button>
    </div>
  );
};

export default LinkButton;
