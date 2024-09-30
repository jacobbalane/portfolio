import NavigationButton from "../atoms/NavigationButton";
import ProgressBar from "./ProgressBar";

export default function PageProgress() {
  return (
    <div className="hidden md:flex flex-col space-y-1 lg:space-y-2">
      <ul className="flex space-x-2 lg:space-x-10">
        <NavigationButton text="home" />
        <NavigationButton text="works" />
        {/* <NavigationButton text="events" />
        <NavigationButton text="connect" /> */}
      </ul>
      <ProgressBar />
    </div>
  );
}
