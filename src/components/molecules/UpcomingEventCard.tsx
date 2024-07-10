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
        <div className="md:h-40 md:flex md:flex-col  bg-primary text-accent-2 rounded-lg px-5 py-3 md:px-6 md:py-4 space-y-2">
          <p className="text-secondary font-semibold text-xs md:text-base xl:text-lg">
            {event.name}
          </p>
          <div className="grow flex flex-col text-2xs md:text-xs xl:text-base">
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
          <div className="flex justify-between">
            <LinkButton label="event page" theme="light" />
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
