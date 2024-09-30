import Link from "next/link";
import { IconType } from "react-icons";

interface ButtonProps {
  readonly text: string;
  readonly Icon: IconType;
  readonly link: string;
}

export default function Button({ text, Icon, link }: ButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-full md:w-fit rounded-lg md:rounded-full space-x-2 py-2 px-8 md:px-0 font-spacemono bg-foreground text-background md:bg-transparent md:text-foreground">
      <p>{text}</p>
      <Icon className="text-lg" />
    </Link>
  );
}
