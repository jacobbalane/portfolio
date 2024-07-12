import React from "react";
import arrow from "../../images/icons/right-up.png";
import arrowLight from "../../images/icons/right-up-light.png";

interface LinkButtonProps {
  label: string;
  link: string;
  theme?: "light" | "dark";
  view?: "large" | "";
}

const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  link,
  theme,
  view,
}) => {
  return (
    <div className="flex w-fit items-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button
          className={`flex items-center text-2xs md:text-base  font-medium ${
            view === "large" ? "xl:text-2xl" : ""
          }`}>
          <p className={`${theme === "light" ? "text-secondary" : ""}`}>
            {label}
          </p>
          <img
            src={theme === "light" ? arrowLight : arrow}
            alt=""
            className={`h-3 md:h-5 lg:h-6 ${
              view === "large" ? " xl:h-8 " : ""
            }`}
          />
        </button>
      </a>
    </div>
  );
};

export default LinkButton;
