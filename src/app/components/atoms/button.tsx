import { IconType } from "react-icons";

interface ButtonProps {
  readonly text: string;
  readonly Icon: IconType;
  readonly accent?: boolean;
}

export default function Button({ text, accent, Icon }: ButtonProps) {
  return (
    <div
      className={`flex justify-center items-center space-x-2  border border-accent1  px-8 py-4 rounded-lg ${
        accent ? "bg-accent2" : "bg-emerald-600"
      }`}>
      {Icon && <Icon />}
      <p>{text}</p>
    </div>
  );
}
