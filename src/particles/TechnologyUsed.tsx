interface TechnologyUsedProps {
  technologies: string[];
}

const TechnologyUsed: React.FC<TechnologyUsedProps> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap">
      {" "}
      {technologies.map((technology) => (
        <p
          key={technology}
          className="text-1xs lg:text-sm xl:text-base border border-neutral-400 px-3 py-1 mr-2 my-1">
          {technology}
        </p>
      ))}
    </div>
  );
};

export default TechnologyUsed;
