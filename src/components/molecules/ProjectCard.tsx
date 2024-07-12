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
    imageUrl: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="min-h-80 md:min-h-35rem w-72 md:w-30rem xl:w-32rem flex-none pb-2 md:pb-8 border-2 border-primary rounded-lg snap-center">
      <div className="flex flex-col h-full">
        <div className="h-40 md:h-64">
          <img
            src={project.imageUrl}
            alt=""
            className="rounded-md h-full w-full"
          />
        </div>
        <div className="grow flex flex-col p-3 md:p-8 space-y-2 md:space-y-4">
          <p className="font-bold text-xs md:text-lg">{project.name}</p>
          <p className=" text-2xs md:text-base xl:text-lg">
            {project.description}
          </p>
          <div className="flex flex-wrap">
            {project.technologies.map((technology) => (
              <Technology key={technology} label={technology} />
            ))}
          </div>
        </div>
        <div className="flex justify-center h-8">
          <LinkButton label="view project" link={project.githubLink} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
