import LinkButton from "../atoms/LinkButton";
import newMoon from "../../images/icons/new-moon.png";

interface UpcomingEventCardProps {
  event: {
    key: number;
    name: string;
    date: string;
    location: string;
    eventUrl: string;
  };
}

const UpcomingEventCard: React.FC<UpcomingEventCardProps> = ({ event }) => {
  return (
    <div className="md:w-1/2 xl:w-1/4">
      <div className="flex flex-col font-montserrat space-y-4 md:m-2">
        <div className="md:h-40 xl:h-44 md:flex md:flex-col border-2 border-primary rounded-lg p-8 md:px-6 md:py-4 space-y-8">
          <div className="space-y-4">
            <p className="font-bold text-lg leading-tight">{event.name}</p>
            <div className="grow flex flex-col text-base">
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <LinkButton label="event page" link={event.eventUrl} />
            <div className="flex items-center space-x-1">
              <img src={newMoon} alt="" className="h-1 xl:h-2 opacity-75" />
              <p className="text-2xs xl:text-base">upcoming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
