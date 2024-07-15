import React from "react";
import Technology from "../atoms/Technology";
import LinkButton from "../atoms/LinkButton";

interface ProjectCardProps {
  project: {
    key: number;
    name: string;
    description: string;
    technologies: string[];
    githubLink: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="md:min-h-35rem xl:min-h-80 w-full md:w-1/2 xl:w-1/4 md:p-2">
      <div className=" border-2 border-primary rounded-lg h-full">
        <div className="flex flex-col h-full">
          <div className="grow flex flex-col px-5 py-3 md:px-6 md:py-4 space-y-2 md:space-y-4">
            <p className="font-bold text-xs md:text-base xl:text-lg">
              {project.name}
            </p>
            <p className="text-2xs md:text-base">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((technology) => (
                <Technology key={technology} label={technology} />
              ))}
            </div>
          </div>
          <div className="flex justify-center h-8 pb-4 md:pb-5">
            <LinkButton label="view project" link={project.githubLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
