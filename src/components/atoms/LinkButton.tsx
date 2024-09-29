import React from "react";
import arrow from "../../images/icons/right-up.png";

interface LinkButtonProps {
  label: string;
  link: string;
  view?: "large" | "";
}

const LinkButton: React.FC<LinkButtonProps> = ({ label, link, view }) => {
  return (
    <div className="flex w-fit items-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button
          className={`flex items-center text-base  font-medium ${
            view === "large" ? "xl:text-2xl" : ""
          }`}>
          <p className="capitalize">{label}</p>
          <img
            src={arrow}
            alt=""
            className={`h-5 lg:h-6 ${view === "large" ? " xl:h-8 " : ""}`}
          />
        </button>
      </a>
    </div>
  );
};

export default LinkButton;
