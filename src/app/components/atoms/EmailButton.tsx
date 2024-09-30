import Link from "next/link";

import { SiMinutemailer } from "react-icons/si";

export default function EmailButton() {
  return (
    <Link
      href="mailto:balanejacob1@gmail.com"
      target="_blank"
      className="flex items-center justify-center w-full md:w-fit rounded-lg md:rounded-full space-x-2 py-2 px-8 font-spacemono bg-foreground text-background">
      <p className="">Send me an email</p>
      <SiMinutemailer className="inline text-lg" />
    </Link>
  );
}
