import LinkButton from "../atoms/LinkButton";

interface RecentEventCardProps {
  event: {
    key: number;
    name: string;
    date: string;
    location: string;
    eventUrl: string;
  };
}

const RecentEventCard: React.FC<RecentEventCardProps> = ({ event }) => {
  return (
    <div className="flex flex-col font-montserrat space-y-4 text-2xs">
      <div className="border-2 border-primary rounded-lg px-5 py-3 space-y-2">
        <p className="font-bold text-xs">{event.name}</p>
        <div className="flex flex-col">
          <p>{event.date}</p>
          <p>{event.location}</p>
        </div>
        <div className="flex justify-between">
          <LinkButton label="event page" theme="dark" />
        </div>
      </div>
    </div>
  );
};

export default RecentEventCard;
