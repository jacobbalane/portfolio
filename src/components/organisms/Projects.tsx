import SectionButton from "../atoms/SectionButton";
import ProjectCard from "../molecules/ProjectCard";

import { projectData } from "../../data/projects";

const Projects = () => {
  const projects = projectData.map((project) => ({
    key: project.key,
    name: project.name,
    description: project.description,
    technologies: project.technologies,
    githubLink: project.githubLink,
    imageUrl: project.imageUrl.toString(),
  }));

  return (
    <div className="flex flex-col  font-montserrat">
      <div className="px-8 mb-4">
        <p className="font-bold">featured projects</p>
      </div>
      <div className="overflow-x-auto flex space-x-4 px-8 snap-x no-scrollbar">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.key} />
        ))}
      </div>
      <SectionButton label="more projects" />
    </div>
  );
};

export default Projects;
