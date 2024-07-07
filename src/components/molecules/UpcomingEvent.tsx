interface UpcomingEventProps {
  upcomingEvent?: {
    key: number;
    name: string;
    location: string;
    date: string;
  };
}

const UpcomingEvent: React.FC<UpcomingEventProps> = ({ upcomingEvent }) => {
  return (
    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:flex-wrap">
      <div className="font-montserrat text-xs space-y-2 border border-neutral-400 p-4 md:w-48 md:mb-2 md:mr-2">
        <p className="font-semibold">Google I/O Extended Cebu 2024</p>
        <ul className="list-outside flex flex-col">
          <li>Cebu, Philippines</li>
          <li className="">07/20/2024</li>
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEvent;
