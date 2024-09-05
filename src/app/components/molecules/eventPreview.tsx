import Button from "../atoms/button";

import { IoCalendarClear, IoTime, IoLocationSharp } from "react-icons/io5";
import { MdEvent } from "react-icons/md";

interface EventPreviewProps {
  readonly name: string;
  readonly date: string;
  readonly time: string;
  readonly venue: string;
  readonly upcoming: boolean;
}

export default function EventPreview({
  name,
  date,
  time,
  venue,
  upcoming,
}: EventPreviewProps) {
  return (
    <div className="min-h-60 bg-accent1 border border-accent2 rounded-lg p-8">
      <div className="space-y-3">
        {upcoming ? (
          <div className="bg-accent2 px-3 py-1 text-sm w-fit rounded-full">
            <p className="opacity-30">Upcoming</p>
          </div>
        ) : (
          ""
        )}
        <p className="opacity-87 font-semibold text-lg leading-tight">{name}</p>
        <div className="font-light text-sm">
          <div className="flex items-center space-x-2 opacity-65">
            <IoCalendarClear />
            <p>{date}</p>
          </div>
          <div className="flex items-center space-x-2 opacity-65">
            <IoTime />
            <p>{time}</p>
          </div>
          <div className="flex items-center space-x-2  opacity-65">
            <IoLocationSharp />
            <p>{venue}</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button text="Go to Event Page" Icon={MdEvent} />
      </div>
    </div>
  );
}
