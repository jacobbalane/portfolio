import SectionButton from "../atoms/SectionButton";
import RecentEventCard from "../molecules/RecentEventCard";
import UpcomingEventCard from "../molecules/UpcomingEventCard";

import { upcomingEventData, recentEventData } from "../../data/events";

const Events = () => {
  return (
    <div
      className="flex flex-col font-montserrat md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[75rem] mx-auto"
      id="events">
      <div className="flex flex-col">
        <p className="font-bold  px-8 md:px-16 lg:px-0 md:text-2xl mb-4 md:mb-8 xl:text-3xl">
          some events i'm in
        </p>
        <div className="flex flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 px-8 md:px-14 lg:px-0">
          {upcomingEventData.map((event) => (
            <UpcomingEventCard event={event} key={event.key} />
          ))}
          {recentEventData.map((event) => (
            <RecentEventCard event={event} key={event.key} />
          ))}
        </div>
      </div>
      <SectionButton label="more events" link="" />
    </div>
  );
};

export default Events;
