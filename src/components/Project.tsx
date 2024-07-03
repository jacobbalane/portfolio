import projectPreview from "../images/project-preview.png";
import TechnologyUsed from "../particles/TechnologyUsed";
import FeaturedProjects from "../particles/FeaturedProjects";

const Project = () => {
  const technologies = ["Bootstrap", "PHP", "Laravel", "MySQL"];
  const projects = ["BloodPlus", "GEMS", "Tick"];

  return (
    <div className="flex justify-start w-full h-screen">
      <div className="lg:w-side flex justify-center items-end">
        <p className="-rotate-90 mb-40 text-6xl xl:text-7xl font-bold font-montserrat hidden lg:block">
          projects
        </p>
      </div>
      <div className="w-full lg:w-3/4 lg:border-x lg:border-neutral-400 px-16 py-6 flex flex-col space-y-10 md:space-y-6 font-montserrat">
        <p className="block lg:hidden text-xl md:text-3xl font-bold md:text-right text-yellow-500">
          projects
        </p>
        <p className="hidden lg:block text-xl md:text-3xl font-bold text-right text-yellow-500">
          featured projects
        </p>
        <div className="md:h-full flex flex-col space-y-6 md:space-y-7 md:flex-row-reverse">
          <div className="md:h-1/2 flex flex-col md:flex-col  space-y-2 md:space-y-0 md:w-3/4">
            <div className="space-y-4 md:px-8 md:pt-6 md:pb-2 md:border md:border-neutral-400">
              <div className="flex justify-between">
                <p className="font-semibold md:text-xl xl:text-2xl ">Tick</p>
                <button className="hidden md:block border border-neutral-400 rounded-md text-xs  lg:text-sm xl:text-base px-4">
                  view in github
                </button>
              </div>
              <p className="text-xs md:text-sm lg:text-base text-justify xl:text-lg">
                Transform mundane tasks into exciting challenges as you level up
                and earn rewards for each accomplishment. Stay motivated,
                organized, and engaged while conquering your to-do list.
              </p>
              <TechnologyUsed technologies={technologies} />
            </div>
            <img
              className="w-full h-32 md:h-full object-cover border md:border-t-0 border-neutral-400"
              src={projectPreview}
              alt=""
            />
            <button className="text-xs text-neutral-300 border border-neutral-400 py-2 rounded-sm bg-stone-950 md:hidden">
              view in github
            </button>
          </div>
          <div className="space-y-4 md:w-1/4 md:text-wrap">
            <FeaturedProjects projects={projects} />
            <p className="text-xs md:text-sm lg:text-base cursor-pointer">
              more projects . . .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
