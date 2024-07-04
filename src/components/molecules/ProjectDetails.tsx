import React from "react";
import TechnologyUsed from "./TechnologyUsed";
import preview from "../../images/preview.png";

interface ProjectDetailsProps {
  name: string;
  description: string;
  technologies: string[];
  github: string;
  image?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  name,
  description,
  technologies,
  github,
  image,
}) => {
  return (
    <div className="flex flex-col font-montserrat space-y-4 md:w-3/4 md:border md:border-neutral-400">
      <div className="space-y-4 md:px-8 md:pt-6">
        <div className="flex justify-between items-center">
          <p className="font-semibold md:text-xl lg:text-2xl ">{name}</p>
          <button className="border border-neutral-400 text-xs rounded-sm py-1 px-3 hidden md:block select-none">
            view in github
          </button>
        </div>
        <div className="text-xs md:text-sm lg:text-base xl:text-lg text-justify">
          {description}
        </div>
        <TechnologyUsed technologies={technologies} />
      </div>
      <div className="border border-neutral-400 md:border-x-0 md:border-b-0">
        <img className="select-none" src={preview} alt="" />
      </div>
      <button className="bg-neutral-800 text-neutral-100 text-xs rounded-sm py-2 md:hidden select-none">
        view in github
      </button>
    </div>
  );
};

export default ProjectDetails;
