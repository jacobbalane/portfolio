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
    <div className="min-h-80 w-72  flex-none pb-2 border-2 border-primary rounded-lg snap-center">
      <div className="flex flex-col h-full">
        <div className="h-40">
          <img
            src={project.imageUrl}
            alt=""
            className="rounded-md h-full w-full"
          />
        </div>
        <div className="grow flex flex-col p-3 text-2xs space-y-2">
          <p className="font-bold text-xs">{project.name}</p>
          <p>{project.description}</p>
          <div className="flex flex-wrap">
            {project.technologies.map((technology) => (
              <Technology key={technology} label={technology} />
            ))}
          </div>
        </div>
        <div className="flex justify-center h-8">
          <LinkButton label="view project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
