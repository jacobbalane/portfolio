import PageButton from "../atoms/pageButton";
import Title from "../atoms/title";

interface UpnextProps {
  readonly title: string;
  readonly subtitle: string;
  readonly buttonText: string;
}

export default function Upnext({ title, subtitle, buttonText }: UpnextProps) {
  return (
    <div className="px-8 py-14">
      <div className="flex flex-col space-y-10 max-w-96 mx-auto">
        <Title title={`Upnext: ${title}`} subtitle={subtitle} />
        <PageButton text={`Go to ${buttonText} Page`} />
      </div>
    </div>
  );
}
