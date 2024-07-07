import eventImage from "../../images/event-images/event.jpg";

interface RecentEventProps {
  events: {
    year: number;
    content: {
      key: number;
      name: string;
    }[];
  }[];
  activeKey: number[];
  handleActive: (eventYear: number, eventKey: number) => void;
  imageUrl?: string;
  eventUrl: string;
}

const RecentEvent: React.FC<RecentEventProps> = ({
  events,
  activeKey,
  handleActive,
  imageUrl,
  eventUrl,
}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row grow text-xs space-y-5 md:space-y-0">
        <div className="max-h-56 flex flex-col space-y-4 overflow-auto md:w-1/2">
          {events.map((event) => (
            <div className=" space-y-1" key={event.year}>
              <p className="font-medium text-neutral-400">{event.year}</p>
              <ul className="space-y-1">
                {event.content.map((content) => (
                  <li
                    key={content.key}
                    onClick={() => {
                      handleActive(event.year, content.key);
                    }}
                    className={
                      activeKey[0] === event.year &&
                      activeKey[1] === content.key
                        ? "text-yellow-500 font-semibold cursor-pointer"
                        : "cursor-pointer"
                    }>
                    {content.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center space-y-4 md:w-1/2">
          <div className="h-40 md:h-full flex flex-col justify-center items-center">
            <img
              className="h-full w-full border border-neutral-400"
              src={eventImage}
              alt=""
            />
          </div>
          <a
            href={eventUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex justify-center">
            <button className="underline text-xs ">more images . . .</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;

//
