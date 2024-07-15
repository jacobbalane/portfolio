interface TechnologyProps {
  label: string;
}

const Technology: React.FC<TechnologyProps> = ({ label }) => {
  return (
    <div className="text-3xs md:text-xs xl:text-sm border border-accent-2 px-2 py-1 mr-1 mb-1 md:mr-2 md:mb-2 ">
      {label}
    </div>
  );
};

export default Technology;
