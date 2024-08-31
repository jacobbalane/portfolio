import Image from 'next/image';
import Logo from '../../../assets/logo.jpg';
import Hamburger from '../atoms/hamburger';

export default function Header() {
  return (
    <div className="sticky top-0 overflow-hidden z-10">
      <div className="flex my-auto items-center justify-between h-28 px-8 bg-primary ">
        <div className="flex items-center space-x-3">
          <Image
            src={Logo}
            alt="Portfolio Logo"
            className="rounded-full"
            width={30}
            priority
          />
          <p className="font-semibold text-sm text-secondary opacity-65">
            jacob<span className="opacity-30">balane</span>
          </p>
        </div>
        <div className="flex-col">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
