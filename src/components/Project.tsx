import SideText from "../particles/SideText";
import ProjectDetail from "../particles/ProjectDetail";
import FeaturedProject from "../particles/FeaturedProject";

const Project = () => {
  const description =
    "Transform mundane tasks into exciting challenges as you level up and earn rewards for each accomplishment. Stay motivated, organized, and engaged while conquering your to-do list.";
  const technologies = ["Bootstrap", "PHP", "Laravel", "MySQL"];
  const github = "github.com/balanejacob/tick";
  const projects = ["Tick", "BloodPlus", "GEMS", "TaskVenator"];

  return (
    <div className="flex justify-start w-full h-screen font-montserrat">
      <SideText text="projects" />
      <div className=" lg:border-neutral-400 lg:border-x w-full lg:w-3/4 px-16 py-6 space-y-4">
        <div className="h-12 font-montserrat font-bold text-xl text-yellow-500">
          <p className="lg:hidden md:text-3xl md:text-right">projects</p>
          <p className="hidden lg:block text-right text-3xl">
            featured projects
          </p>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row-reverse md:space-y-0">
          <ProjectDetail
            name="Tick"
            description={description}
            technologies={technologies}
            github={github}
          />
          <FeaturedProject projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Project;
