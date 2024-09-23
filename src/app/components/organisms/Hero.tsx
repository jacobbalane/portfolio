import Button from "../atoms/Button";
import Availability from "../atoms/Availability";

export default function Hero() {
  return (
    <div className="md:max-w-mdMaxWidth lg:max-w-lgMaxWidth px-8 md:px-16 mx-auto flex flex-col justify-center h-[30rem] md:h-[50rem] space-y-10 md:space-y-20">
      <div className="flex flex-col md:items-center space-y-4 md:space-y-8">
        <p className="border border-accent1 rounded-full w-fit py-1 px-5 font-spacemono md:text-lg ">
          Hi 👋 I&apos;m Jacob
        </p>
        <p className="uppercase text-pretty font-outfitBold text-4xl md:text-7xl lg:text-8xl md:text-center">
          designing and building web apps for learning
        </p>
      </div>
      <div className="flex flex-col md:items-center space-y-8 md:space-y-12">
        <p className="font-spacemono dark:opacity-65 md:w-[40rem] md:text-center md:text-lg">
          I am a software developer based in Cebu, Philippines specializing in
          developing web applications.
        </p>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center space-y-4 md:space-y-0 md:space-x-reverse md:space-x-6">
          <Button />
          <Availability />
        </div>
      </div>
    </div>
  );
}
