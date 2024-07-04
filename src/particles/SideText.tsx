import React from "react";

interface SideTextProps {
  text: string;
}

const SideText: React.FC<SideTextProps> = ({ text }) => {
  return (
    <div className="lg:w-side flex items-end justify-center">
      <p className="font-montserrat -rotate-90 mb-40 text-7xl font-bold hidden lg:block select-none">
        {text}
      </p>
    </div>
  );
};

SideText.propTypes = {};

export default SideText;
