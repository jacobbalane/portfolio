import SideText from "../molecules/SideText";

const ConnectSection = () => {
  return (
    <div
      className="flex flex-start w-full h-connect-section font-montserrat"
      id="events">
      <SideText text="connect" />
      <div className=" lg:border-neutral-400 lg:border-x w-full lg:w-3/4 space-y-8 lg:space-y-0 flex flex-col px-16 py-6">
        <div className="h-12 font-montserrat font-bold text-xl lg:hidden">
          <p className="md:text-3xl">connect</p>
        </div>
        <div className="flex h-1/3 md:h-2/3 md:items-center lg:h-full">
          <p className="font-semibold text-sm md:text-3xl lg:text-4xl xl:text-6xl">
            Have a question, suggestion, or just want to say hello? Feel free to
            reach out! You can{" "}
            <span
              className="text-yellow-500 font-bold cursor-pointer"
              onClick={() => {}}>
              send me an email
            </span>{" "}
            and I'll get back to you as soon as possible. I look forward to
            hearing from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;
