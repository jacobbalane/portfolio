import { useState } from "react";

import UpcomingEvent from "../molecules/UpcomingEvent";
import SideText from "../molecules/SideText";
import RecentEvent from "../molecules/RecentEvent";

import { upcomingEventData, recentEventData } from "../../data/events";

interface EventContent {
  key: number;
  name: string;
  imageUrl: string;
  eventUrl: string;
}

const EventSection = () => {
  const upcomingEvents =
    upcomingEventData.length > 0
      ? upcomingEventData.map((event) => ({
          year: event.year,
          content: event.content.map((content: EventContent) => ({
            key: content.key,
            name: content.name,
            imageUrl: content.imageUrl,
            eventUrl: content.eventUrl,
          })),
        }))
      : [];

  const recentEvents = recentEventData.map((event) => ({
    year: event.year,
    content: event.content.map((content: EventContent) => ({
      key: content.key,
      name: content.name,
      imageUrl: content.imageUrl,
      eventUrl: content.eventUrl,
    })),
  }));
  const recentYearKey = recentEvents[0].year;
  const recentEventKey = recentEvents[0].content[0].key;

  const [isActive, setActive] = useState([recentYearKey, recentEventKey]);
  const [eventUrl, setEventUrl] = useState(recentEvents[0].content[0].eventUrl);

  function handleActive(eventYear: number, contentKey: number) {
    const yearContent = recentEventData.find(
      (event) => event.year === eventYear
    );
    const activeEvent = yearContent?.content.find(
      (event) => event.key === contentKey
    );
    console.log(upcomingEventData.length);
    setEventUrl(activeEvent?.eventUrl ?? "");
    setActive([eventYear, activeEvent?.key ?? 0]);
  }

  return (
    <div
      className="flex justify-start w-full h-screen font-montserrat"
      id="events">
      <SideText text="events" />
      <div className=" lg:border-neutral-400 lg:border-x w-full lg:w-3/4 space-y-1 flex flex-col">
        <div className=" h-fit border-b border-neutral-400 px-16 py-6 space-y-2">
          <div className="h-12 font-montserrat font-bold text-xl text-yellow-500 ">
            <p className="md:text-3xl">upcoming events</p>
          </div>
          <div className="flex flex-col space-y-4 ">
            {upcomingEvents.length > 0 ? (
              <UpcomingEvent />
            ) : (
              <p className="text-xs">
                <span className="font-semibold">
                  No upcoming events, for now.
                </span>{" "}
                Feel free to look at the previous events i joined in.
              </p>
            )}
          </div>
        </div>
        <div className="grow px-16 py-6 space-y-4">
          <div className="h-12 font-montserrat font-semibold">
            <p className="">recent events</p>
          </div>
          <RecentEvent
            events={recentEvents}
            activeKey={isActive}
            eventUrl={eventUrl}
            handleActive={handleActive}
          />
        </div>
      </div>
    </div>
  );
};

export default EventSection;
