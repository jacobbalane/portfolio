import { technologyColor } from "../data/TechnologyColor";

export const getTechnologyColor = (name) => {
  const technology = technologyColor.find(
    (technology) => technology.name === name
  );
  return technology.color;
};
