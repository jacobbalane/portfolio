import React from "react";

interface FeaturedProjectProps {
  projects: { key: number; name: string }[];
  handlePreview: any;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  projects,
  handlePreview,
}) => {
  const githubLink = "https://github.com/balanejacob?tab=repositories";
  return (
    <div className="flex flex-col text-xs md:text-sm lg:text-base xl:text-lg font-montserrat pb-6 space-y-4 md:space-y-10 md:w-1/4">
      <p className="font-semibold text-neutral-500 select-none">
        preview project :
      </p>
      <ul className="space-y-1 md:space-y-2">
        {" "}
        {projects.map((project) => (
          <li
            key={project.key}
            className="cursor-pointer"
            onClick={() => handlePreview(project.key)}>
            {project.name}
          </li>
        ))}
      </ul>
      <a href={githubLink}>
        <p className="underline cursor-pointer select-none">
          more projects . . .
        </p>
      </a>
    </div>
  );
};

export default FeaturedProject;
