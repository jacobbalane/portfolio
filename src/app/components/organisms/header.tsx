import Image from "next/image";
import Logo from "../../../assets/logo.jpg";
import Hamburger from "../atoms/hamburger";

interface HeaderProps {
  readonly offset: number;
}

export default function Header({ offset }: HeaderProps) {
  return (
    <div
      className={`sticky top-0 overflow-hidden z-20 bg-primary px-8 ${
        offset > 0 ? "border-b border-neutral-800" : ""
      }`}>
      <div className="mx-auto max-w-96">
        <div className="flex my-auto items-center justify-between h-28">
          <div className="flex items-center space-x-3">
            <Image
              src={Logo}
              alt="Portfolio Logo"
              className="rounded-full"
              width={30}
              priority
            />
            <p className="font-semibold text-sm opacity-65">
              jacob<span className="opacity-30">balane</span>
            </p>
          </div>
          <div className="flex-col">
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  );
}
