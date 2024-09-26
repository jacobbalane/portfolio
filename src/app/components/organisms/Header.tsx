import Logo from "../atoms/Logo";
import Hamburger from "../atoms/Hamburger";
import SectionButton from "../atoms/SectionButton";
import Navigation from "../molecules/Navigation";

export default function Header() {
  return (
    <div className="sticky top-0 h-20 md:h-32 z-20">
      <div className="h-full md:max-w-mdMaxWidth lg:max-w-lgMaxWidth flex items-center justify-between px-8 md:px-16 mx-auto bg-background">
        <Logo />
        <Navigation />
        <Hamburger />
        <SectionButton />
      </div>
    </div>
  );
}
