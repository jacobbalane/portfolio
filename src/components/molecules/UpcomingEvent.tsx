interface UpcomingEventProps {
  events?: {
    key: number;
    name: string;
    location: string;
    date: string;
    eventUrl: string;
  }[];
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({ events }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:flex-wrap">
      {events?.map((event) => (
        <div
          key={event.key}
          className="font-montserrat text-xs space-y-2 border border-neutral-400 p-4 md:w-48 md:mb-2 md:mr-2">
          <a href={event.eventUrl} target="_blank" rel="noreferrer noopener">
            <p className="font-semibold">{event.name}</p>
          </a>
          <ul className="list-outside flex flex-col">
            <li>{event.location}</li>
            <li className="">{event.date}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UpcomingEvent;
