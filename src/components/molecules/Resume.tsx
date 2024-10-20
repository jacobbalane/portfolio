import React, { useState } from "react";
import arrowDown from "../../images/icons/arrow-down.png";
import arrowDownLight from "../../images/icons/arrow-down-light.png";

interface ResumeProps {
  type: string;
}

const Resume: React.FC<ResumeProps> = ({ type }) => {
  const [isHovered, setIsHovered] = useState(false);

  function handleHover(bool: boolean) {
    setIsHovered(bool);
    console.log(isHovered);
  }
  return (
    <div className="w-full px-8 md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[75rem] mx-auto">
      {type === "text" ? (
        <div className="h-40 md:h-60 flex items-center justify-center mx-8 pb-8 text-center">
          <p className="text font-montserrat font-semibold text-lg">
            Know more about me by <br className="md:hidden" /> downloading my{" "}
            <a
              href={require("../../data/resume/jacobbalane-resume.pdf")}
              download="jacobbalane-resume.pdf">
              <button className="font-bold underline underline-offset-4">
                resume.
              </button>
            </a>
          </p>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center font-montserrat space-y-3 pb-4">
          <a
            className="w-full"
            href={require("../../data/resume/jacobbalane-resume.pdf")}
            download="jacobbalane-resume.pdf">
            <button
              className="w-full border border-primary rounded py-2 px-4 text-primary flex justify-center items-center space-x-2 hover:bg-primary hover:text-secondary transition duration-300"
              onMouseEnter={() => handleHover(true)}
              onMouseLeave={() => handleHover(false)}>
              <p className="font-semibold text-lg duration-0">
                download resume
              </p>
              <img
                src={!isHovered ? arrowDown : arrowDownLight}
                alt=""
                className="h-4"
              />
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Resume;
