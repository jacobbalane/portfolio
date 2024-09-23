import NavigationButton from "../atoms/NavigationButton";
import ProgressBar from "../atoms/ProgressBar";

export default function PageProgress() {
  return (
    <div className="hidden md:flex flex-col space-y-1 lg:space-y-2 ">
      <div className="flex space-x-4 lg:space-x-10">
        <NavigationButton text="home" />
        <NavigationButton text="works" />
        <NavigationButton text="events" />
        <NavigationButton text="connect" />
      </div>
      <ProgressBar />
    </div>
  );
}
