import { HiBars2 } from "react-icons/hi2";

interface HamburgerProps {
  readonly toggled: boolean;
  readonly handleToggle: (value: boolean) => void;
}

export default function Hamburger({ toggled, handleToggle }: HamburgerProps) {
  const handleSidebarToggle = () => {
    handleToggle(!toggled);
  };

  return (
    <HiBars2 className="text-4xl md:hidden" onClick={handleSidebarToggle} />
  );
}
