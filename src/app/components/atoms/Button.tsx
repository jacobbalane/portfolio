import { SiMinutemailer } from "react-icons/si";

export default function Button() {
  return (
    <button
      type="button"
      className="flex items-center justify-center w-full md:w-fit rounded-lg md:rounded-full space-x-3 py-2 px-8 font-spacemono bg-foreground text-background">
      <p className="text-lg">Send me an email</p>
      <SiMinutemailer className="inline text-xl" />
    </button>
  );
}
