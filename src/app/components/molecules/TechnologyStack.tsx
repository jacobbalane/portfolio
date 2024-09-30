import TechnologyInstance from "../atoms/TechnologyInstance";

import { getTechnologyColor } from "../../utils/getTechnologyColor";

interface TechnologyStackProps {
  readonly list: string[];
}

export default function Technologies({ list }: TechnologyStackProps) {
  return (
    <div className="flex flex-wrap">
      {list.map((technology) => (
        <TechnologyInstance
          key={technology}
          color={getTechnologyColor(technology)}
          name={technology}
        />
      ))}
    </div>
  );
}
