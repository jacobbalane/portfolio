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
    <div className="flex flex-col font-montserrat space-y-4 text-2xs">
      <div className="bg-primary text-secondary rounded-lg px-6 py-5 space-y-2">
        <p className="font-semibold text-xs">{event.name}</p>
        <div className="flex flex-col">
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
        <div className="flex justify-between">
          <LinkButton label="event page" theme="light" />
          <div className="flex items-center space-x-1">
            <img src={newMoon} alt="" className="h-1" />
            <p className="text-2xs">upcoming</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
