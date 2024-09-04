import Button from "../atoms/button";
import Title from "../atoms/title";
import EventPreview from "../molecules/eventPreview";

interface EventProps {
  readonly offset: number;
}

export default function Event({ offset }: EventProps) {
  return (
    <div className="px-8 py-14">
      <div className="flex flex-col space-y-10 max-w-96 mx-auto">
        <Title
          title="Upcoming and Recent Events"
          subtitle="A journey through my event participation"
          offset={offset}
          minOffset={1300}
        />
        <div className="flex flex-col space-y-4">
          <EventPreview
            name="Customer Journey Mapping: An Interactive Workshop"
            date="September 15, 2024"
            time="9AM - 5PM"
            venue="enspace"
            upcoming={true}
          />
          <EventPreview
            name="Cebu Microsoft Tech Users Group Community Launch"
            date="August 13, 2024"
            time="1PM - 5PM"
            venue="Cebu Business Park"
            upcoming={false}
          />
          <EventPreview
            name="From Idea To Impact Solana AI Hackathon Kick Off"
            date="July 18, 2024"
            time="10AM - 2PM"
            venue="enspace"
            upcoming={false}
          />
        </div>
        <Button text="View Events" />
      </div>
    </div>
  );
}
