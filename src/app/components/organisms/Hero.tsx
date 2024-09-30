import Link from "next/link";

import Availability from "../atoms/Availability";

import { SiMinutemailer } from "react-icons/si";

export default function Hero() {
  return (
    <div className="min-h-[40rem] md:max-w-mdMaxWidth lg:max-w-lgMaxWidth px-8 md:px-16 mx-auto flex flex-col justify-center h-[30rem] md:h-[50rem] space-y-10 md:space-y-20">
      <div className="flex flex-col md:items-center space-y-4 md:space-y-8">
        <p className="border border-accent1 rounded-full w-fit py-1 px-5 font-spacemono md:text-lg ">
          Hi 👋 I&apos;m Jacob
        </p>
        <p className="uppercase text-pretty font-outfitBold text-4xl md:text-7xl lg:text-8xl md:text-center">
          designing and building web apps for entertainment
        </p>
      </div>
      <div className="flex flex-col md:items-center space-y-8 md:space-y-12">
        <p className="font-spacemono text-accent2 md:w-[40rem] md:text-center md:text-lg">
          I am a software developer based in Cebu, Philippines specializing in
          developing web applications.
        </p>
        <div className="flex flex-col md:flex-row-reverse justify-center items-center space-y-4 md:space-y-0 md:space-x-reverse md:space-x-6">
          <Link href="mailto:balanejacob1@gmail.com" target="_blank">
            <button
              type="button"
              className="flex items-center justify-center w-full md:w-fit rounded-lg md:rounded-full space-x-2 py-2 px-8 font-spacemono bg-foreground text-background">
              <p className="">Send me an email</p>
              <SiMinutemailer className="inline text-lg" />
            </button>
          </Link>
          <Availability />
        </div>
      </div>
    </div>
  );
}
