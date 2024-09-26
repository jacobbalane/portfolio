import TechnologyInstance from "../atoms/TechnologyInstance";

interface TechnologyStackProps {
  readonly list: { text: string; color: string }[];
}

export default function Technologies({ list }: TechnologyStackProps) {
  return (
    <div className="flex flex-wrap">
      {list.map((tech) => (
        <TechnologyInstance
          key={tech.text}
          color={tech.color}
          string={tech.text}
        />
      ))}
    </div>
  );
}
