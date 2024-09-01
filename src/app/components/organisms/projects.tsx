import Button from "../atoms/button";
import Title from "../atoms/title";
import ProjectPreview from "../molecules/projectPreview";

export default function Project() {
  return (
    <div className="px-8 py-14">
      <div className="flex flex-col space-y-10 max-w-96 mx-auto">
        <Title
          title="Featured Projects"
          subtitle="Highlighting my latest creations"
        />
        <div className="flex flex-col space-y-4">
          <ProjectPreview
            name="TaskMaster Pro"
            description="An all-in-one dashboard for managing tasks and team collaboration.
          Offers real-time updates and insightful analytics to streamline
          project workflows."
          />
          <ProjectPreview
            name="SkillQuest"
            description="An educational app that gamifies learning with interactive quizzes, achievements, and leaderboards to boost engagement and retention."
          />
        </div>
        <Button text="View All Projects" />
      </div>
    </div>
  );
}
