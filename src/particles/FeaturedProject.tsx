import React from "react";

interface FeaturedProjectProps {
  projects: string[];
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ projects }) => {
  return (
    <div className="flex flex-col text-xs md:text-sm lg:text-base xl:text-lg font-montserrat pb-6 space-y-4 md:space-y-10 md:w-1/4">
      <p className="font-semibold text-neutral-500 select-none">
        preview project :
      </p>
      <ul className="space-y-1 md:space-y-2">
        {" "}
        {projects.map((project) => (
          <li key={project} className="cursor-pointer">
            {project}
          </li>
        ))}
      </ul>
      <p className="underline cursor-pointer select-none">
        more projects . . .
      </p>
    </div>
  );
};

export default FeaturedProject;
