interface TechnologyProps {
  label: string;
}

const Technology: React.FC<TechnologyProps> = ({ label }) => {
  return (
    <div className="xl:text-sm text-accent-2 border border-accent-2 px-2 py-1 mr-2 mb-2 md:mr-2 md:mb-2 ">
      {label}
    </div>
  );
};

export default Technology;
