import SectionButton from "../atoms/SectionButton";
import RecentEventCard from "../molecules/RecentEventCard";
import UpcomingEventCard from "../molecules/UpcomingEventCard";

import { upcomingEventData, recentEventData } from "../../data/events";

const Events = () => {
  return (
    <div className="flex flex-col font-montserrat">
      <div className="flex flex-col px-8 space-y-4">
        <p className="font-bold">some events i'm in</p>
        <div className="flex flex-col space-y-4">
          {upcomingEventData.map((event) => (
            <UpcomingEventCard event={event} key={event.key} />
          ))}
          {recentEventData.map((event) => (
            <RecentEventCard event={event} key={event.key} />
          ))}
        </div>
      </div>
      <SectionButton label="more events" />
    </div>
  );
};

export default Events;
