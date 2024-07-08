import { useState } from "react";

import UpcomingEvent from "../molecules/UpcomingEvent";
import SideText from "../molecules/SideText";
import RecentEvent from "../molecules/RecentEvent";

import { upcomingEventData, recentEventData } from "../../data/events";

const EventSection = () => {
  const recentYearKey = recentEventData[0].year;
  const recentEventKey = recentEventData[0].content[0].key;

  const [isActive, setActive] = useState([recentYearKey, recentEventKey]);
  const [eventUrl, setEventUrl] = useState(
    recentEventData[0].content[0].eventUrl
  );
  const [imageUrl, setImageUrl] = useState(
    recentEventData[0].content[0].imageUrl.toString()
  );

  function handleActive(eventYear: number, contentKey: number) {
    const yearContent = recentEventData.find(
      (event) => event.year === eventYear
    );
    const activeEvent = yearContent?.content.find(
      (event) => event.key === contentKey
    );
    setImageUrl(activeEvent?.imageUrl.toString() ?? "");
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
            {upcomingEventData.length > 0 ? (
              <UpcomingEvent events={upcomingEventData} />
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
            <p className="md:text-lg lg:text-xl">recent events</p>
          </div>
          <RecentEvent
            events={recentEventData}
            activeKey={isActive}
            eventUrl={eventUrl}
            handleActive={handleActive}
            imageUrl={imageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default EventSection;
