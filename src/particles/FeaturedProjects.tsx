import React from "react";

interface ProjectsProps {
  projects: string[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className="flex flex-col text-xs font-montserrat space-y-4 md:space-y-6">
      <p className="font-semibold">preview project:</p>
      <ul className="space-y-1 md:space-y-2">
        {" "}
        {projects.map((project) => (
          <li key={project} className="cursor-pointer">
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
