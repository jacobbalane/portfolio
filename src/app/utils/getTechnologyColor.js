import { technologyColor } from "../data/technologyColor";

export const getTechnologyColor = (name) => {
  const technology = technologyColor.find(
    (technology) => technology.name === name
  );
  return technology.color;
};
