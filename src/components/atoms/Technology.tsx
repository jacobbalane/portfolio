interface TechnologyProps {
  label: string;
}

const Technology: React.FC<TechnologyProps> = ({ label }) => {
  return (
    <div className="text-3xs border border-accent-2 px-2 py-1 mr-1 mb-1 ">
      {label}
    </div>
  );
};

export default Technology;
