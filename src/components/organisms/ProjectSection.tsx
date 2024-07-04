import { useState } from "react";

import SideText from "../molecules/SideText";
import ProjectDetails from "../molecules/ProjectDetails";
import FeaturedProject from "../molecules/FeaturedProject";

import { projectData } from "../../data/projects";

const ProjectSection = () => {
  const featuredProjects = projectData.map((project) => ({
    key: project.key,
    name: project.name,
  }));

  const [isPreview, setIsPreview] = useState(0);

  function handlePreview(key: number) {
    setIsPreview(key);
  }

  return (
    <div
      className="flex justify-start w-full h-screen font-montserrat"
      id="projects">
      <SideText text="projects" />
      <div className=" lg:border-neutral-400 lg:border-x w-full lg:w-3/4 px-16 py-6 space-y-4">
        <div className="h-12 font-montserrat font-bold text-xl text-yellow-500">
          <p className="lg:hidden md:text-3xl md:text-right">projects</p>
          <p className="hidden lg:block text-right text-3xl">
            featured projects
          </p>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row-reverse md:space-y-0">
          <ProjectDetails
            name={projectData[isPreview].name}
            description={projectData[isPreview].description}
            technologies={projectData[isPreview].technologies}
            githubLink={projectData[isPreview].githubLink}
            imageUrl={projectData[isPreview].imageUrl.toString()}
          />
          <FeaturedProject
            projects={featuredProjects}
            handlePreview={handlePreview}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
