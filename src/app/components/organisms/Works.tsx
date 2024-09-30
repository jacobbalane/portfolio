import WorkInstance from "../molecules/WorkInstance";

import { workData } from "../../data/workData";

export default function Works() {
  return (
    <section className="md:flex flex-wrap md:max-w-mdMaxWidth lg:max-w-lgMaxWidth px-8 py-32 md:px-16 mx-auto">
      {workData.map((work) => (
        <WorkInstance key={work.key} details={work} />
      ))}
    </section>
  );
}
